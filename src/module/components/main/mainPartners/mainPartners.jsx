import { useEffect, useState } from "react";
import OneButton from "../../UI/buttons/oneButton/oneButton";
import PartnersItem from "../../UI/partnersItem/partnersItems";
import { getDatabase, ref, onValue, get, child} from "firebase/database";

function MainPartners() {

  const [state, setState] = useState([])

  useEffect(()=>{
    getList()
  }, [])

  const getList = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'Partners/mas/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      if (window.innerWidth < 640) {
        setState(data.slice(0,4))
        if (data.length <= 4) {
          document.getElementById('patrnerBtn').style.display = "none"
        }
      }
      if (window.innerWidth < 960) {
        setState(data.slice(0,4))
        if (data.length <= 4) {
          document.getElementById('patrnerBtn').style.display = "none"
        }
      }
      if (window.innerWidth > 960) {
        setState(data.slice(0,6))
        if (data.length <= 6) {
          document.getElementById('patrnerBtn').style.display = "none"
        }
      }
    });
  }

  const openHr = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'Partners/mas/')).then((snapshot) => {
      setState(snapshot.val());
    })
    document.getElementById('patrnerBtn').style.display = "none"
  }

  const goLink = () => {
    document.getElementById('contacts').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div id="partners" className="main-parners color-bclok padd-block">
      <div className="conteiner">
        <div className="main-parners-inner">
          <div className="main-parners-content">
            <div className="main-parners-content-left">
              <div className="main-parners-content-left-title">
                <div className="title">Partners</div>
                <OneButton onClick={goLink} dataDa={".main-parners-inner,640"} text={'Get in touch'}/>
              </div>
              <div className="desc">Reliable service and product providers we cooperate with.</div>
            </div>
          </div>
          <div className="main-parners-list">
            {state.map((item, index) => 
              <PartnersItem key={index} text={item}/>
            )}
            <div className="main-parners-list-facke"></div>
          </div>
          <div id="patrnerBtn" className="main-btn">
            <OneButton onClick={openHr} text={'More'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPartners;