import { HttpResponse, PaymentMethod, Product, Subscription } from '@srclaunch/types';
declare const _default: {
    create: ({ payment_method_id, product_id, }: {
        payment_method_id: PaymentMethod['id'];
        product_id: Product['id'];
    }) => Promise<HttpResponse<Subscription>>;
    delete: (id: Subscription['id']) => Promise<HttpResponse<unknown>>;
    list: () => Promise<HttpResponse<Subscription[]>>;
};
export default _default;
//# sourceMappingURL=SubscriptionService.d.ts.map