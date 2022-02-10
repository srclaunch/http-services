import { HttpResponse, PaymentMethod } from '@srclaunch/types';
declare const _default: {
    create: ({ brand, country, expMonth, expYear, lastFourDigits, stripeId, threeDSecureUsageSupported, type, }: {
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
    list: () => Promise<PaymentMethod[]>;
};
export default _default;
//# sourceMappingURL=PaymentMethodService.d.ts.map