import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories, activeId}) => {
  return (
   <>
   <h1 className="text-center font-semibold">Category</h1>
        <div>
          <ul className="flex flex-col my-4 text-center">
            {categories.map(c => <li 
            key={c.category_id} 
            className={`${activeId === c.category_id && 'bg-slate-200'} ' p-2  text-gray-700'`}
            >
              <Link className='block py-2 hover:bg-slate-200' href={`${c.category_id}`}>
              {c.category_name}
              </Link>
              </li>)}
            
          </ul>
        </div>
   </>
  );
};

export default LeftSidebar;