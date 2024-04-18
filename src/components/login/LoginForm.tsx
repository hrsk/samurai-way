import { Field, InjectedFormProps } from "redux-form";
import { required } from "../../utils/validators";
import { LoginInput } from "./LoginInput";
import { ConnectedPropsType } from "./LoginContainer";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

interface PropsType extends ConnectedPropsType { }

export const LoginForm = (props: InjectedFormProps<FormDataType> & PropsType) => {

    // const passwordLength = passwordLengthValidator(8, 16)

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {
                    props.errorMessages && <span style={props.errorMessages && { color: 'crimson' }}>{props.errorMessages[0]}</span>
                }
            </div>
            <div>
                <label htmlFor="Email">Email</label>
                <Field name="email" validate={[required]} component={LoginInput} type="text" placeholder="Email" />
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <Field name="password" validate={[required]} component={LoginInput} type="text" placeholder="Password" />
            </div>
            <div>
                <label htmlFor="rememberMe">RememberMe</label>
                <Field name="rememberMe" component={LoginInput} type="checkbox" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
