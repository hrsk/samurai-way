import { ReactNode } from 'react';
import classes from './FormsControls.module.css';
import { Field } from 'redux-form';

type PropsType = {
    input: any
    meta: any
    children: ReactNode
}

export const FormControl = (props: PropsType) => {
    const { meta, children } = props;

    const hasError = meta.error && meta.touched;

    return (
        <div className={hasError && classes.formControlError}>
            <div>{children}</div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    );
};

export const Textarea = (props: any) => {
    const { input, ...restProps } = props;

    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};

export const Input = (props: PropsType) => {
    const { input, meta, ...restProps } = props;

    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};


export const createField = (
    placeholder = '',
    name: string,
    validators: any[],
    component: any,
    props = {},
    text = '',
    wrapperClass?: any,
    fieldClass?: any,
) => (
    <div className={wrapperClass}>
        <label htmlFor={text} className={classes.label}>{text}</label>
        <Field
            component={component}
            name={name}
            placeholder={placeholder}
            validate={validators}
            {...props}
            className={fieldClass}
        />
    </div>
);