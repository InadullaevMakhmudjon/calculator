import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Calculation extends Document {
  @Prop()
  calculation: string;

  @Prop()
  date: string;

  @Prop()
  result: string;
}

export const CalculationSchema = SchemaFactory.createForClass(Calculation);
