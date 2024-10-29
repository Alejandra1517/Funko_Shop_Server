import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { OrderDocument } from './entities/order.entity';

@Injectable()
export class OrdersRepository extends AbstractRepository<OrderDocument> {
  protected readonly logger = new Logger(OrdersRepository.name);
  constructor(
    @InjectModel(OrderDocument.name)
    protected readonly orderModel: Model<OrderDocument>,
  ) {
    super(orderModel);
  }
}
