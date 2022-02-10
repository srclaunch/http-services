import { DataPoint, HttpResponse } from '@srclaunch/types';

import { SrcLaunchApi } from './api/srclaunch';

export default {
  list: async ({
    metric,
  }: {
    metric: string;
  }): Promise<HttpResponse<DataPoint[]>> =>
    await SrcLaunchApi.getDataPoints({ metric }),
};
