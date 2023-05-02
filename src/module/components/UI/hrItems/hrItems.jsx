import img from '../../../image/Rectangle 4.png'

function HrItems({text}) {
  return (
    <div className="main">
      <div className="main-hr-list-item">
        <div className="main-hr-list-item-image">
          <img src={img} className='main-hr-list-item-img' alt="" />
        </div>
        <div className="main-hr-list-item-name">{text.name}</div>
          <div className="main-hr-list-item-title">{text.prof}</div>
          <div className="main-hr-list-item-desc">{text.desc}</div>
          <a href="/" className='main-hr-list-cv'>More info</a>
       </div>
    </div>
  );
}

export default HrItems;