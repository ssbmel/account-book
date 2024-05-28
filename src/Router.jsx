import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { ListContext, fakeData } from './context/Component';






const Router = () => {
  const savedData = JSON.parse(localStorage.getItem("key")) || fakeData;
  const [contents, setContents] = useState(savedData);

  return (
    <ListContext.Provider value={{ contents }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home contents={contents} setContents={setContents}/>} />
          <Route path="/DetailPage/:id" element={<DetailPage contents={contents} setContents={setContents}/> }/>
        </Routes>
      </BrowserRouter>
    </ListContext.Provider>
  );

};

export default Router;