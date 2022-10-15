import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { UserType } from '../../types/types'

type PropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    users: Array<UserType>
    followingInProgres: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div>
            <Paginator 
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {
                users.map(u => <User
                                    user={u}
                                    followingInProgres={props.followingInProgres}
                                    key={u.id}
                                    unfollow={props.unfollow}
                                    follow={props.follow}
                                />
                )
            }
        </div>
    )
}

export default Users;