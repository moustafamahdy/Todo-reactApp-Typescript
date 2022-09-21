import React, { FC, useState } from "react";
import { TodoListItem } from "./TodoListItem";
import { Box, List } from "@mui/material";

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  deleteTodo(index: number): void;
  editing?: number[];
  setEditing?: (index: number) => void;
  filterState: "All" | "Done" | "Todo";
  handleEditText?: (index: number, text: string) => void;
}

export const TodoList: FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
  editing,
  setEditing,
  filterState,
  handleEditText,
}) => {
  const [dense, setDense] = useState(false);

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignText: "center",
        }}
      >
        <List
          dense={dense}
          sx={{
            width: "700px",
            boxShadow: "0px 0px 26px rgb(237 233 233 / 87%)",
            alignItems: "center",
          }}
        >
          {todos.map((todo, index) => {
            if (
              filterState === "All" ||
              (filterState === "Done" && todo.complete) ||
              (filterState === "Todo" && !todo.complete)
            )
              return (
                <TodoListItem
                  key={todo.text}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  index={index}
                  editing={editing?.includes(index)}
                  setEditing={setEditing}
                  handleEditText={handleEditText}
                />
              );
          })}
        </List>
      </Box>
    </>
  );
};
