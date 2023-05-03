import { useEffect } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import LeftPanel from "../../components/leftPanel/leftPanel";
import Main from "../../components/main/main";

function Preview({title}) {
  useEffect(()=>{
    document.title = title
  },[])
  return (
    <div className="preview">
      <LeftPanel/>
      <Header/>
      <Main/>
    </div>
  );
}

export default Preview;