import React, { FC, FormEvent } from "react";
import { Box, FormControl, Stack } from "@mui/material";
import { FilterBtn } from "./FilterBtn";

interface TodoFilterProps {
  filterTodos(phrase: string): void;
}

export const TodoFilter: FC<TodoFilterProps> = ({ filterTodos }) => {
  //   const [filteredTodos, setFilteredTodos] = useState(todos);
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    filterTodos(e.currentTarget.textContent ?? "All");
  };

  return (
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
      <FormControl
        sx={{
          width: "700px",
          boxShadow: "0px 0px 26px rgb(237 233 233 / 87%)",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            margin: "20px",
          }}
        >
          <FilterBtn text="All" handleSubmit={handleSubmit} />
          <FilterBtn text="Done" handleSubmit={handleSubmit} />
          <FilterBtn text="Todo" handleSubmit={handleSubmit} />
        </Stack>
      </FormControl>
      {/* <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />; */}
    </Box>
  );
};
