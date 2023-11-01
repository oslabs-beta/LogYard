/**
 * ************************************
 *
 * @module  ButtonInputAuth
 * @description .jsx - A button to use with an input Bar
 * 
 * ************************************
 */

interface ButtonInputAuthProps{
  label: string
  onClick: () => void
  className: string
}

const ButtonInputAuth: React.FC<ButtonInputAuthProps> = ({ label, onClick, className })=>{
  return (
    <button onClick={onClick} type="button" className={`first:rounded-l-lg last:rounded-r-lg text-custom-tan bg-transparent border border-custom-tan hover:bg-custom-darkgreen hover:text-custom-tan focus:ring-2 font-medium text-sm px-5 py-2.5 ${className}`}>
      { label }
    </button>
  );
};

export default ButtonInputAuth;