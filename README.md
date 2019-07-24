lambda-aws-get-all-azs
======================

A lambda to get the list of all the AZs of all the AWS Regions.

### Usage

*  Clone the repo
*  Create a IAM role:
    *  Name: `lambda-cli-role`
    *  Trusted entity: AWS Lambda
    *  Permissions: AWSLambdaBasicExecutionRole, AmazonEC2ReadOnlyAccess
*  `npm i`
*  `npm run create`
*  `npm start`

### License

MIT