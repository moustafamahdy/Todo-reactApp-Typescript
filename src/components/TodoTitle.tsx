import React, { FC } from "react";
import { Typography } from "@mui/material";

interface TodoTitleParams {
  title: Title;
}
export const TodoTitle: FC<TodoTitleParams> = ({ title }) => {
  return (
    <Typography
      variant="h4"
      component="h2"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {title}
    </Typography>
  );
};
