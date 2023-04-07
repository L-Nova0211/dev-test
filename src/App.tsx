import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ItemShow from "./pages/ItemShow";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import styled from "styled-components";

const HomeBackGround = styled.div`
  background-image: url("./image/Background.png");
  background-repeat: round;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <HomeBackGround>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reveal" element={<ItemShow />} />
          </Routes>
        </HomeBackGround>
      </Router>
    </>
  );
};

export default App;
