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
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollow(userId))
//         },
//         showMore: (users: ResponseUserType[]) => {
//             dispatch(showMore(users))
//         },
//         setUsers: (users: ResponseUserType[], totalCount: number) => {
//             dispatch(setUsers(users, totalCount))
//         },
//         selectPage: (pageNumber: number) => {
//             dispatch(selectPage(pageNumber))
//         },
//         showPreloader: (preloader: boolean) => {
//             dispatch(showPreloader(preloader))
//         },
//     }
// }

export type UsersPropsType = ConnectedProps<typeof connector>
const connector = connect(mapStateToProps, {follow, unfollow, showMore, setUsers, selectPage, showPreloader, showDisabledButton, getUsers})
export const UsersContainer = connector(UsersClassComponent)
