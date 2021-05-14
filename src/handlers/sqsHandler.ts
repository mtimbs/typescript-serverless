import Logger from '@dazn/lambda-powertools-logger';
import { SQSEvent } from 'aws-lambda';

export const handler = async (event: SQSEvent): Promise<void> => Logger.debug('Got SQS Event Source', { event });
