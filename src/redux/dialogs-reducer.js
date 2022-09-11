const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

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

export const sendMessagesCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;