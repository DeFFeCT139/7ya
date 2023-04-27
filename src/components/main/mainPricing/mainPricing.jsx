import TwoButton from "../../UI/buttons/twoButton/twoButton";
import img from '../../../image/Vector (13).svg'


function MainPricing() {
  const goLink = () => {
    document.getElementById('contacts').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  return (
    <div id="pricing" className="main-pricing padd-block">
      <div className="conteiner">
        <div className="main-pricing-inner">
          <div className="main-pricing-left">
            <div className="main-pricing-left-title">
              <div className="title">Pricing</div>
            </div>
            <div className="desc">During the years of work we got convinced that its not possible to satisfy all 3 main demands of a customer at the same time, like High Quality in a Short Time for a Low Cost. So we are using “Iron Triangle” during negotiations and planning.</div>
            <div className="main-pricing-btn">
              <TwoButton onClick={goLink} dataDa={".main-pricing-inner,640"} text={'Get in touch'}/>
            </div>
          </div>
          <div className="main-pricing-right">
            <img className='main-pricing-right-img' src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPricing;