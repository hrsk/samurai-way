import { connect } from "react-redux"
import { Dispatch } from "redux"
import { NavbarItemType } from "../../types"
import { Navbar } from "./Navbar"
import { AppStateType } from "../../store/redux-store"


export const NavbarConnectComponent = (props: ConnectedPropsType) => {
    return <Navbar navbarItems={props.navbarItems} />
}

type MapStateToPropsType = {
    navbarItems: NavbarItemType[]
}

type MapDispatchToPropsType = {
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    debugger
    return {
        navbarItems: state.navbar.navbarItems,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {

    }
}

export type ConnectedPropsType = MapDispatchToPropsType & MapStateToPropsType

export const NavbarContainer = connect(mapStateToProps)(NavbarConnectComponent)
