import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { PaginationValidator } from 'modules/common/validators/pagination';

export class ListValidator extends PaginationValidator {
  @IsString()
  @IsOptional()
  @IsIn(['qtd', 'valor', 'id'])
  @ApiProperty({ required: false, enum: ['qtd', 'valor', 'id'] })
  public orderBy: string;
}
