import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrothService } from './services/broth.service';
import { ProteinService } from './services/protein.service';
import { OrderService } from './services/order.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:examplepassword@localhost:27017/ramengo',
      {
        authSource: 'admin',
      },
    ),
  ],
  controllers: [],
  providers: [BrothService, ProteinService, OrderService],
})
export class AppModule {}
