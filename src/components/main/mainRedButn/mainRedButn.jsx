import OneButton from "../../UI/buttons/oneButton/oneButton";

function MainRedBtn() {
  const goLink = () => {
    document.getElementById('contacts').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  return (
    <div id="pricing" className="main-pricing padd-block">
      <div className="conteiner">
        <div className="main-contact-redButton">
          <OneButton className={'redBtn'} text={'Red button'}/>
          <div className="main-contact-redButton-desc desc">Kindly ask You to not click on this button, its from<br/>the old website and we dont know what is it<br/>connected to.<br/>So please be wise and dont click on it. It maybe<br/>connected to some critical component, so please<br/>keep the cursor away from it. Thank You.<br/>© Developers.</div>
        </div>
      </div>
    </div>
  );
}

export default MainRedBtn;