import Input from "../../components/UI/input/input";
import logo from '../../image/Group 12.svg'

function AdminLogin({onClick}) {


  return (
    <div className="Admin-login">
      <div className="Admin-login-block">
        <div className="Admin-login-block-logo">
          <img src={logo} alt="" />
          <div className="Admin-login-block-logo-title">Admin Panel</div>
        </div>
        <div className="admin-login-inputs">
          <Input id={'inputLog'} className={'Admin-login-block-input'} name={'Login'}/>
          <Input type={'password'} id={'inputPas'} marginTop={'32px'} className={'Admin-login-block-input'} name={'Password'}/>
        </div>
        <div onClick={onClick} className="Admin-login-block-btn">Log in</div>
        <a className="Admin-login-block-link" href="https://pingwing.ru">by pingwing.ru</a>
      </div>
    </div>
  );
}

export default AdminLogin;