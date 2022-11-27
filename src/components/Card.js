import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const Card = () => {
  return (
    <div className='border-2 rounded-lg'>
        <div className='p-3 flex items-center gap-3'>
            <img src="/image/city3.jpg" className='w-8 h-8 rounded-full' alt="" />
            <div className='font-medium'>title</div>
        </div>
        <div>
            <img src="/image/city1.jpg" alt="" />
        </div>
        <div className='p-3'>
            <div>
                <AiOutlineHeart className='text-2xl mb-2 hover:opacity-50 cursor-pointer duration-200' />
            </div>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
    </div>
  )
}

export default Card