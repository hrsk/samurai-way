import { Field, InjectedFormProps, formValueSelector, reduxForm, submit } from "redux-form";
import { ConnectedPropsType } from "./LoginContainer";
// import { ConnectedPropsType } from "./LoginContainer";

interface PropsType extends Partial<InjectedFormProps>, ConnectedPropsType {
    onSubmit: (values: any) => void
}

// interface PropsType extends ConnectedPropsType {
//     onSubmit: (values: any) => void
// }

export type valuesType = {
    email: string
    password: string
    rememberMe: boolean
}


export const LoginForm = (props: PropsType) => {

    const selector = formValueSelector('loginForm')

    const { handleSubmit, onSubmit } = props

    const { email, password, rememberMe }: valuesType = selector('email', 'password', 'rememberMe')

    // // console.log(email, password, rememberMe)
    const values = { email: email, password: password, rememberMe: rememberMe }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Email">Email</label>
                <Field name="email" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <Field name="password" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="rememberMe">RememberMe</label>
                <Field name="rememberMe" component="input" type="checkbox" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
