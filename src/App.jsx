import { useState } from "react";
import { Routes, Route,  useLocation} from "react-router-dom";
import Nav from "./com/Nav";
import Home from "./com/Home";
import Search from "./com/Search";
import Books from "./com/Books";
import Tes from "./com/Tes";
import Login from "./com/Login";
import Register from "./com/Register"
import AllBooks from "./com/AllBooks"
import Footer from './com/Footer'
function App() {
  const [ToggleSearch, setToggleSearch] = useState(false);

  const handleSearch = () => {
    setToggleSearch(!ToggleSearch);
  };
  const location = useLocation()
  const isHome = location.pathname==='/'
  const isfooter = location.pathname==='/Login'
  
  return (
    <div className="App dark:bg-dark">
      <Nav handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home ToggleSearch={ToggleSearch} />} />
        <Route path="search" element={<Search />} />

        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="AllBooks" element={<AllBooks />} />
      </Routes>
      {isHome && <Books />}
      {isHome && <Tes />}
      {isHome && <Footer />}
      {isfooter && <Footer />}
    </div>
  )
}

export default App;
