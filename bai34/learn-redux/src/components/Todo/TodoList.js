import { useDispatch, useSelector } from 'react-redux';
import { MdDone } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { CiUndo } from "react-icons/ci";
import { complete, undo, remove } from '../../actions/todo';

function TodoList() {
  const todoList = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();

  const handleComplete = (id) => {
    dispatch(complete(id));
  };

  const handleUndo = (id) => {
    dispatch(undo(id));
  };

  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      {todoList && (
        <ul className="todo__list">
          {todoList.map(item => (
            <li className='todo__item' key={item.id}>
              <span className={'todo__content ' + (item.complete && 'todo__content--completed')}>{item.content}</span>
              {item.complete ? (
                <button type='button' onClick={() => handleUndo(item.id)} aria-label="Hoàn tác Todo"><CiUndo /></button>
              ) : (
                <button type='button' onClick={() => handleComplete(item.id)} aria-label="Hoàn thành Todo"><MdDone /></button>
              )}
              <button type='button' onClick={() => handleDelete(item.id)} aria-label="Xoá todo"><TiDeleteOutline /></button>
            </li>
          ))}
        </ul >
      )
      }
    </>
  );
}

export default TodoList;