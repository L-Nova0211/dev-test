import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import "./style.css";

const MyModal = styled(Modal)`
  margin: 30vh 40vw;
  width: 18vw;
  height: 40vh;
  text-align: right;
`;
const ItemDialog = styled.div<{ path: string }>`
  background-image: url(${(props) => props.path});
  background-repeat: round;
  height: 80%;
  padding: 1%;
`;
const ItemDetail = styled.div`
  background-image: url("image/rect.png");
  background-repeat: round;
  height: 20%;
  display: flex;
  padding: 5% 5%;
`;
const DataText = styled.p`
  color: white;
  padding: 3% 5%;
`;
const ItemComponent: React.FunctionComponent = () => {
  const itemPath = "image/Artwork.png";
  const [modalState, setModalState] = useState(true);

  return (
    <div>
      <MyModal isOpen={modalState}>
        <ItemDialog path={itemPath}>
          <img src="image/GemIcon.png" onClick={() => setModalState(false)} />
        </ItemDialog>
        <ItemDetail>
          <img src="image/DetailIcon.png"></img>
          <DataText>DATA KEY</DataText>
        </ItemDetail>
      </MyModal>
    </div>
  );
};

export default ItemComponent;
