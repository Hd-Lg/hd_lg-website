import { AcademicCapIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import Profile_Picture from '../assets/8_Pixel_Face.png';

type Props = {};

const About = (props: Props) => {
	return (
		<div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				About Me
			</h3>
			<Image
				src={Profile_Picture}
				alt='Profile Picture'
				placeholder='blur'
				className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-full md:w-64 md:h-90 xl:w-[500px] xl:h-[600px]'
			/>
			<div className='space-y-5 px-0 md:px-10'>
				<div className='flex justify-evenly'>
					<article className='bg-gray-700 border border-transparent rounded-xl p-8 text-center hover:bg-transparent hover:border-white cardNeumorph'>
						<AcademicCapIcon className='w-6 mx-auto mb-3' />
						<h5>Experience</h5>
						<small>1 Year Learning</small>
					</article>
					<article className='bg-gray-700 border border-transparent rounded-xl p-8 text-center hover:bg-transparent hover:border-white cardNeumorph'>
						<ArchiveBoxIcon className='w-6 mx-auto mb-3' />
						<h5>Projects</h5>
						<small>25+ Completed</small>
					</article>
				</div>
				<h4>
					A{' '}
					<span className='underline decoration-[#F7AB0A]/50'>
						little
					</span>{' '}
					background about me
				</h4>
				<p className='text-sm'>
					I&apos;m in retraining to become a React & React Native and
					TypeScript developer with the end goal of becoming a
					full-stack dev.
				</p>
				<p className='text-sm'>
					I&apos;ve a master degree in Innovation and Management of
					Technology with a specialization in entrepreneurship.
					I&apos;ve started a side project (for the fun of it) by
					running servers for some projects. I really had fun with it
					which led me to learn more about programming and web dev.
				</p>
				<p className='text-sm'>And here I am today.</p>
			</div>
		</div>
	);
};

export default About;
