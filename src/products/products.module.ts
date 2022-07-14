import { Module } from '@nestjs/common';
import { ProductsService } from './services';
import { PrismaService } from '../prisma.service';
import { ProductsResolver } from './resolvers';

@Module({
  providers: [ProductsService, PrismaService, ProductsResolver],
})
export class ProductsModule {}
