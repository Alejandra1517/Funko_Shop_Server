import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PRODUCT_SERVICE } from './constants/service';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoriesRepository: CategoriesRepository,
    @Inject(PRODUCT_SERVICE) private productClient: ClientProxy,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return this.categoriesRepository.create({
      ...createCategoryDto,
      timestamp: new Date(),
    });
  }

  async findAll() {
    return this.categoriesRepository.find({});
  }

  async findOne(_id: string) {
    return this.categoriesRepository.findOne({ _id });
  }

  async update(_id: string, updateCategoryDto: UpdateCategoryDto) {

      const canUpdateCategory = await lastValueFrom(
        this.productClient.send<boolean>('category.can_update', { categoryId: _id }),
      );
  

    // Validar la respuesta del microservicio de productos
    if (!canUpdateCategory) {
      throw new BadRequestException(
        'No se puede modificar la categoría porque tiene productos asociados.',
      );
    }

    // Realizar la actualización si es posible
    return this.categoriesRepository.findOneAndUpdate(
      { _id },
      { $set: updateCategoryDto },
    );
  }

  async remove(_id: string) {
    try {
        // Obtenemos el conteo de productos asociados a la categoría
        const productCount = await lastValueFrom(
          this.productClient.send({ cmd: 'count_products_by_category' }, _id),
        );
      if (productCount > 0) {
        throw new BadRequestException(`No se puede eliminar. Hay ${productCount} productos asociados.`);
      }
      // Si no hay productos, proceder con la eliminación
      return this.categoriesRepository.findOneAndDelete({_id});
    } catch (error) {
      throw new BadRequestException('Error al validar la categoría');
    }
  }
}
