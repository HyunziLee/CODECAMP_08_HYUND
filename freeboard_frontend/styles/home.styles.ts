import styled from "@emotion/styled";
import { propTypes } from "react-bootstrap/esm/Image";

export const Wrapper = styled.div`
  width: ${(props) => props.width};
  margin: auto;
  position: relative;
`;

export const Video = styled.video`
  width: 100%;
`;

export const Video_text = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  border-radius: 50%;
  text-align: center;
  font-size: ${(props) => props.fontsize};
  cursor: pointer;
`;

export const GoHome = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  text-align: center;
  background-color: #bbd0ff;
  color: #fff;
  font-weight: 800;
  border-radius: 50%;
  font-size: ${(props) => props.fontsize};
  cursor: pointer;
`;

export const Main_intro = styled.div`
  width: 100%;
  height: 800px;
  background-color: yellow;
  position: absolute;
`;

export const Intro_contents = styled.div`
  width: 200px;
  height: 100px;

  background-color: skyblue;
`;
