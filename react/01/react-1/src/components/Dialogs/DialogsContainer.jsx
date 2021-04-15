import React from 'react';
import { onMessageChangeActionCreator, addMessageActionCreator } from '../../redux/dialogs_reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../redux/profile_reducer';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';




let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        dialogsData: state.dialogsPage.dialogsData,
     
    }
}

let mapDisputchToProps = (dispatch) => {
    return {
        addMessageAction: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        },
        
    }
}

compose(
    connect(mapStateToProps, mapDisputchToProps),
    withAuthRedirect
)(Dialogs)



export default compose(
    connect(mapStateToProps, mapDisputchToProps),
    withAuthRedirect
)(Dialogs);