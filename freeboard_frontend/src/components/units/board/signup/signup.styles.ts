import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const Wrapper = styled(Container)``;

export const Main = styled.main`
  width: 100%;

  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperForm = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin: 40px auto;
`;
export const InfoWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoText = styled.div`
  width: 100%;
  font-size: 1rem;
  font-size: 20px;
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

export const Extra_info = styled.div``;

export const ServiceCheck = styled.div``;

export const Sign_common_button = styled.button`
  height: 50px;
`;
