import OneButton from "../../UI/buttons/oneButton/oneButton";
import video from '../../../image/0504.mp4'

function MainRedBtn() {
  
  const openVideo = () => {
    document.getElementById('video').style.display = 'block'
    setTimeout(() => {
      document.getElementById('video').play()
    }, 500);
  }

  return (
    <div id="pricing" className="main-pricing padd-block">
      <div className="conteiner red-conteiner">
        <div className="main-contact-redButton">
          <OneButton onClick={openVideo} className={'redBtn'} text={'Red button'}/>
          <div className="main-contact-redButton-desc desc">Kindly ask You to not click on this button, its from<br/>the old website and we dont know what is it<br/>connected to.<br/>So please be wise and dont click on it. It maybe<br/>connected to some critical component, so please<br/>keep the cursor away from it. Thank You.<br/>© Developers.</div>
        </div>
        <div  className="video">
          <video id="video" className="video-block" >
            <source type="video/mp4" src={video}/>
          </video>
        </div>
      </div>
    </div>
  );
}

export default MainRedBtn;