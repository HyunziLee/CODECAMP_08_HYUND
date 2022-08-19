import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1920px;
  background-color: #f8f8f8;
`;
export const WrapperMain = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;
`;

export const Basic_info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background: #ffffff;
`;
export const Title = styled.div`
  width: 280px;
  font-size: 40px;
  font-weight: 800;

  margin: 40px 0px;
  margin-left: 70px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const Line = styled.div`
  width: 90%;
  height: 1px;
  margin: auto;
  background-color: #c9c9c9;
`;
export const Info_division = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin: auto;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info_title = styled.div`
  font-weight: 400;
  font-size: 24px;
  width: 145.75px;
`;

export const Info_address = styled.div`
  width: 75%;

  display: flex;
  flex-direction: column;
`;
export const Info_address_find = styled.div`
  height: 30%;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
`;
export const Info_address_find_title = styled.input`
  width: 30%;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  &:focus {
    outline: none;
  }
`;
export const Info_address_find_input = styled.div``;
export const Info_address_input = styled.input`
  font-size: 20px;
  height: 30%;
  border-radius: 5px;
  margin-bottom: 5px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  &:focus {
    outline: none;
  }
`;
export const Info_phone = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

export const Wrapper_phone = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  height: 80%;
`;

export const Info_phone_number = styled.input`
  width: 30%;
  height: 60%;
  font-size: 20px;
  border-radius: 5px;
  margin-right: 5px;
  border: 0.5px solid #e5e5e5;
  background: #ffffff;
  &:focus {
    outline: none;
  }
`;

export const Info_phone_certification = styled.div``;
export const Certification_input = styled.input`
  height: 100%;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0px;
`;

export const ExtraWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 40px 0px;

  justify-content: center;
`;
export const ExtraDiv = styled.div`
  margin-right: 10px;
  color: #888888;
  font-weight: 400;
  font-size: 18px;
`;
export const LinkLogin = styled.u`
  font-weight: 500;
  font-size: 18px;
  text-underline-offset: inherit;
  cursor: pointer;
`;

export const Sign_common_button = styled.button`
  height: 50px;
`;
