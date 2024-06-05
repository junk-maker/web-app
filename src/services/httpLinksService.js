import ApiService from './ApiService';

class HttpLinksService {
    auth() {
        return {
            'sign-in': 'auth/sign-in',
            'sign-up': 'auth/sign-up',
        };
    };

    getApi(id, link, data, type) {
        const api = new ApiService(id, link, data, type);
        return api;
    };
};

export const httpLinksService = new HttpLinksService();