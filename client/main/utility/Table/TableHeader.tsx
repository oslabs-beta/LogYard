/**
 * ************************************
 *
 * @module  TableHeader
 * @description .jsx - Used by Table to create headers
 * 
 * ************************************
 */

interface TableHeaderProps {
  innerJSX: JSX.Element;
}

const TableHeader: React.FC<TableHeaderProps> = ({ innerJSX }) => {
  return (
    <th scope="col" className="px-6 py-3">
      { innerJSX }
    </th>
  );
};

export default TableHeader;