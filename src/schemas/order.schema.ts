import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({collection: 'order'})
export class Order {
  @Prop()
  id: string;

  @Prop()
  image: string;

  @Prop()
  description: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);