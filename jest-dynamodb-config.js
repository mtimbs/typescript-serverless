// eslint-disable-next-line @typescript-eslint/no-var-requires
const Sls = require('serverless');

module.exports = async () => {
  const serverless = new Sls({});

  await serverless.init();
  const service = await serverless.variables.populateService();
  const resources = Object.assign(...service.resources.map((r) => r.Resources));

  const tables = Object.keys(resources)
    .map((name) => resources[name])
    .filter((r) => r.Type === 'AWS::DynamoDB::Table')
    .map((r) => {
      const {
        PointInTimeRecoverySpecification,
        SSESpecification,
        TimeToLiveSpecification,
        ...propertiesToKeep
      } = r.Properties;
      return {
        ...propertiesToKeep,
        StreamSpecification: {
          StreamEnabled: false,
        },
      };
    });

  return {
    tables,
    port: 8000,
  };
};
