import { Link } from 'react-router-dom';
import logo from '../../image/Group 17 (1).svg'
import arrow from '../../image/Vector (21).svg'

function LeftPanelAdmin() {
  return (
    <div className="LeftPanelAdmin">
      <div className="LeftPanelAdmin-top">
        <div className="LeftPanelAdmin-top-logo">
          <img src={logo} alt="" className="LeftPanelAdmin-top-logo-img" />
        </div>
        <div className="LeftPanelAdmin-top-checked-block">
          <div className="LeftPanelAdmin-top-checked-block-title">Active</div>
          <div className="LeftPanelAdmin-top-checked-block-xecked">
            <div className="container">
              <input type="checkbox" className="checkbox" id="checkbox"/>
              <label className="switch" htmlFor="checkbox">
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="LeftPanelAdmin-bottom">
        <div className="LeftPanelAdmin-bottom-links">
          <Link to={'/'} className='LeftPanelAdmin-bottom-link'>
            <div className="LeftPanelAdmin-bottom-link-title">Services</div>
            <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
          </Link>
          <Link to={'/admin'} className='LeftPanelAdmin-bottom-link'>
            <div className="LeftPanelAdmin-bottom-link-title">CV</div>
            <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
          </Link>
          <Link to={'/admin'} className='LeftPanelAdmin-bottom-link'>
            <div className="LeftPanelAdmin-bottom-link-title">Partners</div>
            <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
          </Link>
          <Link to={'/admin'} className='LeftPanelAdmin-bottom-link'>
            <div className="LeftPanelAdmin-bottom-link-title">Customers</div>
            <img src={arrow} alt="" className="LeftPanelAdmin-bottom-link-arrow" />
          </Link>
        </div>
        <Link to={'/7ya/admin/preview'} className="LeftPanelAdmin-bottom-btn">Open preview page</Link>
      </div>
    </div>
  );
}

export default LeftPanelAdmin;