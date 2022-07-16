import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Product } from '@prisma/client';
import { NewProductInput } from '../DTO/new-product.input';
import { UpdateProductInput } from '../DTO/update-product.input';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  async createProduct(product: NewProductInput): Promise<Product> {
    return await this.prisma.product.create({ data: product });
  }

  async getProductById(id: string): Promise<Product> {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async updateProduct(
    id: string,
    product: UpdateProductInput,
  ): Promise<Product> {
    return await this.prisma.product.update({
      where: { id },
      data: product,
    });
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.prisma.product.delete({ where: { id } });
  }
}
