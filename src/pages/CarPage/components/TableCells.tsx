import { TableCell, TextField } from "@mui/material";
import React, { FC, useState } from "react";

interface TableCellProps {
  editing?: boolean;
  value: any;
  name: string;
  index: number;
  editingValue: any;
  setEditingValue(value: any): void;
  type: string;
}

export const TableCells: FC<TableCellProps> = ({
  value,
  editing = false,
  index,
  editingValue,
  setEditingValue,
  name,
  type,
}) => {
  // const [editingValue, setEditingValue] = useState(value);
  return (
    <TableCell align="right">
      {editing ? (
        <TextField
          // placeholder="Editing Todo"
          type={type}
          id="outlined-basic"
          // label="Edit Todo"
          variant="outlined"
          value={editingValue[index][name]}
          onChange={(e) => {
            const editedValue = [...editingValue];
            editedValue[index][name] = e.target.value;
            setEditingValue([...editedValue]);
            // console.log(e);
          }}
        />
      ) : (
        value
      )}
    </TableCell>
  );
};
