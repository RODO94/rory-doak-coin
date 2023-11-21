import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import Threads from "./pages/Threads/Threads";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/threads" element={<Threads />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
