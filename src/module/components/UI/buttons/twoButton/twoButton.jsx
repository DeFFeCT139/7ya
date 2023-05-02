import { useDynamicAdapt } from '../../../../module/src/dynamicAdapt'

function TwoButton({text, onClick, dataDa}) {

  useDynamicAdapt('max')

  return (
    <button data-da={dataDa} onClick={onClick} className="button twoButton">
      {text}
    </button>
  );
}

export default TwoButton; 