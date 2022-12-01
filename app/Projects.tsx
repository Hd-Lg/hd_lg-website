import Project from './Project';

import projectsData from './projectsData';

type Props = {};

const Projects = (props: Props) => {
	return (
		<div className='h-screen relative flex flex-col text-left justify-evenly mx-auto items-center z-0 overflow-hidden'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Projects
			</h3>
			<div className='flex flex-row space-x-4 overflow-x-scroll max-w-[80%] mx-auto scrollbar scrollbar-track-white scrollbar-thumb-[#F7AB0A]/80'>
				{projectsData.map(
					({ id, image, image2, title, text, link }) => (
						<Project
							image={image}
							image2={image2}
							title={title}
							text={text}
							link={link}
							key={id}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Projects;
