import { useDispatch, useSelector } from 'react-redux';
import ButtonBack from '../../components/UI/buttonBack/buttonBack';
import ButtonSave from '../../components/UI/buttonSave/buttonSave';
import Input from '../../components/UI/input/input';
import Textarea from '../../components/UI/textarea/textarea';
import { setPage } from '../../../components/features/page';
import { child, get, getDatabase, ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';

function ServicesSettings() {
  const dispach = useDispatch()

  const [state, setState] = useState('')

  let item = useSelector((state) => state.item.item)

  useEffect(() => {
    getValue(item)
  },[])

  const getValue = (item) => {
    if (item.substr(0, 4) === 'edit') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Services/mas/${item.substr(4, 10000)}`)).then((snapshot) => {
        let data = snapshot.val()
        setState(data)
      })
    }
  }

  const save = () => {
    let desc = document.getElementById('textS').value
    let title = document.getElementById('inputS').value
    if (desc !== '' && title !== '') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Services/mas/`)).then((snapshot) => {
        let data = snapshot.val()
        const db = getDatabase();
        if (item.substr(0, 4) === 'edit') {
          set(ref(db, `Services/mas/${item.substr(4, 10000)}`), {
            desc: desc,
            title: title,
            edit: 'editS'
          });
        } else if (item === 'new'){
          set(ref(db, `Services/mas/${data.length}`), {
            desc: desc,
            title: title,
            edit: 'editS'
          });
        }
      })
      dispach(setPage('Services'))
    }
  }

  return (
    <div className="ServicesSettings pageAdmin">
      <div className="services">
        <div className="pageAdmin-title">Services</div>
        <div className="pageAdmin-content">
          <ButtonBack onClick={() => dispach(setPage('Services'))}/>
          <Input defoluteValue={state.title} id={'inputS'} name={'Title'} marginTop={'48px'}/>
          <Textarea defoluteValue={state.desc} id={'textS'} name={'Description'} marginTop={'24px'}/>
          <ButtonSave onClick={save} marginTop={'88px'} />
        </div>
      </div>
    </div>
  );
}

export default ServicesSettings;