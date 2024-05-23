/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {Container, InputBox, InputContent, MonthBoxList, MonthBox, ListBox, ListContent} from '../stylecomponent.jsx';
import { Link } from "react-router-dom";
import DetailPage from "./DetailPage.jsx";


function App() {
  const [contents, setContents] = useState([
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
      item: "게임",
      amount: 40500,
      description: "company of ",
    },
    {
      id: "24310f72-56b4-41a7-a9c2-458580ef1f8",
      date: "2024-02-02",
      item: "도서비",
      amount: 50000,
      description: "화산귀환",
    },
    {
      id: "25600f72-99b4-41z7-e4h6-47312365e2f8",
      date: "2024-02-02",
      item: "간식",
      amount: 500,
      description: "초코비",
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
  ]);


  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const addContentHandler = () => {
    if (item === "" || amount === "" || description === "") {
      alert("빈칸을 채워주세요!");
      return;
    }
    const newContent = {
      id: uuidv4(),
      date: date,
      item: item,
      amount: amount,
      description: description,
    };
    setContents([...contents, newContent]);
    setItem("");
    setAmount("");
    setDescription("");
  };

  const [nowMonth, setNowMonth] = useState(5);
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Container>
      <InputBox>
        <InputContent>
          날짜
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </InputContent>
        <InputContent>
          항목
          <input
            type="text"
            placeholder="지출 항목"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
        </InputContent>
        <InputContent>
          금액
          <input
            type="text"
            placeholder="지출 금액"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </InputContent>
        <InputContent>
          내용
          <input
            type="text"
            placeholder="지출 내용"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </InputContent>
        <InputContent>
          <button onClick={addContentHandler}>저장</button>
        </InputContent>
      </InputBox>

      <MonthBoxList>
        {month.map((m, index) => {
          return (
            <MonthBox 
            key={index} 
            onClick={() => setNowMonth(m)}
            backgroundColor={nowMonth === m ? 'black' : undefined}
            color={nowMonth === m ? 'white' : undefined}
            >
              {m}월
            </MonthBox>
          );
        })}
      </MonthBoxList>
      <ListBox>
        {contents
          .filter(
            (content) =>
              content.date.split("-")[1] ===
              nowMonth.toString().padStart(2, "0")
          )
          .map((content) => (
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

const List = ({ id, date, item, amount, description }) => {
  return (
    <ListContent>
      <Link to="/DetailPage">
        <p>{date}</p>
        <p>{item} - {description}</p>
        <p>{amount}</p>
      </Link>
    </ListContent>
  );
};
