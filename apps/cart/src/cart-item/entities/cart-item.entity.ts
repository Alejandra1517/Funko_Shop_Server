import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CartItem extends Document {

  @Prop({ type: String, required: true })
  productId: string; 

  // add 
  @Prop()
  carritoId: number;

  @Prop()
  quantity: number; 

//   // add
//   @Prop()
//   totalPrice: number; 

//   // add 
//   @Prop()
//   addedAt: Date;

}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);
