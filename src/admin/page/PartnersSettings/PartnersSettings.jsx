import AddPhoto from "../../components/UI/addPhoto/addPhoto";
import ButtonBack from "../../components/UI/buttonBack/buttonBack";
import ButtonSave from "../../components/UI/buttonSave/buttonSave";
import Input from "../../components/UI/input/input";
import Textarea from "../../components/UI/textarea/textarea";

function PartnersSettings() {
  return (
    <div className="PartnersSettings pageAdmin">
      <div className="pageAdmin-title">Partners</div>
      <div className="pageAdmin-content">
        <ButtonBack/>
        <AddPhoto marginTop={'32px'}/>
        <Input marginTop={"32px"} name={'Company name'}/>
        <Textarea marginTop={"24px"} name={'Description'}/>
        <Input marginTop={"24px"} name={'Company website'}/>
        <ButtonSave marginTop={"40px"}/>
      </div>
    </div>
  );
}

export default PartnersSettings;