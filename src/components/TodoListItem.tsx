import React, { FC, FormEvent, useState } from "react";
import "./TodoListItem.css";
import {
  ListItem,
  IconButton,
  ListItemText,
  Checkbox,
  TextField,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo(index: number): void;
  index: number;
  editing?: boolean;
  setEditing?: (index: number) => void;
  handleEditText?: (index: number, text: string) => void;
}

export const TodoListItem: FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
  index,
  editing = false,
  setEditing,
  handleEditText,
}) => {
  const [editingText, setEditingText] = useState(todo.text);
  const handleClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteTodo(index);
    // console.log(e);
  };
  return (
    <>
      <ListItem
        secondaryAction={
          <>
            <Checkbox
              edge="end"
              onChange={() => toggleTodo(todo)}
              checked={todo.complete}
              //   inputProps={{ "aria-labelledby": labelId }}
            />
            {!editing ? (
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  //   console.log("index ---> ", index);
                  setEditing?.(index);
                }}
              >
                <EditIcon />
              </IconButton>
            ) : (
              <>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    handleEditText?.(index, editingText);
                    setEditing?.(index);
                  }}
                >
                  <DoneIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    setEditingText(todo.text);
                    setEditing?.(index);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </>
            )}
            <IconButton edge="end" aria-label="delete" onClick={handleClick}>
              <DeleteIcon />
            </IconButton>
          </>
        }
      >
        {/* <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar> */}
        {editing ? (
          <TextField
            placeholder="Editing Todo"
            type="text"
            id="outlined-basic"
            label="Edit Todo"
            variant="outlined"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
        ) : (
          //   <input
          //     type="text"
          //     value={editingText}
          //     onChange={(e) => setEditingText(e.target.value)}
          //   />
          <ListItemText
            primary={todo.text}
            className={todo.complete ? "complete" : undefined}
            //   secondary={secondary ? "Secondary text" : null}
          />
        )}
      </ListItem>
      {/* <li>
        <label
          // style={{ textDecoration: todo.complete ? "line-through" : "none" }}
          className={todo.complete ? "complete" : undefined}
        >
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}
          />
          {todo.text}
        </label>
      </li> */}
    </>
  );
};
