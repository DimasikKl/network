const SEND_MESSAGE = 'SEND_MESSAGE';

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

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            };
        default:
            return state;
    }
};

type SendMessagesCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessagesCreator = (newMessageBody: string): SendMessagesCreatorActionType => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;