import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CollectionDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  monday: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  tuesday: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  wednesday: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  thursday: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  friday: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  saturday: number;
}
