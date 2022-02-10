import { Exception } from '@srclaunch/exceptions';
import { HttpClient } from '@srclaunch/http-client';
import { Environment } from '@srclaunch/types';
import { getEnvironment } from '@srclaunch/web-environment';

import authenticationEndpoints from './authentication';
import dataPointEndpoints from './data-points';
import entityEndpoints from './entities';
import feedbackEndpoint from './feedback';
import paymentMethodEndpoints from './payment-methods';
import subscriptionEndpoints from './subscriptions';
import userEndpoints from './users';

const environment: Environment = getEnvironment();

const hosts: {
  readonly [k: string]: {
    readonly SRCLAUNCH_API: string;
  };
} = {
  dev: {
    SRCLAUNCH_API: 'http://localhost:8080',
  },
  prod: {
    SRCLAUNCH_API: 'https://api.srclaunch.com',
  },
  test: {
    SRCLAUNCH_API: 'https://api.test.srclaunch.com',
  },
};

export const SrcLaunchHttpClient = HttpClient({
  basePath: '/core-api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // headers: { 'X-Requested-With': 'XMLHttpRequest' },
  },
  host: hosts[environment.id]?.SRCLAUNCH_API,
  options: {
    retries: 2,
    retryCondition: (err: any) => !err.response,
    retryDelay: 5000,
  },
  // preAuthResourceIncludes: '/auth',
  responseType: 'json',
  withCredentials: true,
});

export const SrcLaunchApi = {
  ...authenticationEndpoints,
  ...dataPointEndpoints,
  ...entityEndpoints,
  ...feedbackEndpoint,
  ...paymentMethodEndpoints,
  ...subscriptionEndpoints,
  ...userEndpoints,
};
