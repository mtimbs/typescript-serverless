import { APIGatewayEventDefaultAuthorizerContext, APIGatewayProxyEventBase, APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { echo } from '@queries/exampleQuery';

export const proxyHandler: APIGatewayProxyHandler = async (event: APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: echo('Module aliasing is really the best'),
    input: event,
  }, null, 2),
});
