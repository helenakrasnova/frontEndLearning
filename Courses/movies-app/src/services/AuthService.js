export class AuthService {
    constructor() {
        this.users = [{
            userName: 'admin',
            password: 'admin'
        }];
    }
    get userName() {
        let token = localStorage.getItem('token');
        if (!token) {
            return null;
        }
        let loginData = atob(token);
        return loginData.split('|')[0];
    }

    logIn(username, password) {
        let result = this.users.find(item => item.userName === username && item.password === password);
        if (!result) {
            return false;
        }
        let timeStamp = Date.now();
        let token = btoa(`${username}|${timeStamp}`);
        localStorage.setItem('token', token);
        return true;
    }

    logOut() {
        localStorage.removeItem('token');
    }

    isAuthenticated() {
        let token = localStorage.getItem('token');
        if (!token) {
            return false;
        }

        let loginData = atob(token);
        let timeStamp = loginData.split('|')[1];
        let timeStampNow = Date.now();
        let hoursInMillSec = 60 * 60 * 1000;
        if (timeStampNow - timeStamp < hoursInMillSec) {
            return true;
        }

        return false;
    }
}