import tg from '../../../image/Vector.svg'
import wt from '../../../image/Vector (1).svg'
import ins from '../../../image/Subtract (1).86ad673bd2a758f947e67279fab7e0d8.svg'
import inl from '../../../image/Subtract (2).64f7ee23c296823d9fa90726120b9bfa.svg'
import vb from '../../../image/Subtract.svg'

function LInks({state}) {
  return (
    <div className="cards-links">
      <div className="cards-block-button-links">
        <a href={state.soc[0]} className="cards-block-button-link">
          <img src={tg} className="cards-block-button-link-img" alt="" />
        </a>
        <a href={state.soc[1]} className="cards-block-button-link">
          <img src={wt} className="cards-block-button-link-img" alt="" />
        </a>
      </div>
      <div className="cards-block-button-links">
        <a href={state.soc[2]} className="cards-block-button-link">
          <img src={ins} className="cards-block-button-link-img" alt="" />
        </a>
        <a href={state.soc[3]} className="cards-block-button-link">
          <img src={inl} className="cards-block-button-link-img" alt="" />
        </a>
      </div>
      <div className="cards-block-button-links">
        <a href={state.soc[4]} className="cards-block-button-link">
          <img src={vb} className="cards-block-button-link-img" alt="" />
        </a>
      </div>
    </div>
  );
}

export default LInks;