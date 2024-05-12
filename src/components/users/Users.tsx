import { Preloader } from "../../features/Preloader"
import { Pagination } from "../../components/common/pagination/Pagination"
import { User } from "./User"
import { ConnectedPropsType } from "./UsersContainer"
import classes from './Users.module.css'

interface PropsType extends ConnectedPropsType {
    setCurrentPage: (pageNumber: number) => void
    subscribe: (userId: number) => void
    unsubscribe: (userId: number) => void
}

export const Users = (props: PropsType) => {
    return (
        <div className={classes.wrapper}>
            <Pagination totalCount={props.totalCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
            />
            {
                props.isFetching
                    ? <Preloader />
                    : <div className={classes.grid}>
                        {props.users.map(user => <User user={user}
                            isFollow={props.isFollow}
                            subscribe={props.subscribe}
                            unsubscribe={props.unsubscribe} />
                        )}
                    </div>
            }
        </div>
    )
}