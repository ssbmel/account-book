import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid black;
  display: gird;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const InputBox = styled.div`
  width: 80%;
  border: 1px solid black;
  text-align: center;
  margin: 20px auto;
  padding: 10px 0;
  display: grid;
  justify-content: center;
`;
export const InputContent = styled.div`
  width: 100%;
  margin: 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MonthBoxList = styled.div`
  width: 80%;
  padding: 20px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  margin: 50px auto;
  box-sizing: border-box;
`;
export const MonthBox = styled.div`
  background-color: ${(props)=> props.backgroundColor};
  color : ${(props) => props.color};
  border: 1px solid black;
  width: 80px;
  height: 50px;
  margin: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
`;
export const ListContent = styled.div`
  width: 80%;
  margin: 15px auto;
  padding: 10px;
  border: 1px solid black;
  height: 80px;
  display: grid;
  align-items: center;
  box-sizing: border-box;
`;
export const ListBox = styled.div`
  border: 1px solid black;
  width: 80%;
  height: 500px;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: auto;

`;

export const Text = styled.p`
  color: black;
`
