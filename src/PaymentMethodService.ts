import { HttpResponse, PaymentMethod } from '@srclaunch/types';

import { SrcLaunchApi } from './api/srclaunch';

export default {
  create: async ({
    brand,
    country,
    expMonth,
    expYear,
    lastFourDigits,
    stripeId,
    threeDSecureUsageSupported,
    type,
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
    await SrcLaunchApi.paymentMethods.create({
      brand,
      country,
      expMonth,
      expYear,
      lastFourDigits,
      stripeId,
      threeDSecureUsageSupported,
      type,
    }),
  delete: async (id: PaymentMethod['id']): Promise<HttpResponse<unknown>> =>
    await SrcLaunchApi.paymentMethods.delete(id),
  list: async (): Promise<PaymentMethod[]> => {
    const resp = await SrcLaunchApi.paymentMethods.list();

    // @ts-ignore
    return resp.body;
  },
};
