/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {Container, InputBox, InputContent, MonthBoxList, MonthBox, ListBox, ListContent, Text, InputBtn, InputStyle} from '../style/stylecomponent.jsx';
import { Link, Router, json } from "react-router-dom";
import styled from "styled-components";

function Home({contents, setContents}) {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const clickedMonth = Number(localStorage.getItem("clickedMonth"));
  const [nowMonth, setNowMonth] = useState(clickedMonth);
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(contents));
  },[contents])

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
    // localStorage.setItem("key", JSON.stringify([...contents, newContent]));
    setItem("");
    setAmount("");
    setDescription("");
  };

  const onClickMonth = (month) => {
    setNowMonth(month);
    localStorage.setItem("clickedMonth", month);
  }

  // useEffect(()=> {
  //   const savedData = JSON.parse(localStorage.getItem("key"));
  //   if(!savedData){
  //     setContents(fakeData);
  //     localStorage.setItem("key", JSON.stringify(fakeData));
  //     return 
  //   }
  //   setContents(savedData);
  // }, [])

  // useEffect(()=> {
  //   const clickedMonth = Number(localStorage.getItem("clickedMonth"));
  //   setNowMonth(clickedMonth)
  // }, [])

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
            onClick={() => onClickMonth(m)}
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

export default Home;

const LinkStyle = styled(Link)`
  text-decoration: none;
`

const List = ({ id, date, item, amount, description }) => {
  return (
    <ListContent>
      <LinkStyle to={`/DetailPage/${id}`}>
        <Text>{date}</Text>
        <Text style={{width: "600px"}}>{item} - {description}</Text>
        <Text>{amount}</Text>
      </LinkStyle>
    </ListContent>
  );
};