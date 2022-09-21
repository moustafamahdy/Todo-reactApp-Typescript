import React, { FC } from "react";
import { Button } from "@mui/material";

interface FilterBtnTextProps {
  text: Title;
  handleSubmit: HandleSubmit;
}
export const FilterBtn: FC<FilterBtnTextProps> = ({ text, handleSubmit }) => {
  return (
    <Button
      sx={{
        background: "#1aa6b7",
        color: "#fff",
        width: "150px",
        ":hover": { color: "black" },
      }}
      type="submit"
      onClick={handleSubmit}
    >
      {text}
    </Button>
  );
};
