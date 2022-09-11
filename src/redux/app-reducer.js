import { getAuthUserData } from './auth-reducer'

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
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

export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

//thunk
export const initializeApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    //dispatch(somethingelse())
    //dispatch(somethingelse())
    
    Promise.all([promise])
    .then(() => { //then вызывается у all, все промисы собираются для инициализации приложения
        dispatch(initializedSuccess())
    })
}

export default appReducer;