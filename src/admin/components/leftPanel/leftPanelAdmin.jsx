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
              <label className="switch" htmlFor="checkbox">
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="LeftPanelAdmin-bottom">
        <div onClick={(e) => dispach(setPage(e.target.innerText))} className="LeftPanelAdmin-bottom-links">
          <div className='LeftPanelAdmin-bottom-link'>
            <div className="LeftPanelAdmin-bottom-link-title">Services</div>
            <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
          </div>
          <div onClick={(e) => dispach(setPage(e.target.innerText))} className='LeftPanelAdmin-bottom-link'>
            <div className="LeftPanelAdmin-bottom-link-title">CV</div>
            <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
          </div>
          <div onClick={(e) => dispach(setPage(e.target.innerText))} className='LeftPanelAdmin-bottom-link'>
            <div className="LeftPanelAdmin-bottom-link-title">Partners</div>
            <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
          </div>
          <div onClick={(e) => dispach(setPage(e.target.innerText))} className='LeftPanelAdmin-bottom-link'>
            <div className="LeftPanelAdmin-bottom-link-title">Customers</div>
            <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
          </div>
        </div>
        <Link to={'/7ya/admin/preview'} className="LeftPanelAdmin-bottom-btn">Open preview page</Link>
      </div>
    </div>
  );
}

export default LeftPanelAdmin;