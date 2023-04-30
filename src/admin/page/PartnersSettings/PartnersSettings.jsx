import { useDispatch, useSelector } from "react-redux";
import AddPhoto from "../../components/UI/addPhoto/addPhoto";
import ButtonBack from "../../components/UI/buttonBack/buttonBack";
import ButtonSave from "../../components/UI/buttonSave/buttonSave";
import Input from "../../components/UI/input/input";
import Textarea from "../../components/UI/textarea/textarea";
import { setPage } from "../../../components/features/page";
import { child, get, getDatabase, ref, set } from "firebase/database";

function PartnersSettings() {
  const dispach = useDispatch()

  let item = useSelector((state) => state.item.item)

  const save = () => {
    let desc = document.getElementById('textp').value
    let title = document.getElementById('inputp').value
    let link = document.getElementById('inputp2').value
    if (desc !== '' && title !== '' && link !== '') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Partners/mas/`)).then((snapshot) => {
        let data = snapshot.val()
        const db = getDatabase();
        set(ref(db, `Partners/mas/${data.length}`), {
          desc: desc,
          title: title,
          edit: 'editP',
          link: link
        });
      })
      dispach(setPage('Partners'))
    }
  }

  return (
    <div className="PartnersSettings pageAdmin">
      <div className="pageAdmin-title">Partners</div>
      <div className="pageAdmin-content">
        <ButtonBack onClick={() => dispach(setPage('Partners'))}/>
        <AddPhoto marginTop={'32px'}/>
        <Input id={'inputp'} marginTop={"32px"} name={'Company name'}/>
        <Textarea id={'textp'} marginTop={"24px"} name={'Description'}/>
        <Input id={'inputp2'} marginTop={"24px"} name={'Company website'}/>
        <ButtonSave onClick={save} marginTop={"40px"}/>
      </div>
    </div>
  );
}

export default PartnersSettings;