import file from '../../../image/Vector (22).svg'


function ButtonFile({name, marginTop, marginLeft, onChange}) {

  const openFile = () => document.getElementById(`${name.replace(' ','')}`).click()

  return (
    <button id={`${name.replace(' ','')}1`} onClick={openFile} style={{marginTop: marginTop, marginLeft: marginLeft}} className="pageAdmin-addFile">
      <div className="pageAdmin-addFile-title">{name}</div>
      <div className="pageAdmin-inputerr">
        <input onChange={onChange} id={`${name.replace(' ','')}`} type="file" />
      </div>
      <img src={file} alt="" className="pageAdmin-addFile-img" />
    </button>
  );
}

export default ButtonFile;