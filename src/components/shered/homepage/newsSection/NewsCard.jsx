import Image from 'next/image';
import React from 'react';
import {ArrowShapeTurnUpRight, Bookmark, Eye, Star} from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Link from 'next/link';

const NewsCard = ({news}) => {
  return (
   

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
      <p className='line-clamp-3'>{news.details}</p>
      <Link href={`/news/${news._id}`}> <Button className={'bg-orange-600  font-bold'}>Read More</Button></Link>
     
     
      
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
            </div>
   


  );
};

export default NewsCard;