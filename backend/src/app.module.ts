import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculationsController } from './calculations/calculations.controller';
import { CalculationsService } from './calculations/calculations.service';
import { CalculationsModule } from './calculations/calculations.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    CalculationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
