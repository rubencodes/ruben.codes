import App from "next/app";
import Head from "next/head";

import "./_app.css";

const AppContainer = (props) => (
	<>
		<Head>
			<title>Ruben Martinez Jr - Developer, Entrepreneur, Technologist</title>
			<meta charset="utf-8" />
			<link rel="icon" type="image/png" href="https://ruben.codes/favicon.png" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="theme-color" content="#000000" />
			<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,700" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,700" rel="stylesheet" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
		</Head>
		<App {...props} />
	</>
);

export default AppContainer;
