import { InferActionsTypes } from "./redux-store";

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

const initialState = {
    dialogs:  [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Katy'},
        {id: 3, name: 'Vova'},
        {id: 4, name: 'Tany'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'hy'},
        {id: 2, message: 'by'},
        {id: 3, message: 'hy'},
        {id: 4, message: 'by'}
    ] as Array<MessageType>
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            const body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            };
        default:
            return state;
    }
};

export const actions = {
    sendMessages: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody}as const)
}

export default dialogsReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;