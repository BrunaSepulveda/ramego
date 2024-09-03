import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrothService } from './services/broth.service';
import { ProteinService } from './services/protein.service';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';
import { BrothController } from './controllers/broth.controller';
import { ProteinController } from './controllers/protein.controller';
import { BrothSchema } from './schemas/broth.schema';
import { OrderSchema } from './schemas/order.schema';
import { ProteinSchema } from './schemas/protein.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:examplepassword@localhost:27017/ramengo',
      {
        authSource: 'admin',
      },
    ),
    MongooseModule.forFeature([{ name: 'Broth', schema: BrothSchema }]),
    MongooseModule.forFeature([{ name: 'Protein', schema: ProteinSchema }]),
    MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
    HttpModule.register({})
  ],
  controllers: [BrothController, ProteinController, OrderController],
  providers: [BrothService, ProteinService, OrderService],
})
export class AppModule {}
