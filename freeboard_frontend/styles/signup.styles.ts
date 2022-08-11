import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Basic_info = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;

  background: #ffffff;
`;
export const Title = styled.div`
  width: 500px;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  margin: 40px auto;
`;
export const Info_division = styled.div`
  height: 150px;
  margin-bottom: 30px;

  margin: auto;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info_title = styled.div`
  width: 20%;

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
