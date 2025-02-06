import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { CartDocument } from './entities/cart.entity';

@Injectable()
export class CartRepository extends AbstractRepository<CartDocument> {
  protected readonly logger = new Logger(CartRepository.name);
  constructor(
    @InjectModel(CartDocument.name)
    protected readonly cartModel: Model<CartDocument>,
  ) {
    super(cartModel);
  }
}
