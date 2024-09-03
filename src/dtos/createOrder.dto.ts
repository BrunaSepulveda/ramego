import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'both brothId and proteinId are required' })
  @IsNumberString()
  public brothId: string;

  @IsNotEmpty({ message: 'both brothId and proteinId are required' })
  @IsNumberString()
  public proteinId: string;
}