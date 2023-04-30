import { useDispatch, useSelector } from "react-redux";
import ButtonSave from "../../../../components/UI/buttonSave/buttonSave";
import Input from "../../../../components/UI/input/input";
import { setSoc } from "../../../../../components/features/cv";
import { setPage } from "../../../../../components/features/page";
import { child, get, getDatabase, ref, set } from "firebase/database";

function Socials() {

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

  let mas = structuredClone(useSelector((state) => state.cv.soc))


  const getMas = (index, text) => {
    if (index === 0){
      mas[index] = text
      dispach(setSoc(mas))
    } else if (index === 1){
      mas[index] = text
      dispach(setSoc(mas))
    } else if (index === 2){
      mas[index] = text
      dispach(setSoc(mas))
    } else if (index === 3){
      mas[index] = text
      dispach(setSoc(mas))
    }
  }

  return (
    <div className="Contacts">
      <Input onChange={(e) => getMas(0, e.target.value)} marginTop={'34px'} name={'Telegram'}/>
      <Input onChange={(e) => getMas(1, e.target.value)} marginTop={'24px'} name={'WhatsApp'}/>
      <Input onChange={(e) => getMas(2, e.target.value)} marginTop={'24px'} name={'Instagram'}/>
      <Input onChange={(e) => getMas(3, e.target.value)} marginTop={'24px'} name={'Linked In'}/>
      <ButtonSave onClick={save} marginTop={'48px'}/>
    </div>
  );
}

export default Socials;