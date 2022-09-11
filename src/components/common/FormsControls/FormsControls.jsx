import { Field } from "formik";
import React from "react";
import style from './FormsControls.module.css';

const FormControl = ({input, meta:{touched, error}, children}) => {

    const hasError = touched && error;

    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} ><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...resProps} = props;
    return <FormControl {...props}><input {...input} {...resProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props={}, text='') => (
    <div>
        <Field 
            component={component} 
            validate={validators} 
            name={name} 
            placeholder={placeholder}
            {...props}
        />{text}
    </div>
)