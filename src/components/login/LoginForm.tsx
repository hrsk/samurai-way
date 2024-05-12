import classes from './LoginForm.module.css';
import { ChangeEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { validateEmail } from "../../helpers/authorization/emailValidator";
import { validatePassword } from "../../helpers/authorization/passwordValidator";
import { useInput } from "../../hooks/useInput";
import { useAppDispatch } from "../../store/redux-store";
import { CustomButton } from "../common/custom_button/CustomButton";
import { CustomInput } from "../common/custom_input/CustomInput";
import { loginUser, setError } from "../reducers/authReducer";

export const LoginForm = () => {

    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const { value: email, onChange: handleEmail, clearValue: clearEmail } = useInput('');

    const {
        value: password,
        onChange: handlePassword,
        clearValue: clearPassword,
    } = useInput('');

    const dispatch = useAppDispatch();

    const onClickCancel = () => {
        clearEmail();
        clearPassword();
    };

    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) =>
        setRememberMe(e.currentTarget.checked);

    const delay = 3000;

    const onSubmit = () => {

        if (validateEmail(email) && validatePassword(password)) {
            dispatch(loginUser(email, password, rememberMe, true));
            clearEmail();
            clearPassword();
        }

        if (!validateEmail(email) || !validatePassword(password)) {
            dispatch(setError('Invalid data'));
            setTimeout(() => {
                dispatch(setError(''));
            }, delay);
        }
    };

    return (
        <div className={classes.contentWrapper}>
            <div className={classes.box}>
                <span className={classes.textCenter}>login</span>
                <CustomInput
                    placeholder="Email"
                    onChange={handleEmail}
                    value={email}
                    type="email"
                    name="email"
                />
                <CustomInput
                    placeholder="Password"
                    onChange={handlePassword}
                    value={password}
                    type="password"
                    name="password"
                />
                <div className={classes.inputContainer}>
                    <label className={classes.container} htmlFor="inputCheckbox">
                        Remember Me
                        <input
                            id="inputCheckbox"
                            type="checkbox"
                            required={false}
                            name="checkbox"
                            checked={rememberMe}
                            onChange={onChangeCheckbox}
                        />
                        <span className={classes.checkmark} />
                    </label>
                </div>
                <div className={classes.button}>
                    <CustomButton onClick={onSubmit}>sign in</CustomButton>
                </div>
                <div className={classes.link}>
                    <p>
                        {' '}
                        Do not have an account?{' '}
                        <NavLink to={'/sign_up'} onClick={onClickCancel}>
                            Sign Up
                        </NavLink>{' '}
                    </p>
                </div>
                <div className={classes.link}>
                    <NavLink to={'/forgot_password'} onClick={onClickCancel}>
                        Forgot Password
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
