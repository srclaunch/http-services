import {
  HttpResponse,
  PaymentMethod,
  Product,
  Subscription,
} from '@srclaunch/types';

import { SrcLaunchApi } from './api/srclaunch';

export default {
  create: async ({
    payment_method_id,
    product_id,
  }: {
    payment_method_id: PaymentMethod['id'];
    product_id: Product['id'];
  }): Promise<HttpResponse<Subscription>> =>
    await SrcLaunchApi.createSubscription({ payment_method_id, product_id }),
  delete: async (id: Subscription['id']): Promise<HttpResponse<unknown>> =>
    await SrcLaunchApi.cancelSubscription(id),
  list: async (): Promise<HttpResponse<Subscription[]>> =>
    await SrcLaunchApi.getSubscriptions(),
};
