import axios from "axios";
const client = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getCars = async (cancelToken: any) => {
  try {
    const response = await client.get("/cars", {
      cancelToken: cancelToken.token,
    });
    // console.log(response);
    return response.data;
  } catch (err: any) {
    if (axios.isCancel(err)) {
      console.log("canceled");
    } else console.log(err.message);
  }
};

export const createCars = async (data: Car) => {
  console.log("creating");
  try {
    const response = await client.post("/cars", data);
    console.log(response);
    return response.data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const updateCar = async (id: string, data: Car) => {
  try {
    const response = await client.put("/cars/" + id, data);
    return response.data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const deleteCar = async (data: string) => {
  try {
    const response = await client.delete(`/cars/${data}`);
    return response.data;
  } catch (err: any) {
    console.log(err.message);
  }
};
