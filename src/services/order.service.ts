import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from '../schemas/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private readonly httpService: HttpService,
  ) {}

  async create(order: Partial<Order>): Promise<OrderDocument> {
    const orderId = this.httpService
      .post('https://api.tech.redventures.com.br/orders/generate-id')
      .pipe(map((response) => response.data.orderId));

    return this.orderModel.create({ ...order, orderId });
  }
}
