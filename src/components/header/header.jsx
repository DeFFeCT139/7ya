import logo from '../../image/Group 17.svg'
import tg from '../../image/Vector (9).svg'
import viber from '../../image/Subtract (4).svg'
import wat from '../../image/Vector (19).svg'
import phone from '../../image/Vector (20).svg'
import burger from '../../image/Vector (17).svg'
import { useDynamicAdapt } from '../../module/src/dynamicAdapt'
import { useEffect } from 'react'
import animete  from '../../module/animete/animate'

function Header() {

  useDynamicAdapt('max')

  useEffect(()=>{
    scroll()
    animete()
  },[])



  const scroll = () => {
    window.addEventListener('scroll', function() {
      if (window.scrollY < window.innerHeight / 2) {
        if (window.scrollY === 0) {
          document.getElementById('header').style.backgroundColor = '#00000000'
          document.getElementById('logo').style.width = '120px'
          document.getElementById('header-inner').style.height = '100px'
        } else {
          document.getElementById('header').style.backgroundColor = '#191919'
          document.getElementById('logo').style.width = '54px'
          document.getElementById('header-inner').style.height = '60px'
        }
      }
    });
  } 

  

  const open = () => {
    document.getElementById('lp').classList.add('left-panel-actove')
    document.querySelector('html').style.overflow = 'hidden'
  }

  return (
    <div id='header' className="header">
      <div className="conteiner">
        <div id='header-inner' className="header-inner">
          <div className="header-logo">
            <a href="#start">
              <img id='logo' className='header-logo-img' src={logo} alt="" />
            </a>
          </div>
          <div className="header-links">
            <a href='#services' className="header-link links">Services</a>
            <a href='#hr' className="header-link links">Human Resources</a>
            <a href='#pricing' className="header-link links">Pricing</a>
            <a href='#partners' className="header-link links">Partners</a>
            <a href='#customers' className="header-link links">Customers</a>
            <a href='#contacts' className="header-link links">Contacts</a>
          </div>
          <div className="header-links-soc">
            <a target="_blank" rel="noreferrer" href='https://t.me/+37258330637' className="header-link-soc links">
              <img src={tg} alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href='viber://chat?number=%2B37258330637' className="header-link-soc links">
              <img src={viber} alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href='https://wa.me/+37258330637' className="header-link-soc links">
              <img src={wat} alt="" />
            </a>
            <div data-da=".header-inner,960,0 " className="header-link-soc links">
              <img src={phone} alt="" />
            </div>
            <img onClick={open} data-da=".header-inner,960" className='header-burger' src={burger} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;