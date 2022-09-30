import axios from "axios";
import { savePhoto } from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API_KEY": "907f0d9f-c05a-4481-9f78-3ab1c858feba"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    follow(usersId) {
        return instance.post(`follow/${usersId}`);
    },
    unfollow(usersId) {
        return instance.delete(`follow/${usersId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(pfotoFile) {
        const formData = new FormData();
        formData.append('image', pfotoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha=null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}