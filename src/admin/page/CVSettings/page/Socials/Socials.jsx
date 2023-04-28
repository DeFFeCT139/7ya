import ButtonSave from "../../../../components/UI/buttonSave/buttonSave";
import Input from "../../../../components/UI/input/input";

function Socials() {
  return (
    <div className="Contacts">
      <Input marginTop={'34px'} name={'Telegram'}/>
      <Input marginTop={'24px'} name={'WhatsApp'}/>
      <Input marginTop={'24px'} name={'Instagram'}/>
      <Input marginTop={'24px'} name={'Linked In'}/>
      <ButtonSave marginTop={'48px'}/>
    </div>
  );
}

export default Socials;