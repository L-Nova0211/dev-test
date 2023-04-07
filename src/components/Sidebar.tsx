import styled from "styled-components";
import React from "react";

import { Link } from "react-router-dom";

const SidebarMenu = styled.nav`
  height: 100vh;
  width: 3vw;
  background: rgba(217, 217, 217, 0.09);
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
`;
const HomeButton = styled(Link)`
  height: 5vh;
  width: 3vw;
`;
const ModernCompanyText = styled.div`
  font-family: "D-DIN Exp";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.2em;
  height: 100%;
  padding: 30%;
  color: rgba(255, 255, 255, 0.4);
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
`;
const VersionNumber = styled.div`
  font-family: "D-DIN Exp";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;

  height: 5%;
  letter-spacing: 0.2%;
  color: rgba(255, 255, 255, 0.97);
`;
const Sidebar: React.FunctionComponent = () => {
  return (
    <>
      <SidebarMenu>
        <HomeButton to="/">
          <img src="image/Home.png" width="100%" height="100%"></img>
        </HomeButton>
        <ModernCompanyText>//The Company Name</ModernCompanyText>
        <VersionNumber>001</VersionNumber>
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
