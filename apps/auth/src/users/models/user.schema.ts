import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);


// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity('users')
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   @Column({ unique: true })
//   email: string;

//   @Column()
//   password: string;

// }
