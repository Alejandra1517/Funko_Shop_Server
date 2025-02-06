import { ProductDocument } from 'apps/products/src/entities/product.entity';
import { isArray, IsDecimal, IsInt, IsString } from 'class-validator';

export class AddToCartDto {
  @IsString()
  userId: string;

  // Items: ProductDocument;

  @IsDecimal()
  totalPrice: number;

  @IsString()
  status: string;
}

// import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

// export class AddToCartDto {
//   // @IsNotEmpty()
//   @IsString()
//   userId: string;

//   // @IsNotEmpty()
//   @IsString()
//   productId: string;

//   // @IsNotEmpty()
//   @IsInt()
//   @Min(1)
//   quantity: number;
// }
