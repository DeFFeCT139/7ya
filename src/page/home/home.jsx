import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import LeftPanel from "../../components/leftPanel/leftPanel";
import Main from "../../components/main/main";

function Home() {
  return (
    <div className="home">
      <LeftPanel/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Home;