import styled from "@emotion/styled";
import { Modal, Select } from "antd";

export const Wrapper = styled.div`
  height: 100px;
  width: 1920px;

  border-bottom: 1px solid #c4c4c4;
`;
export const MainWrapper = styled.div`
  width: 1200px;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 400px;
  justify-content: space-between;
`;
export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;

  background: black;
  opacity: 0.4;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const PointModal = styled(Modal)`
  position: absolute;
  background-color: white;
  top: 100px;
  left: 40%;
  width: 300px;
  height: 300px;
  /* border: 1px solid black; */
  border-radius: 20px;
  opacity: 1;
`;

export const Menu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const EmptyDiv = styled.div`
  width: 50%;
`;
