import TwoButton from "../../UI/buttons/twoButton/twoButton";
import ServicesItem from "../../UI/servicesItem/servicesItem";

function MainServices() {

  let item = [
    {title: 'Service 1', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {title: 'Service 1', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {title: 'Service 1', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {title: 'Service 1', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {title: 'Service 1', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '},
    {title: 'Service 1', desc: 'Lorem ipsum dolor sit amet consectetur. Tempor adipiscing vulputate id sed risus venenatis fusce pharetra faucibus. '}
  ]

  const goLink = () => {
    document.getElementById('contacts').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div id="services" className="main-services color-bclokblack padd-block">
      <div className="conteiner">
        <div className="main-services-inner">
          <div className="main-services-content">
            <div className="main-services-content-left">
              <div className="main-services-content-left-title">
                <div className="title">Services</div>
                <TwoButton onClick={goLink}  dataDa={'.main-services-inner,640'} text={'Get in touch'}/>
              </div>
              <div className="main-services-content-left-title-desc desc">We have experience since 2004 and guarantee professional and high-quality performance of services</div>
            </div>
          </div>
          <div className="main-services-list">
            {item.map((item, index) => 
              <ServicesItem text={item} index={index} key={index}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServices;