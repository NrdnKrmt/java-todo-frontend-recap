import { useNavigate } from "react-router-dom";
import { ToDo } from "../../../App.tsx";
import "./ToDoBox.css";

type ToDoProps = {
    task: ToDo;
    deleteData: (id: string) => void
};

export default function ToDoBox(props: ToDoProps) {
    const {task, deleteData} = props;
    const navigate = useNavigate();

    const handleShow = () => {
        if (task.id) {
            navigate(`/details/${task.id}`);
        }
    };


    const handleDelete = () => {
        if (task.id) {
            deleteData(task.id);
        }
    }

    return (
        <div className="todobox-container">
            <h3>{task.description}</h3>
            <button onClick={handleShow} className="button-show">Show</button>
            <button onClick={handleDelete} className="button-delete">Delete</button>
        </div>
    );
}
