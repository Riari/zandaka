import { OAUTH_REDIRECT_URI, FACEBOOK_OAUTH_CLIENT_ID, FACEBOOK_OAUTH_CLIENT_SECRET } from '$env/static/private';

interface AuthProvider {
    appId: string;
    secret: string;
    getAuthUri: (state: string) => string;
}

interface AuthProviders {
    [key: string]: AuthProvider;
}

export const providers: AuthProviders = {
    facebook: {
        appId: FACEBOOK_OAUTH_CLIENT_ID,
        secret: FACEBOOK_OAUTH_CLIENT_SECRET,
        getAuthUri: (state: string) => {
            const params = new URLSearchParams({
                client_id: FACEBOOK_OAUTH_CLIENT_ID,
                redirect_uri: OAUTH_REDIRECT_URI,
                state: state
            });

            return 'https://www.facebook.com/v14.0/dialog/oauth?' + params.toString();
        }
    }
}
