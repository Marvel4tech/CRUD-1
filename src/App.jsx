import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
