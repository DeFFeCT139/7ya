import { Route, Routes } from "react-router-dom";
import Admin from "../admin/admin";
import Home from "./home/home";
import Preview from "../admin/preview/preview";

function Pages() {
  return (
    <div className="pages">
      <Routes>
        <Route path="/7ya/" element={<Home/>}/>
        <Route path="/7ya/admin" element={<Admin/>}/>
        <Route path="/7ya/admin/preview" element={<Preview/>}/>
      </Routes>
    </div>
  );
}

export default Pages;