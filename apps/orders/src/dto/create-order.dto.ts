// export class CreateOrderDto {
//     startDate: Date;
//     endDate: Date;
//     placeId: string;
//     invoiceId: string;
//   }

export class CreateOrderDto {
  quantity: number;
  total: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
