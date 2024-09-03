import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Model } from 'mongoose';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from '../schemas/order.schema';
import { CreateOrderDto } from '../dtos/createOrder.dto';
import { BrothService } from './broth.service';
import { ProteinService } from './protein.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private orderModel: Model<OrderDocument>,
    private readonly httpService: HttpService,
    private readonly brothService: BrothService,
    private readonly proteinService: ProteinService,
  ) {}

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findOne({ id }, { _id: 0, __v: 0 }).exec();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find({}, { _id: 0, __v: 0 }).exec();
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const broth = await this.brothService.findOne(createOrderDto.brothId);
    const protein = await this.proteinService.findOne(createOrderDto.proteinId);

    if (!broth || !protein) {
      throw new InternalServerErrorException('could not place order');
    }

    const orderId: string = (
      await lastValueFrom(
        this.httpService
          .post(
            'https://api.tech.redventures.com.br/orders/generate-id',
            {},
            {
              headers: {
                'x-api-key': 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf',
              },
            },
          )
          .pipe(map((response) => response.data)),
      )
    )?.orderId;

    if (!orderId) {
      throw new InternalServerErrorException('could not place order');
    }

    const brothName = broth.name;
    const proteinName = protein.name;

    const order: Order = {
      id: orderId,
      description: `${brothName} and ${proteinName} Ramen`,
      image: `https://tech.redventures.com.br/icons/ramen/ramen${proteinName}.png`,
    };

    return this.orderModel.create(order);
  }
}
