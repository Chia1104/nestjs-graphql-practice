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
export class UpdateProductInput {
  @ApiProperty({ nullable: true })
  @Field({ nullable: true })
  @MaxLength(25)
  readonly name?: string;

  @ApiProperty({ nullable: true })
  @Field({ nullable: true })
  @Length(10, 255)
  readonly description?: string;

  @ApiProperty({ nullable: true })
  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(50)
  readonly excerpt?: string;

  @ApiProperty({ nullable: true })
  @Field({ nullable: true })
  @IsInt()
  @Min(0)
  @Max(5000)
  readonly price?: number;
}
