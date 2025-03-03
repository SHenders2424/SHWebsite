import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <Header />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
