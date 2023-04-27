import logo from '../../image/Group 17.svg'
import tg from '../../image/Vector (9).svg'
import viber from '../../image/Subtract (4).svg'
import wat from '../../image/Vector (10).svg'
import { useDynamicAdapt } from '../../module/src/dynamicAdapt'

function Footer() {

  useDynamicAdapt('max')

  return (
    <div className="footer">
      <div className="conteiner footer1">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-left-inner">
              <div data-da='.footer1,960, 0' className="footer-left-logo">
                <a href="#start">
                  <img src={logo} alt="" className="footer-left-logo-img" />
                </a>
              </div>
              <div className="footer-left-links footer-left-links1">
                <a href='#services' className="footer-left-link links">Services</a>
                <a href='#hr' className="footer-left-link links">Human Resources</a>
                <a href='#pricing' className="footer-left-link links">Pricing</a>
              </div>
              <div className="footer-left-links">
                <a href='#partners' data-da='.footer-left-links1,960' className="footer-left-link links">Partners</a>
                <a href='#customers' data-da='.footer-left-links1,960' className="footer-left-link links">Customers</a>
                <a href='#contacts' data-da='.footer-left-links1,960' className="footer-left-link links">Contacts</a>
                <a href="/" data-da='.footer-right,960, 2' className="footer-left-link linksMail">as@7ya.ee</a>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right-item">
              <div className="footer-right-phone-title">+372 58 330637</div>
              <div className="footer-right-links">
                <a className='main-contact-info-item-link' href="/">
                  <img className='main-contact-info-item-link-img' src={wat} alt="" />
                </a>
                <a className='main-contact-info-item-link' href="/">
                  <img className='main-contact-info-item-link-img' src={tg} alt="" />
                </a>
                <a className='main-contact-info-item-link' href="/">
                  <img className='main-contact-info-item-link-img' src={viber} alt="" />
                </a>
              </div>
            </div>
            <div className="footer-right-item">
              <div className="footer-right-phone-title">+47 94 1 49 007</div>
              <div className="footer-right-links">
                <a className='main-contact-info-item-link' href="/">
                  <img className='main-contact-info-item-link-img' src={wat} alt="" />
                </a>
                <a className='main-contact-info-item-link' href="/">
                  <img className='main-contact-info-item-link-img' src={tg} alt="" />
                </a>
                <a className='main-contact-info-item-link' href="/">
                  <img className='main-contact-info-item-link-img' src={viber} alt="" />
                </a>
              </div>
            </div>
            <a href='https://pingwing.ru' className="footer-right-powered">Powered by pingwing.ru</a>
          </div>
        </div>
        <div className="footer-rigths">© All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;