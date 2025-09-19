import type { Metadata } from "next";
import localFont from "next/font/local";
import { Figtree } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const figtree = Figtree({
	subsets: ["latin"],
	variable: "--font-figtree",
});

export const metadata: Metadata = {
	title: "ReachPlus AI - Next.js 14 with TypeScript & Tailwind",
	description:
		"A modern Next.js 14 application built with TypeScript and Tailwind CSS featuring beautiful UI components and responsive design.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={` ${figtree.className} antialiased`}>{children}</body>
		</html>
	);
}
