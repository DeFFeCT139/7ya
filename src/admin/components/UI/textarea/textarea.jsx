function Textarea({id,name,marginTop,onChange, defoluteValue}) {
  return (
    <div style={{marginTop: marginTop}} className="pageAdmin-input">
      <div className="pageAdmin-input-title">{name}</div>
      <textarea defaultValue={defoluteValue} onChange={onChange} id={id} type="text" className="pageAdmin-input-textarea"/>
    </div>
  );
}

export default Textarea;