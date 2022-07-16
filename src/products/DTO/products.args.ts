import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min, IsOptional } from 'class-validator';

@ArgsType()
export class ProductsArgs {
  @Field(() => Int)
  @Min(0)
  @IsOptional()
  skip?: number;

  @Field(() => Int)
  @Min(1)
  @Max(25)
  @IsOptional()
  take?: number;
}
