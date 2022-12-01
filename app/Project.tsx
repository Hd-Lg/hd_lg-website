import Image, { StaticImageData } from 'next/image';

type Props = {
	image: StaticImageData;
	title: string;
	text: string[];
	link: string;
};

const Project = ({ image, title, text, link }: Props) => {
	let words: string[] = [...text];

	return (
		<div className='grid grid-cols-2 items-center min-h-[500px] min-w-[65%] border rounded-lg shadow-md border-gray-700 bg-gray-800 hover:bg-gray-700'>
			<Image
				className='object-cover rounded-t-lg md:rounded-none md:rounded-l-lg w-[80%]'
				src={image}
				alt={title}
			/>
			<div className='p-4'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{title}
				</h5>
				<div className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{words.map((word) => (
						<p key={word}>{word}</p>
					))}
				</div>
				<p className='mt-5 text-gray-600 hover:underline cursor-pointer hover:text-white'>
					{link}
				</p>
			</div>
		</div>
	);
};

export default Project;
