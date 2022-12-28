import { instance, APIResponseType,  ResultCodesEnum, ResultCodeForCaptchaEnum} from './api';

type MeResponseType = {
    id: number
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseType>>(`auth/me`).then(response => response.data);
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

