import { useState } from "react";
import ButtonBack from "../../components/UI/buttonBack/buttonBack";
import MoreInfo from "./page/MoreInfo/MoreInfo";
import Contacts from "./page/Contacts/Contacts";
import Skills from "./page/Skills/Skills";
import Socials from "./page/Socials/Socials";

function CVSettings() {

  const [content, setcontent] = useState(<MoreInfo/>)


  const setSettings = (e) => {
    let list = document.getElementsByClassName('pageAdmin-nav-item')
    for (let index = 0; index < list.length; index++) list[index].classList.remove('pageAdmin-nav-item-active')

    if (e.target.innerText === 'Main info') {
      setcontent(<MoreInfo/>)
      e.target.classList.add('pageAdmin-nav-item-active')
    }
    if (e.target.innerText === 'Contacts') {
      setcontent(<Contacts/>)
      e.target.classList.add('pageAdmin-nav-item-active')
    }
    if (e.target.innerText === 'Skills') {
      setcontent(<Skills/>)
      e.target.classList.add('pageAdmin-nav-item-active')
    }
    if (e.target.innerText === 'Socials') {
      setcontent(<Socials/>)
      e.target.classList.add('pageAdmin-nav-item-active')
    }
  }

  return (
    <div className="CVSettings pageAdmin">
      <div className="pageAdmin-title">Customers</div>
      <div className="pageAdmin-content">
        <ButtonBack/>
        <div style={{marginTop:'48px'}} className="pageAdmin-nav">
          <div onClick={setSettings} className="pageAdmin-nav-item pageAdmin-nav-item-active">Main info</div>
          <div onClick={setSettings} className="pageAdmin-nav-item">Contacts</div>
          <div onClick={setSettings} className="pageAdmin-nav-item">Skills</div>
          <div onClick={setSettings} className="pageAdmin-nav-item">Socials</div>
        </div>
        {content}
      </div>
    </div>
  );
}

export default CVSettings;