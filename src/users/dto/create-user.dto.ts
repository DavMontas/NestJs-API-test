/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength, maxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength( 10 )
  name: string;
}
