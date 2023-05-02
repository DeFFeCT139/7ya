import { useDispatch, useSelector } from "react-redux";
import { setDesc } from "../../../../../components/features/cv";
import ButtonSave from "../../../../components/UI/buttonSave/buttonSave";
import Textarea from "../../../../components/UI/textarea/textarea";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { setPage } from "../../../../../components/features/page";
import { useEffect, useState } from "react";


function Skills() {

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
        link: link,
        prof: prof,
        title: title,
        edit: edit,
        soc: soc
      })
    }
  }
  

  const save = () => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `CV/mas/`)).then((snapshot) => {
        let data = snapshot.val()
        const db = getDatabase();
        if (item.substr(0, 4) === 'edit') {
          set(ref(db, `CV/mas/${item.substr(4, 10000)}`), {
            contact: contact,
            desc: desc,
            name: name,
            prof: prof,
            title: title,
            edit: edit,
            link: link,
            soc: soc
          });
        } else if (item === 'new'){
          set(ref(db, `CV/mas/${data.length}`), {
            contact: contact,
            desc: desc,
            name: name,
            prof: prof,
            title: title,
            edit: edit,
            link: link,
            soc: soc
          });
        }
      })
      dispach(setPage('CV'))
  }

  return (
    <div className="Skills">
      <Textarea defoluteValue={state.desc} onChange={(e) => dispach(setDesc(e.target.value))} name={'Description'} marginTop={'34px'}/>
      <ButtonSave onClick={save} marginTop={'88px'}/>
    </div>
  );
}

export default Skills;