import React from 'react';
import Card from '../components/Card';
import FollowItem from '../components/FollowItem';

const TopPage = () => {
    return (
        <div className='mx-auto flex gap-10 items-start justify-center'>
            <div class='grid gap-y-8 max-w-lg'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='w-96 pt-4 flex flex-col gap-7'>
                <FollowItem />
                <FollowItem />
                <FollowItem />
                <FollowItem />
                <FollowItem />
                <FollowItem />
                <FollowItem />
            </div>
        </div>
    );
};

export default TopPage;
