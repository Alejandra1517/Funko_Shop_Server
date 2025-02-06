import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

export class UpdateCartDto {
  // @IsNotEmpty()
  @IsString()
  productId: string;

  // @IsNotEmpty()
  @IsInt()
  @Min(0)
  quantity: number;
}







// import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';
// export class UpdateCartDto {
//   @IsString()
//   cartId: string;
//   @IsString()
//   productId: string;
//   @IsInt()
//   @Min(0)
//   quantity: number;
//   @IsInt()
//   price: number;
//   @IsInt()
//   subtotal: number;
// }