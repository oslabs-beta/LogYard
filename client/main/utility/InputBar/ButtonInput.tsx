/**
 * ************************************
 *
 * @module  ButtonInput
 * @description .jsx - A button to use with an input Bar
 * 
 * ************************************
 */

interface ButtonInputProps {
  label: string
  onClick: () => void
  className: string
}

const ButtonInput: React.FC<ButtonInputProps> = ({ label, onClick, className })=>{
  return (
    <button onClick={onClick} type="button" className={`first:rounded-l-lg last:rounded-r-lg border-2 border-custom-darktan text-custom-darkgreen bg-custom-darktan hover:text-custom-darktan hover:bg-custom-darkgreen focus:ring-2 focus:ring-brown-300 font-medium text-sm px-5 py-2.5 dark:bg-brown-600 focus:outline-none dark:focus:ring-brown-800 ${className}`}>
      { label }
    </button>
  );
};

export default ButtonInput;