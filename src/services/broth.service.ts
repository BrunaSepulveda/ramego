import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Broth, BrothDocument } from '../schemas/broth.schema';

@Injectable()
export class BrothService {
  constructor(@InjectModel('Broth') private brothModel: Model<BrothDocument>) {}

  async findOne(id: string): Promise<Broth> {
    return this.brothModel.findOne({ id }, { _id: 0, __v: 0 }).exec();
  }

  async findAll(): Promise<Broth[]> {
    return this.brothModel.find({}, { _id: 0, __v: 0 }).exec();
  }
}
