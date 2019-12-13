const initialState = {
  name: ''
};

const sayHelloReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAY_HELLO':
      return {
        ...state,
        name: action.payload
      }
  
    default:
      return state;
  }
}

export default sayHelloReducer;