import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import LeftPanel from "../../components/leftPanel/leftPanel";
import Main from "../../components/main/main";

function Preview() {
  return (
    <div className="preview">
      <LeftPanel/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Preview;