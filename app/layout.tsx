import "../styles/globals.css";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head>
				<title>Hd-Lg</title>
			</head>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
