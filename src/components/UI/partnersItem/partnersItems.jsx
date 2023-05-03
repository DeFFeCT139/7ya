import { getDownloadURL, ref } from 'firebase/storage';
import arrow from '../../../image/Arrow 1.svg'
import { storage } from '../../../index';
import { useEffect, useState } from 'react';

function PartnersItem({text}) {

  const [state, setState] = useState(null)

  useEffect(()=>{
    const imgref = ref(storage, `images/${text.img}`)
    getDownloadURL(imgref).then((url) => {
      setState(url)
    })
  }, [])

  return (
    <div className="main">
      <div className="main-parners-list-item">
        <div className="main-parners-list-item-image">
          <img src={state} className="main-parners-list-item-img" alt="" />
        </div>
        <div className="main-parners-list-item-title">{text.title}</div>
        <div className="main-parners-list-item-desc">{text.desc}</div>
        <a href={text.link} className="main-parners-list-item-link">
          <div className="main-parners-list-item-link-title">Website</div>
          <img src={arrow} alt="" className="main-parners-list-item-link-arrow"/>
        </a>
      </div>
    </div>
  );
}

export default PartnersItem;