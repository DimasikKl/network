import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Navigate  } from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMessageForm';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />);
    let messagesElement = state.messages.map(m => <Message key={m.id} message={m.message}/>);
    //let newMessageBody = state.newMessageBody;

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) return <Navigate  to={'/login'}/>

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