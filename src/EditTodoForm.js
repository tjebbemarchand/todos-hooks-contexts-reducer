import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { TodosContext } from "./contexts/todos.context";

function EditTodoForm({ id, task, toggleIsEditing }) {
    const [value, handleChange, reset] = useInputState(task);
    const { editTodo } = useContext(TodosContext);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleIsEditing();
            }}
            style={{ marginLeft: "1rem", width: "100%" }}
        >
            <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
        </form>
    );
}

export default EditTodoForm;
