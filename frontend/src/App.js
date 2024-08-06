import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/chat" Component={ChatPage}></Route>
      </Routes>
    </div>
  );
};

export default App;
