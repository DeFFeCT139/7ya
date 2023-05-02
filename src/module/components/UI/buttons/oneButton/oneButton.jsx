import { useDynamicAdapt } from '../../../../module/src/dynamicAdapt'

function OneButton({text, onClick, className, dataDa}) {

  useDynamicAdapt('max')

  return (
    <button data-da={dataDa} onClick={onClick} className={`button oneButton ${className}`}>
      {text}
    </button>
  );
} 
 
export default OneButton;