import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ versionKey: false })
export class ProductDocument extends AbstractDocument {

  @Prop({ type: Date, default: Date.now })
  timestamp: Date;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: Number })
  stock: Number;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
  // @Prop({ type: [{ type: Types.ObjectId, ref: 'Image' }] })
  // images: Types.ObjectId[]; 

}

export const ProductSchema = SchemaFactory.createForClass(ProductDocument);
