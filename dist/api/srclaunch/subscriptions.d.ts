import { HttpResponse, Product, Subscription } from '@srclaunch/types';
import { PaymentMethod } from '@stripe/stripe-js';
declare const _default: {
    cancelSubscription: (id: Subscription['id']) => Promise<HttpResponse<unknown>>;
    createSubscription: ({ payment_method_id, product_id, }: {
        payment_method_id: PaymentMethod['id'];
        product_id: Product['id'];
    }) => Promise<HttpResponse<Subscription>>;
    getSubscriptions: () => Promise<HttpResponse<Subscription[]>>;
};
export default _default;
//# sourceMappingURL=subscriptions.d.ts.map