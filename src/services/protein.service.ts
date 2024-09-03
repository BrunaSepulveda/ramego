import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Protein, ProteinDocument } from '../schemas/protein.schema';


@Injectable()
export class ProteinService {
  constructor(@InjectModel('Protein') private proteinModel: Model<ProteinDocument>) {}

  async findOne(id: string): Promise<Protein> {
    return this.proteinModel.findOne({ id }, { _id: 0, __v: 0 }).exec();
  }

  async findAll(): Promise<Protein[]> {
    return this.proteinModel.find({}, { _id: 0, __v: 0 }).exec();
  }
}
