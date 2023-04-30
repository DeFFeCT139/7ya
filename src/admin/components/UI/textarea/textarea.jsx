function Textarea({id,name,marginTop,onChange}) {
  return (
    <div style={{marginTop: marginTop}} className="pageAdmin-input">
      <div className="pageAdmin-input-title">{name}</div>
      <textarea onChange={onChange} id={id} type="text" className="pageAdmin-input-textarea"/>
    </div>
  );
}

export default Textarea;