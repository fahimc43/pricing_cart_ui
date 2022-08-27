import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Premium from "./Page/Premium";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="premium" element={<Premium />} />
      </Routes>
    </>
  );
}

export default App;
