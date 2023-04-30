import { useDispatch, useSelector } from 'react-redux';
import ButtonBack from '../../components/UI/buttonBack/buttonBack';
import ButtonSave from '../../components/UI/buttonSave/buttonSave';
import Input from '../../components/UI/input/input';
import Textarea from '../../components/UI/textarea/textarea';
import { setPage } from '../../../components/features/page';
import { child, get, getDatabase, ref, set } from 'firebase/database';

function ServicesSettings() {
  const dispach = useDispatch()

  let item = useSelector((state) => state.item.item)

  const save = () => {
    let desc = document.getElementById('textS').value
    let title = document.getElementById('inputS').value
    if (desc !== '' && title !== '') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `Services/mas/`)).then((snapshot) => {
        let data = snapshot.val()
        const db = getDatabase();
        set(ref(db, `Services/mas/${data.length}`), {
          desc: desc,
          title: title,
          edit: 'editS'
        });
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
          <Input id={'inputS'} name={'Title'} marginTop={'48px'}/>
          <Textarea id={'textS'} name={'Description'} marginTop={'24px'}/>
          <ButtonSave onClick={save} marginTop={'88px'} />
        </div>
      </div>
    </div>
  );
}

export default ServicesSettings;