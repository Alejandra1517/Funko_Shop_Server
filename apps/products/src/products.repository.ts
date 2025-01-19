import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductsRepository extends AbstractRepository<ProductDocument> {
  protected readonly logger = new Logger(ProductsRepository.name);
  constructor(
    @InjectModel(ProductDocument.name)
    protected readonly productModel: Model<ProductDocument>,
  ) {
    super(productModel);
  }

  // Método para contar productos por categoría
    async countByCategoryId(categoryId: string): Promise<number> {
      // Verificar que el categoryId es un ObjectId válido
      if (!Types.ObjectId.isValid(categoryId)) {
        throw new Error('Invalid category ID');
      }
  
      const count = await this.productModel.countDocuments({ categoryId: new Types.ObjectId(categoryId) });
      return count;
    }
}
