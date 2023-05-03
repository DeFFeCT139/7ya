import { useDispatch, useSelector } from "react-redux";
import AddPhoto from "../../components/UI/addPhoto/addPhoto";
import ButtonBack from "../../components/UI/buttonBack/buttonBack";
import ButtonSave from "../../components/UI/buttonSave/buttonSave";
import Input from "../../components/UI/input/input";
import Textarea from "../../components/UI/textarea/textarea";
import { setPage } from "../../../components/features/page";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { uploadFile } from "../../components/UI/addPhoto/upload";
import { doonloadUrl } from "./doonloadImg";

function PartnersSettings() {
  const dispach = useDispatch()

  const [state, setState] = useState('')
  const [stateIMg, setStateIMg] = useState(null)

  let item = useSelector((state) => state.item.item)

  useEffect(() => {
    getValue(item)
  },[])

  const getValue = (item) => {
    if (item.substr(0, 4) === 'edit') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Partners/mas/${item.substr(4, 10000)}`)).then((snapshot) => {
        let data = snapshot.val()
        doonloadUrl(data)
        setState(data)
      })
    }
  }

  const save = () => {
    let desc = document.getElementById('textp').value
    let title = document.getElementById('inputp').value
    let link = document.getElementById('inputp2').value
    if (desc !== '' && title !== '' && link !== '') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Partners/mas/`)).then((snapshot) => {
        let data = snapshot.val()
        const db = getDatabase();
        if (item.substr(0, 4) === 'edit') {
          set(ref(db, `Partners/mas/${item.substr(4, 10000)}`), {
            desc: desc,
            title: title,
            edit: 'editP',
            link: link,
            img: stateIMg.name === null? state.img : stateIMg.name
          });
        } else if (item === 'new'){
          set(ref(db, `Partners/mas/${data.length}`), {
            desc: desc,
            title: title,
            edit: 'editP',
            link: link,
            img: stateIMg.name
          });
        }
      })
      dispach(setPage('Partners'))
      uploadFile(stateIMg)
    }
  }


  const setPhoto = (e) => {
      var src = URL.createObjectURL(e.target.files[0])
      document.getElementById('img12').style.backgroundImage = `url(${src})`
      setStateIMg(e.target.files[0])
  }

  return (
    <div className="PartnersSettings pageAdmin">
      <div className="pageAdmin-title">Partners</div>
      <div className="pageAdmin-content">
        <ButtonBack onClick={() => dispach(setPage('Partners'))}/>
        <AddPhoto onChenge={(e) => setPhoto(e)} marginTop={'32px'}/>
        <Input defoluteValue={state.title} id={'inputp'} marginTop={"32px"} name={'Company name'}/>
        <Textarea defoluteValue={state.desc} id={'textp'} marginTop={"24px"} name={'Description'}/>
        <Input defoluteValue={state.link} id={'inputp2'} marginTop={"24px"} name={'Company website'}/>
        <ButtonSave onClick={save} marginTop={"40px"}/>
      </div>
    </div>
  );
}

export default PartnersSettings;