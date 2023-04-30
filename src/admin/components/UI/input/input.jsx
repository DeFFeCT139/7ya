function Input({name,marginTop, id, onChange}) {
  return (
    <div  style={{marginTop: marginTop}} className="pageAdmin-input">
      <div className="pageAdmin-input-title">{name}</div>
      <input onChange={onChange} id={id} type="text" className="pageAdmin-input-input"/>
    </div>
  );
}

export default Input;