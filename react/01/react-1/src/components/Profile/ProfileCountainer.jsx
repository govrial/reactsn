import React from 'react';
import Profile from './profile';
import * as Axios from 'axios';
import { connect } from 'react-redux';
import {getUserProfile, getStatus, updateStatus} from '../../redux/profile_reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { userAPI } from '../../api/Api';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';





class ProfileContainer extends React.Component {

  
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId ) {
            userId = this.props.authorizedUserId; 
        }
        this.props.getUserProfile(userId);
       
            this.props.getStatus(userId);
        
        
    }
    

    render() {

        
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={ this.props.status } updateStatus={this.props.updateStatus}/>
                
            </div>
        )
    }
}




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId, 
    isAuth:state.auth.isAuth
   
})



export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
   // withAuthRedirect
)(ProfileContainer);

