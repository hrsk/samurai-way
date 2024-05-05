import { NavLink } from "react-router-dom"
import { Button } from "../common/button/Button"
import classes from './SignIn.module.css'
import { CustomInput } from "../common/custom_input/CustomInput"
import { ChangeEvent, useState } from "react"
import { CustomButton } from "../common/custom_button/CustomButton"

export const SignIn = () => {

    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');


    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) =>
        setRememberMe(e.currentTarget.checked)

    const onClickCancel = () => {
    };

    const onSubmit = () => { };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div className={classes.contentWrapper}>
            <div className={classes.box}>
                <span className={classes.textCenter}>login</span>
                {/* {serverError && <span style={{ color: 'red' }}>{serverError}</span>} */}
                {/* {networkError && <span style={{ color: 'red' }}>{networkError}</span>} */}
                <CustomInput
                    placeholder="Email"
                    onChange={onChangeHandler}
                    value={'email'}
                    type="email"
                    name="email"
                />
                <CustomInput
                    placeholder="Password"
                    onChange={onChangeHandler}
                    value={'password'}
                    type="password"
                    name="password"
                />
                {/* <div className={classes.inputContainer}> */}
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
                {/* </div> */}
                <CustomButton onClick={onSubmit}>Sign In</CustomButton>
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
        </div>
    )
}