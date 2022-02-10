import {
  AuthenticationChallengeDetails,
  AuthenticationDeviceDetails,
  AuthenticationTokens,
  CognitoUser,
  CommunicationMedium,
  HttpResponse,
  User,
} from '@srclaunch/types';

import { SrcLaunchHttpClient } from './index';

export default {
  authenticateRefreshToken: async ({
    fingerprint,
  }: {
    fingerprint: string;
  }): Promise<
    HttpResponse<{
      device?: AuthenticationDeviceDetails | null;
      tokens: AuthenticationTokens;
    }>
  > =>
    SrcLaunchHttpClient.post('/auth/token', {
      fingerprint,
    }),
  checkUsernameAvailability: async ({
    username,
  }: {
    username: string;
  }): Promise<HttpResponse<{ available: boolean }>> =>
    SrcLaunchHttpClient.post<{ available: boolean }>(
      '/auth/username_availability',
      {
        username,
      },
    ),
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
  }): Promise<HttpResponse<{ success: boolean }>> =>
    SrcLaunchHttpClient.post<{ success: boolean }>('/auth/device/confirm', {
      access_token: accessToken,
      device_key: deviceKey,
      device_name: deviceName,
      password_verifier: passwordVerifier,
      salt,
    }),
  confirmSignUp: async ({
    code,
    userId,
  }: {
    code: string;
    userId: User['id'];
  }): Promise<HttpResponse<unknown>> =>
    SrcLaunchHttpClient.post('/auth/confirmation/', { code, userId }),
  getVerificationDetails: async ({
    id,
  }: {
    id: User['id'];
  }): Promise<
    HttpResponse<{
      status: CognitoUser['status'];
      delivery: { medium: CommunicationMedium; destination: string };
    }>
  > => SrcLaunchHttpClient.get(`/auth/verification/${id}`),
  login: async ({
    fingerprint,
    username,
    password,
  }: {
    fingerprint: string;
    username: string;
    password: string;
  }): Promise<
    HttpResponse<
      | {
          challenge: AuthenticationChallengeDetails;
        }
      | {
          device?: AuthenticationDeviceDetails;
          tokens: AuthenticationTokens;
        }
    >
  > =>
    await SrcLaunchHttpClient.post('/auth/login', {
      fingerprint,
      username,
      password,
    }),
  logout: async (): Promise<HttpResponse<unknown>> =>
    SrcLaunchHttpClient.delete('/logout'),
  refreshToken: async (): Promise<HttpResponse<unknown>> =>
    SrcLaunchHttpClient.post('/auth/token/refresh', undefined),
  sendVerificationCode: async (
    userId: User['id'],
  ): Promise<HttpResponse<{ success: boolean }>> =>
    SrcLaunchHttpClient.post('/auth/verification/send', { user_id: userId }),
  signUp: async ({
    first_name,
    last_name,
    password,
    username,
  }: {
    first_name: string;
    last_name: string;
    password: string;
    username: string;
  }): Promise<HttpResponse<{ user_id: string }>> =>
    SrcLaunchHttpClient.post('/auth/signup', {
      first_name,
      last_name,
      password,
      username,
    }),
  verifyCode: async ({
    code,
    userId,
  }: {
    code: string;
    userId: User['id'];
  }): Promise<HttpResponse<{ success: boolean }>> =>
    SrcLaunchHttpClient.post('/auth/verification/verify', {
      code,
      user_id: userId,
    }),
};
