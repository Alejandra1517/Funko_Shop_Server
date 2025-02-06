import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { EventPattern } from '@nestjs/microservices';
import { UserDocument } from 'apps/auth/src/users/models/user.schema';
import { CurrentUser } from '@app/common';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // @EventPattern('product_price_updated')
  // handleProductPriceUpdate(data: { productId: string; newPrice: number }) {
  //   console.log('Product price updated:', data);
  //   // Actualiza el precio del producto en el carrito si es necesario
  // }

  @Post()
  create(@CurrentUser() user: string) {
    return this.cartService.create(user);
  }

  // @Post(':cartId')
  // addProducto(
  //   @CurrentUser() user: UserDocument,
  //   @Param('cartId') carritoId: number,
  //   @Body() addProductoDto: AddToCartDto,
  // ) {
  //   return this.cartService.addProducto(
  //     carritoId,
  //     user._id,
  //     addProductoDto,
  //   );
  // }



  // @Get(':userId')
  // getCart(@Param('userId') userId: string) {
  //   return this.cartService.getCart(userId);
  // }

  // @Patch(':userId')
  // updateCart(@Param('userId') userId: string, @Body() updateCartDto: UpdateCartDto) {
  //   return this.cartService.updateCart(userId, updateCartDto);
  // }

  // @Delete(':userId')
  // clearCart(@Param('userId') userId: string) {
  //   return this.cartService.clearCart(userId);
  // }

  
}
