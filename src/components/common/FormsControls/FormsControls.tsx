import { Field } from "formik";
import React from "react";
import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../../utils/validators/validators";
import style from './FormsControls.module.css';

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode
}

const FormControl: React.FC<FormControlPropsType> = ({meta:{touched, error}, children}) => {

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

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props} ><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...resProps} = props;
    const {input, meta, ...resProps} = props;
    return <FormControl {...props}><input {...input} {...resProps} /></FormControl>
}

export function createField<FormKeysType extends string> (placeholder: string | undefined, 
                            name: FormKeysType, 
                            validators: Array<FieldValidatorType>, 
                            component: React.FC<WrappedFieldProps>, 
                            props={}, 
                            text='') {
    return (
        <div>
            <Field 
                component={component}
                name={name} 
                validate={validators} 
                placeholder={placeholder}
                {...props}
            />{text}
        </div>
    )
} 
  
