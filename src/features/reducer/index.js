const initialState = {
  ToDo: [],
  ToDoComplete: []
}

function rootReducer(state = initialState, action){
  if(action.type === "ADD_TODO"){
    return {
      ToDoComplete: state.ToDoComplete.filter(todo => todo!== action.payload),
      ToDo: state.ToDo.concat(action.payload)
    }
  }
  if(action.type === "COMPLETE_TODO"){
    return{
      ToDo: state.ToDo.filter(todo => todo !== action.payload),
      ToDoComplete: state.ToDoComplete.concat(action.payload)
    }
  }
  if(action.type === "REMOVE_TODO"){
    return{
      ...state,
      ToDoComplete: state.ToDoComplete.filter(todo => todo !== action.payload)
    }
  }
  return state;
}

export default rootReducer;