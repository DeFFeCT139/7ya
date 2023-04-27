import { useState } from 'react';
import HrItems from '../../UI/hrItems/hrItems';
import OneButton from '../../UI/buttons/oneButton/oneButton';

function MainHR() {

  let items = [
    {name: 'Anatoly Suglobov', title: 'Troubleshooter/ Consultant', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {name: 'Anatoly Suglobov', title: 'Troubleshooter/ Consultant', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {name: 'Anatoly Suglobov', title: 'Troubleshooter/ Consultant', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {name: 'Anatoly Suglobov', title: 'Troubleshooter/ Consultant', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {name: 'Anatoly Suglobov', title: 'Troubleshooter/ Consultant', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {name: 'Anatoly Suglobov', title: 'Troubleshooter/ Consultant', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {name: 'Anatoly Suglobov', title: 'Troubleshooter/ Consultant', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {name: 'Anatoly Suglobov', title: 'Troubleshooter/ Consultant', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
  ] 

  const states = () => {
    if (window.innerWidth < 640) return items.slice(0,2)
    if (window.innerWidth < 960) return items.slice(0,4)
    if (window.innerWidth > 960) return items.slice(0,9)
  }
  
  const [state, setState] = useState(states())


  const openHr = () => {
    setState(items)
    document.getElementById('hrBtn').style.display = "none"
  }

  return (
    <div id='hr' className="main-hr color-bclok padd-block">
      <div className="conteiner">
        <div className="main-hr-inner">
          <div className="main-hr-title">
            <div className="title">Human Resources</div>
            <div className="desc">Trusted people you can trust!</div>
          </div>
          <div className="main-hr-list">
            {state.map((item, index) => 
              <HrItems key={index} text={item}/>
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