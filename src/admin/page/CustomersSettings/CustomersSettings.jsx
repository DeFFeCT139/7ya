import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../components/features/page";
import AddPhoto from "../../components/UI/addPhoto/addPhoto";
import ButtonBack from "../../components/UI/buttonBack/buttonBack";
import ButtonSave from "../../components/UI/buttonSave/buttonSave";
import Input from "../../components/UI/input/input";
import { child, get, getDatabase, ref, set } from "firebase/database";

function CustomersSettings() {
  const dispach = useDispatch()

  let item = useSelector((state) => state.item.item)

  const save = () => {
    let link = document.getElementById('inputc').value
    if (link !== '') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Customers/mas/`)).then((snapshot) => {
        let data = snapshot.val()
        const db = getDatabase();
        set(ref(db, `Customers/mas/${data.length}`), {
          title: 'cascasc',
          edit: 'editC',
          link: link
        });
      })
      dispach(setPage('Customers'))
    }
  }

  return (
    <div className="CustomersSettings pageAdmin">
      <div className="pageAdmin-title">Customers</div>
      <div className="pageAdmin-content">
        <ButtonBack onClick={() => dispach(setPage('Customers'))}/>
        <AddPhoto marginTop={'72px'}/>
        <Input id={'inputc'} marginTop={"46px"} name={'Company website'}/>
        <ButtonSave onClick={save} marginTop={"56px"}/>
      </div>
    </div>
  );
}

export default CustomersSettings;