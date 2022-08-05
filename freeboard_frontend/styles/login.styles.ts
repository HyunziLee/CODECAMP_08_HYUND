import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Login_text = styled.div`
  font-size: 40px;
  font-weight: 800;
  width: 600px;
  text-align: center;
  background-color: salmon;
`;
export const Wrapper_login = styled.div`
  width: 600px;
  background-color: yellow;
  margin: 100px 0px;
`;
export const Login__text = styled.div`
  font-size: 20px;
`;
export const Login_user_input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: solid 1px #555;
  font-size: 20px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;

export const Login_password_input = styled.input``;
export const Login_info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Login_remember_id = styled.div``;
export const Login_find = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Login_find_id = styled.div``;
export const Login_find_pw = styled.div``;

export const Login_button = styled.div`
  width: 600px;
  height: 70px;
  background-color: skyblue;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  line-height: 70px;
  margin-bottom: 10px;
  cursor: pointer;
`;
