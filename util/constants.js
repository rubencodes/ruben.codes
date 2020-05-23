export const state = {
	name: "Ruben Martinez Jr.",
	about: `Hi! I'm Ruben. I'm a designer/developer interested in the intersection of art and technology. I like to build new ways for people to interact with information. I currently work at OkCupid in NYC, where I contribute to the web and iOS teams, and help come up with new and interesting ways for people to get to know each other online. Previously, I worked at WELL Health Inc, a Techstars-funded startup dedicated to improving the patient healthcare experience, where my job was to design, build, and improve WELL's Progressive Web App. I oversaw the rollout of WELL from zero users to several hundred thousand MAU that were being seen in mid-2018. When I'm not working, I love to make cool stuff, like art, apps, or even, sometimes, furniture. I graduated from Bowdoin College in 2015 with a degree in Computer Science and Visual Arts. That summer, I was selected to attend WWDC as a Student Scholar. I also helped write a book on building Swift apps for WatchOS. For more information about me, feel free to reach out via any of the links listed in the sidebar.`,
	info: {
		phoneNumber: "(210) 860-0656",
		emailAddress: "ruben.martinez93@gmail.com"
	},
	skills: [
		"HTML5",
		"CSS3",
		"ES6+",
		"PWAs",
		"React",
		"Preact",
		"React-Router",
		"Webpack",
		"Gulp",
		"Rollup",
		"Meteor.js",
		"React-Native",
		"Cordova/PhoneGap",
		"Three.js",
		"jQuery",
		"Github",
		"Sketch"
	],
	languages: [
		"English",
		"Spanish",
		"French",
		"Italian"
	],
	links: [
		{ title: "GitHub", href: "https://github.com/rubencodes" },
		{ title: "LinkedIn", href: "https://linkedin.com/in/rubencodes" },
		{ title: "Twitter", href: "https://twitter.com/rubencodes" },
		{ title: "Instagram", href: "https://instagram.com/rubencodes" },
		{ title: "Resume", href: "/static/docs/resume.pdf" }
	],
	cities: [
		{ name: "San Antonio, TX", coordinates: ["29.4241", "-98.4936"] },
		{ name: "Brownsville, TX", coordinates: ["25.9017", "-97.4975"] },
		{ name: "Brunswick, ME", coordinates: ["43.9140", "-69.9670"] },
		{ name: "New York, NY", coordinates: ["40.7128", "-74.0060"] },
		{ name: "San Mateo, CA", coordinates: ["37.5630", "-122.3255"] },
		{ name: "San Francisco, CA", coordinates: ["37.7749", "-122.4194"] },
		{ name: "Santa Barbara, CA", coordinates: ["34.0195", "-118.4912"] },
		{ name: "Santa Barbara, CA", coordinates: ["34.4208", "-119.6982"] },
		{ name: "Louisville, KY", coordinates: ["38.2527", "-85.7585"] },
	],
	experience: [
		{
			name: "OkCupid",
			location: "New York, New York",
			detail: "Software Engineer",
			startDate: "June 2018",
			endDate: "Present",
			text: "I work on the web and iOS teams at OkCupid. Recently, I was in charge of rewriting the entire OkCupid desktop messenger to bring it up to date from home-rolled vanilla JS to modern React JS standards."
		},
		{
			name: "Well Health Inc",
			location: "San Francisco, CA",
			detail: "Lead Frontend Eng",
			startDate: "September 2015",
			endDate: "June 2018",
			text: "Designed and built a HIPAA-compliant encrypted messaging web app with real-time push notifications & offline support, that allows hospitals and clinics to communicate securely and reliably with their patients."
		},
		{
			name: "All-Star Code",
			location: "New York, NY",
			detail: "Lead Instructor",
			startDate: "June 2015",
			endDate: "August 2016",
			text: "Introduced a class of 20 high school students to web & mobile app development, robotics and physical computing, while teaching them to use languages like Python, JS, and C."
		},
		{
			name: "Apress Media",
			location: "Brunswick, ME",
			detail: "Writer",
			startDate: "February 2015",
			endDate: "June 2015",
			text: "Co-authored a book on teaching Swift development of Apple Watch apps using WatchKit 1.0."
		}
	],
	education: [
		{
			name: "Bowdoin College",
			location: "Brunswick, ME",
			detail: "B.A.",
			startDate: "August 2011",
			endDate: "May 2015",
			text: "Computer Science major with a Visual Arts minor."
		},
		{
			name: "University of Texas Brownsville",
			location: "Brownsville, TX",
			detail: "A.S.",
			startDate: "August 2009",
			endDate: "May 2011",
			text: "Majored in Biology and Chemistry."
		}
	],
	projects: [
		{
			name: "Recal",
			detail: "React Component",
			text: "Built a ~6kb reusable React/Preact Calendar component using CSS Grid. Reached #12 on the global trending repositories on GitHub."
		},
		{
			name: "Piggy",
			detail: "Mac App",
			text: "Developed a Mac menu bar app for viewing up-to-date cryptocurrency prices and Coinbase wallet data."
		},
		{
			name: "Muzee",
			detail: "iOS App",
			text: "Created an iOS app for capturing photos of paintings, correcting skewed perspectives, and viewing them in AR."
		},
		{
			name: "Avivore",
			detail: " Chrome Extension",
			text: "Built an extension that uses Google’s Perspective API to auto-hide \"toxic\" tweets on Twitter.com in real time."
		},
		{
			name: "Recloud",
			detail: "NPM Package",
			text: "Created a React mixin for memoizing results from API calls given prop or state dependencies."
		},
		{
			name: "Archive",
			detail: "Chrome Extension",
			text: "Developed an extension that allows you to archive websites to the Wayback Machine with just a click."
		},
		{
			name: "Flat.Style",
			detail: "JavaScript PWA",
			text: "Created an offline-ready web app for generating icons with shadow effects given any image using the HTML Canvas API."
		},
		{
			name: "GroupCodes",
			detail: "JavaScript SPA",
			text: "Built a real-time collaborative web-based code editor aimed at students working together on projects."
		},
		{
			name: "Infinitweet",
			detail: "Chrome Extension, iOS & Android apps",
			text: "Created a social media tool for sending “infinitely” long tweets, by converting text into images optimized for Twitter. 3.6k downloads."
		},
		{
			name: "DUCK!",
			detail: "iOS app",
			text: "TouchID/FaceID-secured photo locker, with a responsive layout for iPhone & iPad compatibility. 3.4k downloads."
		},
		{
			name: "LittleData",
			detail: "Chrome app",
			text: "Designed a JavaScript app that used WebAudio API and WebRTC to attempt to translate visual input into a unique, identifiable sound."
		},
		{
			name: "Bowdoin Dining",
			detail: "JavaScript SPA, iOS & Android apps",
			text: "Developed a suite of apps for Bowdoin College Dining used by over 5.6k students and faculty."
		},
		{
			name: "WBOR Radio",
			detail: "Chrome Extension, iOS & Android apps",
			text: "Developed apps to allow anyone to stream WBOR Radio, the Bowdoin College student radio station, from their phone or laptop. 3.8k downloads."
		}
	],
	art: {
		baseURL: "/static/art/",
		largePrefix: "MD/",
		thumbPrefix: "SM/",
		images: [
			"Abstract/0.jpg",
			"Abstract/1.jpg",
			"Abstract/2.jpg",
			"Abstract/5.jpg",
			"Abstract/6.jpg",
			"Abstract/7.jpg",
			"Abstract/8.jpg",
			"Abstract/9.jpg",
			"Abstract/10.jpg",
			"Abstract/11.jpg",
			"Abstract/12.jpg",
			"Abstract/13.jpg",
			"Abstract/14.jpg",
			"Abstract/15.jpg",
			"Abstract/16.jpg",
			"Abstract/17.jpg",
			"Abstract/18.jpg",
			"Abstract/19.jpg"
		]
	},
	design: {
		baseURL: "/static/design/",
		largePrefix: "MD/",
		thumbPrefix: "SM/",
		images: [
			"WELL/NoAnalytics.jpg",
			"WELL/SleepDetected.jpg",
			"WELL/404.jpg",
			"WELL/Banner.png",
			"WELL/Cards.png",
			"WELL/Shirt.png",
			"WELL/App.png",
			"Recal/Recal.png",
			"Piggy/Piggy.png",
			"Bowdoin/Dining.png",
			"Bowdoin/WBOR.png",
			"Infinitweet/Infinitweet.png",
			"Confidant/Confidant.png",
			"GroupCodes/GroupCodes.png"
		]
	},

	photography: {
		baseUrl: "/static/photography/",
		galleryOrder: [
			"cat_ross",
			"kitty_k",
			"odette_coquette",
			"morgana",
			"miscellaneous",
		],
		galleries: {
			/* Cat Ross */
			"cat_ross": {
				caption: "Cat Ross",
				previewImage: {
					path: "portraits/cat_ross/6.jpg",
					customStyles: {
						backgroundPosition: "center 18%"
					},
				},
				images: [
					{
						path: "portraits/cat_ross/1.jpg",
						customStyles: {}
					},
					{
						path: "portraits/cat_ross/2.jpg",
						customStyles: {}
					},
					{
						path: "portraits/cat_ross/6.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center 18%"
						}
					},
					{
						path: "portraits/cat_ross/7.jpg",
						customStyles: {}
					},
					{
						path: "portraits/cat_ross/9.jpg",
						customStyles: {}
					},
					{
						path: "portraits/cat_ross/13.jpg",
						customStyles: {}
					},
					{
						path: "portraits/cat_ross/14.jpg",
						customStyles: {}
					},
					{
						path: "portraits/cat_ross/16.jpg",
						customStyles: {}
					},
					{
						path: "portraits/cat_ross/20.jpg",
						customStyles: {}
					},
					{
						path: "portraits/cat_ross/18.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center 18%"
						}
					},
				]
			},

			/* Kitty K */
			"kitty_k": {
				caption: "Kitty K",
				previewImage: {
					path: "portraits/kitty_k/14.jpg",
					customStyles: {
						backgroundPosition: "center 18%"
					},
				},
				images: [
					{
						path: "portraits/kitty_k/2.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/1.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/3.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/4.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center 26%"
						}
					},
					{
						path: "portraits/kitty_k/5.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/6.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/7.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center 10%"
						}
					},
					{
						path: "portraits/kitty_k/8.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/9.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/10.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/11.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/12.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/13.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/14.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center 10%"
						}
					},
					{
						path: "portraits/kitty_k/15.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/16.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/17.jpg",
						customStyles: {}
					},
					{
						path: "portraits/kitty_k/18.jpg",
						span: 3,
						customStyles: {
							backgroundPosition: "center center"
						}
					},
					{
						path: "portraits/kitty_k/19.jpg",
						customStyles: {}
					},
				]
			},

			/* Odette */
			"odette_coquette": {
				caption: "Odette Coquette",
				previewImage: {
					path: "portraits/odette_coquette/12.png",
					customStyles: {
						backgroundPosition: "center 10%"
					}
				},
				images: [
					{
						path: "portraits/odette_coquette/1.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/2.png",
						span: 2,
						customStyles: {
							backgroundPosition: "center right"
						}
					},
					{
						path: "portraits/odette_coquette/4.png",
						customStyles: {
							backgroundPosition: "bottom left"
						}
					},
					{
						path: "portraits/odette_coquette/5.png",
						customStyles: {
							backgroundPosition: "center left",
						}
					},
					{
						path: "portraits/odette_coquette/6.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/7.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/8.png",
						customStyles: {
							backgroundPosition: "bottom right"
						}
					},
					{
						path: "portraits/odette_coquette/9.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/10.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/11.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/12.png",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/13.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/19.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/25.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/38.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/47.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/50.png",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/51.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/52.png",
						span: 3,
						customStyles: {
							backgroundPosition: "center 30%"
						}
					},
					{
						path: "portraits/odette_coquette/55.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/58.png",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/59.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/61.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/64.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/71.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/79.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/94.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/97.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/75.png",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/87.png",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/100.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/101.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/102.png",
						customStyles: {}
					},
					{
						path: "portraits/odette_coquette/103.png",
						customStyles: {}
					},
				]
			},

			/* Morgana */
			"morgana": {
				caption: "Morgana",
				previewImage: {
					path: "portraits/morgana/38.jpg",
					customStyles: {
						backgroundPosition: "center"
					}
				},
				images: [
					{
						path: "portraits/morgana/44.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/46.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/2.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/3.jpg",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/morgana/7.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/10.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/8.jpg",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/morgana/9.jpg",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/morgana/11.jpg",
						customStyles: {
							backgroundPosition: "left center"
						}
					},
					{
						path: "portraits/morgana/13.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/15.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/20.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/21.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/22.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/24.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/25.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/28.jpg",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/morgana/29.jpg",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/morgana/30.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/33.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/31.jpg",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/morgana/37.jpg",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/morgana/34.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/38.jpg",
						span: 3,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "portraits/morgana/36.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/39.jpg",
						span: 2,
						customStyles: {}
					},
					{
						path: "portraits/morgana/40.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/41.jpg",
						customStyles: {}
					},
					{
						path: "portraits/morgana/42.jpg",
						customStyles: {}
					},
				]
			},

			"miscellaneous": {
				caption: "Miscellaneous",
				previewImage: {
					path: "landscapes/1.jpg",
					customStyles: {
						backgroundPosition: "center"
					}
				},
				images: [
					{
						path: "landscapes/1.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/2.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/7.png",
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/3.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/4.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/8.png",
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/6.png",
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/5.png",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/9.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/10.jpg",
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/11.jpg",
						span: 3,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/12.jpg",
						customStyles: {
							backgroundPosition: "left center"
						}
					},
					{
						path: "landscapes/13.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/31.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/30.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/33.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/34.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center top"
						}
					},
					{
						path: "landscapes/35.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/24.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/29.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/26.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/14.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/16.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/32.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/17.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/19.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/20.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/21.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/22.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/23.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/18.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/28.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/27.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/DSC04868.jpg",
						span: 3,
						customStyles: {
							backgroundPosition: "center 20%"
						}
					},
					{
						path: "landscapes/DSC04714.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/DSC04668.jpg",
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/DSC04652.jpg",
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/DSC04655.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/DSC04683.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/DSC04711.jpg",
						customStyles: {
							backgroundPosition: "center"
						}
					},
					{
						path: "landscapes/DSC04977.jpg",
						span: 1,
						customStyles: {
							backgroundPosition: "center 10%"
						}
					},
					{
						path: "landscapes/DSC04709.jpg",
						span: 2,
						customStyles: {
							backgroundPosition: "center"
						}
					},
				].reverse()
			},
		}
	}
};

export const STATIC_MAPS_API_KEY = "AIzaSyDQFdy_CXGQOVvcClcZfMA0waK2QTIJnt0";
