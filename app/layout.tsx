import { Roboto } from '@next/font/google';
import './globals.css';
import Header from './Header';

const roboto = Roboto({
	weight: '500',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${roboto.className} text-white bg-[#242424] `}>
			<head />
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
