import { DynamoDBRecord, DynamoDBStreamEvent } from 'aws-lambda';
import Logger from '@dazn/lambda-powertools-logger';
import { AttributeValue, Converter } from 'aws-sdk/clients/dynamodb';

export const handler = async (event: DynamoDBStreamEvent): Promise<void> => {
  Logger.debug('Got stream event', event);

  event.Records.map((record: DynamoDBRecord): Record<string, AttributeValue>|undefined => {
    if (record.eventName === 'INSERT' && record?.dynamodb?.NewImage) {
      const data = Converter.unmarshall(record.dynamodb.NewImage);
      Logger.debug('Inserted Record', { data });
      return data;
    }

    return undefined;
  });
};
