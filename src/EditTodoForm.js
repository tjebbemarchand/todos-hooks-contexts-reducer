import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./contexts/todos.context";

function EditTodoForm({ id, task, toggleIsEditing }) {
    const [value, handleChange, reset] = useInputState(task);
    const dispatch = useContext(DispatchContext);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                dispatch({ type: "EDIT", id, newTask: value });
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
