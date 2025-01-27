import { ExecutionRequest, ExecutionResult } from './Interfaces.js';

export type MaybePromise<T> = PromiseLike<T> | T;
export type MaybeAsyncIterable<T> = AsyncIterable<T> | T;

export type AsyncExecutor<
  TBaseContext = Record<string, any>,
  TBaseExtensions = Record<string, any>,
  TAdditionalResult = Record<never, any>,
> = <
  TReturn = any,
  TArgs extends Record<string, any> = Record<string, any>,
  TContext extends TBaseContext = TBaseContext,
  TRoot = any,
  TExtensions extends TBaseExtensions = TBaseExtensions,
>(
  request: ExecutionRequest<TArgs, TContext, TRoot, TExtensions, TReturn>,
) => Promise<MaybeAsyncIterable<ExecutionResult<TReturn>> & TAdditionalResult>;

export type SyncExecutor<
  TBaseContext = Record<string, any>,
  TBaseExtensions = Record<string, any>,
  TAdditionalResult = Record<never, any>,
> = <
  TReturn = any,
  TArgs extends Record<string, any> = Record<string, any>,
  TContext extends TBaseContext = TBaseContext,
  TRoot = any,
  TExtensions extends TBaseExtensions = TBaseExtensions,
>(
  request: ExecutionRequest<TArgs, TContext, TRoot, TExtensions, TReturn>,
) => ExecutionResult<TReturn> & TAdditionalResult;

export type Executor<
  TBaseContext = Record<string, any>,
  TBaseExtensions = Record<string, any>,
  TAdditionalResult = Record<never, any>,
> = <
  TReturn = any,
  TArgs extends Record<string, any> = Record<string, any>,
  TContext extends TBaseContext = TBaseContext,
  TRoot = any,
  TExtensions extends TBaseExtensions = TBaseExtensions,
>(
  request: ExecutionRequest<TArgs, TContext, TRoot, TExtensions, TReturn>,
) => MaybePromise<MaybeAsyncIterable<ExecutionResult<TReturn>> & TAdditionalResult>;
