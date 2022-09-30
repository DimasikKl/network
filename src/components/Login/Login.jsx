import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { createField, Input } from "../common/FormsControls/FormsControls";
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            { createField('Email', 'email', [require], Input) }
            { createField('Password', 'password', [require], Input, {type: 'password'}) }
            { createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me') }
            { captchaUrl && <img src={captchaUrl} alt='captchaUrl' />}
            { captchaUrl && createField('Symbols from image', 'captcha', [require], Input, {}) }
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

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login})(Login);