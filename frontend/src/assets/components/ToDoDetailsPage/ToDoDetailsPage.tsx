import "./ToDoDetailsPage.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {ToDo} from "../../../App.tsx";

export default function ToDoDetailsPage() {
    const {id} = useParams();
    const [toDo, setToDo] = useState<ToDo>();

    useEffect(() => {
        if (id) {
            axios
                .get(`/api/todo/${id}`)
                .then((response) => {
                    setToDo(response.data);
                })
        }
    }, [id]);

    return (
        <div className="task-details-container">
            <h2>Task Details</h2>
            {toDo && (
                <>
                    <h3>{toDo.description}</h3>
                    <p>Status: {toDo.status}</p>
                </>
            )}
        </div>
    );
}
