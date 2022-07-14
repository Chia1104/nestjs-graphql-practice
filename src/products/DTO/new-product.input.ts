import { Field, InputType } from '@nestjs/graphql';
import {
  IsOptional,
  Length,
  MaxLength,
  IsInt,
  Min,
  Max,
} from 'class-validator';

@InputType()
export class NewProductInput {
  @Field()
  @MaxLength(25)
  name: string;

  @Field()
  @Length(10, 255)
  description: string;

  @Field()
  @IsOptional()
  @MaxLength(50)
  excerpt: string;

  @Field()
  @IsInt()
  @Min(0)
  @Max(5000)
  price: number;
}
