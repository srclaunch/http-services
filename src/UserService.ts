import { HttpResponse, User } from '@srclaunch/types';

import { SrcLaunchApi } from './api/srclaunch';

export default {
  deleteUserCompletely: async (): Promise<HttpResponse<void>> =>
    await SrcLaunchApi.deleteUser(),
  getUserDetails: async (): Promise<HttpResponse<Partial<User>>> => {
    const result = await SrcLaunchApi.getUserDetails();
    const preferences = JSON.parse(
      // @ts-ignore
      (result?.preferences as unknown as string) ?? '{}',
    );

    // @ts-ignore
    return { ...result, preferences };
  },
};
