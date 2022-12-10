'use client';
import { EnvelopeIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Link from 'next/link';

type Props = {};

const Contact = () => {
	const formRef = useRef<HTMLFormElement>();
	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		alert('click');

		emailjs
			.sendForm(
				'service_c4a7vpa',
				'template_lofwct2',
				e?.currentTarget,
				process.env.NEXT_PUBLIC_EMAILJS_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className='h-screen flex flex-col relative justify-evenly items-center mx-auto'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Contact
			</h3>
			<div>
				<div className='space-y-2 grid md:grid-cols-2 md:gap-4'>
					<div />
					<div />
					<article className='flex flex-row border p-2 rounded-xl'>
						<BriefcaseIcon className='w-10 h-10 my-auto mr-4' />
						<div>
							<h4 className='text-xl'>Github</h4>
							<h5 className=''>github.com/Hd-Lg</h5>
							<Link
								href='https://github.com/Hd-Lg'
								target={'_blank'}
								className='text-sm text-gray-500 cursor-pointer hover:underline text-center'
								rel='noreferrer'>
								Check it out here
							</Link>
						</div>
					</article>
					<article className='flex flex-row border p-2 rounded-xl'>
						<EnvelopeIcon className='w-10 h-10 my-auto mr-4' />
						<div>
							<h4 className='text-xl'>Email</h4>
							<h5 className=''>
								hire-me<span>@</span>hadrien-lg.com
							</h5>
							<a
								href='mailto:hire-me@hadrien-lg.com'
								className='text-sm text-gray-500 cursor-pointer hover:underline'>
								Send a message
							</a>
						</div>
					</article>
				</div>

				<form
					ref={formRef}
					onSubmit={sendEmail}
					className=' mt-5 grid grid-cols-1 gap-6 text-gray-600'>
					<input
						type={'text'}
						name='name'
						placeholder='Your name...'
						required
						className='h-10 p-4 rounded-xl outline-none bg-gray-100'
					/>
					<input
						type={'email'}
						name='email'
						placeholder='Your email'
						required
						className='h-10 p-4 rounded-xl outline-none bg-gray-100'
					/>
					<textarea
						name='message'
						rows={7}
						placeholder='Your message'
						required
						className='p-4 rounded-xl outline-none bg-gray-100'></textarea>
					<button
						type='submit'
						className='text-blue-500 bg-slate-300 p-4 w-fit mx-auto rounded-lg'>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
