import "./Board.css"
import {ToDo} from "../../../App.tsx"
import ToDoBox from "../ToDoBox/ToDoBox.tsx";
import AddTaskForm from "../AddTaskForm/AddTaskForm.tsx";

type BoardProps = {
    toDo: ToDo[];
    deleteData: (id: string) => void
    addData: (description: string) => void;
}

export default function Board(props: BoardProps) {
    const {toDo, deleteData, addData} = props;

    return (
        <div className="board-container">
            <div className="board-todo-container">
                <div className="open">
                    <h2>OPEN</h2>
                    {toDo
                        .filter((todo) => todo.status === "OPEN")
                        .map((todo) => (
                            <ToDoBox key={todo.id} task={todo} deleteData={deleteData}/>
                        ))}
                </div>
                <div className="in_progress">
                    <h2>IN PROGRESS</h2>
                    ...
                </div>
                <div className="done">
                    <h2>DONE</h2>
                    ...
                </div>
            </div>
            <AddTaskForm addData={addData}/>
        </div>
    );
};