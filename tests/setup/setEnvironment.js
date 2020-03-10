const env = {
  DYNAMODB_TABLE: 'typescript-serverless-local-event-store', // Whatever your table name is goes here
  AWS_REGION: 'local',
  AWS_ACCESS_KEY: 'fake_key',
  AWS_SECRET_KEY: 'fake_secret',
};

process.env = {
  ...process.env,
  ...env,
};
