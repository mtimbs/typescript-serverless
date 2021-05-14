import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { echo } from '@queries/exampleQuery';

export const hello: APIGatewayProxyHandler = async (event) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: echo('Module aliasing is really the best'),
    input: event,
  }, null, 2),
});
