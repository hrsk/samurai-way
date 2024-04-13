import { reduxForm } from "redux-form";
import { LoginForm } from "./LoginForm";

export const LoginReduxForm = reduxForm<any, any, any>({
    form: 'loginForm',
})(LoginForm)
