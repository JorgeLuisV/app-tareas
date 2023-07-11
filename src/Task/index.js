import './MainTask.css'
import { FaCheck, FaXmark } from "react-icons/fa6";

function Task(props) {
    return (
      <li className="TodoItem">
        <span
          className={`check-icon ${props.completed && 'checked'}`}
          onClick={props.toggleTask}
        >
          <FaCheck className='check'/>
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <FaXmark
          className="Icon Icon-delete"
          onClick={props.deleteTask}
        />
      </li>
    )
}

export { Task }