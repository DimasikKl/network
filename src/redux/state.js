import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, post: 'hi', likesCount: 12},
                {id: 2, post: 'by', likesCount: 120},
            ],
            newPostText: 'Dima'
        },

        dialogsPage: {
            dialogs:  [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Katy'},
                {id: 3, name: 'Vova'},
                {id: 4, name: 'Tany'}
            ],
            messages: [
                {id: 1, message: 'hy'},
                {id: 2, message: 'by'},
                {id: 3, message: 'hy'},
                {id: 4, message: 'by'}
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('mdd,fm');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._callSubscriber(this._state)
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default store;