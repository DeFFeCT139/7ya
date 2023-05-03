
function AddPhoto({marginTop, onChenge}) {


  const openFile = () => document.getElementById('file').click()

  return (
    <div style={{marginTop: marginTop}} className="pageAdmin-addPhoto">
      <div id='img12' className="pageAdmin-addPhoto-block"></div>
      <div onClick={openFile} className="pageAdmin-addPhoto-btn">Add Photo</div>
      <input placeholder='dawdawd' className='pageAdmin-addPhoto-btn-inpet' onChange={onChenge} type="file" id='file' />
    </div>
  );
}

export default AddPhoto;