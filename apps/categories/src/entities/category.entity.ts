import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class CategoryDocument extends AbstractDocument {

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

  @Prop({ type: Date, default: Date.now })
  timestamp: Date;
}

export const CategorySchema = SchemaFactory.createForClass(CategoryDocument);