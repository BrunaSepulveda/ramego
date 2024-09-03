import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { BrothService } from '../services/broth.service';
import { Broth } from '../schemas/broth.schema';
@Controller('broths')
export class BrothController {
  constructor(private readonly brothService: BrothService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<Broth[]> {
    return this.brothService.findAll();
  }
}