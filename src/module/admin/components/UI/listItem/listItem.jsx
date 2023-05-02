import { useDispatch } from "react-redux";
import { setPage } from "../../../../components/features/page";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { settings } from "./settiengs/settings";
import { setItem } from "../../../../components/features/item";

function ListItemAdmin({props, title, index}) {
  const dispach = useDispatch()

  const dublicate = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `${title}/mas/`)).then((snapshot) => {
      let data = snapshot.val()
      const db = getDatabase();
      set(ref(db, `${title}/mas/${data.length}`), settings(title, props,index));
    })
  }

  const delite = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `${title}/mas/`)).then((snapshot) => {
      let data = snapshot.val()
      let mas = data.filter((item, index2) => index2 !== index)
      const db = getDatabase();
      set(ref(db, `${title}/mas/`), mas);
    })
  }

  return (
    <div className="pageAdmin-listItem">
      <div className="pageAdmin-listItem-title">{props.title}</div>
      <div className="pageAdmin-listItem-btns">
        <div onClick={dublicate} className="pageAdmin-listItem-btn">Dublicate</div>
        <div onClick={() => {
          dispach(setPage(props.edit))
          dispach(setItem(`edit${index}`))  
        }} className="pageAdmin-listItem-btn">Edit</div>
        <div onClick={delite} className="pageAdmin-listItem-btn">Delete</div>
      </div>
    </div>
  );
}

export default ListItemAdmin;