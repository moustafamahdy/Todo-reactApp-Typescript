import React, { FC } from "react";
import { Button } from "@mui/material";

interface DeleteAllBtnProps {
  text: Title;
  handleSubmit: HandleSubmit;
}
export const DeleteAllBtn: FC<DeleteAllBtnProps> = ({ text, handleSubmit }) => {
  return (
    <Button
      sx={{
        background: "red",
        color: "#fff",
        width: "340px",
        ":hover": { color: "black" },
      }}
      type="submit"
      onClick={handleSubmit}
    >
      {text}
    </Button>
  );
};
