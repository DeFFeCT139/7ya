import { Route, Routes } from "react-router-dom";
import Admin from "../admin/admin";
import Home from "./home/home";
import Preview from "../admin/preview/preview";
import Cards from "./cards/cards";

function Pages() {
  return (
    <div className="pages">
      <Routes>
        <Route exact path="/7ya/" element={<Home  title='7ya'/>}/>
        <Route path="/7ya/admin" element={<Admin title='Admin Panel'/>}/>
        <Route path="/7ya/admin/preview" element={<Preview  title='7ya Preveiw' />}/>
        <Route exact path="/7ya/:link" element={<Cards/>}/>
      </Routes>
    </div>
  );
}

export default Pages;