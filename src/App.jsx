import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./com/Nav";
import Home from "./com/Home";
import Search from "./com/Search";
import Books from "./com/Books";
import Tes from "./com/Tes";
import { Routes, Route } from "react-router-dom";
function App() {
  const [ToggleSearch, setToggleSearch] = useState(false);
  const handleSearch = () => {
    setToggleSearch(!ToggleSearch);
  };
  return (
    <div className="App dark:bg-dark ">
      <Nav handleSearch = {handleSearch} />
      <Home ToggleSearch={ToggleSearch} />
      <Books/>
      <Tes/>
    </div>
  );
}

export default App;
