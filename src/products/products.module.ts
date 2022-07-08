import { Module } from '@nestjs/common';
import { ProductsService } from './services';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [ProductsService, PrismaService],
})
export class ProductsModule {}
