import arrow from '../../../image/Arrow 2.svg'

function ButtonBack() {
  return (
    <div className="pageAdmin-back-btn">
      <img src={arrow} alt="" />
      <div className="pageAdmin-back-btn-title">Back</div>
    </div>
  );
}

export default ButtonBack;