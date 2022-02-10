import { DataPoint, HttpResponse } from '@srclaunch/types';

import { SrcLaunchHttpClient } from './index';

export default {
  getDataPoints: ({
    metric,
  }: {
    metric: string;
  }): Promise<HttpResponse<DataPoint[]>> =>
    SrcLaunchHttpClient.get(`/data-points/metric/${metric}`),
};
