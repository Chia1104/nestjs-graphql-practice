import { Module } from '@nestjs/common';
import { ProductsService } from './services';
import { PrismaService } from '../prisma.service';
import { ProductsResolver } from './resolvers';
import { ProductsController } from './controllers';

@Module({
  providers: [ProductsService, PrismaService, ProductsResolver],
  controllers: [ProductsController],
})
export class ProductsModule {}
