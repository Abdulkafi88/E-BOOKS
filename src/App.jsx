import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./com/Nav";
import Home from "./com/Home";
import Search from "./com/Search";
import Books from "./com/Books";
import Tes from "./com/Tes";
import Login from "./com/Login";

function App() {
  const [ToggleSearch, setToggleSearch] = useState(false);

  const handleSearch = () => {
    setToggleSearch(!ToggleSearch);
  };

  return (
    <div className="App dark:bg-dark">
      <Nav handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home ToggleSearch={ToggleSearch} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/books" element={<Books />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/login" element={<Login />} />
    
      </Routes>
    </div>
  );
}

export default App;
