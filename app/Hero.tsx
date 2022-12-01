import Link from 'next/link';

type Props = {};

const Hero = (props: Props) => {
	return (
		<div className='h-screen flex flex-col justify-center text-center'>
			<div>
				<h2 className='text-sm uppercase text-gray-50 pb-2 tracking-[15px]'>
					React & React Native Developer
				</h2>
				<h1 className='text-5xl lg:text-6xl font-semibold px-10 mt-4'>
					Hadrien-Lg
				</h1>
			</div>
			<div className='mt-4 space-x-6'>
				<Link href={'#about'}>
					<button className='heroButton'>About</button>
				</Link>
				<Link href={'#skills'}>
					<button className='heroButton'>Skills</button>
				</Link>
				<Link href={'#projects'}>
					<button className='heroButton'>Projects</button>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
