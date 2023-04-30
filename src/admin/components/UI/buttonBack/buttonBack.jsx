import arrow from '../../../image/Arrow 2.svg'

function ButtonBack({onClick}) {
  return (
    <div onClick={onClick} className="pageAdmin-back-btn">
      <img src={arrow} alt="" />
      <div className="pageAdmin-back-btn-title">Back</div>
    </div>
  );
}

export default ButtonBack;