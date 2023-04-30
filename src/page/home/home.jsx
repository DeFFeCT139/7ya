import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import LeftPanel from "../../components/leftPanel/leftPanel";
import Main from "../../components/main/main";
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set,} from "firebase/database";

function Home() {

  const [state, setState] = useState(false)

  useEffect(()=>{
    getState()
  },[])

  const getState = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'site/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      console.log(data)
      setState(data)
    })
  }
  return (
    <div className="home">
      {state? 
      <div className="home-inner">
        <LeftPanel/>
        <Header/>
        <Main/>
      </div>
      :
      <div className="home-error">Сайт не работает на перекуре)</div> 
      }
    </div>
  );
}

export default Home;