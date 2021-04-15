import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { getUsers, follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFatching, toggleFollowingProgress } from '../../redux/users_reducer';
import * as Axios from 'axios';
import Preloader from '../Preloader/Preloader';
import { userAPI } from '../../api/Api';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
      
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        
            
        
    }


    render() {
                
       
        


        return <>  
        {this.props.isFatching ? 
        <Preloader/>
         : null}
        <Users setTotalUsersCount={this.props.setTotalUsersCount} 
        pageSize = {this.props.pageSize}
        pageNumber = {this.props.pageNumber}
        currentPage = {this.props.currentPage}
        onPageChanged = {this.onPageChanged}
        users = {this.props.users}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
        totalUsersCount = {this.props.totalUsersCount}
        toggleFollowingInProgress = {this.props.toggleFollowingProgress}
        followingInProgress = {this.props.followingInProgress}
        />
        </>
        

    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFatching: state.usersPage.isFatching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
       
   })
)(UsersContainer)