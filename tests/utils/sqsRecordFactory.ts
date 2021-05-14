import { v4 as uuidv4 } from 'uuid';
import { SQSRecord } from 'aws-lambda';

export default (params?: Partial<SQSRecord>): SQSRecord => ({
  messageId: uuidv4(),
  receiptHandle: uuidv4(),
  body: '',
  attributes: {
    ApproximateReceiveCount: '1',
    SentTimestamp: Math.round(new Date().getTime() / 1000).toString(),
    SenderId: uuidv4(),
    ApproximateFirstReceiveTimestamp: Math.round(new Date().getTime() / 1000).toString(),
  },
  messageAttributes: {},
  md5OfBody: '',
  eventSource: 'aws:sqs',
  eventSourceARN: 'arn:aws:sqs:my-region:account-number:queue-name',
  awsRegion: 'my-region',
  ...params,
});
