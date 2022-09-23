import React, { useState, useEffect, FormEvent, FC, useMemo } from "react";
import axios from "axios";
import { getCars, createCars, updateCar, deleteCar } from "./api.service";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TextField,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import { TodoTitle } from "../../components/TodoTitle";
import { TableCells } from "./components/TableCells";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CarPage = () => {
  const [cars, setCars] = useState<Cars[]>([]);
  const [car, setCar] = useState<Car>({
    brand: "",
    type: "",
    color: "",
    quantity: 0,
  });
  const [editing, setEditing] = useState<string[]>([]);
  const [deleted, setDeleted] = useState<string[]>([]);
  const [editingValue, setEditingValue] = useState<Cars[]>([]);

  const carVar = useMemo(
    () => ({
      brand: car.brand,
      type: car.type,
      color: car.color,
      quantity: car.quantity,
    }),
    [car.brand, car.type, car.color, car.quantity]
  );
  useEffect(() => {
    const isSubscribed = axios.CancelToken.source();
    getCars(isSubscribed).then((newCars) => {
      setCars(newCars);
      setEditingValue(newCars);
      console.log("runn");
    });

    return () => {
      isSubscribed.cancel();
    };
  }, [editing, deleted, carVar]);

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    createCars(car).then((car) => {
      setCars([...cars, car]);
    });
  };

  const handleSubmitEdit: HandleSubmitEdit = (index) => {
    updateCar(editingValue[index]._id, editingValue[index]).then(() => {
      const editedCars = [...cars];
      editedCars[index] = editingValue[index];
      setCars([...editedCars]);
    });
  };

  const toggleEditing: ToggleEditing = (id) => {
    if (editing.includes(id)) {
      setEditing(editing.filter((item) => item !== id));
    } else setEditing([...editing, id]);
  };

  const handleDeleting: ToggleEditing = (id) => {
    deleteCar(id).then((data) => {
      setDeleted(data);
      console.log(deleted);
    });
  };

  return (
    <>
      <TodoTitle title="Cars" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            width: "700px",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars?.map((car, index) => (
                <TableRow
                  key={car._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCells
                    editing={editing?.includes(car._id)}
                    value={car.brand}
                    index={index}
                    type="text"
                    name="brand"
                    editingValue={editingValue}
                    setEditingValue={setEditingValue}
                  />
                  <TableCells
                    editing={editing?.includes(car._id)}
                    value={car.type}
                    index={index}
                    type="text"
                    name="type"
                    editingValue={editingValue}
                    setEditingValue={setEditingValue}
                  />
                  <TableCells
                    editing={editing?.includes(car._id)}
                    value={car.color}
                    index={index}
                    type="text"
                    name="color"
                    editingValue={editingValue}
                    setEditingValue={setEditingValue}
                  />
                  <TableCells
                    editing={editing?.includes(car._id)}
                    value={car.quantity}
                    index={index}
                    type="number"
                    name="quantity"
                    editingValue={editingValue}
                    setEditingValue={setEditingValue}
                  />

                  <TableCell align="right">
                    <>
                      {!editing?.includes(car._id) ? (
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => toggleEditing(car._id)}
                        >
                          <EditIcon />
                        </IconButton>
                      ) : (
                        <>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              toggleEditing(car._id);
                              handleSubmitEdit(index);
                            }}
                          >
                            <DoneIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => {
                              toggleEditing(car._id);
                            }}
                          >
                            <CloseIcon />
                          </IconButton>
                        </>
                      )}
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => {
                          handleDeleting(car._id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <div
        style={{
          display: "flex",
          flex: "row",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            margin: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {[
            { type: "text", name: "brand" },
            { type: "text", name: "type" },
            { type: "text", name: "color" },
            { type: "number", name: "quantity" },
          ].map((value) => (
            <TextField
              key={value.name}
              type={value.type}
              name={value.name}
              id="outlined-basic"
              label={value.name}
              variant="outlined"
              onChange={(e) => {
                setCar({
                  ...car,
                  [value.name]: e?.target?.value ?? "",
                });
              }}
            />
          ))}
          <Button
            sx={{
              background: "#1aa6b7",
              color: "#fff",
              marginBottom: "10px",
              ":hover": { color: "black" },
            }}
            type="submit"
            onClick={() => {
              handleSubmit;
            }}
          >
            Add Car
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default CarPage;
