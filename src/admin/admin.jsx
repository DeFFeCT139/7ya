import './css/style.css'
import { useEffect, useState } from "react";
import AdminLogin from "./page/login/login";
import AdminHome from "./page/adminHome/adminHome";

function Admin({title}) {
  const [state, setState] = useState()
  const login = () =>{
    let log = document.getElementById('inputLog').value
    let pas = document.getElementById('inputPas').value
    if (log === 'admin' && pas === '12345') {
      setStateLog(<AdminHome/>)
    }
  }

  const [stateLog, setStateLog] = useState(<AdminLogin onClick={login}/>)


  useEffect(()=>{
    document.title = title
  },)


  return (
    <div className="Admin">
      {stateLog}
    </div>
  );
}

export default Admin;