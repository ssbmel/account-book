import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

const fakeData = [
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
    description: "젊은이들의 흑마법 기피가 심각합니다만, 취직해보니 대우도 좋고 사장도 사역마도 귀여워서 최고입니다!",
  },
]

const Router = () => {
  const savedData = JSON.parse(localStorage.getItem("key")) || fakeData;
  const [contents, setContents] = useState(savedData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home contents={contents} setContents={setContents}/>} />
        <Route path="/DetailPage/:id" element={<DetailPage contents={contents} setContents={setContents}/> }/>
      </Routes>
    </BrowserRouter>
  );

};

export default Router;