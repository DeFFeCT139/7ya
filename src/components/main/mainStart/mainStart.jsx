import as from '../../../image/Group 18.png'
import OneButton from '../../UI/buttons/oneButton/oneButton';

function MainStart() {
  return (
    <div id='start' className="main-start">
      <div className="conteiner">
        <div className="main-start-inner">
          <div className="main-start-left">
            <div className="title">Title title title</div>
            <div className="desc">Lorem ipsum dolor sit amet consectetur.<br/>Tempor adipiscing vulputate id sed risus<br/>venenatis fusce pharetra faucibus. </div>
            <div className="main-start-btn">
              <OneButton dataDa={".main-start-right,640"} text={'Learn more'}/>
            </div>
          </div>
          <div className="main-start-right">
            <img className='main-start-img' src={as} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainStart;