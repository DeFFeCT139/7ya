import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import LeftPanelAdmin from "../../components/leftPanel/leftPanelAdmin"
import Services from "../services/services"
import ServicesSettings from "../ServicesSettings/ServicesSettings"
import PartnersSettings from "../PartnersSettings/PartnersSettings"
import CustomersSettings from "../CustomersSettings/CustomersSettings"
import CVSettings from "../CVSettings/CVSettings"

function AdminHome() {
  const [state, setState] = useState()
  let her = useSelector((state) => state.page.page)

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
      <div className="admin-login">
        <LeftPanelAdmin/>
        {state}
      </div>
    </div>
  );
}

export default AdminHome;