import { v4 as uuid4 } from 'uuid';

export const lambdaContext = {
  callbackWaitsForEmptyEventLoop: false,
  functionName: 'my-function',
  functionVersion: '$LATEST',
  invokedFunctionArn: uuid4(),
  memoryLimitInMB: '1024',
  awsRequestId: uuid4(),
  logGroupName: 'test',
  logStreamName: 'test',
  getRemainingTimeInMillis: (): number => 5000,
  done: (): void => {
    /* Do nothing */
  },
  fail: (): void => {
    /* Do nothing */
  },
  succeeded: (): void => {
    /* Do nothing */
  },
  succeed: (): void => {
    /* Do nothing */
  },
};

export const lambdaCallback = (): void => {
  // Do Nothing
};
