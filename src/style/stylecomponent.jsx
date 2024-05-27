import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  margin: 100px auto;
  padding: 20px;
  background-color : rgba(108, 154, 71, 1);
  border-radius: 20px;
  display: gird;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const InputBox = styled.div`
  width: 80%;
  border-radius: 20px;
  background-color : rgba(255, 231, 170, 1);
  text-align: center;
  margin: 40px auto;
  padding: 10px 0;
  display: grid;
  justify-content: center;
`;
export const InputContent = styled.div`
  width: 100%;
  margin: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const InputStyle = styled.input`
  height: 25px;
  margin-left: 10px;

`
export const InputBtn = styled.button`
  width: 60px;
  height: 30px;
  background-color: rgba(249, 181, 4, 1);

  color: black;
  cursor: pointer;
`
export const MonthBoxList = styled.div`
  width: 80%;
  padding: 20px;
  background-color : rgba(255, 231, 170, 1);
  border-radius: 20px;
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
  border-radius: 10px;
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

export const ListBox = styled.div`
  width: 80%;
  height: 500px;
  margin: 10px auto 50px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow-y: auto;
  
`;

export const ListContent = styled.div`
  width: 100%;
  margin: 15px auto;
  padding: 5px;
  background-color : rgba(255, 231, 170, 1);
  border-radius: 20px;
  height: 100px;
  align-items: center;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  position: relative;

`;

export const Text = styled.p`
  width: 800px;
  color: black;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 15px;
`;

export const AmountText = styled.p`
  color: black;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 20px;
  display: grid;
  position: absolute;
  font-size:20px;
  right: 10px;
  bottom: 15px;
`;
