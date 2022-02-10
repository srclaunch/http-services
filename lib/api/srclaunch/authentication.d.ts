import { AuthenticationChallengeDetails, AuthenticationDeviceDetails, AuthenticationTokens, CognitoUser, CommunicationMedium, HttpResponse, User } from '@srclaunch/types';
declare const _default: {
    authenticateRefreshToken: ({ fingerprint, }: {
        fingerprint: string;
    }) => Promise<HttpResponse<{
        device?: AuthenticationDeviceDetails | null;
        tokens: AuthenticationTokens;
    }>>;
    checkUsernameAvailability: ({ username, }: {
        username: string;
    }) => Promise<HttpResponse<{
        available: boolean;
    }>>;
    confirmDevice: ({ accessToken, deviceKey, deviceName, passwordVerifier, salt, }: {
        accessToken: string;
        deviceKey: string;
        deviceName?: string | undefined;
        passwordVerifier: string;
        salt: string;
    }) => Promise<HttpResponse<{
        success: boolean;
    }>>;
    confirmSignUp: ({ code, userId, }: {
        code: string;
        userId: User['id'];
    }) => Promise<HttpResponse<unknown>>;
    getVerificationDetails: ({ id, }: {
        id: User['id'];
    }) => Promise<HttpResponse<{
        status: CognitoUser['status'];
        delivery: {
            medium: CommunicationMedium;
            destination: string;
        };
    }>>;
    login: ({ fingerprint, username, password, }: {
        fingerprint: string;
        username: string;
        password: string;
    }) => Promise<HttpResponse<{
        challenge: AuthenticationChallengeDetails;
    } | {
        device?: AuthenticationDeviceDetails;
        tokens: AuthenticationTokens;
    }>>;
    logout: () => Promise<HttpResponse<unknown>>;
    refreshToken: () => Promise<HttpResponse<unknown>>;
    sendVerificationCode: (userId: User['id']) => Promise<HttpResponse<{
        success: boolean;
    }>>;
    signUp: ({ first_name, last_name, password, username, }: {
        first_name: string;
        last_name: string;
        password: string;
        username: string;
    }) => Promise<HttpResponse<{
        user_id: string;
    }>>;
    verifyCode: ({ code, userId, }: {
        code: string;
        userId: User['id'];
    }) => Promise<HttpResponse<{
        success: boolean;
    }>>;
};
export default _default;
//# sourceMappingURL=authentication.d.ts.map