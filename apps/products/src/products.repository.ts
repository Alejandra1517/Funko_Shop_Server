import { Model } from 'mongoose';
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
}
