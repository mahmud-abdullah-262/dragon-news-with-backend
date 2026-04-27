import { Span } from 'next/dist/trace';
import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
  const news = [
  {
    id: 1,
    title: 'Global markets see sharp rise amid economic recovery hopes     '
  },
  {
    id: 2,
    title: 'New AI breakthrough promises faster and more accurate translations     '
  },
  {
    id: 3,
    title: 'Severe heatwave affects millions across South Asia     '
  },
  {
    id: 4,
    title: 'Scientists discover potential cure for rare genetic disorder     '
  },
  {
    id: 5,
    title: 'Tech companies race to develop next-generation battery technology    '
  },
  {
    id: 6,
    title: 'Major football tournament draws record global audience'
  }
];
  return (
    <div className='flex justify-between gap-4 p-2 w-11/12 mx-auto'>
      <button className='bg-red-500 text-white font-bold'>Braking News</button>
      <Marquee autoFill={false}>
        <div >
          
          <p>{news.map(n => <span key={n.id}>{`${n.title}  |   `}</span>)}</p>
        </div>
          </Marquee>
    </div>
    
    
    
  );
};

export default BreakingNews;