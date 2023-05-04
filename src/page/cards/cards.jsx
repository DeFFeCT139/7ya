import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { child, get, getDatabase, ref } from "firebase/database";
import { avatar } from "./avatarDoonoad";
import ContactsContent from "./page/contact";
import LInks from "./page/links";
import SkillsContent from "./page/skills";
import { file } from "./fileDoonoad";
import pluse from '../../image/Vector (7).svg'

function Cards() {
  const params = useParams()

  const [state, setState] = useState('')

  useEffect(()=>{
    getContent() 
  },[])

  const getContent = () => {
    let id = params.link.search('&')
    let idComponent = params.link.slice(id+1, 1000)
    const dbRef = ref(getDatabase());
    get(child(dbRef, `CV/mas/${idComponent}`)).then((snapshot) => {
      let data = snapshot.val();
      setState(data)
      avatar(data)
    })
  }

  const [pages, setPages] = useState(state === ''? <div></div>: <ContactsContent state={state}/>)

  useEffect(()=>{
    setPage()  
  },[state])

  const setPage = (e) => {
    if (state !== '') {
      setPages( <ContactsContent state={state}/>) 
    }
  }

  const setContact = () => {
    setPages( <ContactsContent state={state}/>) 
    let item = document.getElementsByClassName('cards-block-nav')
    for (let index = 0; index < item.length; index++) {
      if (index === 0) {
        item[index].classList.add('cards-block-nav-active')
      } else {
        item[index].classList.remove('cards-block-nav-active')
      }
    }
  }

  const setSkills = () => {
    setPages( <SkillsContent state={state}/>) 
    let item = document.getElementsByClassName('cards-block-nav')
    for (let index = 0; index < item.length; index++) {
      if (index === 1) {
        item[index].classList.add('cards-block-nav-active')
      } else {
        item[index].classList.remove('cards-block-nav-active')
      }
    }
  }

  const seLinsk = () => {
    setPages( <LInks state={state}/>) 
    let item = document.getElementsByClassName('cards-block-nav')
    for (let index = 0; index < item.length; index++) {
      if (index === 2) {
        item[index].classList.add('cards-block-nav-active')
      } else {
        item[index].classList.remove('cards-block-nav-active')
      }
    }
  }

  return (
    <div className="cards">
      <div className="cards-block">
        <div className="cards-block-top">
          <div id="avatar" className="cards-block-img"></div>
          <div className="cards-block-name">{state.name}</div>
          <div className="cards-block-prof">{state.prof}</div>
          <div className="cards-block-btns">
            <a id='VSF' href={state === ''? '/':file("VSF",state.VSF)} className="cards-block-btn" download><img src={pluse} alt=""/> <span>Add to contacts</span></a>
            <a id='CV' href={state === ''? '/':file("CV",state.CV)} className="cards-block-btn" download>CV</a>
            <a id='Ref' href={state === ''? '/':file("Ref",state.Ref)} className="cards-block-btn" download>Reference</a>
          </div>
          <div className="cards-block-navs">
            <div onClick={setContact} className="cards-block-nav cards-block-nav-active">Contact</div>
            <div onClick={setSkills} className="cards-block-nav">Skills</div>
            <div onClick={seLinsk} className="cards-block-nav">Socials</div>
          </div>
        </div>
        <div className="cards-block-button">
          {pages}
        </div>
      </div>
    </div>
  );
}

export default Cards;