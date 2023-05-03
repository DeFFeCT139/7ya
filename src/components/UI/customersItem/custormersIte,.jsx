import { useEffect, useState } from 'react'
import img from '../../../image/Vector (14).svg'
import { getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../../index'

function CostomersItem({img}) {

  const [state, setState] = useState(null)

  useEffect(()=>{
    const imgref = ref(storage, `images/${img.img}`)
    getDownloadURL(imgref).then((url) => {
      setState(url)
    })
  }, [])

  return (
    <a href={img.link} className="main-costomers-list-item">
      <img className="main-costomers-list-item-img" src={state} alt="" />
    </a>
  );
}

export default CostomersItem;