// import {} from '@srclaunch/http-client';
import { HttpResponse, PaymentMethod } from '@srclaunch/types';

import { SrcLaunchHttpClient } from './index';

export default {
  paymentMethods: {
    create: async ({
      brand,
      country,
      lastFourDigits,
      expMonth,
      expYear,
      stripeId,
      type,
      threeDSecureUsageSupported,
    }: {
      brand?: string;
      country?: string | null;
      expMonth?: number;
      expYear?: number;
      lastFourDigits?: string;
      stripeId: string;
      threeDSecureUsageSupported?: boolean;
      type?: string;
    }): Promise<HttpResponse<PaymentMethod>> =>
      SrcLaunchHttpClient.post('/user/payment_methods', {
        brand,
        country,
        exp_month: expMonth,
        exp_year: expYear,
        last_four_digits: lastFourDigits,
        stripe_id: stripeId,
        three_d_secure_usage_supported: threeDSecureUsageSupported,
        type,
      }),
    delete: async (id: PaymentMethod['id']): Promise<HttpResponse<unknown>> =>
      SrcLaunchHttpClient.delete(`/user/payment_methods/${id}`),
    list: async (): Promise<HttpResponse<PaymentMethod[]>> =>
      SrcLaunchHttpClient.get('/user/payment_methods'),
  },
};
