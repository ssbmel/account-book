/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

  const Container = styled.div`
    width: 1000px;
    margin: 100px auto;
    padding: 20px;
    border: 1px solid black;
    display: gird;
    align-items : center;
    justify-content: center;
    box-sizing: border-box;
  `
  const InputBox = styled.div`
    width: 80%;
    border : 1px solid black;
    text-align : center;
    margin : 20px auto;
    padding: 10px 0;
    display: grid;
    justify-content: center;
  `
  const InputContent = styled.div`
    width : 100%;
    margin : 10px;
    font-size : 15px;
    display: flex;
    align-items : center;
    justify-content: center;
  `
  const MonthList = styled.div`
    width: 80%;
    padding: 20px;
    border : 1px solid black;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(6, 1fr);
    text-align : center;
    margin : 50px auto;
    box-sizing: border-box;
  `
  const Monthly = styled.div`
    border : 1px solid black;
    width: 80px;
    height: 50px;
    margin: 10px;
    font-size: 25px;
    display: flex;
    align-items : center;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;
  `
  const ListContent = styled.div`
    width: 80%;
    margin : 15px auto;
    padding: 10px;
    border: 1px solid black;
    height: 80px;
    display: grid;
    align-items : center;
    box-sizing: border-box;
  `
  const ListBox = styled.div`
    border: 1px solid black;
    width: 80%;
    height: 500px;
    margin: 10px auto;
    align-items : center;
    justify-content: center;
    box-sizing: border-box;
    overflow-y: auto;
  `
function App() {
  const [contents, setContents] = useState(
    [
      {
        id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
        date: "2024-01-05",
        item: "식비",
        amount: 100000,
        description: "석우 튜터님 짱",
      },
      {
        id: "25600f72-53b4-4187-a9c2-47358580e2f8",
        date: "2024-01-10",
        item: "도서",
        amount: 40500,
        description: "모던 자바스크립트",
      },
      {
        id: "24310f72-56b4-41a7-a9c2-458580ef1f8",
        date: "2024-02-02",
        item: "식비",
        amount: 50000,
        description: "회식",
      },
      {
        id: "25600f72-99b4-41z7-e4h6-47312365e2f8",
        date: "2024-02-02",
        item: "간식",
        amount: 500,
        description: "아이스크림",
      },
      {
        id: "25143e72-16e2-22a7-a9c2-47358580e2f8",
        date: "2024-02-02",
        item: "여행",
        amount: 1055000,
        description: "일본여행",
      },
        {
        id: "24312f70-97q2-14a7-a9c2-47132950e2t8",
        date: "2024-02-02",
        item: "도서",
        amount: 75000,
        description: "해리포터",
      },
    ]
  )

  const [nowMonth, setNowMonth] = useState(1);

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");



  const addContentHandler = () => {
    if(item === "" || amount === "" || description ==="") {
      alert("빈칸을 채워주세요!");
      return;
    }
    const newContent = {
      id : uuidv4(),
      date : date,
      item : item,
      amount : amount,
      description : description,
    };
    setContents([...contents, newContent]);
    setItem("");
    setAmount("");
    setDescription("");
  }

  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


  return (
    <Container>
      <InputBox>
        <InputContent>날짜 <input type="date" value={date} onChange={(e)=> {setDate(e.target.value);}}/></InputContent>
        <InputContent>항목 <input type="text" placeholder="지출 항목" value={item} onChange={(e)=> {setItem(e.target.value);}}/></InputContent>
        <InputContent>금액 <input type="text" placeholder="지출 금액" value={amount} onChange={(e)=> {setAmount(e.target.value);}}/></InputContent>
        <InputContent>내용 <input type="text" placeholder="지출 내용" value={description} onChange={(e)=> {setDescription(e.target.value);}}/></InputContent>
        <InputContent><button onClick={addContentHandler}>저장</button></InputContent>
      </InputBox>

      <MonthList>
        {month.map((m, index) => {
          return (
            <Monthly
            key={index}
            onClick={()=>setNowMonth(m)}> 
              {m}월
            </Monthly> 
          )}
          )}
      </MonthList>
      <ListBox>
        {contents.filter((content)=> content.date.split('-')[1] === nowMonth.toString().padStart(2, '0'))
        .map(content => (
          <List
            key={content.id}
            id={content.id}
            date={content.date}
            item={content.item}
            amount={content.amount}
            description={content.description}
          />
        ))}
      </ListBox>
    </Container>
  );
}

export default App;

const List = ({id, date, item, amount, description}) => {
  return (
      <ListContent>
        <p>{date}</p>
        <p>{item} {description}</p>
        <p>{amount}</p>
      </ListContent>
  );
}

