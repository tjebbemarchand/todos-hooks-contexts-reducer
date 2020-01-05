import React, { useContext } from "react";
import EditTodoForm from "./EditTodoForm";
import useToggleState from "./hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { TodosContext } from "./contexts/todos.context";

function Todo({ id, task, completed }) {
    const { dispatch } = useContext(TodosContext);

    const [isEditing, toggleIsEditing] = useToggleState(false);
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (
                <EditTodoForm id={id} task={task} toggleIsEditing={toggleIsEditing} />
            ) : (
                <>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onClick={() => dispatch({ type: "TOGGLE", id })}
                    />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Delete"
                            onClick={() => dispatch({ type: "REMOVE", id })}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

export default Todo;
