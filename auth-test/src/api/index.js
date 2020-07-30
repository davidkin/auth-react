import api from './api';

class API {
    static async login(body) {
        return api.post('authenticate/login', body);
    }

    static logout() {
        return 'logout';
    }
}

export default API;