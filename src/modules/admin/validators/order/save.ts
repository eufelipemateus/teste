import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength, Min, MinLength } from 'class-validator';
import { IOrder } from 'modules/database/interfaces/order';

export class SaveValidator implements IOrder {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ required: false, type: 'integer' })
  public id?: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @ApiProperty({ required: true, type: 'integer' })
  public qtd: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty({ required: true, type: 'float' })
  public valor: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(15)
  @MaxLength(200)
  @ApiProperty({ required: true, type: 'string', minLength: 15, maxLength: 200 })
  public description: string;
}
