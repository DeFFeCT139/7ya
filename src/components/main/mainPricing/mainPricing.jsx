import TwoButton from "../../UI/buttons/twoButton/twoButton";
import img from '../../../image/Vector.png'


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
            <div className="desc">Over the years of work, we have come to the conclusion that it's impossible to combine all 3 basic requirements of the customer, like: High Quality in a Short Time for a Low Cost. Therefore, we use the Iron Triangle during negotiations and planning.</div>
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