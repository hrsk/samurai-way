import { ChangeEvent } from 'react';
import classes from './CustomInput.module.css';

type PropsType = {
    placeholder?: string
    type: string
    name?: string
    className?: string
    value?: string
    checked?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    labelText?: string
};

export const CustomInput = (props: PropsType) => {

    const { placeholder, type, name, className, value, onChange, checked, labelText } = props;

    return (
        <div className={classes.inputContainer}>
            <label htmlFor={labelText} className={classes.label}>
                <input
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    className={className}
                    value={value}
                    onChange={onChange}
                    checked={checked}
                />
            </label>
        </div>
    )
}
