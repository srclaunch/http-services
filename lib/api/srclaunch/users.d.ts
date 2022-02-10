import { HttpResponse, User, UserPreferences } from '@srclaunch/types';
declare const _default: {
    deleteUser: () => Promise<HttpResponse<void>>;
    getUserDetails: () => Promise<HttpResponse<User>>;
    updateUserPreference: (preferences: UserPreferences) => Promise<HttpResponse<Partial<User>>>;
};
export default _default;
//# sourceMappingURL=users.d.ts.map