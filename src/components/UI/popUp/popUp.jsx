import img from '../../../image/Vector (5).svg'
import clouse from '../../../image/Vector (6).svg'

function PopUp() {

  const cloused = () => {
    document.getElementById('popUp').style.display = 'none'
    document.querySelector('html').style.overflow = 'auto'
  }

  return (
    <div id='popUp' className="popUp">
      <div className="popUp-inner">
        <div onClick={cloused} className="bg-popUp"></div>
        <div className="conteiner">
          <div className="popUp-block-inner">
            <div className="popUp-block">
              <div className="popUp-block-item">
                <img src={img} alt="" className="popUp-block-item-img" />
                <a href="tel:+372 58 330637" className="popUp-block-item-link">+372 58 330637</a>
              </div>
              <div className="popUp-block-item popUp-block-item-2">
                <img src={img} alt="" className="popUp-block-item-img " />
                <a href="tel:+47 94 1 49 007" className="popUp-block-item-link">+47 94 1 49 007</a>
              </div>
              <img src={clouse} onClick={cloused} className='popUp-block-clouse' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;