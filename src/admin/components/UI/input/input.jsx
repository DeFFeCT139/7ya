function Input({name,marginTop, id, onChange, defoluteValue, className, type}) {
  return (
    <div  style={{marginTop: marginTop}} className={`${className} pageAdmin-input`}>
      <div className="pageAdmin-input-title">{name}</div>
      <input defaultValue={defoluteValue} onChange={onChange} id={id} type={type === null || type === undefined? 'text': type} className="pageAdmin-input-input"/>
    </div>
  );
}

export default Input;