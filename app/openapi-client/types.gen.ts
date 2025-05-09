// This file is auto-generated by @hey-api/openapi-ts

export type BearerResponse = {
    access_token: string;
    token_type: string;
};

export type BodyAuthResetForgotPassword = {
    email: string;
};

export type BodyAuthResetResetPassword = {
    token: string;
    password: string;
};

export type BodyAuthVerifyRequestToken = {
    email: string;
};

export type BodyAuthVerifyVerify = {
    token: string;
};

export type ErrorModel = {
    detail: string | {
        [key: string]: string;
    };
};

export type HttpValidationError = {
    detail?: Array<ValidationError>;
};

export type ItemCreate = {
    name: string;
    description?: string | null;
    quantity?: number | null;
};

export type ItemRead = {
    name: string;
    description?: string | null;
    quantity?: number | null;
    id: string;
    user_id: string;
};

export type UserCreate = {
    email: string;
    password: string;
    is_active?: boolean | null;
    is_superuser?: boolean | null;
    is_verified?: boolean | null;
};

export type UserRead = {
    id: string;
    email: string;
    is_active?: boolean;
    is_superuser?: boolean;
    is_verified?: boolean;
};

export type UserUpdate = {
    password?: string | null;
    email?: string | null;
    is_active?: boolean | null;
    is_superuser?: boolean | null;
    is_verified?: boolean | null;
};

export type ValidationError = {
    loc: Array<string | number>;
    msg: string;
    type: string;
};

export type Login = {
    grant_type?: string | null;
    username: string;
    password: string;
    scope?: string;
    client_id?: string | null;
    client_secret?: string | null;
};

export type AuthJwtLoginData = {
    body: Login;
    path?: never;
    query?: never;
    url: '/auth/jwt/login';
};

export type AuthJwtLoginErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type AuthJwtLoginError = AuthJwtLoginErrors[keyof AuthJwtLoginErrors];

export type AuthJwtLoginResponses = {
    /**
     * Successful Response
     */
    200: BearerResponse;
};

export type AuthJwtLoginResponse = AuthJwtLoginResponses[keyof AuthJwtLoginResponses];

export type AuthJwtLogoutData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/auth/jwt/logout';
};

export type AuthJwtLogoutErrors = {
    /**
     * Missing token or inactive user.
     */
    401: unknown;
};

export type AuthJwtLogoutResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type RegisterRegisterData = {
    body: UserCreate;
    path?: never;
    query?: never;
    url: '/auth/register';
};

export type RegisterRegisterErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type RegisterRegisterError = RegisterRegisterErrors[keyof RegisterRegisterErrors];

export type RegisterRegisterResponses = {
    /**
     * Successful Response
     */
    201: UserRead;
};

export type RegisterRegisterResponse = RegisterRegisterResponses[keyof RegisterRegisterResponses];

export type ResetForgotPasswordData = {
    body: BodyAuthResetForgotPassword;
    path?: never;
    query?: never;
    url: '/auth/forgot-password';
};

export type ResetForgotPasswordErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type ResetForgotPasswordError = ResetForgotPasswordErrors[keyof ResetForgotPasswordErrors];

export type ResetForgotPasswordResponses = {
    /**
     * Successful Response
     */
    202: unknown;
};

export type ResetResetPasswordData = {
    body: BodyAuthResetResetPassword;
    path?: never;
    query?: never;
    url: '/auth/reset-password';
};

export type ResetResetPasswordErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type ResetResetPasswordError = ResetResetPasswordErrors[keyof ResetResetPasswordErrors];

export type ResetResetPasswordResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type VerifyRequestTokenData = {
    body: BodyAuthVerifyRequestToken;
    path?: never;
    query?: never;
    url: '/auth/request-verify-token';
};

export type VerifyRequestTokenErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type VerifyRequestTokenError = VerifyRequestTokenErrors[keyof VerifyRequestTokenErrors];

export type VerifyRequestTokenResponses = {
    /**
     * Successful Response
     */
    202: unknown;
};

export type VerifyVerifyData = {
    body: BodyAuthVerifyVerify;
    path?: never;
    query?: never;
    url: '/auth/verify';
};

export type VerifyVerifyErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type VerifyVerifyError = VerifyVerifyErrors[keyof VerifyVerifyErrors];

