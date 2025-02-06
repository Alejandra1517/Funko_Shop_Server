import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CartRepository } from './cart.repository';

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository,
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}
  

  async create(userId: string) {
    // Enviar un mensaje al microservicio de usuarios para obtener el usuario
    const usuario = await firstValueFrom(this.userClient.send({ cmd: 'get_user' }, userId));

    if (!usuario) throw new Error('Usuario no encontrado');

    // Ahora puedes guardar el carrito con el usuario
    return { message: 'Carrito creado', usuario };
  }


  // async create(user: string) {
  //   const cart = await this.cartRepository.findOne({
  //     where: { userId: { id: user._id } },
  //   });

  //   if (cart) throw new BadRequestException('Cart is already created');

  //   return this.cartRepository.create({ userId });
  // }

  async addProduct(
    cartId: number,
    userId: number,
    addProductDto: AddToCartDto,
  ) {
    // Agregar producto a detalleCarrito si no existe el producto en el carrito del usuario

    // TODO: optimizar query
    const cart = await this.cartRepository.findOne({
      where: { user: { id: userId }, id: cartId },
      relations: ['detalleCarritos', 'detalleCarritos.producto'],
    });

    if (!cart) throw new BadRequestException('Cart is not exist');

    // const producto = cart?.detalleCarritos?.find(
    //   (detalleCarrito) =>
    //     detalleCarrito.productoId === addProductDto.productoId,
    // );

    // if (producto)
    //   throw new BadRequestException('Product already is in the cart');

    // TODO: validar que exista producto con el id enviado
    // await this.detalleCarritoService.create(addProductoDto, carrito);

    return cart;
  }





  // async addToCart(addToCartDto: AddToCartDto) {
  //   const { productId } = addToCartDto;

  //   // Verificar disponibilidad del producto enviando un mensaje al servicio de productos
  //   const isAvailable = await lastValueFrom(
  //     this.productClient.send(
  //       { cmd: 'check_product_availability' },
  //       { productId },
  //     ),
  //   );

  //   if (!isAvailable) {
  //     throw new Error('Product not available');
  //   }

  //   return this.cartRepository.create({
  //     ...addToCartDto,
  //     // timestamp: new Date(),
  //   });

  //   // Aquí manejarías la lógica de agregar el producto al carrito
  //   // return { success: true, message: 'Product added to cart' };
  // }















  // getCart(userId: string) {
  //   return this.carts.get(userId) || [];
  // }

  // updateCart(userId: string, updateCartDto: UpdateCartDto) {
  //   const userCart = this.carts.get(userId);
  //   if (!userCart) return { success: false, message: 'Cart not found' };

  //   // Actualiza la lógica según los requisitos
  //   return { success: true, cart: userCart };
  // }

  // clearCart(userId: string) {
  //   this.carts.delete(userId);
  //   return { success: true, message: 'Cart cleared' };
  // }
}
