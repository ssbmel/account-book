import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DetailPage" element={<DetailPage />}/>
      </Routes>
    </BrowserRouter>
  );

};

export default Router;