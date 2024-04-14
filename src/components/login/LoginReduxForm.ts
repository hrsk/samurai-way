import { reduxForm } from "redux-form";
import { FormDataType, LoginForm } from "./LoginForm";

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'loginForm',
})(LoginForm)
