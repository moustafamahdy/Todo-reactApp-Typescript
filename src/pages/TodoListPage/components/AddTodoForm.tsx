import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import {
  Box,
  FormControl,
  InputAdornment,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

// function MyFormHelperText() {
//   const { focused } = useFormControl() || {};

//   const helperText = React.useMemo(() => {
//     if (focused) {
//       return "This field is being focused";
//     }

//     return "Helper text";
//   }, [focused]);

//   return <FormHelperText>{helperText}</FormHelperText>;
// }

export const AddTodoForm: FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };
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
        <FormControl
          sx={{
            width: "700px",
            boxShadow: "0px 0px 26px rgb(237 233 233 / 87%)",
            alignItems: "center",
          }}
        >
          <Stack
            direction="column"
            spacing={1}
            sx={{
              marginBottom: "20px",
            }}
          >
            <TextField
              placeholder="New Todo"
              id="input-with-icon-textfield"
              sx={{ width: "500px", margin: "20px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LibraryBooksIcon />
                  </InputAdornment>
                ),
              }}
              value={newTodo}
              variant="standard"
              onChange={handleChange}
            />
            <Button
              sx={{
                background: "#1aa6b7",
                color: "#fff",
                marginBottom: "10px",
                ":hover": { color: "black" },
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Add Todo
            </Button>
            {/* <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button> */}
          </Stack>
          {/* <MyFormHelperText /> */}
        </FormControl>
      </Box>
      {/* <form>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Add Tool
        </button>
      </form> */}
    </>
  );
};
