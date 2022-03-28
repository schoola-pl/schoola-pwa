const aws = require('aws-sdk');

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18'
});

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async (event) => {
  const groupParams = {
    GroupName: 'Student',
    UserPoolId: event.userPoolId
  };
  const addUserParams = {
    GroupName: 'Student',
    UserPoolId: event.userPoolId,
    Username: event.userName
  };
  /**
   * Check if the group exists.
   */
  await cognitoidentityserviceprovider.getGroup(groupParams).promise();
  /**
   * Then, add the user to the group.
   */
  await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();

  return event;
};
