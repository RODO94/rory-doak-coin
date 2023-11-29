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
          <Route path="/:userId" element={<Homepage />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/:userId/connections" element={<Connections />} />
          <Route path="/:userId/threads" element={<Threads />} />
          <Route path="/:userId/threads/:threadId" element={<Threads />} />
          <Route
            path="/:userId/threads/:threadId/:runId"
            element={<Threads />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
