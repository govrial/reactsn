import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";



let store = {
  _callSubscriber() {
      
  },

  subcribe(observer) {
    this._callSubscriber = observer;
    },


_state: {
   

    profilePage: {
      newPostText: 'itkam',
      postsData: [
        { id: 1, message: 'Hello my dear friend', name: 'Dima K', likecounts: '25' },
        { id: 2, message: 'Oh shit, here we go again', name: 'Danya Kondrulin', likecounts: '251' },
        { id: 3, message: 'Omaevu de shinderu', name: 'Vlad Kondrulin', likecounts: '456' },
      ]
    },

    dialogsPage: {
      changeTextArea: 'kav',
      dialogsData: [
        { id: 1, name: 'Martin' },
        { id: 2, name: 'Danya' },
        { id: 3, name: 'Andrey' },
        { id: 4, name: 'Dima' },
      ],

      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are u?' },
        { id: 3, message: 'Whats Up' },
        { id: 4, message: 'yoman' },

      ]
    },

    sidebar: {}
  },

  getState() {
    return this._state
  },


  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

    
  }



}





export default store;