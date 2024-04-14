import { Field, InjectedFormProps } from "redux-form";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
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
