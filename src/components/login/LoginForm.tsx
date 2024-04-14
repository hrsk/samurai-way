import { Field, InjectedFormProps } from "redux-form";
import { passwordLengthValidator, required } from "../../utils/validators";
import { LoginInput } from "./LoginInput";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    const passwordLength = passwordLengthValidator(8, 16)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="Email">Email</label>
                <Field name="email" validate={[required]} component={LoginInput} type="text" placeholder="Email" />
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <Field name="password" validate={[required, passwordLength]} component={LoginInput} type="text" placeholder="Password" />
            </div>
            <div>
                <label htmlFor="rememberMe">RememberMe</label>
                <Field name="rememberMe" component={LoginInput} type="checkbox" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
