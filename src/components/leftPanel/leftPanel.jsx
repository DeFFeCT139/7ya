import img from '../../image/Vector (18).svg'
import tg from '../../image/Vector (9).svg'
import viber from '../../image/Subtract (4).svg'
import wat from '../../image/Vector (10).svg'

function LeftPanel() {

  const clouse = () => {
    document.getElementById('lp').classList.remove('left-panel-actove')
    document.querySelector('html').style.overflow = 'auto'
  }

  return (
    <div onClick={clouse} id='lp' className="left-panel">
      <div className="left-panel-block">
        <div className="conteiner">
          <div className="left-panel-burg">
            <img onClick={clouse} className="left-panel-burger-cloused" src={img} alt="" />
          </div>
          <div className="left-panel-list">
            <a onClick={clouse} href='#services' className="header-link links">Services</a>
            <a onClick={clouse} href='#hr' className="header-link links">Human Resources</a>
            <a onClick={clouse} href='#pricing' className="header-link links">Pricing</a>
            <a onClick={clouse} href='#partners' className="header-link links">Partners</a>
            <a onClick={clouse} href='#customers' className="header-link links">Customers</a>
            <a onClick={clouse} href='#contacts' className="header-link links">Contacts</a>
            <div className="left-panel-list-last">
              <a href='/' className="header-link links">as@7ya.ee</a>
              <a href='/' className="header-link links">+372 58 330637</a>
              <div className="left-panel-links-soc">
                <a href='/' className="header-link-soc links">
                  <img src={tg} alt="" />
                </a>
                <a href='/' className="header-link-soc links">
                  <img src={viber} alt="" />
                </a>
                <a href='/' className="header-link-soc links">
                  <img src={wat} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;