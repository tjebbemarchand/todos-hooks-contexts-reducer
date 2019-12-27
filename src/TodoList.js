import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList({ todos, toggleTodo, editTodo, removeTodo }) {
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) => (
                        <React.Fragment key={todo.id}>
                            <Todo
                                key={todo.id}
                                {...todo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                                removeTodo={removeTodo}
                            />
                            {i < todos.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        );
    return null;
}

export default TodoList;
