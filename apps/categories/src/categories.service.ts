import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly categoriesRepository: CategoriesRepository,
  ) {}

  async create(createReservationDto: CreateCategoryDto) {
    return this.categoriesRepository.create({
      ...createReservationDto,
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
    return this.categoriesRepository.findOneAndUpdate(
      { _id },
      { $set: updateCategoryDto },
    );
  }

  async remove(_id: string) {
    return this.categoriesRepository.findOneAndDelete({ _id });
  }
}
