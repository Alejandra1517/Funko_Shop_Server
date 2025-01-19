import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { string } from 'joi';

@Schema({ versionKey: false })
export class OrderDocument extends AbstractDocument {
  @Prop({ type: Date, default: Date.now })
  timestamp: Date;

  @Prop({ type: Number, required: true })
  quantity: Number;

  @Prop({ type: Number, required: true })
  total: Number;

  @Prop({ type: String, required: true })
  status: string;

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;

  @Prop({ type: String, required: true })
  userId: string;
}

export const OrderSchema = SchemaFactory.createForClass(OrderDocument);
