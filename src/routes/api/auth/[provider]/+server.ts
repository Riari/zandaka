import { error, json, type RequestHandler, type RequestEvent } from '@sveltejs/kit';
import { providers } from '$lib/auth/providers';
import crypto from 'crypto';
import * as cookie from 'cookie';

export const GET: RequestHandler = (request: RequestEvent) => {
    if (!request.params.provider || !providers[request.params.provider]) {
        return error(400, "Invalid provider");
    }

    const provider = providers[request.params.provider];
    const state = crypto.randomBytes(20).toString('hex');

    const response = json({ redirect: provider.getAuthUri(state) });
    response.headers.set(
        'set-cookie',
        cookie.serialize('state', state, {
            path: '/',
            httpOnly: true
        })
    );

    return response;
}
