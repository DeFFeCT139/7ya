function Input({name,marginTop, id}) {
  return (
    <div  style={{marginTop: marginTop}} className="pageAdmin-input">
      <div className="pageAdmin-input-title">{name}</div>
      <input id={id} type="text" className="pageAdmin-input-input"/>
    </div>
  );
}

export default Input;