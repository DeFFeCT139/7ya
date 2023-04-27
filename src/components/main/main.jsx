import MainContact from "./mainContact/mainContact";
import MainCostomers from "./mainCustomers/mainCostomers";
import MainHR from "./mainHR/mainHR";
import MainPartners from "./mainPartners/mainPartners";
import MainPricing from "./mainPricing/mainPricing";
import MainServices from "./mainSrvices/mainServices";
import MainStart from "./mainStart/mainStart";

function Main() {
  return (
    <div className="main">
      <MainStart/>
      <MainServices/>
      <MainHR/>
      <MainPricing/>
      <MainPartners/>
      <MainCostomers/>
      <MainContact/>
    </div>
  );
}

export default Main;