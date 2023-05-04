import { Link } from 'react-router-dom';
import logo from '../../image/7ya 1.svg'
import arrow from '../../image/Vector (21).svg'
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set,} from "firebase/database";
import { useDispatch } from 'react-redux';
import { setPage } from '../../../components/features/page';


function LeftPanelAdmin() {

  const [state, setState] = useState(true)

  useEffect(()=>{
    getState()
  },[])

  const dispach = useDispatch()

  const getState = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'site/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      setState(data)
    })
  }
  
  const setChecBox = () => {
    setState(!state)
    const db = getDatabase();
    set(ref(db, 'site/'), state);
  }

  const active = (index1) => {
    let name = document.getElementsByClassName('LeftPanelAdmin-bottom-link')
    for (let index = 0; index < name.length; index++) {
      if (index1 === index) {
        name[index].classList.add('LeftPanelAdmin-bottom-link-active')
      } else {
        name[index].classList.remove('LeftPanelAdmin-bottom-link-active')
      }
    }
  }

  return (
    <div className="LeftPanelAdmin">
      <div className="LeftPanelAdmin-top">
        <div className="LeftPanelAdmin-top-logo">
          <img src={logo} alt="" className="LeftPanelAdmin-top-logo-img" />
        </div>
        <div className="LeftPanelAdmin-top-checked-block">
          <div className="LeftPanelAdmin-top-checked-block-title">Active</div>
          <div className="LeftPanelAdmin-top-checked-block-xecked">
            <div onClick={setChecBox} className="container">
              <input defaultChecked={state} type="checkbox" className="checkbox" id="checkbox"/>
              <label defaultChecked={state} className="switch" htmlFor="checkbox">
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="LeftPanelAdmin-bottom">
        <div className="LeftPanelAdmin-bottom-links">
          <div className="lp-bottom">
            <div onClick={() => {
              dispach(setPage('Services'))
              active(0)
              }}  className='LeftPanelAdmin-bottom-link LeftPanelAdmin-bottom-link-active'>
              <div className="LeftPanelAdmin-bottom-link-title">Services</div>
              <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
            </div>
          </div>
          <div className="lp-bottom">
            <div onClick={() => {
              dispach(setPage('CV'))
              active(1)
            }} className='LeftPanelAdmin-bottom-link'>
              <div className="LeftPanelAdmin-bottom-link-title">CV</div>
              <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
            </div>
          </div>
          <div className="lp-bottom">
            <div onClick={() => {
              dispach(setPage('Partners')) 
              active(2)
            }} className='LeftPanelAdmin-bottom-link'>
              <div className="LeftPanelAdmin-bottom-link-title">Partners</div>
              <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
            </div>
          </div>
          <div className="lp-bottom">
            <div onClick={() => {
              dispach(setPage('Customers'))
              active(3)
              }} className='LeftPanelAdmin-bottom-link'>
              <div className="LeftPanelAdmin-bottom-link-title">Customers</div>
              <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
            </div>
          </div>
        </div>
        <Link to={'/admin/preview'} className="LeftPanelAdmin-bottom-btn">Open preview page</Link>
      </div>
    </div>
  );
}

export default LeftPanelAdmin;