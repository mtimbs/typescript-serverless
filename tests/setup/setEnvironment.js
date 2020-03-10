const env = {
  AWS_REGION: 'local',
  AWS_ACCESS_KEY: 'fake_key',
  AWS_SECRET_KEY: 'fake_secret',
};

process.env = {
  ...process.env,
  ...env,
};
