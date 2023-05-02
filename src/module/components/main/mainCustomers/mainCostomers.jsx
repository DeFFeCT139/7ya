import TwoButton from "../../UI/buttons/twoButton/twoButton";
import CostomersItem from "../../UI/customersItem/custormersIte,";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, get, child} from "firebase/database";


function MainCostomers() {

  const [state, setState] = useState([])

  useEffect(()=>{
    getList()
  }, [])

  const getList = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'Customers/mas/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      if (window.innerWidth < 640) {
        setState(data.slice(0,6))
        if (data.length <= 4) {
          document.getElementById('costBtn').style.display = "none"
        }
      }
      if (window.innerWidth < 960) {
        setState(data.slice(0,9))
        if (data.length <= 4) {
          document.getElementById('costBtn').style.display = "none"
        }
      }
      if (window.innerWidth > 960) {
        setState(data.slice(0,15))
        if (data.length <= 6) {
          document.getElementById('costBtn').style.display = "none"
        }
      }
    });
  }

  const openHr = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'Customers/mas/')).then((snapshot) => {
      setState(snapshot.val());
    })
    document.getElementById('costBtn').style.display = "none"
  }

  const goLink = () => {
    document.getElementById('contacts').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div id="customers" className="main-costomers padd-block">
      <div className="conteiner">
        <div className="main-costomers-inner">
          <div className="main-costomers-content">
            <div className="main-costomers-content-left">
              <div className="main-costomers-content-left-title">
                <div className="title">Clients & Customers</div>
                <TwoButton onClick={goLink} dataDa={".main-costomers-inner,640"} text={'Get in touch'}/>
              </div>
              <div className="main-costomers-content-left-desc desc">Feel free to contact our clients and customers, or previous employers to get their opinion on cooperation with us.</div>
            </div>
          </div>
          <div className="main-costomers-list">
            {state.map((item, index) => 
              <CostomersItem key={index} img={item}/>
            )}
            <div className="main-costomers-list-facke"></div>
            <div className="main-costomers-list-facke"></div>
            <div className="main-costomers-list-facke"></div>
          </div>
          <div id='costBtn' className="main-btn">
            <TwoButton onClick={openHr} text={'More'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCostomers;