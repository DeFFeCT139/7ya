import { useEffect, useState } from "react";
import ButtonBack from "../../components/UI/buttonBack/buttonBack";
import MoreInfo from "./page/MoreInfo/MoreInfo";
import Contacts from "./page/Contacts/Contacts";
import Skills from "./page/Skills/Skills";
import Socials from "./page/Socials/Socials";
import { setPage } from "../../../components/features/page";
import { useDispatch, useSelector } from "react-redux";
import { setContact, setDesc, setImg, setLink, setName, setProf, setSoc } from "../../../components/features/cv";
import { child, get, ref, getDatabase } from "firebase/database";

function CVSettings() {

  const dispach = useDispatch()
  let item = useSelector((state) => state.item.item)
  let img = useSelector((state) => state.cv.img)



  const [content, setcontent] = useState(<MoreInfo/>)

  useEffect(()=>{
    if (item.substr(0, 4) === 'edit') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `CV/mas/${item.substr(4, 10000)}`)).then((snapshot) => {
        let data = snapshot.val()
        if (img === null) {
          dispach(setContact(data.contact))
          dispach(setName(data.name))
          dispach(setProf(data.prof))
          dispach(setImg(data.img))
          dispach(setLink(data.link))
          dispach(setSoc(data.soc))
          dispach(setDesc(data.desc)) 
        }
      })
    }
  },[])


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
      <div className="pageAdmin-title">CV</div>
      <div className="pageAdmin-content">
        <ButtonBack onClick={() => dispach(setPage('CV'))}/>
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