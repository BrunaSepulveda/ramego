import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Broth, BrothDocument } from '../schemas/broth.schema';

@Injectable()
export class BrothService {
  constructor(@InjectModel(Broth.name) private brothModel: Model<BrothDocument>) {}

  async findAll(): Promise<Broth[]> {
    return this.brothModel.find().exec();
  }
}
