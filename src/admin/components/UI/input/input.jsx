function Input({name,marginTop, id, onChange, defoluteValue}) {
  return (
    <div  style={{marginTop: marginTop}} className="pageAdmin-input">
      <div className="pageAdmin-input-title">{name}</div>
      <input defaultValue={defoluteValue} onChange={onChange} id={id} type="text" className="pageAdmin-input-input"/>
    </div>
  );
}

export default Input;