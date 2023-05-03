import { useDispatch, useSelector } from "react-redux";
import AddPhoto from "../../../../components/UI/addPhoto/addPhoto";
import ButtonFile from "../../../../components/UI/buttonFile/buttonFile";
import ButtonSave from "../../../../components/UI/buttonSave/buttonSave";
import Input from "../../../../components/UI/input/input";
import { setName, setCV, setLink, setProf, setImg, setContact, setSoc, setDesc, setRef, setVSF } from "../../../../../components/features/cv";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { setPage } from "../../../../../components/features/page";
import { useEffect, useState } from "react";
import { doonloadUrl } from "../../../PartnersSettings/doonloadImg";
import { uploadFile } from "../../../../components/UI/addPhoto/upload";
import { uploadRefFile } from "./doonloadFile";


function MoreInfo() {
  
  let dispach = useDispatch()
  let contact = useSelector((state) => state.cv.contact)
  let desc = useSelector((state) => state.cv.desc)
  let name = useSelector((state) => state.cv.name)
  let prof = useSelector((state) => state.cv.prof)
  let title = useSelector((state) => state.cv.title)
  let edit = useSelector((state) => state.cv.edit)
  let link = useSelector((state) => state.cv.link)
  let soc = useSelector((state) => state.cv.soc)
  let img = useSelector((state) => state.cv.img)
  let VSF = useSelector((state) => state.cv.VSF)
  let Ref = useSelector((state) => state.cv.Ref)
  let CV = useSelector((state) => state.cv.CV)

  const [state, setState] = useState('')

  let item = useSelector((state) => state.item.item)
  const [stateIMg, setStateIMg] = useState(null)
  const [stateCV, setstateCV] = useState(null)
  const [stateVFC, setstateVFC] = useState(null)
  const [stateRef, setstateRef] = useState(null)


  useEffect(() => {
    getValue(item)
  },[name, prof])

  
  const getValue = (item) => {
    if (item.substr(0, 4) === 'edit') {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `CV/mas/${item.substr(4, 10000)}`)).then((snapshot) => {
        let data = snapshot.val()
        setState({
          name: name,
          prof: prof,
          link: link,
          img:img,
          CV:  CV,
          VSF: VSF,
          Ref: Ref
        })
        if (img === null || img === data.img || name === null) {
          doonloadUrl(data) 
          if (name === null || name === data.name) {
            setState(data)
          } else {
            setState({
              name: name,
              prof: prof,
              link: link,
              img:img,
              CV:  CV,
              VSF: VSF,
              Ref: Ref
            })
          }
        } else {
          doonloadUrl({img:img})
          if (name === null || name === data.name) {
            setState(data)
          } else {
            setState({
              name: name,
              prof: prof,
              link: link,
              img:img,
              CV: CV,
              VSF: VSF,
              Ref: Ref 
            })
          }
        }
      }) 
    } else {
      doonloadUrl({img:img})
      setState({
        name: name,
        prof: prof,
        link: link,
        img:img,
        CV: CV,
        VSF: VSF,
        Ref: Ref 
      })
    }
  }

  const save = () => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `CV/mas/`)).then((snapshot) => {
        let data = snapshot.val()
        const db = getDatabase();
        if (item.substr(0, 4) === 'edit') {
          console.log(CV, VSF, Ref)
          set(ref(db, `CV/mas/${item.substr(4, 10000)}`), {
            contact: contact,
            desc: desc,
            name: name,
            prof: prof,
            title: title,
            edit: edit,
            link: link,
            soc: soc,
            img: stateIMg === null? img : stateIMg.name,
            CV: stateCV === null? CV : stateCV.name,
            VSF: stateVFC === null? VSF : stateVFC.name,
            Ref: stateRef === null? Ref : stateRef.name
          });
        } else if (item === 'new'){
          set(ref(db, `CV/mas/${data.length}`), {
            contact: contact,
            desc: desc,
            name: name,
            prof: prof,
            title: title,
            edit: edit,
            link: link,
            soc: soc,
            img: stateIMg.name === null? img : stateIMg.name,
            CV: stateCV.name === null? CV : stateCV.name,
            VSF: stateVFC.name === null? VSF : stateVFC.name,
            Ref: stateRef.name === null? Ref : stateRef.name
          });
        }
      })
      dispach(setContact(['/','/','/','/']))
      dispach(setName(''))
      dispach(setProf(''))
      dispach(setImg(null))
      dispach(setLink(''))
      dispach(setSoc(['/','/','/','/', '/']))
      dispach(setDesc(''))
      dispach(setPage('CV'))
      uploadFile(stateIMg)
  }


  const setPhoto = (e) => {
    var src = URL.createObjectURL(e.target.files[0])
    document.getElementById('img12').style.backgroundImage = `url(${src})`
    setStateIMg(e.target.files[0])
    uploadFile(e.target.files[0])
  }

  const setVFC1 = (e) => {
    uploadRefFile(e.target.files[0])
    setstateVFC(e.target.files[0])
    dispach(setVSF(e.target.files[0].name))
    document.getElementById('VCFfile1').classList.add('fileActive')
  }

  const setRef1 = (e) => {
    uploadRefFile(e.target.files[0])
    document.getElementById('Reference1').classList.add('fileActive')
    setstateRef(e.target.files[0])
    dispach(setRef(e.target.files[0].name))
  }

  const setCV1 = (e) => {
    uploadRefFile(e.target.files[0])
    setstateCV(e.target.files[0])
    document.getElementById('CVfile1').classList.add('fileActive')
    dispach(setCV(e.target.files[0].name))
  }

  return (
    <div className="MoreInfo">
      <AddPhoto onChenge={(e) => {
        dispach(setImg(e.target.files[0].name))
        setPhoto(e)
      }} marginTop={'56px'}/>
      <Input defoluteValue={state.link} onChange={(e) => dispach(setLink(e.target.value))} name={'Page Link'} marginTop={'32px'}/>
      <Input defoluteValue={state.name} onChange={(e) => dispach(setName(e.target.value))} name={'Name'} marginTop={'24px'}/>
      <Input defoluteValue={state.prof} onChange={(e) => dispach(setProf(e.target.value))} name={'Profession'} marginTop={'24px'}/>
      <div style={{marginTop:'24px'}} className="pageAdmin-btns">
        <ButtonFile onChange={(e) => setVFC1(e)} name={'VCF file'}/>
        <ButtonFile onChange={(e) => setCV1(e)} marginLeft={'28px'} name={'CV file'}/>
        <ButtonFile onChange={(e) => setRef1(e)} marginLeft={'28px'} name={'Reference'}/>
      </div>
      <ButtonSave onClick={save} marginTop={'72px'}/>
    </div>
  );
}

export default MoreInfo;