import file from '../../../image/Vector (22).svg'


function ButtonFile({name, marginTop, marginLeft}) {
  return (
    <button style={{marginTop: marginTop, marginLeft: marginLeft}} className="pageAdmin-addFile">
      <div className="pageAdmin-addFile-title">{name}</div>
      <img src={file} alt="" className="pageAdmin-addFile-img" />
    </button>
  );
}

export default ButtonFile;