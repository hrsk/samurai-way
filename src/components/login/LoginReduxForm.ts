import { reduxForm } from "redux-form";
import { LoginForm } from "./LoginForm";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginReduxForm = reduxForm<FormDataType, any, any>({
    form: 'loginForm',
})(LoginForm)
