/**
 * ************************************
 *
 * @module  NavItem
 * @description .jsx - each nav option in nav-bar
 * 
 * ************************************
 */

interface NavItemProps {
  label: string,
  func: ()=>void
}

const NavItem = ({label, func}: NavItemProps)=>{
  return (
    <li>
      <button onClick={func} className='block py-2 pl-3 pr-4 text-custom-tan hover:text-custom-darktan md:border-0 md:p-0'>
        {label}
      </button>
    </li>
  );
};

export default NavItem;