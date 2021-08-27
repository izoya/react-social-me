import axios from 'axios';

class Request {
    constructor() {
        this.request = axios.create({
            baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1',
        });
    }

    get(url, params) {
        const queryParams = new URLSearchParams(params).toString();

        return this.request.get(url + '?' + queryParams);
    }

    post(url, params) {
        return this.request.post(url, params);
    }
}

export const request = new Request();
