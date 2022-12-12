import "./app.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Exercise from "./Pages/Exercise";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width="400" m="auto" sx={{ width: { xl: "1488px" } }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:id" element={<Exercise />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
