import { useState } from "react";
import OneButton from "../../UI/buttons/oneButton/oneButton";
import PartnersItem from "../../UI/partnersItem/partnersItems";

function MainPartners() {

  let items = [
    {title: 'TS Marine', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus.  ', link: '/'},
    {title: 'TS Marine', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus.  ', link: '/'},
    {title: 'TS Marine', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus.  ', link: '/'},
    {title: 'TS Marine', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus.  ', link: '/'},
    {title: 'TS Marine', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus.  ', link: '/'},
    {title: 'TS Marine', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus.  ', link: '/'},
    {title: 'TS Marine', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus.  ', link: '/'},
    {title: 'TS Marine', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus.  ', link: '/'}
  ]
  const states = () => {
    if (window.innerWidth < 640) return items.slice(0,4)
    if (window.innerWidth < 960) return items.slice(0,4)
    if (window.innerWidth > 960) return items.slice(0,6)
  }

  const [state, setState] = useState(states())

  const openHr = () => {
    setState(items)
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
              <div className="desc">Companies we work with</div>
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