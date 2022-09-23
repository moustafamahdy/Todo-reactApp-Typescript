import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarPage from "./pages/CarPage";

import TodoPage from "./pages/TodoListPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/cars" element={<CarPage />} />
          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
