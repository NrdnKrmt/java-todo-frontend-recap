import { ToDo } from "../../../App.tsx";
import "./ToDoBox.css";

type ToDoProps = {
    task: ToDo;
    deleteData: (id: string) => void
};

export default function ToDoBox(props: ToDoProps) {
    const {task, deleteData} = props;

    const handleDelete = () => {
        if (task.id) {
            deleteData(task.id);
        }
    }

    return (
        <div className="todobox-container">
            <h3>{task.description}</h3>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