export type VerifyVerifyResponses = {
    /**
     * Successful Response
     */
    200: UserRead;
};

export type VerifyVerifyResponse = VerifyVerifyResponses[keyof VerifyVerifyResponses];

export type UsersCurrentUserData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/users/me';
};

export type UsersCurrentUserErrors = {
    /**
     * Missing token or inactive user.
     */
    401: unknown;
};

export type UsersCurrentUserResponses = {
    /**
     * Successful Response
     */
    200: UserRead;
};

export type UsersCurrentUserResponse = UsersCurrentUserResponses[keyof UsersCurrentUserResponses];

export type UsersPatchCurrentUserData = {
    body: UserUpdate;
    path?: never;
    query?: never;
    url: '/users/me';
};

export type UsersPatchCurrentUserErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Missing token or inactive user.
     */
    401: unknown;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UsersPatchCurrentUserError = UsersPatchCurrentUserErrors[keyof UsersPatchCurrentUserErrors];

export type UsersPatchCurrentUserResponses = {
    /**
     * Successful Response
     */
    200: UserRead;
};

export type UsersPatchCurrentUserResponse = UsersPatchCurrentUserResponses[keyof UsersPatchCurrentUserResponses];

export type UsersDeleteUserData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/users/{id}';
};

export type UsersDeleteUserErrors = {
    /**
     * Missing token or inactive user.
     */
    401: unknown;
    /**
     * Not a superuser.
     */
    403: unknown;
    /**
     * The user does not exist.
     */
    404: unknown;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UsersDeleteUserError = UsersDeleteUserErrors[keyof UsersDeleteUserErrors];

export type UsersDeleteUserResponses = {
    /**
     * Successful Response
     */
    204: void;
};

export type UsersDeleteUserResponse = UsersDeleteUserResponses[keyof UsersDeleteUserResponses];

export type UsersUserData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/users/{id}';
};

export type UsersUserErrors = {
    /**
     * Missing token or inactive user.
     */
    401: unknown;
    /**
     * Not a superuser.
     */
    403: unknown;
    /**
     * The user does not exist.
     */
    404: unknown;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UsersUserError = UsersUserErrors[keyof UsersUserErrors];

export type UsersUserResponses = {
    /**
     * Successful Response
     */
    200: UserRead;
};

export type UsersUserResponse = UsersUserResponses[keyof UsersUserResponses];

export type UsersPatchUserData = {
    body: UserUpdate;
    path: {
        id: string;
    };
    query?: never;
    url: '/users/{id}';
};

export type UsersPatchUserErrors = {
    /**
     * Bad Request
     */
    400: ErrorModel;
    /**
     * Missing token or inactive user.
     */
    401: unknown;
    /**
     * Not a superuser.
     */
    403: unknown;
    /**
     * The user does not exist.
     */
    404: unknown;
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type UsersPatchUserError = UsersPatchUserErrors[keyof UsersPatchUserErrors];

export type UsersPatchUserResponses = {
    /**
     * Successful Response
     */
    200: UserRead;
};

export type UsersPatchUserResponse = UsersPatchUserResponses[keyof UsersPatchUserResponses];

export type ReadItemData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/items/';
};

export type ReadItemResponses = {
    /**
     * Successful Response
     */
    200: Array<ItemRead>;
};

export type ReadItemResponse = ReadItemResponses[keyof ReadItemResponses];

export type CreateItemData = {
    body: ItemCreate;
    path?: never;
    query?: never;
    url: '/items/';
};

export type CreateItemErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type CreateItemError = CreateItemErrors[keyof CreateItemErrors];

export type CreateItemResponses = {
    /**
     * Successful Response
     */
    200: ItemRead;
};

export type CreateItemResponse = CreateItemResponses[keyof CreateItemResponses];

export type DeleteItemData = {
    body?: never;
    path: {
        item_id: string;
    };
    query?: never;
    url: '/items/{item_id}';
};

export type DeleteItemErrors = {
    /**
     * Validation Error
     */
    422: HttpValidationError;
};

export type DeleteItemError = DeleteItemErrors[keyof DeleteItemErrors];

export type DeleteItemResponses = {
    /**
     * Successful Response
     */
    200: unknown;
};

export type ClientOptions = {
    baseUrl: `${string}://openapi.json` | (string & {});
};