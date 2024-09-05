import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { CreateOrderDto } from '../dtos/createOrder.dto';
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createOrderDto: CreateOrderDto){
    return this.orderService.create(createOrderDto)
  }

}