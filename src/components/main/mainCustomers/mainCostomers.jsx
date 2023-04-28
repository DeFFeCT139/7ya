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