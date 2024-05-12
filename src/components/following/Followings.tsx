import { Preloader } from "../../features/Preloader"
import { Pagination } from "../common/pagination/Pagination"
import { User } from "../users/User"
import { ConnectedPropsType } from "./FollowingContainer"
import classes from './Followings.module.css'

interface PropsType extends ConnectedPropsType {
    setCurrentPage: (pageNumber: number) => void
    subscribe: (userId: number) => void
    unsubscribe: (userId: number) => void
}

export const Followings = (props: PropsType) => {
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
                        {props.followings.map(user => <User user={user}
                            isFollow={props.isFollow}
                            subscribe={props.subscribe}
                            unsubscribe={props.unsubscribe} />
                        )}
                    </div>
            }
        </div>
    )
}