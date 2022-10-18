import { profileAPI } from '../api/profile-api';
import { FormAction, stopSubmit } from 'redux-form';
import { ProfileType, PostType, PhotosType } from '../types/types';
import { BaseThunkType, InferActionsTypes } from "./redux-store";

const initialState = {
    posts: [
        {id: 1, message: 'hi', likesCount: 12},
        {id: 2, message: 'by', likesCount: 120},
        {id: 3, message: 'by', likesCount: 55},
        {id: 4, message: 'by', likesCount: 23},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

export type InitialStatetype = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>

const profileReducer = (state = initialState, action: ActionsType): InitialStatetype => {

    switch (action.type) {
        case 'SN/PTOFILE/ADD_POST': {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case 'SN/PTOFILE/SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SN/PTOFILE/SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'SN/PTOFILE/DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter( post => post.id !== action.postId)
            }
        }
        case 'SN/PTOFILE/SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state;
    }

};

export const actions = {
    addPostActionCreator: (newPostText: string) => ({type: 'SN/PTOFILE/ADD_POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'SN/PTOFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PTOFILE/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'SN/PTOFILE/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PTOFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}

//thunk
export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try{
        const data = await profileAPI.updateStatus(status);
    
        if(data.resultCode === 0) {
            dispatch(actions.setStatus(status));
        }
    } catch(error) {
        //
    }
    
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    const data = await profileAPI.savePhoto(file);

    if(data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);

    if(data.resultCode === 0) {
        if(userId !== null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error('userId can be null');
        }
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}));
        return Promise.reject(data.messages[0]);
    }
}


export default profileReducer;