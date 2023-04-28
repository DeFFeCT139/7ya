import LeftPanelAdmin from "./components/leftPanel/leftPanelAdmin";
import './css/style.css'
import CVSettings from "./page/CVSettings/CVSettings";
import CustomersSettings from "./page/CustomersSettings/CustomersSettings";
import PartnersSettings from "./page/PartnersSettings/PartnersSettings";
import ServicesSettings from "./page/ServicesSettings/ServicesSettings";
import Services from "./page/services/services";

function Admin() {
  return (
    <div className="Admin">
      <LeftPanelAdmin/>
      <CVSettings/>
    </div>
  );
}

export default Admin;