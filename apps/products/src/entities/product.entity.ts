import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ versionKey: false })
export class ProductDocument extends AbstractDocument {

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, required: true })
  stock: Number;

  @Prop({ type: Date, required: true })
  createdAt: Date;

  @Prop({ type: Date, required: true })
  updatedAt: Date;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }] })
  product: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Image' }] })
  images: Types.ObjectId[]; 

}

export const ProductSchema = SchemaFactory.createForClass(ProductDocument);
