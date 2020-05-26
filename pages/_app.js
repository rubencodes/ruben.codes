import App from "next/app";
import Head from "next/head";

import "./_app.css";

const AppContainer = (props) => (
	<>
		<Head>
			<title>Ruben Martinez Jr - Artist, Developer, Technologist</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="theme-color" content="#000000" />
			<meta name="twitter:site" content="@rubencodes" />
			<meta name="twitter:card" content="summary_large_image" />
			<link rel="icon" type="image/png" href="https://ruben.codes/static/favicon.png" />
			<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,700" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,700" rel="stylesheet" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
		</Head>
		<App {...props} />
	</>
);

export default AppContainer;
