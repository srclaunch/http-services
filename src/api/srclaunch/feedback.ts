import { HttpResponse } from '@srclaunch/types';

import { SrcLaunchHttpClient } from './index';

export default {
  sendUserFeedback: ({
    userName,
    message,
  }: {
    userName: string;
    message: string;
  }): Promise<HttpResponse<unknown>> =>
    SrcLaunchHttpClient.post('/feedback/web', {
      message,
      userName,
    }),
};
