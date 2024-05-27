import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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


const DetailPage = ({contents, setContents}) => {
  const { id } = useParams();
  const findData = contents.find((content)=>content.id === id);

  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  const navigate = useNavigate();


  const editHandler = () => {
    const editContent = {
      ...findData,
      date : dateRef.current.value,
      item : itemRef.current.value,
      amount : amountRef.current.value,
      description : descriptionRef.current.value
    }
    const editContents = contents.map(content => content.id === id ? editContent : content)
    setContents(editContents)
    navigate('/');
  }

   const deleteHandler = () => {
    const deleteContent = {
      ...findData,
      date : dateRef.current.value,
      item : itemRef.current.value,
      amount : amountRef.current.value,
      description : descriptionRef.current.value
    }
    const deleteContents = contents.filter(content => content.id !== deleteContent.id)
    setContents(deleteContents)
    navigate('/');
   }

  return (
    <DetailContainer>
      <DetailListBox>
        날짜
        <DetailInput type="date" defaultValue={findData.date} ref={dateRef}/>
        항목
        <DetailInput type="text" defaultValue={findData.item} ref={itemRef}/>
        금액
        <DetailInput type="text" defaultValue={findData.amount} ref={amountRef}/>
        내용
        <DetailInput type="text" defaultValue={findData.description} ref={descriptionRef}/>
        <DetailBtnBox>
          <DetailBtn onClick={editHandler}>수정</DetailBtn>
          <DetailBtn onClick={deleteHandler}>삭제</DetailBtn>
          <Link to="/">
            <DetailBtn>뒤로가기</DetailBtn>
          </Link>
        </DetailBtnBox>
      </DetailListBox>
    </DetailContainer>
  );
};

export default DetailPage;
