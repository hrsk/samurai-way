import { InjectedFormProps } from "redux-form";
import { required } from "../../utils/validators";
import { Button } from "../common/button/Button";
import { Input, createField } from "../common/forms_control/FormsControls";
import { ConnectedPropsType } from "./LoginContainer";
import classes from './LoginForm.module.css';
import { CustomInput } from "../common/forms_control/FormsControls";
import { CustomButton } from "../common/custom_button/CustomButton";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

interface PropsType extends ConnectedPropsType { }

export const LoginForm = (props: InjectedFormProps<FormDataType> & PropsType) => {

    // const passwordLength = passwordLengthValidator(8, 16)

    const [rememberMe, setRememberMe] = useState<boolean>(false);


    const onClickCancel = () => {
    };

    const onChangeCheckbox = () => {

    }

    const onChangeHandler = () => {

    }

    return (
        <form className={classes.contentWrapper} onSubmit={props.handleSubmit}>
            <div className={classes.box}>
                <h3 className={classes.textCenter}>login</h3>
                {/* {serverError && <span style={{ color: 'red' }}>{serverError}</span>} */}
                {/* {networkError && <span style={{ color: 'red' }}>{networkError}</span>} */}
                <div>
                    {
                        props.errorMessages && <span style={props.errorMessages && { color: 'crimson' }}>{props.errorMessages[0]}</span>
                    }
                </div>
                <div className={classes.fieldsWrapper}>
                    {createField(
                        '',
                        'email',
                        [required],
                        CustomInput,
                        {},
                        'Email:',
                        classes.wrapperStyle
                    )}
                    {createField(
                        '',
                        'password',
                        [required],
                        CustomInput,
                        { type: 'password' },
                        'Password:',
                        classes.wrapperStyle
                    )}
                    {createField(
                        '',
                        'rememberMe',
                        [],
                        CustomInput,
                        { type: 'checkbox' },
                        'Remember me:',
                        classes.wrapperStyle,
                    )}
                </div>
                <Button type='submit'>sign in</Button>
                <div className={classes.link}>
                    <p>
                        {' '}
                        Do not have an account?{' '}
                        <NavLink to={'/'} onClick={onClickCancel}>
                            Sign Up
                        </NavLink>{' '}
                    </p>
                </div>
                <div className={classes.link}>
                    <NavLink to={'/'} onClick={onClickCancel}>
                        Forgot Password
                    </NavLink>
                </div>
            </div>
        </form>
        // <form onSubmit={props.handleSubmit}>
        //     <div>
        //         {
        //             props.errorMessages && <span style={props.errorMessages && { color: 'crimson' }}>{props.errorMessages[0]}</span>
        //         }
        //     </div>
        //     {createField(
        //         'Email',
        //         'email',
        //         [required],
        //         Input,
        //         {},
        //         'Email:',
        //         classes.wrapperStyle
        //     )}

        //     {createField(
        //         'Password',
        //         'password',
        //         [required],
        //         Input,
        //         {},
        //         'Password:',
        //         classes.wrapperStyle
        //     )}

        //     {createField(
        //         'Password',
        //         'rememberMe',
        //         [],
        //         Input,
        //         { type: 'checkbox' },
        //         'Remember me:',
        //         classes.wrapperStyle,
        //     )}
        //     {/* <div>
        //         <label htmlFor="Email">Email</label>
        //         <Field name="email" validate={[required]} component={LoginInput} type="text" placeholder="Email" />
        //     </div>
        //     <div>
        //         <label htmlFor="Password">Password</label>
        //         <Field name="password" validate={[required]} component={LoginInput} type="text" placeholder="Password" />
        //     </div>
        //     <div>
        //         <label htmlFor="rememberMe">RememberMe</label>
        //         <Field name="rememberMe" component={LoginInput} type="checkbox" />
        //     </div> */}
        //     <Button type="submit">Submit</Button>
        // </form>
    );
};
