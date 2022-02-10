import { HttpResponse, User, UserPreferences } from '@srclaunch/types';

import { SrcLaunchHttpClient } from './index';

export default {
  deleteUser: async (): Promise<HttpResponse<void>> =>
    SrcLaunchHttpClient.delete('/user'),
  getUserDetails: async (): Promise<HttpResponse<User>> =>
    SrcLaunchHttpClient.get('/user'),
  updateUserPreference: async (
    preferences: UserPreferences,
  ): Promise<HttpResponse<Partial<User>>> =>
    SrcLaunchHttpClient.put('/user/preferences', preferences),
};
