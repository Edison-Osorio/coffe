import { IsNotEmpty, IsString } from 'class-validator';
import { CollectionDto } from './collection.dto';

export class EmployeeDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  idCard: string;

  @IsNotEmpty()
  date: Date = new Date();

  collectionCoffe: CollectionDto;
}
