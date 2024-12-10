import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productsRepository: ProductsRepository,
  ) {}



  async create(createReservationDto: CreateProductDto) {
    return this.productsRepository.create({
      ...createReservationDto,
      createdAt: new Date(),
    });
  }


    // method to products 
  // private readonly productModel: Model<ProductDocument>,
  // private readonly categoryService: CategoryService, // Inyecta

  // async createProduct(dto: CreateProductDto) {
  //   // Validar que la categoría existe
  //   const categoryExists = await this.categoryService.findById(dto.categoryId);
  //   if (!categoryExists) {
  //     throw new NotFoundException('Category not found');
  //   }

  //   return await this.categoriesRepository.create(...dto);
  // }


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
}
