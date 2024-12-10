import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { CategoryDocument } from './entities/category.entity';

@Injectable()
export class CategoriesRepository extends AbstractRepository<CategoryDocument> {
  protected readonly logger = new Logger(CategoriesRepository.name);
  constructor(
    @InjectModel(CategoryDocument.name)
    protected readonly categoryModel: Model<CategoryDocument>,
  ) {
    super(categoryModel);
  }
}
