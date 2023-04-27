import phone from '../../../image/Vector (15).svg'
import mail from '../../../image/Vector (16).svg'
import tg from '../../../image/Vector (9).svg'
import viber from '../../../image/Subtract (4).svg'
import wat from '../../../image/Vector (19).svg'
import OneButton from '../../UI/buttons/oneButton/oneButton'

function MainContact() {
  return (
    <div id='contacts' className="main-contact color-bclok padd-block">
      <div className="conteiner">
        <div className="main-contact-inner">
          <div className="main-contact-title">
            <div className="title">Contacts</div>
            <div className="main-contact-title-desc desc">You have problems and money, then You are at the right place.</div>
          </div>
          <div className="main-contact-info">
            <div className="main-contact-info-item">
              <div className="main-contact-info-item-phone">
                <img className='main-contact-info-item-link-img' src={phone} alt="" />
                <a href='tel:+372 58 330637' className="main-contact-info-item-phone-title">+372 58 330637</a>
              </div>
              <div className="main-contact-info-item-links">
                <a target="_blank" rel="noreferrer" className='main-contact-info-item-link' href='https://wa.me/+37258330637'>
                  <img className='main-contact-info-item-link-img' src={wat} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" className='main-contact-info-item-link' href='https://t.me/+37258330637'>
                  <img className='main-contact-info-item-link-img' src={tg} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" className='main-contact-info-item-link' href="viber://chat?number=%2B37258330637">
                  <img className='main-contact-info-item-link-img' src={viber} alt="" />
                </a>
              </div>
            </div>
            <div className="main-contact-info-item">
              <div className="main-contact-info-item-phone">
                <img className='main-contact-info-item-link-img' src={phone} alt="" />
                <a href='tel:+47 94 1 49 007' className="main-contact-info-item-phone-title">+47 94 1 49 007</a>
              </div>
              <div className="main-contact-info-item-links">
                <a target="_blank" rel="noreferrer" className='main-contact-info-item-link' href="https://wa.me/4794149007">
                  <img className='main-contact-info-item-link-img' src={wat} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" className='main-contact-info-item-link' href="https://t.me/AnatolySuglobov">
                  <img className='main-contact-info-item-link-img' src={tg} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" className='main-contact-info-item-link' href="viber://chat?number=%2B4794149007">
                  <img className='main-contact-info-item-link-img' src={viber} alt="" />
                </a>
              </div>
            </div>
            <div className="main-contact-info-item main-contact-info-item-mail">
              <div className="main-contact-info-item-phone">
                <img src={mail} alt="" />
                <a href='mailto:as@7ya.ee' className="main-contact-info-item-phone-title">as@7ya.ee</a>
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