import { APIGatewayProxyHandler } from 'aws-lambda';
import { echo } from '@queries/exampleQuery';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: echo('Module aliasing is really the best'),
    input: event,
  }, null, 2),
});
