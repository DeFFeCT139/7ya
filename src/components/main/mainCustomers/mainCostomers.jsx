import TwoButton from "../../UI/buttons/twoButton/twoButton";
import img from '../../../image/Vector (14).svg'
import CostomersItem from "../../UI/customersItem/custormersIte,";
import { useState } from "react";

function MainCostomers() {

  let items = [img,img,img,img,img,img,img,img,img,img,img,img,img,img,img,img,img]

  const states = () => {
    if (window.innerWidth < 640) return items.slice(0,6)
    if (window.innerWidth < 960) return items.slice(0,9)
    if (window.innerWidth > 960) return items.slice(0,15)
  }

  const [state, setState] = useState(states())

  const openHr = () => {
    setState(items)
    document.getElementById('costBtn').style.display = "none"
  }

  return (
    <div id="customers" className="main-costomers padd-block">
      <div className="conteiner">
        <div className="main-costomers-inner">
          <div className="main-costomers-content">
            <div className="main-costomers-content-left">
              <div className="main-costomers-content-left-title">
                <div className="title">Customers</div>
                <TwoButton dataDa={".main-costomers-inner,640"} text={'Get in touch'}/>
              </div>
              <div className="desc">Lorem ipsum dolor sit amet consectetur.<br/>Tempor adipiscing vulputate id sed risus<br/>venenatis fusce pharetra faucibus. </div>
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