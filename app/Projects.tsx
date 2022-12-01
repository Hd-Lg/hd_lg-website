import Project from './Project';

import blender from '../assets/icons/blender.png';

type Props = {};

const Projects = (props: Props) => {
	return (
		<div className='h-screen relative flex flex-col text-left justify-evenly mx-auto items-center z-0 overflow-hidden'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Projects
			</h3>
			<div className='flex flex-row space-x-4 overflow-x-scroll max-w-[80%] mx-auto scrollbar scrollbar-track-white scrollbar-thumb-[#F7AB0A]/80'>
				<Project
					image={blender}
					title='Airbnb'
					text={[
						'Tech 1',
						'Tech 2',
						'Tech 3',
						'Tech 4',
						'Tech 5',
						'Tech 6',
					]}
					link='link site'
				/>
			</div>
		</div>
	);
};

export default Projects;
