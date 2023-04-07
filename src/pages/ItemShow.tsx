import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ItemComponent from "../components/Item";
import { Link } from "react-router-dom";

const HomeBackGround = styled.div`
  background-image: url("./image/Background.png");
  background-repeat: round;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const EmptySpace = styled.div`
  height: 40vh;
  width: 100vw;
  display: flex;
  justift-content: center;
`;

const RevealSpace = styled.div`
  text-align: center;
  align-items: center;
`;

const BackButton = styled(Link)`
  width: 20vw;
  height: 6vh;
  box-sizing: border-box;

  /* Auto layout */

  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 5%;
  gap: 20px;

  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 43px;
  text-decoration: none;
`;

const LogoText = styled.span`
  color: white;
  font-size: 1vw;
  padding: 10px;
  line-height: 2vh;
`;

const ReserveText = styled.p`
  margin-top: 5vh;
  color: rgba(255, 255, 255, 0.6);
`;

const ItemShow: React.FunctionComponent = () => {
  return (
    <>
      <EmptySpace />
      <EmptySpace>
        <ItemComponent></ItemComponent>
      </EmptySpace>
      <RevealSpace>
        <BackButton to="/">
          <img src="image/ICON.png" width="14px" height="18px"></img>
          <LogoText>BACK HOME</LogoText>
        </BackButton>
        <ReserveText>© 2023 TPW - ALL RIGHTS RESERVED.</ReserveText>
      </RevealSpace>
    </>
  );
};

export default ItemShow;
