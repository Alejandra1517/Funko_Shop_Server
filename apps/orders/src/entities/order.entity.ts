import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class OrderDocument extends AbstractDocument {
  @Prop({ type: Date, default: Date.now })
  timestamp: Date;

  @Prop({ type: Number, required: true })
  quantity: Number;

  @Prop({ type: Number, required: true })
  total: Number;

  @Prop({ type: Boolean, required: true })
  status: Boolean;

  @Prop({ type: Date, required: true })
  createdAt: Date;

  @Prop({ type: Date, required: true })
  updatedAt: Date;

  @Prop({ type: String, required: true })
  userId: string;
}

export const OrderSchema = SchemaFactory.createForClass(OrderDocument);
