import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProteinDocument = HydratedDocument<Protein>;

@Schema({collection: 'protein'})
export class Protein {
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

export const ProteinSchema = SchemaFactory.createForClass(Protein);