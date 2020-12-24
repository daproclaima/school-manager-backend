import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { Logger } from '@nestjs/common';
import { Student } from './student.entity';

@Resolver((of) => StudentType)
export class StudentResolver {
  private readonly logger = new Logger('StudentResolver');
  constructor(private studentService: StudentService) {}

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Query((returns) => [StudentType])
  async students(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    this.logger.debug(
      `createStudent called with data: ${JSON.stringify(createStudentInput)}`,
    );

    return this.studentService.createStudent(createStudentInput);
  }
}
