import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Navigate  } from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMessageForm';
import { InitialStateType } from '../../redux/dialogs-reducer';

type PropsType = {
    dialogsPage: InitialStateType,
    sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}

const Dialogs: React.FC<PropsType> = (props) => {
    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />);
    const messagesElement = state.messages.map(m => <Message key={m.id} message={m.message}/>);

    const addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}



export default Dialogs;