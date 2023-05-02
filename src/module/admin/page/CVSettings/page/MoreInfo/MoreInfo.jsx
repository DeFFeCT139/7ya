import { useDispatch, useSelector } from "react-redux";
import AddPhoto from "../../../../components/UI/addPhoto/addPhoto";
import ButtonFile from "../../../../components/UI/buttonFile/buttonFile";
import ButtonSave from "../../../../components/UI/buttonSave/buttonSave";
import Input from "../../../../components/UI/input/input";
import { setName, setLink, setProf } from "../../../../../components/features/cv";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { setPage } from "../../../../../components/features/page";
import { useEffect, useState } from "react";


function MoreInfo() {
  
  let dispach = useDispatch()
  let contact = useSelector((state) => state.cv.contact)
  let desc = useSelector((state) => state.cv.desc)
  let name = useSelector((state) => state.cv.name)
  let prof = useSelector((state) => state.cv.prof)
  let title = useSelector((state) => state.cv.title)
  let edit = useSelector((state) => state.cv.edit)
  let link = useSelector((state) => state.cv.link)
  let soc = useSelector((state) => state.cv.soc)

  const [state, setState] = useState('')

  let item = useSelector((state) => state.item.item)

  useEffect(() => {
    getValue(item)
  },[])

  const getValue = (item) => {
    if (item.substr(0, 4) === 'edit') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `CV/mas/${item.substr(4, 10000)}`)).then((snapshot) => {
        let data = snapshot.val()
        setState(data)
      }) 
    } else {
      setState({
        contact: contact,
        desc: desc,
        name: name,
        prof: prof,
        title: title,
        edit: edit,
        link: link,
        soc: soc
      })
    }
  }

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
          link: link,
          soc: soc
        })
      })
      dispach(setPage('CV'))
  }

  return (
    <div className="MoreInfo">
      <AddPhoto marginTop={'56px'}/>
      <Input defoluteValue={state.link} onChange={(e) => dispach(setLink(e.target.value))} name={'Link Page'} marginTop={'32px'}/>
      <Input defoluteValue={state.name} onChange={(e) => dispach(setName(e.target.value))} name={'Name'} marginTop={'24px'}/>
      <Input defoluteValue={state.prof} onChange={(e) => dispach(setProf(e.target.value))} name={'Profession'} marginTop={'24px'}/>
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