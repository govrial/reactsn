import React from 'react';
import Header from './header';
import * as Axios from 'axios';
import { connect } from 'react-redux';
import {getAuthUserData, logout} from '../../redux/auth_reducer';
import { authAPI } from '../../api/Api';


class HeaderContainer extends React.Component {

    componentDidMount() {
      
     this.props.getAuthUserData();
    }

    render () {
      return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});
export default connect(mapStateToProps, {getAuthUserData, logout}) (HeaderContainer);
