import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BrothDocument = HydratedDocument<Broth>;

@Schema({ collection: 'broth'})
export class Broth {
  @Prop()
  id: string;

  @Prop()
  imageInactive: string;

  @Prop()
  imageActive: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const BrothSchema = SchemaFactory.createForClass(Broth);