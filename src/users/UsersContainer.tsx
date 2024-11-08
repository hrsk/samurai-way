import {connect, ConnectedProps} from 'react-redux'
import {
    follow,
    getUsers,
    selectPage,
    setUsers,
    showDisabledButton,
    showMore,
    showPreloader,
    unfollow,
} from '../reducers/users-reducer'
import {AppStateType} from '../redux/redux-store'
import {UsersClassComponent} from "./UsersClassComponent";

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.findUsersPage.users,
        totalCount: state.findUsersPage.totalCount,
        error: state.findUsersPage.error,
        currentPage: state.findUsersPage.currentPage,
        usersPerPage: state.findUsersPage.usersPerPage,
        isLoading: state.findUsersPage.isLoading,
        isDisabled: state.findUsersPage.isDisabled,
    }
}

export type UsersPropsType = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {follow, unfollow, showMore, setUsers, selectPage, showPreloader, showDisabledButton, getUsers})
export const UsersContainer = connector(UsersClassComponent)
