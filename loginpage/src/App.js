import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../src/Components/Login";
import Main from "../src/Components/Main";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
