import Skill from './Skill';

import { firebase, js, mongodb, react, typescript } from '../assets';

type Props = {};

const Skills = (props: Props) => {
	return (
		<div className='flex relative flex-col text-center max-w-[2000px] min-h-screen justify-center mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-s2xl'>
				Skills
			</h3>
			<h5 className='mb-3'>My main programming languages:</h5>
			<div className='grid grid-cols-2 gap-3'>
				<Skill image={js} text='js' />
				<Skill image={react} text='react/react native' />
				<Skill image={typescript} text='typescript' />
			</div>
			<h5 className='mb-3 mt-5'>Some tools:</h5>
			<div className='grid grid-cols-2 gap-3'>
				<Skill image={mongodb} text='MongoDB' />
				<Skill image={firebase} text='Firebase' />
			</div>
		</div>
	);
};

export default Skills;
