import arrow from '../../../image/Vector (12).svg'

function ServicesItem({text, index}) {
  const openCloused = (indexItem) => {
    let items = document.getElementsByClassName('main-services-list-item') 
    for (let index = 0; index < items.length; index++) {
      if (index === indexItem) {
        if (items[index].classList.contains('main-services-list-item-active') === true) {
          items[index].classList.remove('main-services-list-item-active')
          document.getElementById(`serv${indexItem}`).scrollIntoView({
            block: 'center'
          }) 
        } else {
          items[index].classList.add('main-services-list-item-active')
          document.getElementById(`serv${indexItem}`).scrollIntoView({
            block: 'center'
          }) 
        }
      } else {
        items[index].classList.remove('main-services-list-item-active')
      }
    }
  }
  return (
    <div id={`serv${index}`} onClick={() => openCloused(index)} className="main-services-list-item">
      <div className="main-services-list-item-top">
        <div className="main-services-list-item-top-title">{text.title}</div>
        <div className="main-services-list-item-top-arrow">
          <img className="main-services-list-item-top-arrow-img" src={arrow} alt="" />
        </div>
      </div>
      <div className="main-services-list-item-bottom">{text.desc}</div>
    </div>
  );
}

export default ServicesItem; 