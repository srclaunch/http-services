import { HttpResponse, PaymentMethod } from '@srclaunch/types';
declare const _default: {
    paymentMethods: {
        create: ({ brand, country, lastFourDigits, expMonth, expYear, stripeId, type, threeDSecureUsageSupported, }: {
            brand?: string | undefined;
            country?: string | null | undefined;
            expMonth?: number | undefined;
            expYear?: number | undefined;
            lastFourDigits?: string | undefined;
            stripeId: string;
            threeDSecureUsageSupported?: boolean | undefined;
            type?: string | undefined;
        }) => Promise<HttpResponse<PaymentMethod>>;
        delete: (id: PaymentMethod['id']) => Promise<HttpResponse<unknown>>;
        list: () => Promise<HttpResponse<PaymentMethod[]>>;
    };
};
export default _default;
//# sourceMappingURL=payment-methods.d.ts.map