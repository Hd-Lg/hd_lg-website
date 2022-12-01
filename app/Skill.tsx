import Image, { StaticImageData } from 'next/image';

type Props = {
	image: StaticImageData;
	text: string;
};

const Skill = ({ image, text }: Props) => {
	return (
		<div className='flex flex-col items-center border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
			<Image className='h-12 w-12 bg-transparent' src={image} alt='' />
			<div className='flex flex-col justify-between p-4'>
				<h5 className='mb-2 text-xl font-bold tracking-wide  text-white uppercase'>
					{text}
				</h5>
			</div>
		</div>
	);
};

export default Skill;
