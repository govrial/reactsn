import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Common/FormControls/FormControls';
import { required } from '../../Utils/Validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Redirect } from 'react-router-dom';
import s from "./../Common/FormControls/FormControl.module.css"


const LoginForm = (props) => {
    return <div>
     
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={"login"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type="password" placeholder={"password"} name={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                 <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]}/> Запомнить меня
            </div>
           { props.error && <div className={s.formSummaryError}>
                    {props.error}
            </div>
            }
            <div>
                <button>Войти</button>
            </div>

        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit =(formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={`/profile`}/>
    }

    return <div>
        <h1>Login</h1>
       <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);