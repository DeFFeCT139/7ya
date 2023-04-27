import as from '../../../image/Group 18.png'
import OneButton from '../../UI/buttons/oneButton/oneButton';

function MainStart() {

  const goLink = () => {
    document.getElementById('contacts').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div id='start' className="main-start">
      <div className="start-blure">
        <div className="conteiner">
          <div className="main-start-inner">
            <div className="main-start-left">
              <div className="title">Troubleshooting <br/>since 2004</div>
              <div className="main-start-left-desc desc">7ya, led by Anatoly Suglobov, offers fish farming industry services since 2004 including troubleshooting, automation system repair, and project management for new or reconstructed buildings with a good reputation.</div>
              <div className="main-start-btn">
                <OneButton onClick={goLink} dataDa={".main-start-right,640"} text={'Get in touch'}/>
              </div>
            </div>
            <div className="main-start-right">
              <img className='main-start-img' src={as} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainStart;