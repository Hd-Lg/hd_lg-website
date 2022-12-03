'use client';

import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
	return (
		<header className='sticky top-0 p-7 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
			<div className='cursor-pointer text-3xl'>
				<Link href='/'>Hd-Lg</Link>
			</div>
			<div className='flex items-center my-auto space-x-6 uppercase text-sm cursor-pointer text-gray-400'>
				<Link
					href='/files/Hd_Lg.pdf'
					download
					rel='noopener noreferrer'
					target={'_blank'}>
					Download CV
				</Link>
				<Link
					href={'https://github.com/Hd-Lg'}
					target={'_blank'}
					rel='noopener noreferrer'>
					My GitHub
				</Link>
			</div>
		</header>
	);
};

export default Header;
