// import styled from "@emotion/styled";

// export const Wrapper = styled.div`
//   width: 1200px;
//   display: flex;
//   flex-direction: column;
//   margin: auto;
//   align-items: center;
// `;

// export const WrapperPrice = styled.div`
//   width: 800px;
//   height: 600px;
//   background-color: red;
//   margin: auto;
// `;

// export const Div = styled.div`
//   font-size: 20px;
//   font-weight: 800;
//   text-align: center;
//   margin: 40px 0;
// `;

// export const PriceUl = styled.ul`
//   width: 700px;
//   height: 600px;
//   box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
//   background-color: #fff;
//   margin: auto;
//   list-style: none;
// `;
// export const PriceLi = styled.li`
//   float: left;
// `;
// export const PriceBtn = styled.button`
//   width: 180px;
//   height: 60px;
//   border: 1px solid #222;

//   background-color: ${(props) => props.color};
//   margin: 10px;
//   font-size: 15px;
//   text-align: center;
//   line-height: 60px;
//   border-radius: 10px;
//   cursor: pointer;
// `;

// export const ChargeBtn = styled.button`
//   width: 180px;
//   height: 60px;
//   border: none;
//   margin: 10px;
//   font-size: 15px;
//   text-align: center;
//   line-height: 60px;
//   border-radius: 10px;
//   cursor: pointer;
//   & :active {
//     background-color: red;
//   }
// `;

import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

export const WrapperButton = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 20%;
  height: 300px;
  border: 2px solid #bbd0ff;
  background-color: #fff;
  border-radius: 10px;
  margin: 40px 10px;
  cursor: pointer;
  color: #222;
`;
