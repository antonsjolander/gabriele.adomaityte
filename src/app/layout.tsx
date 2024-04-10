import "./globals.css";
import { client } from "../../sanity/lib/client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Nav from "./components/Nav";
import PageWrapper from "@/app/components/PageWrapper";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import LayoutWrapper from "./components/LayoutWrapper";

export async function generateMetadata(): Promise<Metadata> {
	const data = await client.fetch(
		`*[_type == "global"][0]{title, description, share_image{asset->{...}}}`
	);

	return {
		title: data.title,
		description: data.description,
		openGraph: {
			type: "website",
			locale: "en_IE",
			url: "https://www.gabriele.adomaityte.com/",
			title: data.title,
			description: data.description,
			images: [
				{
					url: data.share_image.asset.url,
					width: 1200,
					height: 630,
					alt: "gabriele.adomaityte",
				},
			],
		},
	};
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const data = await client.fetch(
		`*[_type == "global"][0]{contact,maps_link,logo{asset->{...}}}`
	);
	const show = await client.fetch(
		`*[_type == "show"] | order(dateTime(now()) - dateTime(date_start)) {title, slug, date_start, date_end, artists[]->{name}}`
	);

	return (
		<html lang="en">
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-0LK6MG1ESL" />
			<Script id="google-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-0LK6MG1ESL');
        `}
			</Script>
			<link rel="preload" as="image" href="/logo.png"></link>
			<body className={``}>
				<div className="h-full-svh grid-rows-8 grid grid-cols-1 md:grid-cols-9 px-4 py-2 md:px-8 md:py-4">
					<Nav logo={data.logo} />
					<LayoutWrapper>
						<PageWrapper>{children}</PageWrapper>
					</LayoutWrapper>
					<Footer
						link={data.maps_link}
						adress={data.contact}
						show={show[0]}
					/>
				</div>
				<Loader />
			</body>
		</html>
	);
}
