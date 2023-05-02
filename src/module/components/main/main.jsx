import { Link } from "react-router-dom";
import MainContact from "./mainContact/mainContact";
import MainCostomers from "./mainCustomers/mainCostomers";
import MainHR from "./mainHR/mainHR";
import MainPartners from "./mainPartners/mainPartners";
import MainPricing from "./mainPricing/mainPricing";
import MainRedBtn from "./mainRedButn/mainRedButn";
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
      <MainRedBtn/>
      <div className="main-bottom">
        <a href='https://pingwing.ru' className="footer-right-powered">Powered by pingwing.ru</a>
        <Link to={'/7ya/admin'} className="footer-right-powered">Powered by pingwing.ru</Link>
      </div>
    </div>
  );
}

export default Main;