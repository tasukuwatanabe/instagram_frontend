import React from 'react';

const FollowItem = () => {
    return (
        <div className='flex gap-3 items-center'>
            <img
                src='/image/city2.jpg'
                className='rounded-full w-10 h-10'
                alt=''
            />
            <div className='flex flex-col gap-1'>
                <div className='font-medium'>Tasuku Watanabe</div>
                <div className='text-xs text-gray-400'>Yuta、他5人がフォロー中</div>
            </div>
            <div className='text-xs text-sky-500 font-semibold'>フォローする</div>
        </div>
    );
};

export default FollowItem;
