import About from './About';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

export default function Home() {
	return (
		<div className='h-screen snap-y snap-mandatory z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
			<section id='hero' className='snap-start'>
				<Hero />
			</section>
			<section id='about' className='snap-center'>
				<About />
			</section>
			<section id='skills' className='snap-start'>
				<Skills />
			</section>
			<section id='projects' className='snap-start h-auto'>
				<Projects />
			</section>
		</div>
	);
}
