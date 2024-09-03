import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ProteinService } from '../services/protein.service';
import { Protein } from '../schemas/protein.schema';
@Controller('proteins')
export class ProteinController {
  constructor(private readonly proteinService: ProteinService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(): Promise<Protein[]> {
    return this.proteinService.findAll();
  }
}