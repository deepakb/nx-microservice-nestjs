import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator(
  (_data: unknown, req: ExecutionContext) =>
    GqlExecutionContext.create(req).getContext().req.user
);
