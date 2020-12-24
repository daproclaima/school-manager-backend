import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(2)
  @Field()
  firstname: string;

  @MinLength(2)
  @Field()
  lastname: string;
}
