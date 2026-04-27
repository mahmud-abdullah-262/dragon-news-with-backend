import { getNewsById } from '@/lib/data';
import React from 'react';
import NewsCard from './NewsCard';


const News = async ({id}) => {

const news = await getNewsById(id)
  return (
   <div className="flex flex-col space-y-2">
    <h1 className="text-center font-semibold my-4">Dragon News Home</h1>
            { news.length > 0 ? news.map(n =>
             <NewsCard key={n._id} news={n}></NewsCard>) 
            : <h1 className="text-center font-semibold text-5xl my-4 text-gray-300 px-12 mt-10">No News Found in this category</h1>}
        </div>
  );
};

export default News;