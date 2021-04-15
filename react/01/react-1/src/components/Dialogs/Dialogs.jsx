import React from 'react';
import s from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import Dialog_User from './Dialog_User/Dialog_User';
import Message from './Messages/Messages';
import { addNewMessage } from '../../redux/state';
import { onMessageChangeActionCreator, addMessageActionCreator } from '../../redux/dialogs_reducer';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormControls/FormControls';
import { required, maxLengthCreator } from '../../Utils/Validators/validators';



const Dialogs = (props) => {

    

   
    let addNewMessage = (values) => {
        
        props.addMessageAction(values.newMessageBody)
    }
    

    let newMessage = React.createRef();



    let dialogsElements = props.dialogsData.map((user) => <Dialog_User name={user.name} key={user.id} id={user.id} />)
    let messagesElements = props.messagesData.map((message) => <Message message={message.message} key={message.id} />)

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (

        <div className={s.dialogs}>
            <div className={s.dialog_User}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
            {messagesElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

const maxLength100 = maxLengthCreator(100); 

const AddMessageForm = (props) => {
    
    return (

        <form onSubmit={props.handleSubmit}>
       
      
        <div>
            <Field component={Textarea} validate={[required,maxLength100 ]} name={"newMessageBody"}/>
            
        </div>
        <div>
            <button >Отправить</button>
        </div>
   
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);


export default Dialogs;