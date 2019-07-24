const AWS = require("aws-sdk");

exports.handler = async () => {
  const EC2 = new AWS.EC2();

  const { Regions } = await EC2.describeRegions().promise();

  const result = {};

  const azs = await Promise.all(
    Regions.map(region => {
      const EC2Regional = new AWS.EC2({ region: region.RegionName });
      return EC2Regional.describeAvailabilityZones().promise();
    })
  );

  azs.forEach(region => {
    const regionName = region.AvailabilityZones[0].RegionName;
    result[regionName] = region.AvailabilityZones.map(az => az.ZoneName);
  });

  return result;
};
