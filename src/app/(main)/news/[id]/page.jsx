import RightSide from '@/components/shered/homepage/newsSection/RightSide';
import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import React from 'react';
import {ArrowShapeTurnUpRight, Bookmark, Eye, Star, ArrowLeft} from '@gravity-ui/icons';
import Link from 'next/link';
import { Button } from '@heroui/react';

export const generateMetadata = async ({params}) => {
   const {id} = await params
  const res = await getNewsDetailsById(id);
  const news = res[0];

  return ({
    title: news.title,
    description: news.details
  })
}

const NewsDetailsPage = async ({params}) => {
  const {id} = await params
  const res = await getNewsDetailsById(id);
  const news = res[0];
  
  return (
    <div className='grid grid-cols-6 w-11/12 mx-auto mt-6 gap-4'>
      <div className='col-span-4'>
          <div className='space-y-2 mb-16'>
      <div className='flex justify-between items-center bg-slate-300 p-4 '>
         <div className='flex gap-2 '>
        <Image
        src={news.author.img}
        width={50}
        height={30}
        alt={news.title}
        className='rounded-full '
        ></Image>
          
        <div>
          <p className='font-bold text-gray-800'>{news.author.name}</p>
          <p >{news.author.published_date}</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <span><ArrowShapeTurnUpRight/></span>
        <span><Bookmark/></span>
      </div>
      </div>
     

      <div className="card-banner">
        <h1 className='text-2xl font-bold text-gray-700 my-4'>{news.title}</h1>
        <Image
        src={news.image_url}
        width={400}
        height={250}
        alt={news.title}
        className='w-full'
        ></Image>
      </div>
      <p>{news.details}</p>
     
     
     
      
      <div className='flex justify-between items-center'>
        <div className='flex gap-2  items-center'>
          <div className='flex gap-0.5'>
             <Star className='text-orange-400'/>
             <Star className='text-orange-400'/>
             <Star className='text-orange-400'/>
             <Star className='text-orange-400'/>
             <Star className='text-orange-400'/>
          </div>
         
          <p>{news.rating.number}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <Eye/>
          <p>{news.total_view}</p>
        </div>
      </div>
      <Link  href={`/category/${news.category_id}`}> <Button className={'bg-orange-600  font-bold rounded-none'}><ArrowLeft/> All News in this category</Button></Link>

            </div>
      </div>
      <div className=" col-span-2">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default NewsDetailsPage;