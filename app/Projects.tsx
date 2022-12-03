'use client';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './swipertest.css';

import Project from './Project';

import projectsData from './projectsData';

type Props = {};

const Projects = (props: Props) => {
	return (
		<div className='h-screen relative flex flex-col text-left justify-evenly mx-auto items-center z-0 overflow-hidden'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Projects
			</h3>
			<div className='flex flex-row space-x-4 max-w-[80%] mx-auto mt-16 '>
				<Swiper
					pagination={{
						type: 'progressbar',
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className='mySwiper'>
					{projectsData.map(
						({
							id,
							image,
							image2,
							title,
							text,
							website,
							github,
						}) => (
							<SwiperSlide key={id}>
								<Project
									image={image}
									image2={image2}
									title={title}
									text={text}
									website={website}
									github={github}
								/>
							</SwiperSlide>
						)
					)}
				</Swiper>
			</div>
		</div>
	);
};

export default Projects;
