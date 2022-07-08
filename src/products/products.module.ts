import { Module } from '@nestjs/common';
import { ProductsService } from './services';

@Module({
  providers: [ProductsService],
})
export class ProductsModule {}
