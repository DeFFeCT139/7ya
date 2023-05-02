import { useSelector } from "react-redux";
import LeftPanelAdmin from "./components/leftPanel/leftPanelAdmin";
import './css/style.css'
import CVSettings from "./page/CVSettings/CVSettings";
import CustomersSettings from "./page/CustomersSettings/CustomersSettings";
import PartnersSettings from "./page/PartnersSettings/PartnersSettings";
import ServicesSettings from "./page/ServicesSettings/ServicesSettings";
import Services from "./page/services/services";
import { useEffect, useState } from "react";

function Admin() {

  let her = useSelector((state) => state.page.page)

  const [state, setState] = useState()

  useEffect(()=>{
    getContent()
  },[her])

  const getContent = () => {
    if (her === 'editCV') {
      setState(<CVSettings/>)
    } else if (her === 'editC') {
      setState(<CustomersSettings/>)
    } else if (her === 'editP') {
      setState(<PartnersSettings/>)
    } else if (her === 'editS') {
      setState(<ServicesSettings/>)
    } else {
      setState(<Services props={her}/>)
    }
  }

  return (
    <div className="Admin">
      <LeftPanelAdmin/>
      {state}
    </div>
  );
}

export default Admin;