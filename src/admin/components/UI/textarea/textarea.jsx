function Textarea({id,name,marginTop}) {
  return (
    <div style={{marginTop: marginTop}} className="pageAdmin-input">
      <div className="pageAdmin-input-title">{name}</div>
      <textarea id={id} type="text" className="pageAdmin-input-textarea"/>
    </div>
  );
}

export default Textarea;