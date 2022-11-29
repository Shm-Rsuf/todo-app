import { FiEdit, FiTrash } from "react-icons/fi";

const TaskItem = ({ task }) => {
  return (
    <div className="task-item flex justify-between items-center bg-gray-800 p-4 rounded hover:bg-gradient-to-r hover:from-teal-800 hover: to-gray-700 duration-300 group">
      <div className="task-item-left flex gap-2">
        <span>
          <input className="accent-teal-500" type="checkbox" />
        </span>
        <p className="group-hover:text-teal-500">{task.text}</p>
      </div>
      <div className="task-item-right flex gap-2 items-center">
        <span>
          <FiEdit className="text-gray-500 hover:text-teal-500 cursor-pointer duration-300" />
        </span>
        <span>
          <FiTrash className="text-gray-500 hover:text-red-500 cursor-pointer duration-300" />
        </span>
      </div>
    </div>
  );
};

export default TaskItem;
