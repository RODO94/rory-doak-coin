import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import Threads from "./pages/Threads/Threads";
import LogIn from "./pages/LogIn/LogIn";
import Connections from "./pages/Connections/Connections";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home/:userId" element={<Homepage />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/connections/:userId" element={<Connections />} />
          <Route path="/threads/:userId" element={<Threads />} />
          <Route path="/threads/:userId/:threadId" element={<Threads />} />
          <Route
            path="/threads/:userId/:threadId/:runId"
            element={<Threads />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
