import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TopBar = styled.nav`
  display: flex;
  justify-content: between;
  height: 5vh;
  position: fixed;
  width: 100%;
`;
const RightNav = styled.div`
  display: flex;
  justify-content: end;
  margin: 0;
  width: 50vw;
`;
const LocationText = styled.div`
  color: white;
  opacity: 0.6;
  padding-left: 2vw;
  font-size: 0.8vw;
  margin: 1vw 2.5vh;
`;
const CloseButton = styled.button`
  height: 5vh;
  width: 3.5vw;
`;

const LogoText = styled.div`
  color: white;
  font-size: 1vw;
  margin: 1vw 2vh;
  padding-left: 4vw;
  width: 50vw;
  opacoty: 1;
`;

const Navbar: React.FunctionComponent = () => {
  const [image, setImage] = useState("image/Close.png");

  return (
    <>
      <TopBar>
        <LogoText>ENTRY TEST</LogoText>
        <RightNav>
          <LocationText>C:\EXERCISE\PROGRAMS\01.EXE</LocationText>
          <CloseButton
            onMouseEnter={() => setImage("image/CloseHover.png")}
            onMouseLeave={() => setImage("image/Close.png")}
          >
            <img src={image} width="100%" height="100%" />
          </CloseButton>
        </RightNav>
      </TopBar>
    </>
  );
};

export default Navbar;
