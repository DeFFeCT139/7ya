function ButtonSave({marginTop, onClick}) {
  return (
    <div onClick={onClick} style={{marginTop: marginTop}} className="pageAdmin-buttonSave">Save</div>
  );
}

export default ButtonSave;