import AddPhoto from "../../components/UI/addPhoto/addPhoto";
import ButtonBack from "../../components/UI/buttonBack/buttonBack";
import ButtonSave from "../../components/UI/buttonSave/buttonSave";
import Input from "../../components/UI/input/input";

function CustomersSettings() {
  return (
    <div className="CustomersSettings pageAdmin">
      <div className="pageAdmin-title">Customers</div>
      <div className="pageAdmin-content">
        <ButtonBack/>
        <AddPhoto marginTop={'72px'}/>
        <Input marginTop={"46px"} name={'Company website'}/>
        <ButtonSave marginTop={"56px"}/>
      </div>
    </div>
  );
}

export default CustomersSettings;