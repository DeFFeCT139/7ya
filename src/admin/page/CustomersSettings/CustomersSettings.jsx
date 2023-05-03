import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../components/features/page";
import AddPhoto from "../../components/UI/addPhoto/addPhoto";
import ButtonBack from "../../components/UI/buttonBack/buttonBack";
import ButtonSave from "../../components/UI/buttonSave/buttonSave";
import Input from "../../components/UI/input/input";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { uploadFile } from "../../components/UI/addPhoto/upload";
import { doonloadUrl } from "../PartnersSettings/doonloadImg";

function CustomersSettings() {
  const dispach = useDispatch()

  const [stateIMg, setStateIMg] = useState(null)
  const [state, setState] = useState('')

  let item = useSelector((state) => state.item.item)

  useEffect(() => {
    getValue(item)
  },[])

  const getValue = (item) => {
    if (item.substr(0, 4) === 'edit') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Customers/mas/${item.substr(4, 10000)}`)).then((snapshot) => {
        let data = snapshot.val()
        doonloadUrl(data)
        setState(data)
      })
    }
  }

  const save = () => {
    let link = document.getElementById('inputc').value
    if (link !== '') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Customers/mas/`)).then((snapshot) => {
        let data = snapshot.val()
        const db = getDatabase();
        if (item.substr(0, 4) === 'edit') {
          set(ref(db, `Customers/mas/${item.substr(4, 10000)}`), {
            title: 'cascasc',
            edit: 'editC',
            link: link,
            img: stateIMg.name === null? state.img : stateIMg.name
          });
        } else if (item === 'new'){
          set(ref(db, `Customers/mas/${data.length}`), {
            title: 'cascasc',
            edit: 'editC',
            link: link,
            img: stateIMg.name 
          });
        }
      })
      dispach(setPage('Customers'))
      uploadFile(stateIMg)
    }
  }

  const setPhoto = (e) => {
    var src = URL.createObjectURL(e.target.files[0])
    document.getElementById('img12').style.backgroundImage = `url(${src})`
    setStateIMg(e.target.files[0])
  }

  return (
    <div className="CustomersSettings pageAdmin">
      <div className="pageAdmin-title">Customers</div>
      <div className="pageAdmin-content">
        <ButtonBack onClick={() => dispach(setPage('Customers'))}/>
        <AddPhoto onChenge={(e) => setPhoto(e)} marginTop={'72px'}/>
        <Input defoluteValue={state.link} id={'inputc'} marginTop={"46px"} name={'Company website'}/>
        <ButtonSave onClick={save} marginTop={"56px"}/>
      </div>
    </div>
  );
}

export default CustomersSettings;