import { Route, Routes } from "react-router-dom";
import Admin from "../admin/admin";
import Home from "./home/home";
import Preview from "../admin/preview/preview";
import Cards from "./cards/cards";

function Pages() {
  return (
    <div className="pages">
      <Routes>
        <Route exact path="/7ya/" element={<Home/>}/>
        <Route path="/7ya/admin" element={<Admin/>}/>
        <Route path="/7ya/admin/preview" element={<Preview/>}/>
        <Route exact path="/7ya/:link" element={<Cards/>}/>
      </Routes>
    </div>
  );
}

export default Pages;