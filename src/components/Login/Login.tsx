import React from "react";
import { connect } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { createField, GetStringKeys, Input } from "../common/FormsControls/FormsControls";
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css';
import { AppStateType } from '../../redux/redux-store';

type LoginFormOwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType , LoginFormOwnPropsType> 
                        & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            { createField<LoginFormValuesTypeKeys>('Email', 'email', [require], Input) }
            { createField<LoginFormValuesTypeKeys>('Password', 'password', [require], Input, {type: 'password'}) }
            { createField<LoginFormValuesTypeKeys>(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me') }

            { captchaUrl && <img src={captchaUrl} alt='captchaUrl' />}
            { captchaUrl && createField<LoginFormValuesTypeKeys>('Symbols from image', 'captcha', [require], Input, {}) }
            
                <div>
                    <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
                </div>
                {error && <div className={style.formSummeryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({
    // a unique name for the form
    form: 'login'
})(LoginForm);


    type MapStatePropsType = {
        isAuth: boolean
        captchaUrl: string | null
    }

    type MapDispatchPropsType = {
        login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    }

    export type LoginFormValuesType = {
        email: string
        password: string
        rememberMe: boolean
        captcha: string
    }
    
    type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;


const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);