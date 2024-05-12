import { FormDataType } from "./LoginReduxForm"
import { LoginReduxForm } from "./LoginReduxForm"

type PropsType = {
    onSubmit: (values: FormDataType) => void
}

export const Login = (props: PropsType) => {

    return <LoginReduxForm {...props} onSubmit={props.onSubmit} />

}
