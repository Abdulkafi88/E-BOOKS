import { useState } from "react";
import { Routes, Route,  useLocation} from "react-router-dom";
import Nav from "./com/Nav";
import Home from "./com/Home";
import Search from "./com/Search";
import Books from "./com/Books";
import Tes from "./com/Tes";
import Login from "./com/Login";
import Footer from './com/Footer'
function App() {
  const [ToggleSearch, setToggleSearch] = useState(false);

  const handleSearch = () => {
    setToggleSearch(!ToggleSearch);
  };
  const location = useLocation()
  const isHome = location.pathname==='/'
  
  return (
    <div className="App dark:bg-dark">
      <Nav handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home ToggleSearch={ToggleSearch} />} />
        <Route path="/search" element={<Search />} />
       
        <Route path="/login" element={<Login />} />
    
      </Routes>
      {isHome && <Books />}
      {isHome && <Tes />} 
      {isHome && <Footer />} 
    
    </div>
  );
}

export default App;
