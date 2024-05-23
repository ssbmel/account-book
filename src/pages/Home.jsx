/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {Container, InputBox, InputContent, MonthBoxList, MonthBox, ListBox, ListContent, Text, InputBtn, InputStyle} from '../style/stylecomponent.jsx';
import { Link } from "react-router-dom";
import styled from "styled-components";


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
      description: "좀보이드",
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
          <InputStyle
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </InputContent>
        <InputContent>
          항목
          <InputStyle
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
          <InputStyle
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
          <InputStyle
            type="text"
            placeholder="지출 내용"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </InputContent>
        <InputContent>
          <InputBtn onClick={addContentHandler}>저장</InputBtn>
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

const LinkStyle = styled(Link)`
  text-decoration: none;
`

const List = ({ id, date, item, amount, description }) => {
  return (
    <ListContent>
      <LinkStyle to="/DetailPage">
        <Text>{date}</Text>
        <Text>{item} - {description}</Text>
        <Text>{amount}</Text>
      </LinkStyle>
    </ListContent>
  );
};
