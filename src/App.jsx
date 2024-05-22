/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

  const InputBox = styled.div`
    border : 1px solid black;
    width : 600px;
    height : 200px;
    text-align : center;
    margin : 50px auto;
    padding-top : 50px;
  `
  const InputContent = styled.div`
    margin : 10px;
    font-size : 20px;
  `
  const ListContent = styled.div`
    margin : 10px;
  `
function App() {
  const [contents, setContents] = useState(
    [
      {
        id: "25600f72-56b4-41a7-a9c2-47358580e2f8",
        date: "2024-01-05",
        item: "식비",
        amount: 100000,
        description: "세광양대창",
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
        id: "25600f72-97p2-14a7-a9c2-47363950e2t8",
        date: "2024-02-02",
        item: "미용",
        amount: 155000,
        description: "미용실",
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

  const month = new Array(12).fill(null);

  return (
    <>
      <InputBox>
        <InputContent>날짜<input type="date" value={date} onChange={(e)=> {setDate(e.target.value);}}/></InputContent>
        <InputContent>항목<input type="text" value={item} onChange={(e)=> {setItem(e.target.value);}}/></InputContent>
        <InputContent>금액<input type="text" value={amount} onChange={(e)=> {setAmount(e.target.value);}}/></InputContent>
        <InputContent>내용<input type="text" value={description} onChange={(e)=> {setDescription(e.target.value);}}/></InputContent>
        <InputContent><button onClick={addContentHandler}>저장</button></InputContent>
      </InputBox>

      <div>
        {month.map((m, index) => {
          return (
            <div key={index}>{index+1}월</div>
          )}
          )}
        
      </div>


      <div>
        {contents.map(content => (
          <List
            key={content.id}
            id={content.id}
            date={content.date}
            item={content.item}
            amount={content.amount}
            description={content.description}
          />
        ))}
      </div>
    </>
  );
}

export default App;

const List = ({id, date, item, amount, description}) => {
  return (
    <ListContent>
      <div>
      <p>{date}</p>
      <p>{item} {description}</p>
      <p>{amount}</p>
      </div> 
    </ListContent>
  );
}

