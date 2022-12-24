import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    const addMessageElement = React.createRef();
    const addMessage = () => {
        const text = addMessageElement.current.value;
    }
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message;