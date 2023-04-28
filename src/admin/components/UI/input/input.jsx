function Input({name,marginTop}) {
  return (
    <div style={{marginTop: marginTop}} className="pageAdmin-input">
      <div className="pageAdmin-input-title">{name}</div>
      <input type="text" className="pageAdmin-input-input"/>
    </div>
  );
}

export default Input;