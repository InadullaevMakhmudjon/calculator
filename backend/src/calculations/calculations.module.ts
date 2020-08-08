import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Calculation, CalculationSchema } from './schemas/calculation.schema';
import { CalculationsController } from './calculations.controller';
import { CalculationsService } from './calculations.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Calculation.name, schema: CalculationSchema },
    ]),
  ],
  controllers: [CalculationsController],
  providers: [CalculationsService],
})
export class CalculationsModule {}
