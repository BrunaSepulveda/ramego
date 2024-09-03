import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'brothId and proteinId are required' })
  public brothId: string;

  @IsNotEmpty({ message: 'brothId and proteinId are required' })
  public proteinId: string;
}