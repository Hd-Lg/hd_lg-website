import Skill from './Skill';

type Props = {};

const Skills = (props: Props) => {
	return (
		<div className='flex relative flex-col text-center max-w-[2000px] min-h-screen justify-center mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-s2xl'>
				Skills
			</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left'>
				<div className='bg-gray-700 p-10 rounded-3xl min-w-[400px] bigCardNeumorph'>
					<h3 className='text-2xl text-center mb-8'>
						Frontend Development
					</h3>
					<div className='grid grid-cols-2 gap-8'>
						<Skill title='React' level='Experienced' />
						<Skill title='JavaScript' level='Experienced' />
						<Skill title='React Native' level='Intermediate' />
						<Skill title='Typescript' level='Intermediate' />
						<Skill title='Tailwind CSS' level='Experienced' />
						<Skill title='Material UI' level='Intermediate' />
					</div>
				</div>

				<div className='bg-gray-700 p-10 rounded-3xl min-w-[400px] bigCardNeumorph'>
					<h3 className='text-2xl text-center mb-8'>
						Backend Development
					</h3>
					<div className='grid grid-cols-2 gap-8'>
						<Skill title='Node JS' level='Experienced' />
						<Skill title='MongoDB' level='Experienced' />
						<Skill title='Firebase' level='Intermediate' />
						<Skill title='Python' level='Intermediate' />
						<Skill title='MySQL' level='Basic' />
					</div>
				</div>
				<div className='bg-gray-700 p-10 hidden rounded-3xl md:min-w-[800px] md:inline-block md:col-span-2 bigCardNeumorph'>
					<h3 className='text-2xl text-center mb-8'>
						Other Programming tools
					</h3>
					<div className='grid grid-cols-3 gap-3'>
						<p>Git & Github</p>
						<p>Figma</p>
						<p>Adobe InDesign/Illustrator</p>
						<p>Spline</p>
						<p>Blender</p>
						<p></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
