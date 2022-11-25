import React from 'react';

const FollowItem = () => {
    return (
        <div className='flex gap-5'>
            <div>
                <img src="/image/city2.jpg" className='rounded-full w-16 h-16' alt="" />
            </div>
            <div className='flex flex-col gap-3 justify-center grow'>
                <div className='leading-4'>Tasuku Watanabe</div>
                <div className='py-1 px-1 bg-sky-500 radius-2 text-center w-24 text-white items-center grid text-sm'>
                    + Follow
                </div>
            </div>
        </div>
    );
};

export default FollowItem;
