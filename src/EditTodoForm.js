import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";

function EditTodoForm({ id, task, toggleIsEditing, editTodo }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleIsEditing();
            }}
        >
            <TextField margin="normal" value={value} onChange={handleChange} fullWidth />
        </form>
    );
}

export default EditTodoForm;
