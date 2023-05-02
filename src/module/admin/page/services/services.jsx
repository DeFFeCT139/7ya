import { useEffect, useState } from "react";
import ListItemAdmin from "../../components/UI/listItem/listItem";
import { getDatabase, ref, onValue,} from "firebase/database";
import NewItem from "../../components/UI/newItem/newItem";
import { useDispatch } from "react-redux";
import { setPage } from "../../../components/features/page";
import { setItem } from "../../../components/features/item";


function Services({props}) {

  let dispatch = useDispatch()

  const [state, setState] = useState({title:'Services', mas:[]})

  useEffect(() => {
    getState()
  },[props])

  const getState = () =>{
    const db = getDatabase();
    const starCountRef = ref(db, `${props}/`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      setState(data)
    })
  }

  const newItems = () => {
    dispatch(setPage(state.mas[0].edit))
    dispatch(setItem('new'))
  }

  return (
    <div className="services pageAdmin">
      <NewItem onClick={newItems}/>
      <div className="pageAdmin-title">{state.title}</div>
      <div className="pageAdmin-listItems">
       {state.mas.map((item, index)=>
        <ListItemAdmin title={state.title} props={item} index={index} key={index}/>
       )}
      </div>
    </div> 
  );
}

export default Services;