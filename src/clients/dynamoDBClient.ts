import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import DynamoDB from '@dazn/lambda-powertools-dynamodb-client';

/*
 * This checks the environment and either outputs a raw DynamoDocumentClient for offline testing
 * or it outputs the dazn-powertools DynamoDocumentClient that adds context and tracing
 */
export default ['test'].includes(process.env.NODE_ENV || '')
  ? new DocumentClient({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    endpoint: 'http://localhost:8000',
    sslEnabled: false,
  })
  : DynamoDB;
