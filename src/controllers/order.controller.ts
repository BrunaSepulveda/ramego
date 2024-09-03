import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { Order } from '../schemas/order.schema';
import { CreateOrderDto } from '../dtos/createOrder.dto';
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id') id: string): Promise<Order> {
    return this.orderService.findOne(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createOrderDto: CreateOrderDto){
    return this.orderService.create(createOrderDto)
  }

}