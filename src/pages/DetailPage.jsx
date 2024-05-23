import { Link } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  width: 1000px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
const DetailListBox = styled.div`
  width: 50%;
  display: grid;
  text-align: center;
  align-items: center;
  margin: 50px auto;
  font-size: 20px;
`;
const DetailInput = styled.input`
  margin: 10px;
  width: auto;
  height: 30px;
`;
const DetailBtnBox = styled.div``;
const DetailBtn = styled.button`
  margin: 10px;
  width: auto;
  height: 30px;
  cursor: pointer;
  background-color: black;
  color: white;
`;

const DetailPage = () => {
  return (
    <DetailContainer>
      <DetailListBox>
        날짜
        <DetailInput type="text" />
        항목
        <DetailInput type="text" />
        금액
        <DetailInput type="text" />
        내용
        <DetailInput type="text" />
        <DetailBtnBox>
          <DetailBtn>수정</DetailBtn>
          <DetailBtn>삭제</DetailBtn>
          <Link to="/">
            <DetailBtn>뒤로가기</DetailBtn>
          </Link>
        </DetailBtnBox>
      </DetailListBox>
    </DetailContainer>
  );
};

export default DetailPage;
