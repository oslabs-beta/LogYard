/**
 * ************************************
 *
 * @module  TableItem
 * @description .jsx - Used by Table to create entries
 * 
 * ************************************
 */

interface TableItemProps {
  columns: string[];
}

const TableItem: React.FC<TableItemProps> = ({ columns }) => {
  const allColumns = [];

  for (const col of columns){
    allColumns.push((
      <th key={Math.random()} scope='row' className='px-6 py-4 font-medium bg-custom-tan border-b border-x border-gray-900 text-custom-darkgreen whitespace-nowrap dark:text-white'>
        { col }
      </th>
    ));
  }

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
      { allColumns }
    </tr>
  );
};

export default TableItem;