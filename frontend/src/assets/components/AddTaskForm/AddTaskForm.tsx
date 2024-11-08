import {FormEvent, useState} from "react";

type AddTaskFormProps = {
    addData: (description: string) => void;
};

export default function AddTaskForm(props: AddTaskFormProps) {
    const {addData} = props;

    const [description, setDescription] = useState<string>("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (description) {
            addData(description);
            setDescription("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}
