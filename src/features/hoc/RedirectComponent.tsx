import { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../store/redux-store";

type mapStateToPropsType = {
    isAuth: boolean,
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

type ConnectedPropsType = ReturnType<typeof Object>

interface TProps extends ConnectedPropsType { }

export const withAuthRedirect = <T extends TProps>(Component: ComponentType<T>) => {

    const RedirectComponent = (props: mapStateToPropsType) => {

        const { isAuth, ...restProps } = props;

        if (!isAuth) return <Redirect to={'/login'}
        />

        return <Component {...restProps as T} />
    }
    return connect(mapStateToProps)(RedirectComponent);
}
