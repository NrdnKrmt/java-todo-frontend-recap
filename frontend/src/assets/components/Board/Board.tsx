import "./Board.css"
import {ToDo} from "../../../App.tsx"
import ToDoBox from "../ToDoBox/ToDoBox.tsx";

type BoardProps = {
    toDo: ToDo[];
}

export default function Board(props: BoardProps) {
    const toDo = props.toDo;

    return (
        <div className="board-container">
            <div className="open">
                <h2>OPEN</h2>
                    {toDo
                        .filter((todo) => todo.status === "OPEN")
                        .map((todo) => (
                            <ToDoBox key={todo.id} task={todo} />
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
    );
};