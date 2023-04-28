import ButtonSave from "../../../../components/UI/buttonSave/buttonSave";
import Textarea from "../../../../components/UI/textarea/textarea";

function Skills() {
  return (
    <div className="Skills">
      <Textarea name={'Description'} marginTop={'34px'}/>
      <ButtonSave marginTop={'88px'}/>
    </div>
  );
}

export default Skills;