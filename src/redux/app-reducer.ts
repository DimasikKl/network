import { getAuthUserData } from './auth-reducer';
import { InferActionsTypes } from './redux-store';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/SET_INITIALIZED_SUCCESS':
            return {
                ...state, //оставляем на будущее
                initialized: true
            }
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/SET_INITIALIZED_SUCCESS'} as const),
}

//thunk


export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuthUserData());
    //dispatch(somethingelse())
    //dispatch(somethingelse())
    
    Promise.all([promise])
    .then(() => { //then вызывается у all, все промисы собираются для инициализации приложения
        dispatch(actions.initializedSuccess())
    })
}

export default appReducer;

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>