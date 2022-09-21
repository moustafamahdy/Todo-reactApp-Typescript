import { Stack } from "@mui/material";
import React, { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { DeleteAllBtn } from "./components/DeleteAllBtn";
import { TodoFilter } from "./components/TodoFilter";
import { TodoList } from "./components/TodoList";
import { TodoTitle } from "./components/TodoTitle";

const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "workout", complete: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filterState, setFilterState] = useState<"All" | "Done" | "Todo">(
    "All"
  );
  const [editingIndexes, setEditingIndexes] = useState<number[]>([]);

  const toggleTodos: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
    // console.log(todos);
  };

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo.trim() !== "") {
      const updatedTodos = [...todos, { text: newTodo, complete: false }];
      setTodos(updatedTodos);
    }
  };

  const handleEditText: any = (index: number, text: string) => {
    setTodos([
      ...todos.map((todo, idx) => {
        if (index === idx) {
          return { ...todo, text };
        }
        return todo;
      }),
    ]);
  };

  const toggleEditing = (index: number) => {
    if (editingIndexes.includes(index)) {
      setEditingIndexes(editingIndexes.filter((idx) => idx !== index));
    } else setEditingIndexes([...editingIndexes, index]);
  };

  const deleteTodo: any = (index: number) => {
    // console.log(index);
    const removedTodos = [...todos.filter((todo, i) => i !== index)];
    setTodos(removedTodos);
    // console.log(todos);
  };

  const deleteAllTodos: any = () => {
    setTodos([]);
  };

  const deleteAllDoneTodos: any = () => {
    const unDoneTodos = todos.filter((todo) => todo.complete === false);
    setTodos(unDoneTodos);
  };

  return (
    <>
      <TodoTitle title="Todo Input" />
      <AddTodoForm addTodo={addTodo} />
      <TodoTitle title="Todo List" />
      <TodoFilter
        filterTodos={(newState) =>
          setFilterState(newState as "All" | "Done" | "Todo")
        }
      />
      <TodoList
        todos={todos}
        filterState={filterState}
        toggleTodo={toggleTodos}
        deleteTodo={deleteTodo}
        editing={editingIndexes}
        setEditing={toggleEditing}
        handleEditText={handleEditText}
      />
      <Stack
        direction="row"
        spacing={2}
        sx={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DeleteAllBtn text="Delete All Todos" handleSubmit={deleteAllTodos} />
        <DeleteAllBtn
          text="Delete All Done Todos"
          handleSubmit={deleteAllDoneTodos}
        />
      </Stack>
    </>
  );
}

export default App;
