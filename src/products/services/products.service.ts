import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Product } from '@prisma/client';
import { NewProductInput } from '../DTO/new-product.input';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async createProduct(product: NewProductInput): Promise<Product> {
    return this.prisma.product.create({ data: product });
  }
}
