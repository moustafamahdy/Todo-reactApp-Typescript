import { Stack } from "@mui/material";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TodoPage from "./pages/TodoListPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          {/* <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
