import foto from '../../../image/Group 69.png'

function AddPhoto({marginTop}) {
  return (
    <div style={{marginTop: marginTop}} className="pageAdmin-addPhoto">
      <div className="pageAdmin-addPhoto-block">
        <img src={foto} className="pageAdmin-addPhoto-block-img" alt="" />
      </div>
      <div className="pageAdmin-addPhoto-btn">Add Photo</div>
    </div>
  );
}

export default AddPhoto;