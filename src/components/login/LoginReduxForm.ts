import { reduxForm } from "redux-form";
import { FormDataType, LoginForm } from "./LoginForm";

export const LoginReduxForm = reduxForm<FormDataType, any, any>({
    form: 'loginForm',
})(LoginForm)
