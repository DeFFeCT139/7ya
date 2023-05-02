import arrow from '../../../image/Arrow 1.svg'
import img from '../../../image/image 6.svg'

function PartnersItem({text}) {

  return (
    <div className="main">
      <div className="main-parners-list-item">
        <div className="main-parners-list-item-image">
          <img src={img} className="main-parners-list-item-img" alt="" />
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