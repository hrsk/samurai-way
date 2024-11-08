import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {getUserProfile} from "../reducers/profile-reducer";
import {authMe} from "../reducers/auth-reducer";
import {Navbar} from "./Navbar";

type MapStateToPropsType = {
    id: number | null
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        id: state.authorizationReducer.data.id,
        isAuth: state.authorizationReducer.isAuth,
    }
}


export type NavbarPropsType = ConnectedProps<typeof connector>


const connector = connect(mapStateToProps, {authMe, getUserProfile})
export const NavbarContainer = connector(Navbar)