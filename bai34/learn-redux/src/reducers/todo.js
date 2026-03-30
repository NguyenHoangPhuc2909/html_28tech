const init = [
  {
    id: 1,
    content: "Cong viec 1",
    complete: true
  },
  {
    id: 2,
    content: "Cong viec 2",
    complete: false
  },
  {
    id: 3,
    content: "Cong viec 3",
    complete: false
  }
];

const todoReducer = (state = init, action) => {
  let newState = [...state];
  switch (action.type) {
    case "CREATE_TODO":
      newState = [
        ...newState,
        {
          id: Date.now(),
          content: action.content,
          complete: false
        }
      ]
      return newState;
    case "COMPLETE_TODO":
      newState = newState.map(item => item.id === action.id ? {
        ...item, complete: true
      } : item);
      return newState;
    case "UNDO_TODO":
      newState = newState.map(item => item.id === action.id ? {
        ...item, complete: false
      } : item);
      return newState;
    case "REMOVE_TODO":
      newState = newState.filter(item => item.id !== action.id);
      return newState;
    default:
      return state;
  }
}

export default todoReducer;