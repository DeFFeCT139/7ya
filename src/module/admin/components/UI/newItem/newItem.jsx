import img from '../../../image/Group 63.svg'

function NewItem({onClick}) {

  return (
    <div onClick={onClick} className="pageAdmin-newbtn">
      <img src={img} alt="" />
    </div>
  );
}

export default NewItem;