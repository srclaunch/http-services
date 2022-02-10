import {
  AuthenticationChallengeDetails,
  AuthenticationDeviceDetails,
  AuthenticationTokens,
  CognitoUser,
  CommunicationMedium,
  HttpResponse,
  User,
} from '@srclaunch/types';

// import AmazonCognitoIdentity from 'amazon-cognito-identity-js';

import { SrcLaunchApi } from './api/srclaunch';

const poolData = {
  AdvancedSecurityDataCollectionFlag: true,
  ClientId: process.env.TEST_USER_POOL_CLIENT_ID,
  UserPoolId: process.env.TEST_USER_POOL_ID,
};

export default {
  authenticateRefreshToken: async (): Promise<{
    device?: AuthenticationDeviceDetails | null;
    tokens: AuthenticationTokens;
  }> => {
    const encodedFingerprintData =
      // @ts-ignore
      global?.window?.AmazonCognitoAdvancedSecurityData.getData(
        // @ts-ignore
        undefined,
        poolData.UserPoolId,
        poolData.ClientId,
      );

    const response = await SrcLaunchApi.authenticateRefreshToken({
      fingerprint: encodedFingerprintData,
    });

    const { device, tokens } = response.body;

    return {
      device,
      tokens,
    };
  },
  checkUsernameAvailability: async ({
    username,
  }: {
    username: string;
  }): Promise<boolean> => {
    const response = await SrcLaunchApi.checkUsernameAvailability({
      username,
    });

    const { available } = response.body;

    return available;
  },
  confirmDevice: async ({
    accessToken,
    deviceKey,
    deviceName,
    passwordVerifier,
    salt,
  }: {
    accessToken: string;
    deviceKey: string;
    deviceName?: string;
    passwordVerifier: string;
    salt: string;
  }): Promise<{ success: boolean }> => {
    await SrcLaunchApi.confirmDevice({
      accessToken,
      deviceKey,
      deviceName,
      passwordVerifier,
      salt,
    });

    return { success: true };
  },
  getVerificationDetails: async (
    id: User['id'],
  ): Promise<{
    status: CognitoUser['status'];
    delivery: { medium: CommunicationMedium; destination: string };
  }> => {
    const response = await SrcLaunchApi.getVerificationDetails({
      id,
    });

    const { status, delivery } = response.body;

    return { delivery, status };
  },
  login: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<
    | {
        challenge: AuthenticationChallengeDetails;
      }
    | {
        device?: AuthenticationDeviceDetails;
        tokens: AuthenticationTokens;
      }
  > => {
    const encodedFingerprintData =
      // @ts-ignore
      global?.window?.AmazonCognitoAdvancedSecurityData.getData(
        username,
        poolData.UserPoolId,
        poolData.ClientId,
      );
    // const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    //
    // // const contextData = userPool.getCurrentUser();
    //
    // const auth = new AmazonCognitoIdentity.CognitoAuth();
    // const data = AmazonCognitoAdvancedSecurityData.getData(
    //   _username,
    //   _userpoolId,
    //   this.clientId,
    // );
    // const user = new AmazonCognitoIdentity.CognitoUser({
    //   Pool: userPool,
    //   Username: username,
    // });
    //
    // console.log('user', user);
    const response = await SrcLaunchApi.login({
      fingerprint: encodedFingerprintData,
      password,
      username,
    });

    // const { UserConfirmationNecessary } = response;
    //
    // console.log({ userConfirmationNecessary });
    return response.body;
  },
  refreshToken: async (): Promise<HttpResponse<unknown>> =>
    SrcLaunchApi.refreshToken(),
  sendVerificationCode: async ({
    userId,
  }: {
    userId: User['id'];
  }): Promise<{ success: boolean }> => {
    const response = await SrcLaunchApi.sendVerificationCode(userId);

    const { success } = response.body;

    if (success) {
      return { success };
    }

    return { success: false };
  },
  signUp: async ({
    password,
    firstName,
    lastName,
    username,
  }: {
    password: string;
    firstName: string;
    lastName: string;
    username: string;
  }): Promise<{
    userId: string;
  }> => {
    const response = await SrcLaunchApi.signUp({
      first_name: firstName,
      last_name: lastName,
      password,
      username,
    });

    const { user_id } = response.body;

    return { userId: user_id };
  },
  verifyCode: async ({
    code,
    userId,
  }: {
    code: string;
    userId: User['id'];
  }): Promise<{ success: boolean }> => {
    const response = await SrcLaunchApi.verifyCode({ code, userId });

    const { success } = response.body;

    return { success };
  },
};

/*
 * /signup Response
 *  {
 *    codeDeliveryDetails: {
 *      destination?: email address or phone number.
 *      deliveryMedium?: "SMS" | "EMAIL"
 *    },
 *    userId: User['id]
 *  }
 */
