import { CheckBadgeIcon } from '@heroicons/react/24/outline';

type Props = {
	title: string;
	level: string;
};

const Skill = ({ level, title }: Props) => {
	return (
		<article className='flex flex-row'>
			<CheckBadgeIcon className='w-7' />
			<div className='ml-2'>
				<h4 className='text-lg'>{title}</h4>
				<small className='text-xs text-gray-400'>{level}</small>
			</div>
		</article>
	);
};

export default Skill;
