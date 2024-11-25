import React from "react";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound.jsx";
import UploadFiles from "./pages/UploadFiles.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/files" element={<UploadFiles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
