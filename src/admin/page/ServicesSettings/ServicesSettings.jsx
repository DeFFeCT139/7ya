import ButtonBack from '../../components/UI/buttonBack/buttonBack';
import ButtonSave from '../../components/UI/buttonSave/buttonSave';
import Input from '../../components/UI/input/input';
import Textarea from '../../components/UI/textarea/textarea';

function ServicesSettings() {
  return (
    <div className="ServicesSettings pageAdmin">
      <div className="services">
        <div className="pageAdmin-title">Services</div>
        <div className="pageAdmin-content">
          <ButtonBack/>
          <Input name={'Title'} marginTop={'48px'}/>
          <Textarea name={'Description'} marginTop={'24px'}/>
          <ButtonSave marginTop={'88px'} />
        </div>
      </div>
    </div>
  );
}

export default ServicesSettings;