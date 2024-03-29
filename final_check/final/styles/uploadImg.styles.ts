import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 40px;
`;

export const ImageBig = styled.img`
  width: 90%;
  height: 300px;
`;

export const UploadImg = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px;
`;

export const ImageSmallWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100px;
  background-color: pink;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

export const UploadBtn = styled.button`
  width: 80px;
  height: 80px;
  margin: 10px;
  text-align: center;
  line-height: 80px;
  background-color: #d1d1d1;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
