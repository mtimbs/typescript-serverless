import { DynamoDBRecord, DynamoDBStreamEvent } from 'aws-lambda';

export const dynamoDBStreamEvent = (records: DynamoDBRecord[]): DynamoDBStreamEvent => ({
  Records: records,
});
