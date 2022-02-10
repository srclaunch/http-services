import { HttpResponse, Product, Subscription } from '@srclaunch/types';
import { PaymentMethod } from '@stripe/stripe-js';

import { SrcLaunchHttpClient } from './index';

export default {
  cancelSubscription: async (
    id: Subscription['id'],
  ): Promise<HttpResponse<unknown>> =>
    SrcLaunchHttpClient.delete(`/user/subscriptions/${id}/cancel`),
  createSubscription: async ({
    payment_method_id,
    product_id,
  }: {
    payment_method_id: PaymentMethod['id'];
    product_id: Product['id'];
  }): Promise<HttpResponse<Subscription>> =>
    SrcLaunchHttpClient.post('/user/subscriptions/create', {
      payment_method_id,
      product_id,
    }),
  getSubscriptions: async (): Promise<HttpResponse<Subscription[]>> =>
    SrcLaunchHttpClient.get('/user/subscriptions'),
};
