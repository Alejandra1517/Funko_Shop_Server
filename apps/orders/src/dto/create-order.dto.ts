// export class CreateOrderDto {
//     startDate: Date;
//     endDate: Date;
//     placeId: string;
//     invoiceId: string;
//   }

import { IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
  @IsNumber()
  quantity: number;

  @IsNumber()
  total: number;

  @IsString()
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
