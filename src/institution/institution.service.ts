import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class InstitutionService extends PrismaCrudService {
  constructor() {
    super({
      model: 'institution',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
