import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, unfollow} from "../../redux/users-reducer";
import Preloader from "../../assets/image/preloader";
import { toggleFollowingProgress } from "../../redux/users-reducer";
import { getCurrentPage, getFollowingInProgres, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";
import { compose } from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users 
                totalUsersCount={this.props.totalUsersCount}    
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                followingInProgres={this.props.followingInProgres}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgres: getFollowingInProgres(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers
    })
)(UsersContainer)