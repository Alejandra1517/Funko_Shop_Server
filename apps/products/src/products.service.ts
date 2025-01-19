import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productsRepository: ProductsRepository,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    // Validar que la categoría existe
    // const categoryExists = await lastValueFrom(
    //   this.categoryClient.send({ cmd: 'validate_category' }, { categoryId: createProductDto.categoryId }),
    // );
    // if (!categoryExists) {
    //   throw new NotFoundException('Category not found');
    // }
    return await this.productsRepository.create({
      ...createProductDto,
      timestamp: new Date(),
    });
  }

  async canUpdateCategory(categoryId: string): Promise<boolean> {
    // Verificar si hay productos asociados a la categoría
    const hasProducts = await this.productsRepository.countByCategoryId(categoryId);
    return !hasProducts; // Puede modificar si no tiene productos
  }
  
  async findAll() {
    return this.productsRepository.find({});
  }

  async findOne(_id: string) {
    return this.productsRepository.findOne({ _id });
  }

  async update(_id: string, updateProductDto: UpdateProductDto) {
    return this.productsRepository.findOneAndUpdate(
      { _id },
      { $set: updateProductDto },
    );
  }

  async remove(_id: string) {
    return this.productsRepository.findOneAndDelete({ _id });
  }

  @MessagePattern({ cmd: 'count_products_by_category' })
  async countProductsByCategory(categoryId: string): Promise<number> {
    return this.productsRepository.countByCategoryId(categoryId);
  }
}