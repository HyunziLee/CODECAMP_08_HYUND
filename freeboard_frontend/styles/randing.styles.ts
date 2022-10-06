import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: auto;
  position: relative;
  height: 100%;
  min-height: 100%;

  
`;

export const Video = styled.video`
  width: 100%;
 
  /* @media (max-width: 767px) {
    transform: rotate(90deg);
    
  } */
 
`;

export const VideoText = styled.div<{
  width: string;
  height: string;
  fontsize: string;
}>`
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

export const GoHome = styled.div<{
  width: string;
  height: string;
  fontsize: string;
}>`
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
