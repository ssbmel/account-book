/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {Container, InputBox, InputContent, MonthBoxList, MonthBox, ListBox, ListContent, Text, InputBtn, InputStyle, AmountText} from '../style/stylecomponent.jsx';
import { Link, Router, json } from "react-router-dom";
import styled from "styled-components";
import { ListContext } from "../Router.jsx";

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
    setItem("");
    setAmount("");
    setDescription("");
  };

  const onClickMonth = (month) => {
    setNowMonth(month);
    localStorage.setItem("clickedMonth", month);
  }


  const { contents : test } = useContext(ListContext)

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
            type="number"
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
            backgroundColor={nowMonth === m ? 'rgba(249, 181, 4, 1)' : 'white'}
            color={nowMonth === m ? 'black' : undefined}
            >
              {m}월
            </MonthBox>
          );
        })}
      </MonthBoxList>
      <ListBox>
        {test
          .filter(
            (content) =>
              content.date.split("-")[1] ===
              nowMonth.toString().padStart(2, "0")
          )
          .map((content) => (
            <List
              key={content.id}
              content={content}
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
  
const List = ({ content }) => {
  return (
    <ListContent>
      <LinkStyle to={`/DetailPage/${content.id}`}>
        <Text>{content.date}</Text>
        <Text style={{width: "600px"}}>{content.item} - {content.description}</Text>
        <AmountText>{content.amount}원</AmountText>
      </LinkStyle>
    </ListContent>
  );
};