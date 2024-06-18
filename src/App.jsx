import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Lost from "./components/Lost";

function App() {
  return (
    <>
      <div id="container">
        <h1 className="header-name">Hello React Router!</h1>
        <div id="navbar">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/blue">
            <h1>Blue</h1>
          </Link>
          <Link to="/red">
            <h1>Red</h1>
          </Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="*" element={<Lost />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
