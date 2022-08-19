import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
`;
export const WrapperMain = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border-top: 3px solid #555;
  border-bottom: 3px solid #555;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 40px;

  margin: 40px 0px;
  margin-left: 360px;
`;

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px 0px;
`;
export const InputTitle = styled.div`
  width: 20%;
  font-weight: 500;
  font-size: 24px;
`;
export const Input = styled.div`
  width: 80%;
`;
export const InputInput = styled.input`
  width: 100%;
  height: 56px;
  border: none;

  background-color: #e9e9e9;
`;

export const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 30px 0px;
`;

export const KakaoMap = styled.div`
  width: 30%;
  height: 252px;
  background-color: yellow;
`;

export const AddressWrapper = styled.div`
  width: 60%;
  margin-left: 10px;
`;

export const PostCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const PostCode = styled.div`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 10px;
`;
export const PostCodeBtn = styled.button`
  width: 124px;
  height: 51px;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;

export const AddDetailWrapper = styled.div`
  margin: 10px 0px;
`;

export const AddInput = styled.input`
  width: 100%;
  height: 56px;
  border: none;
  background-color: #e9e9e9;
  margin-bottom: 10px;
`;

export const PhotoWrapper = styled.div`
  margin: 10px 0px;
`;

export const InputPhoto = styled.input`
  margin: 10px 0px;
`;
