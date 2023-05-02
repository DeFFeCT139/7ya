import { useEffect, useState } from 'react';
import HrItems from '../../UI/hrItems/hrItems';
import OneButton from '../../UI/buttons/oneButton/oneButton';
import { getDatabase, ref, onValue, get, child} from "firebase/database";


function MainHR() {
 

  const [state, setState] = useState([])

  useEffect(()=>{
    getList()
  }, [])

  const getList = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'CV/mas/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      if (window.innerWidth < 640) {
        setState(data.slice(0,4))
        if (data.length <= 4) {
          document.getElementById('hrBtn').style.display = "none"
        }
      }
      if (window.innerWidth < 960) {
        setState(data.slice(0,4))
        if (data.length <= 4) {
          document.getElementById('hrBtn').style.display = "none"
        }
      }
      if (window.innerWidth > 960) {
        setState(data.slice(0,9))
        if (data.length <= 6) {
          document.getElementById('hrBtn').style.display = "none"
        }
      }
    });
  }


  const openHr = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'CV/mas/')).then((snapshot) => {
      setState(snapshot.val());
    })
    document.getElementById('hrBtn').style.display = "none"
  }

  return (
    <div id='hr' className="main-hr color-bclok padd-block">
      <div className="conteiner">
        <div className="main-hr-inner">
          <div className="main-hr-title">
            <div className="title">Human Resources</div>
            <div className="desc">Trusted people You can trust!</div>
          </div>
          <div className="main-hr-list">
            {state.map((item, index) => 
              <HrItems key={index} index={index} text={item}/>
            )}
            <div className="main-hr-list-facke-item"></div>
          </div>
          <div id='hrBtn' className="main-btn">
            <OneButton onClick={openHr} text={'More'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHR;