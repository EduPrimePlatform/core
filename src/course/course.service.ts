import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class CourseService extends PrismaCrudService {
  constructor() {
    super({
      model: 'course',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
