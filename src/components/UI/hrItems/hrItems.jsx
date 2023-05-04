import { Link, useNavigate } from 'react-router-dom';
import img from '../../../image/Rectangle 4.png'
import { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../index';

function HrItems({text, index}) {

  let route = useNavigate()

  let link = `${text.link}&${index}`

  const [state, setState] = useState(null)

  useEffect(()=>{
    const imgref = ref(storage, `images/${text.img}`)
    getDownloadURL(imgref).then((url) => {
      document.getElementById(`img12${index}`).style.backgroundImage = `url(${url})`
    })
  }, [])


  return (
    <div className="main">
      <div className="main-hr-list-item">
        <div className="main-hr-list-item-image">
          <div id={`img12${index}`} className='main-hr-list-item-img' ></div>
        </div>
        <div className="main-hr-list-item-name">{text.name}</div>
          <div className="main-hr-list-item-title">{text.prof}</div>
          <div className="main-hr-list-item-desc">{text.desc}</div>
          <Link to={`/${link}`} target="_blank" className='main-hr-list-cv'>More info</Link>
       </div>
    </div>
  );
}

export default HrItems;