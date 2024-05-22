import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class TeacherService extends PrismaCrudService {
  constructor() {
    super({
      model: 'teacher',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
