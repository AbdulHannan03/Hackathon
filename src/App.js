import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import home from "./container/home";
import about from "./container/about";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <p>Lol</p>
        </div>
        <Routes>
          <Route path="/" exact element={home} />
          <Route path="/about" element={about} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
