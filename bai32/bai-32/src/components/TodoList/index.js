import { useReducer } from "react";
const initialState = [
  {
    id: 1,
    content: "Chieu hoc ReactJS"
  },
  {
    id: 2,
    content: "Toi hoc MobileNet"
  },
  {
    id: 3,
    content: "Khuya setting VDK"
  }
];

const reducer = (state, action) => {
  //action: create, delete
  switch(action.type) {
    case 'CREATE':
      return [
        ...state,
        {
          id: Date.now(),
          content: action.value
        }
      ];

      default:
        return state;
  }
}
  
function ToDo() {
  const [toDos, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
  e.preventDefault();
  const value = e.target.elements.inputToDo.value;
  if(value) {
    dispatch({
      type: "CREATE",
      value: value
    });
  }
}
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input name="inputToDo"/>
      <button>Them ToDo</button>
    </form>
      {toDos.length > 0 && (
        <ul>
          {toDos.map((item) => (
            <li key={item.id}>{item.content}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ToDo;