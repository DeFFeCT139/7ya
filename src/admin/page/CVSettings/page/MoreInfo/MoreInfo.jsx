import { useDispatch, useSelector } from "react-redux";
import AddPhoto from "../../../../components/UI/addPhoto/addPhoto";
import ButtonFile from "../../../../components/UI/buttonFile/buttonFile";
import ButtonSave from "../../../../components/UI/buttonSave/buttonSave";
import Input from "../../../../components/UI/input/input";
import { setName, setProf } from "../../../../../components/features/cv";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { setPage } from "../../../../../components/features/page";


function MoreInfo() {
  
  let dispach = useDispatch()
  let contact = useSelector((state) => state.cv.contact)
  let desc = useSelector((state) => state.cv.desc)
  let name = useSelector((state) => state.cv.name)
  let prof = useSelector((state) => state.cv.prof)
  let title = useSelector((state) => state.cv.title)
  let edit = useSelector((state) => state.cv.edit)
  let soc = useSelector((state) => state.cv.soc)

  const save = () => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `CV/mas/`)).then((snapshot) => {
        let data = snapshot.val()
        const db = getDatabase();
        set(ref(db, `CV/mas/${data.length}`), {
          contact: contact,
          desc: desc,
          name: name,
          prof: prof,
          title: title,
          edit: edit,
          soc: soc
        })
      })
      dispach(setPage('CV'))
  }

  return (
    <div className="MoreInfo">
      <AddPhoto marginTop={'56px'}/>
      <Input onChange={(e) => dispach(setName(e.target.value))} name={'Name'} marginTop={'32px'}/>
      <Input onChange={(e) => dispach(setProf(e.target.value))} name={'Profession'} marginTop={'24px'}/>
      <div style={{marginTop:'24px'}} className="pageAdmin-btns">
        <ButtonFile name={'VCF file'}/>
        <ButtonFile marginLeft={'28px'} name={'CV file'}/>
        <ButtonFile marginLeft={'28px'} name={'Reference'}/>
      </div>
      <ButtonSave onClick={save} marginTop={'72px'}/>
    </div>
  );
}

export default MoreInfo;