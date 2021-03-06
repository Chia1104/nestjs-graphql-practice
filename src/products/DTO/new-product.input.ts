import { Field, InputType } from '@nestjs/graphql';
import {
  IsOptional,
  Length,
  MaxLength,
  IsInt,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class NewProductInput {
  @ApiProperty()
  @Field()
  @MaxLength(25)
  readonly name: string;

  @ApiProperty()
  @Field()
  @Length(10, 255)
  readonly description: string;

  @ApiProperty()
  @Field()
  @IsOptional()
  @MaxLength(50)
  readonly excerpt: string;

  @ApiProperty()
  @Field()
  @IsInt()
  @Min(0)
  @Max(5000)
  readonly price: number;
}
