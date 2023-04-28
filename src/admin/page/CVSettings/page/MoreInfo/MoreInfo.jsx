import AddPhoto from "../../../../components/UI/addPhoto/addPhoto";
import ButtonFile from "../../../../components/UI/buttonFile/buttonFile";
import ButtonSave from "../../../../components/UI/buttonSave/buttonSave";
import Input from "../../../../components/UI/input/input";

function MoreInfo() {
  return (
    <div className="MoreInfo">
      <AddPhoto marginTop={'56px'}/>
      <Input name={'Name'} marginTop={'32px'}/>
      <Input name={'Profession'} marginTop={'24px'}/>
      <div style={{marginTop:'24px'}} className="pageAdmin-btns">
        <ButtonFile name={'VCF file'}/>
        <ButtonFile marginLeft={'28px'} name={'CV file'}/>
        <ButtonFile marginLeft={'28px'} name={'Reference'}/>
      </div>
      <ButtonSave marginTop={'72px'}/>
    </div>
  );
}

export default MoreInfo;