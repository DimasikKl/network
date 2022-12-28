import React from "react";
import { reduxForm, InjectedFormProps } from 'redux-form';
import { maxLengthCreator } from "../../../utils/validators/validators";
import { createField, Textarea } from "../../common/FormsControls/FormsControls";
import { NewMessageFormValuesType } from "../Dialogs";


const maxLength100 = maxLengthCreator(100);

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>;
type PropsType = {}

const AddMessaeForm: React.FC<InjectedFormProps<NewMessageFormValuesType , PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            { createField<NewMessageFormValuesKeysType>('Enter your message', 'newMessageBody', [require, maxLength100], Textarea) }
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm<NewMessageFormValuesType>({form: 'dialog-add-message-form'})(AddMessaeForm);