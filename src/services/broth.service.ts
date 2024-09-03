import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Broth, BrothDocument } from '../schemas/broth.schema';

@Injectable()
export class BrothService {
  constructor(@InjectModel('Broth') private brothModel: Model<BrothDocument>) {}

  async findOne(id: string): Promise<Broth> {
    return this.brothModel.findOne({ id }).exec();
  }

  async findAll(): Promise<Broth[]> {
    return this.brothModel.find().exec();
  }
}
