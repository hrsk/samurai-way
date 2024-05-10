import { ChangeEvent, ReactNode } from 'react';
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
        <div className={classes.children}>{children}</div>
        // <div className={hasError && classes.formControlError}>
        //     <div className={classes.children}>{children}</div>
        //     <div>{hasError && <span>{meta.error}</span>}</div>
        // </div>
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

interface CustomInputPropsType extends PropsType {
    labelText?: string
};

export const CustomInput = (props: CustomInputPropsType) => {

    const { input, labelText, ...restProps } = props;

    return (
        <FormControl {...props}>
            <label htmlFor={labelText} className={classes.label}>
                <input {...input} {...restProps} />
            </label>
        </FormControl>
    )
}

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