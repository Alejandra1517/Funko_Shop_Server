import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateProductDto {

  @IsString()
  name: string;
  description: string;
  
  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;
  
  // @IsDate()
  createdAt: Date;
  
  // @IsDate()
  updatedAt: Date;
  
  // @IsString()
  categoryId: string;
  
  // @IsString()
  imageId: string;

}
