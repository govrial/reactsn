const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';



let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
            let stateCopy = {...state,
              messagesData: [...state.messagesData]
            };
            

    switch(action.type) {
        case ADD_NEW_MESSAGE: 
            let newMessageText = action.newMessageBody;
            
            return {
              ...state,
              messagesData:[...state.messagesData, { id: 5, message: newMessageText }],
          };
        
       
        
        default: 
          return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => {
  return {
    type: ADD_NEW_MESSAGE, newMessageBody,
  }
}



export default dialogsReducer;