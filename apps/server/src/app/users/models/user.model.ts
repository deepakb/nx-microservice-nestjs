import { ObjectType, Field } from '@nestjs/graphql';
import { AbstractModel } from '@nx-microservice-nestjs/nestjs';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
