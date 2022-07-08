import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async createProduct(product: Product): Promise<Product> {
    return this.prisma.product.create({ data: product });
  }
}
