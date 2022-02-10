import { AuthenticationChallengeDetails, AuthenticationDeviceDetails, AuthenticationTokens, CognitoUser, CommunicationMedium, HttpResponse, User } from '@srclaunch/types';
declare const _default: {
    authenticateRefreshToken: () => Promise<{
        device?: AuthenticationDeviceDetails | null | undefined;
        tokens: AuthenticationTokens;
    }>;
    checkUsernameAvailability: ({ username, }: {
        username: string;
    }) => Promise<boolean>;
    confirmDevice: ({ accessToken, deviceKey, deviceName, passwordVerifier, salt, }: {
        accessToken: string;
        deviceKey: string;
        deviceName?: string | undefined;
        passwordVerifier: string;
        salt: string;
    }) => Promise<{
        success: boolean;
    }>;
    getVerificationDetails: (id: User['id']) => Promise<{
        status: CognitoUser['status'];
        delivery: {
            medium: CommunicationMedium;
            destination: string;
        };
    }>;
    login: ({ username, password, }: {
        username: string;
        password: string;
    }) => Promise<{
        challenge: AuthenticationChallengeDetails;
    } | {
        device?: AuthenticationDeviceDetails;
        tokens: AuthenticationTokens;
    }>;
    refreshToken: () => Promise<HttpResponse<unknown>>;
    sendVerificationCode: ({ userId, }: {
        userId: User['id'];
    }) => Promise<{
        success: boolean;
    }>;
    signUp: ({ password, firstName, lastName, username, }: {
        password: string;
        firstName: string;
        lastName: string;
        username: string;
    }) => Promise<{
        userId: string;
    }>;
    verifyCode: ({ code, userId, }: {
        code: string;
        userId: User['id'];
    }) => Promise<{
        success: boolean;
    }>;
};
export default _default;
//# sourceMappingURL=AuthenticationService.d.ts.map