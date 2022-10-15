import { getAuthUserData } from './auth-reducer';

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

const initialState:  InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: InitializedSuccessActionType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state, //оставляем на будущее
                initialized: true
            }
        default:
            return state;
    }
}

type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({type: SET_INITIALIZED_SUCCESS});

//thunk


export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    //dispatch(somethingelse())
    //dispatch(somethingelse())
    
    Promise.all([promise])
    .then(() => { //then вызывается у all, все промисы собираются для инициализации приложения
        dispatch(initializedSuccess())
    })
}

export default appReducer;