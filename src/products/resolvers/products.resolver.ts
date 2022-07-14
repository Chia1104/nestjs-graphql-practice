import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { Product } from '@prisma/client';
import { Product as ProductModel } from '../models';
import { ProductsService } from '../services';
import { NewProductInput } from '../DTO/new-product.input';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => ProductModel)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [ProductModel])
  async getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Mutation(() => ProductModel)
  async createProduct(
    @Args('product') product: NewProductInput,
  ): Promise<Product> {
    return this.productsService.createProduct(product);
  }

  @Subscription(() => ProductModel)
  productAdded() {
    return pubSub.asyncIterator('productAdded');
  }
}
