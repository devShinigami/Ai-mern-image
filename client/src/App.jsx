import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import CreateImage from "./pages/CreateImage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />

          <Route path="/generate-image" Component={CreateImage} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
