import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { CartItem } from '../cart-item/entities/cart-item.entity';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class CartDocument extends AbstractDocument {

  @Prop()
  userId: string;

  @Prop()
  items: CartItem[];
  
  // add
  @Prop()
  totalPrice: number;

  @Prop()
  createdAt: Date;
  
  // "activo", "finalizado", "abandonado"
  @Prop()
  Estado: string;


}

export const CartSchema = SchemaFactory.createForClass(CartDocument);
