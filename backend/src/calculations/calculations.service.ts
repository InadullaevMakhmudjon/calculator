import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Calculation } from './schemas/calculation.schema';
import { Model } from 'mongoose';
import { CreateCalcDto } from './dto/create-calc.dto';

@Injectable()
export class CalculationsService {
  constructor(
    @InjectModel(Calculation.name)
    private readonly calcModel: Model<Calculation>,
  ) {}

  async create(data: CreateCalcDto): Promise<Calculation> {
    const created = new this.calcModel(data);
    return created.save();
  }

  async getAll(): Promise<Calculation[]> {
    return this.calcModel.find();
  }

  async clear(): Promise<any> {
    return this.calcModel.remove({});
  }
}
