import { ToDo } from "../../../App.tsx";
import "./ToDoBox.css";

type ToDoProps = {
    task: ToDo;
};

export default function ToDoBox({ task }: ToDoProps) {
    return (
        <div className="todobox-container">
            <h3>{task.description}</h3>
        </div>
    );
}
