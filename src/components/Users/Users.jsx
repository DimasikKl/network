import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({ currentPage, onPageChanged, totalItemsCount, pageSize, users, ...props}) => {
    return (
        <div>
            <Paginator 
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalItemsCount}
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