import { Route, Routes } from "react-router-dom";
import Admin from "../admin/admin";
import Home from "./home/home";
import Preview from "../admin/preview/preview";
import Cards from "./cards/cards";

function Pages() {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<Home  title='7ya'/>}/>
        <Route path="/admin" element={<Admin title='Admin Panel'/>}/>
        <Route path="/admin/preview" element={<Preview  title='7ya Preveiw' />}/>
        <Route path="/:link" element={<Cards/>}/>
      </Routes>
    </div>
  );
}

export default Pages;