import Image from 'next/image';
import Link from 'next/link';

type Props = {
	image: any;
	image2: any;
	title: string;
	text: string[];
	website: string;
	github: string;
};

const Project = ({ image, image2, title, text, website, github }: Props) => {
	let words: string[] = [...text];

	return (
		<div className='grid grid-cols-2 items-center min-h-[500px] min-w-[65%] border rounded-lg shadow-md border-gray-700 bg-gray-800 hover:bg-gray-700'>
			<div className='space-y-2 pl-4'>
				<Image
					className='object-contain rounded-t-lg md:rounded-none md:rounded-l-lg w-[80%] h-[80%]'
					src={image}
					alt={title}
				/>
				<Image
					className='object-contain rounded-t-lg md:rounded-none md:rounded-l-lg w-[80%] h-[80%]'
					src={image2}
					alt={title}
				/>
			</div>
			<div className='p-4'>
				<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					{title}
				</h5>
				<div className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					{words.map((word) => (
						<ol key={word} className='list-disc'>
							<li className='mt-1'>{word}</li>
						</ol>
					))}
				</div>
				<button>
					<Link
						href={github}
						className='mt-5 text-gray-600 hover:underline cursor-pointer hover:text-white '>
						GitHub
					</Link>
				</button>

				<button className='border border-gray-600 p-2 rounded-xl ml-3 hover:border-white'>
					<Link
						href={website}
						className='mt-5 text-gray-600 hover:underline cursor-pointer hover:text-white '>
						Live Demo
					</Link>
				</button>
			</div>
		</div>
	);
};

export default Project;
