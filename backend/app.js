const express = require("express");
// const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const cors = require("cors");

const connectDB = require("./config/db");

connectDB();

// const carRoutes = require("./routes/carRoutes");
// const userRoutes = require("./routes/userRoutes");

const carRoutes = require("./routes/carRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/cars", carRoutes);
// app.use("/api/users", userRoutes);

// Serve frontend
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, "../", "frontend", "build", "index.html")
//     )
//   );
// } else {
//   app.get("/", (req, res) => res.send("Please set to production"));
// }

// app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
