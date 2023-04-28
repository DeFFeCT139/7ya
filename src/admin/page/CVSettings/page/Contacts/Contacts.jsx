import ButtonSave from "../../../../components/UI/buttonSave/buttonSave";
import Input from "../../../../components/UI/input/input";

function Contacts() {
  return (
    <div className="Contacts">
      <Input marginTop={'34px'} name={'Mobile phone'}/>
      <Input marginTop={'24px'} name={'Alternative phone'}/>
      <Input marginTop={'24px'} name={'Email'}/>
      <Input marginTop={'24px'} name={'Company website'}/>
      <ButtonSave marginTop={'48px'}/>
    </div>
  );
}

export default Contacts;