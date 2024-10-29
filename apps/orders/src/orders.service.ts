import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepository,
  ) {}

  async create(createReservationDto: CreateOrderDto, userId: string) {
    return this.ordersRepository.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId,
    });
  }

  async findAll() {
    return this.ordersRepository.find({});
  }

  async findOne(_id: string) {
    return this.ordersRepository.findOne({ _id });
  }

  async update(_id: string, updateReservationDto: UpdateOrderDto) {
    return this.ordersRepository.findOneAndUpdate(
      { _id },
      { $set: updateReservationDto },
    );
  }

  async remove(_id: string) {
    return this.ordersRepository.findOneAndDelete({ _id });
  }
}
