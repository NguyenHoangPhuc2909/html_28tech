import { IoAddCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { createTodo } from "../../actions/todo";
import { useRef } from "react";

function TodoInput() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.content.value !== "") {
      dispatch(createTodo(e.target.elements.content.value));
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }
  return (
    <>
      <div className="todo__input">
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} name="content" />
          <button type="submit" aria-label="Thêm todo">
            <IoAddCircleOutline />
          </button>
        </form>
      </div>
    </>
  );
}
export default TodoInput;