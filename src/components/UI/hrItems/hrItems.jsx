import { useNavigate } from 'react-router-dom';
import img from '../../../image/Rectangle 4.png'

function HrItems({text, index}) {

  let route = useNavigate()

  let link = `${text.link}&${index}`


  return (
    <div className="main">
      <div className="main-hr-list-item">
        <div className="main-hr-list-item-image">
          <img src={img} className='main-hr-list-item-img' alt="" />
        </div>
        <div className="main-hr-list-item-name">{text.name}</div>
          <div className="main-hr-list-item-title">{text.prof}</div>
          <div className="main-hr-list-item-desc">{text.desc}</div>
          <div onClick={()=> route(`/7ya/${link}`)} className='main-hr-list-cv'>More info</div>
       </div>
    </div>
  );
}

export default HrItems;