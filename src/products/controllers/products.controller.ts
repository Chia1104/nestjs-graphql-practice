import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { NotFoundException, ForbiddenException } from '@nestjs/common';
import { ProductsService } from '../services';
import { Product } from '@prisma/client';
import { NewProductInput } from '../DTO/new-product.input';
import { UpdateProductInput } from '../DTO/update-product.input';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async getProducts(): Promise<Product[]> {
    const products = await this.productsService.getProducts();
    if (!products) throw new NotFoundException('Products not found');
    return products;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by id(_id)' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async getProductById(@Param('id') _id: string): Promise<Product> {
    const product = await this.productsService.getProductById(_id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  @Post()
  @ApiOperation({ summary: 'Create new product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async createProduct(@Body() product: NewProductInput): Promise<Product> {
    try {
      return await this.productsService.createProduct(product);
    } catch (error) {
      throw new ForbiddenException(error.code);
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update product by id(_id)' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  async updateProduct(
    @Param('id') _id: string,
    @Body() product: UpdateProductInput,
  ): Promise<Product> {
    try {
      return await this.productsService.updateProduct(_id, product);
    } catch (error) {
      throw new ForbiddenException(error.code);
    }
  }
}
