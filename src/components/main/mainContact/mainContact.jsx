import phone from '../../../image/Vector (15).svg'
import mail from '../../../image/Vector (16).svg'
import tg from '../../../image/Vector (9).svg'
import viber from '../../../image/Subtract (4).svg'
import wat from '../../../image/Vector (10).svg'
import OneButton from '../../UI/buttons/oneButton/oneButton'

function MainContact() {
  return (
    <div id='contacts' className="main-contact color-bclok padd-block">
      <div className="conteiner">
        <div className="main-contact-inner">
          <div className="main-contact-title">
            <div className="title">Contacts</div>
            <div className="desc">Lorem ipsum dolor sit amet consectetur.<br/>Tempor adipiscing vulputate id sed risus<br/>venenatis fusce pharetra faucibus. </div>
          </div>
          <div className="main-contact-info">
            <div className="main-contact-info-item">
              <div className="main-contact-info-item-phone">
                <img className='main-contact-info-item-link-img' src={phone} alt="" />
                <div className="main-contact-info-item-phone-title">+372 58 330637</div>
              </div>
              <div className="main-contact-info-item-links">
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
            <div className="main-contact-info-item">
              <div className="main-contact-info-item-phone">
                <img className='main-contact-info-item-link-img' src={phone} alt="" />
                <div className="main-contact-info-item-phone-title">+47 94 1 49 007</div>
              </div>
              <div className="main-contact-info-item-links">
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
            <div className="main-contact-info-item main-contact-info-item-mail">
              <div className="main-contact-info-item-phone">
                <img src={mail} alt="" />
                <div className="main-contact-info-item-phone-title">as@7ya.ee</div>
              </div>
            </div>
          </div>
          <div className="main-contact-redButton">
            <OneButton className={'redBtn'} text={'Red button'}/>
            <div className="main-contact-redButton-desc desc">Kindly ask You to not click on this button, its from<br/>the old website and we dont know what is it<br/>connected to.<br/>So please be wise and dont click on it. It maybe<br/>connected to some critical component, so please<br/>keep the cursor away from it. Thank You.<br/>© Developers.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContact;