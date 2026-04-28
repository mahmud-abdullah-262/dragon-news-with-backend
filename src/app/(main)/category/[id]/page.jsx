import LeftSidebar from '@/components/shered/homepage/newsSection/Leftsidebar';
import News from '@/components/shered/homepage/newsSection/News';
import RightSide from '@/components/shered/homepage/newsSection/RightSide';
import { getCategory } from '@/lib/data';
import React from 'react';

// export const generateMetadata = async ({params}) => {
//    const {id} = await params
//   const res = await getCategory(id);
//   const categories = await response.news_category;

//   return ({
//     title: categories.category_name,
//   })
// }

const NewsByCategory = async ({params}) => {
  const {id} = await params;
  // console.log(id, 'categoryParam');
   const response = await getCategory();
  const categories = await response.news_category;


  return (
    <div className="grid grid-cols-12 my-6 w-11/12 mx-auto">

<div className=" col-span-3">
        <LeftSidebar categories={categories} activeId={id} ></LeftSidebar>
      </div>

      <div className=" col-span-6 mx-2">
        
        <News id={id}></News>
      
      </div>
      <div className=" col-span-3">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default NewsByCategory;