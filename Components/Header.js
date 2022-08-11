// next
import Image from 'next/image'
import Link from 'next/link'

//image
import hulu from '../public/hulu.png'
import HeaderItem from './HeaderItem';

//icons
import {HomeIcon,LightningBoltIcon,BadgeCheckIcon,CollectionIcon,SearchIcon,UserIcon} from '@heroicons/react/outline'


const header = () => {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center">
            <div className='flex flex-grow justify-evenly m-5 max-w-xl'>
            <HeaderItem title='HOME' Icon={HomeIcon} />
            <HeaderItem title='TERENDING' Icon={LightningBoltIcon} />
            <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
            <HeaderItem title='COllECTIONS' Icon={CollectionIcon} />
            <HeaderItem title='SEARCH' Icon={SearchIcon} />
            <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <Link href='/' className='cursor-pointer'>
            <Image 
            src={hulu} 
            className='min-w-10 mb-10'
            width={200}
            height={100}
            alt='hulu'
            />
            </Link>
        </header>
    );
};

export default header;