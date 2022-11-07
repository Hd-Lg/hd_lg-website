import "../styles/globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
