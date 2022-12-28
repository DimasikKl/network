import React from "react";
import { createField, Input, Textarea, GetStringKeys } from '../../common/FormsControls/FormsControls';
import {reduxForm, InjectedFormProps} from 'redux-form';
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css'
import { ProfileType } from '../../../types/types';

type PropsType = {
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<PropsType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType , PropsType> 
& PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {error && <div className={style.formSummeryError}>
                    {error}
                </div>}
            <div>
                <b>Full name</b>: {createField<ProfileTypeKeys>('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>: {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professionals skills</b>:
                {createField<ProfileTypeKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me</b>: {createField<ProfileTypeKeys>('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={s.contact}>
                            <b>{key}: {createField(key, 'contacts.' + key, [], Input)} </b>
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({
    // a unique name for the form
    form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm;