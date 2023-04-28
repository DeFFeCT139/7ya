import { useEffect, useState } from "react";
import TwoButton from "../../UI/buttons/twoButton/twoButton";
import ServicesItem from "../../UI/servicesItem/servicesItem";
import { getDatabase, ref, onValue} from "firebase/database";

function MainServices() {

  const [list, setList] = useState([])

  useEffect(()=>{
    getList()
  }, [])

  const getList = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'Services/mas/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setList(data)
    });
  }

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
            </div>
          </div>
          <div className="main-services-list">
            {list.map((item, index) => 
              <ServicesItem text={item} index={index} key={index}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServices;