import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';


const Router = () => {
  const [contents, setContents] = useState([]);

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