export declare const SrcLaunchHttpClient: import("@srclaunch/http-client").HttpClientSignature;
export declare const SrcLaunchApi: {
    deleteUser: () => Promise<import("@srclaunch/types").HttpResponse<void>>;
    getUserDetails: () => Promise<import("@srclaunch/types").HttpResponse<import("@srclaunch/types").User>>;
    updateUserPreference: (preferences: import("@srclaunch/types").UserPreferences) => Promise<import("@srclaunch/types").HttpResponse<Partial<import("@srclaunch/types").User>>>;
    cancelSubscription: (id: string) => Promise<import("@srclaunch/types").HttpResponse<unknown>>;
    createSubscription: ({ payment_method_id, product_id, }: {
        payment_method_id: string;
        product_id: string;
    }) => Promise<import("@srclaunch/types").HttpResponse<import("@srclaunch/types").Subscription>>;
    getSubscriptions: () => Promise<import("@srclaunch/types").HttpResponse<import("@srclaunch/types").Subscription[]>>;
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
        }) => Promise<import("@srclaunch/types").HttpResponse<import("@srclaunch/types").PaymentMethod>>;
        delete: (id: string) => Promise<import("@srclaunch/types").HttpResponse<unknown>>;
        list: () => Promise<import("@srclaunch/types").HttpResponse<import("@srclaunch/types").PaymentMethod[]>>;
    };
    sendUserFeedback: ({ userName, message, }: {
        userName: string;
        message: string;
    }) => Promise<import("@srclaunch/types").HttpResponse<unknown>>;
    entities: {
        create: ({ entity, }: {
            entity: import("@srclaunch/types").Model;
        }) => Promise<import("@srclaunch/types").HttpResponse<import("@srclaunch/types").Model>>;
        delete: ({ entity }: {
            entity: import("@srclaunch/types").Model;
        }) => Promise<import("@srclaunch/types").HttpResponse<null>>;
        getOne: ({ name, id, }: {
            name: string;
            id: string | undefined;
        }) => Promise<import("@srclaunch/types").HttpResponse<import("@srclaunch/types").Model>>;
        list: ({ name }: {
            name: string;
        }) => Promise<import("@srclaunch/types").HttpResponse<import("@srclaunch/types").Model[]>>;
        update: ({ entity }: {
            entity: import("@srclaunch/types").Model;
        }) => Promise<import("@srclaunch/types").HttpResponse<import("@srclaunch/types").Model>>;
    };
    getDataPoints: ({ metric, }: {
        metric: string;
    }) => Promise<import("@srclaunch/types").HttpResponse<import("@srclaunch/types").DataPoint[]>>;
    authenticateRefreshToken: ({ fingerprint, }: {
        fingerprint: string;
    }) => Promise<import("@srclaunch/types").HttpResponse<{
        device?: import("@srclaunch/types").AuthenticationDeviceDetails | null | undefined;
        tokens: import("@srclaunch/types").AuthenticationTokens;
    }>>;
    checkUsernameAvailability: ({ username, }: {
        username: string;
    }) => Promise<import("@srclaunch/types").HttpResponse<{
        available: boolean;
    }>>;
    confirmDevice: ({ accessToken, deviceKey, deviceName, passwordVerifier, salt, }: {
        accessToken: string;
        deviceKey: string;
        deviceName?: string | undefined;
        passwordVerifier: string;
        salt: string;
    }) => Promise<import("@srclaunch/types").HttpResponse<{
        success: boolean;
    }>>;
    confirmSignUp: ({ code, userId, }: {
        code: string;
        userId: string;
    }) => Promise<import("@srclaunch/types").HttpResponse<unknown>>;
    getVerificationDetails: ({ id, }: {
        id: string;
    }) => Promise<import("@srclaunch/types").HttpResponse<{
        status: import("@srclaunch/types").UserVerificationStatus | undefined;
        delivery: {
            medium: import("@srclaunch/types").CommunicationMedium;
            destination: string;
        };
    }>>;
    login: ({ fingerprint, username, password, }: {
        fingerprint: string;
        username: string;
        password: string;
    }) => Promise<import("@srclaunch/types").HttpResponse<{
        challenge: import("@srclaunch/types").AuthenticationChallengeDetails;
    } | {
        device?: import("@srclaunch/types").AuthenticationDeviceDetails | undefined;
        tokens: import("@srclaunch/types").AuthenticationTokens;
    }>>;
    logout: () => Promise<import("@srclaunch/types").HttpResponse<unknown>>;
    refreshToken: () => Promise<import("@srclaunch/types").HttpResponse<unknown>>;
    sendVerificationCode: (userId: string) => Promise<import("@srclaunch/types").HttpResponse<{
        success: boolean;
    }>>;
    signUp: ({ first_name, last_name, password, username, }: {
        first_name: string;
        last_name: string;
        password: string;
        username: string;
    }) => Promise<import("@srclaunch/types").HttpResponse<{
        user_id: string;
    }>>;
    verifyCode: ({ code, userId, }: {
        code: string;
        userId: string;
    }) => Promise<import("@srclaunch/types").HttpResponse<{
        success: boolean;
    }>>;
};
//# sourceMappingURL=index.d.ts.map