import { SQSEvent, SQSRecord } from 'aws-lambda';

export default (events: SQSRecord[]): SQSEvent => ({
  Records: events,
});
