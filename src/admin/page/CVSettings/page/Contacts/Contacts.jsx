import { useDispatch, useSelector } from "react-redux";
import ButtonSave from "../../../../components/UI/buttonSave/buttonSave";
import Input from "../../../../components/UI/input/input";
import { setContact } from "../../../../../components/features/cv";
import { setPage } from "../../../../../components/features/page";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";


function Contacts() {

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
        setState(data.contact)
      }) 
    } else {
      setState(contact)
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

  let mas = structuredClone(useSelector((state) => state.cv.contact))


  const getMas = (index, text) => {
    if (index === 0){
      if (text !== '') {
        if (mas[1] === '' || mas[1] === undefined || mas[1] === null) mas[1] = '/'
        if (mas[2] === '' || mas[2] === undefined || mas[2] === null) mas[2] = '/'
        if (mas[3] === '' || mas[3] === undefined || mas[3] === null) mas[3] = '/'
        mas[index] = text
        dispach(setContact(mas))
      }
    } else if (index === 1){
      if (text !== '') {
        if (mas[0] === '' || mas[0] === undefined || mas[0] === null) mas[0] = '/'
        if (mas[2] === '' || mas[2] === undefined || mas[2] === null) mas[2] = '/'
        if (mas[3] === '' || mas[3] === undefined || mas[3] === null) mas[3] = '/'
        mas[index] = text
        dispach(setContact(mas))
      }
    } else if (index === 2){
      if (text !== '') {
        if (mas[0] === '' || mas[0] === undefined || mas[0] === null) mas[0] = '/'
        if (mas[1] === '' || mas[1] === undefined || mas[1] === null) mas[1] = '/'
        if (mas[3] === '' || mas[3] === undefined || mas[3] === null) mas[3] = '/'
        mas[index] = text
        dispach(setContact(mas))
      }
    } else if (index === 3){
      if (text !== '') {
        if (mas[0] === '' || mas[0] === undefined || mas[0] === null) mas[0] = '/'
        if (mas[1] === '' || mas[1] === undefined || mas[1] === null) mas[1] = '/'
        if (mas[2] === '' || mas[2] === undefined || mas[2] === null) mas[2] = '/'
        mas[index] = text
        dispach(setContact(mas))
      }
    }
  }

  return (
    <div className="Contacts">
      <Input defoluteValue={state[0]} onChange={(e) => getMas(0, e.target.value)} marginTop={'34px'} name={'Mobile phone'}/>
      <Input defoluteValue={state[1]} onChange={(e) => getMas(1, e.target.value)} marginTop={'24px'} name={'Alternative phone'}/>
      <Input defoluteValue={state[2]} onChange={(e) => getMas(2, e.target.value)} marginTop={'24px'} name={'Email'}/>
      <Input defoluteValue={state[3]} onChange={(e) => getMas(3, e.target.value)} marginTop={'24px'} name={'Company website'}/>
      <ButtonSave onClick={save} marginTop={'48px'}/>
    </div>
  );
}

export default Contacts;