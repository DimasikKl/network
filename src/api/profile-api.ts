import { instance, APIResponseType } from './api';
import { PhotosType, ProfileType } from "../types/types";

type SavePhotoResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data);
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId).then(res => res.data);
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status: status}).then(res => res.data);
    },
    savePhoto(pfotoFile: File) {
        const formData = new FormData();
        formData.append('image', pfotoFile);
        return instance.put<APIResponseType<SavePhotoResponseDataType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    }
}