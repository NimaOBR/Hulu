import React from 'react';

const HeaderItem = ({Icon,title}) => {
    return (
        <div className='flex flex-col items-center m-2 group cursor-pointer w-12 sm:w-20 hover:text-white'>
            <Icon className='h-6 mb-1 group-hover:animate-bounce' />
            <p className='tracking-widest opacity-0 group-hover:opacity-100 '>{title}</p>
        </div>
    );
};

export default HeaderItem;