import { Controller, Post, Body, Get, Delete } from '@nestjs/common';
import { CalculationsService } from './calculations.service';
import { CreateCalcDto } from './dto/create-calc.dto';
import { Calculation } from './schemas/calculation.schema';

@Controller('calculations')
export class CalculationsController {
  constructor(private readonly service: CalculationsService) {}

  @Post()
  create(@Body() data: CreateCalcDto): Promise<any> {
    return this.service.create(data);
  }

  @Get()
  getAll(): Promise<Calculation[]> {
    return this.service.getAll();
  }

  @Delete()
  clear(): Promise<any> {
    return this.service.clear();
  }
}
