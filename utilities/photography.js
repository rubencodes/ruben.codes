const IS_PROD = process.env.NODE_ENV !== "development";
const ORIGIN = IS_PROD ? "https://ruben.codes" : "http://localhost:3000";
const PHOTO_URL = IS_PROD ? 'https://static.ruben.codes/photography/' : `${ORIGIN}/static/photography/`

export default {
	metaTitle: "Ruben Martinez Jr. - Photography",
	metaDescription: "Explore artistic boudoir portraits, urban street portraits, and natural landscape photo galleries from New York City based photographer Ruben Martinez Jr. Ruben is shooting on the street and in the studio with a Sony A7rIV mirrorless camera.",
	metaUrl: `${ORIGIN}/photography`,
	metaImage: `${ORIGIN}/static/photography/landscapes/46.jpg`,

	baseUrl: PHOTO_URL,
	galleryOrder: [
		"cat_ross",
		"kitty_k",
		"odette_coquette",
		"morgana",
		"victoria",
		"savannah",
		"fyre",
		"2018",
		"2019",
		"2020",
	],
	galleries: {
		/* Cat Ross */
		"cat_ross": {
			path: "portraits/cat_ross/",
			thumbnailPath: "portraits_small/cat_ross/",
			previewImage: {
				caption: "Cat Ross",
				fileName: "6.jpg",
				customStyles: {
					backgroundPosition: "center 18%"
				},
				span: 2
			},
			images: [
				{
					fileName: "1.jpg",
					customStyles: {}
				},
				{
					fileName: "2.jpg",
					customStyles: {}
				},
				{
					fileName: "6.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 18%"
					}
				},
				{
					fileName: "7.jpg",
					customStyles: {}
				},
				{
					fileName: "9.jpg",
					customStyles: {}
				},
				{
					fileName: "13.jpg",
					customStyles: {}
				},
				{
					fileName: "14.jpg",
					customStyles: {}
				},
				{
					fileName: "16.jpg",
					customStyles: {}
				},
				{
					fileName: "20.jpg",
					customStyles: {}
				},
				{
					fileName: "18.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 18%"
					}
				},
			]
		},

		/* Kitty K */
		"kitty_k": {
			path: "portraits/kitty_k/",
			thumbnailPath: "portraits_small/kitty_k/",
			previewImage: {
				caption: "Kitty K",
				fileName: "29.jpg",
				customStyles: {
					backgroundPosition: "center 55%"
				},
				span: 1
			},
			images: [
				{
					fileName: "2.jpg",
					customStyles: {}
				},
				{
					fileName: "1.jpg",
					customStyles: {}
				},
				{
					fileName: "3.jpg",
					customStyles: {}
				},
				{
					fileName: "4.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 26%"
					}
				},
				{
					fileName: "5.jpg",
					customStyles: {}
				},
				{
					fileName: "6.jpg",
					customStyles: {}
				},
				{
					fileName: "7.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 10%"
					}
				},
				{
					fileName: "8.jpg",
					customStyles: {}
				},
				{
					fileName: "9.jpg",
					customStyles: {}
				},
				{
					fileName: "10.jpg",
					customStyles: {}
				},
				{
					fileName: "11.jpg",
					customStyles: {}
				},
				{
					fileName: "12.jpg",
					customStyles: {}
				},
				{
					fileName: "13.jpg",
					customStyles: {}
				},
				{
					fileName: "14.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 10%"
					}
				},
				{
					fileName: "15.jpg",
					customStyles: {}
				},
				{
					fileName: "16.jpg",
					customStyles: {}
				},
				{
					fileName: "17.jpg",
					customStyles: {}
				},
				{
					fileName: "18.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center center"
					}
				},
				{
					fileName: "19.jpg",
					customStyles: {}
				},
				{
					fileName: "20.jpg",
					customStyles: {}
				},
				{
					fileName: "22.jpg",
					customStyles: {}
				},
				{
					fileName: "24.jpg",
					customStyles: {}
				},
				{
					fileName: "21.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "23.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "25.jpg",
					customStyles: {}
				},
				{
					fileName: "26.jpg",
					customStyles: {}
				},
				{
					fileName: "27.jpg",
					customStyles: {}
				},
				{
					fileName: "29.jpg",
					customStyles: {}
				},
			]
		},

		/* Odette */
		"odette_coquette": {
			path: "portraits/odette_coquette/",
			thumbnailPath: "portraits_small/odette_coquette/",
			previewImage: {
				caption: "Odette Coquette",
				fileName: "12.png",
				customStyles: {
					backgroundPosition: "center 10%"
				},
				span: 3
			},
			images: [
				{
					fileName: "1.png",
					customStyles: {}
				},
				{
					fileName: "2.png",
					span: 2,
					customStyles: {
						backgroundPosition: "center right"
					}
				},
				{
					fileName: "4.png",
					customStyles: {
						backgroundPosition: "bottom left"
					}
				},
				{
					fileName: "5.png",
					customStyles: {
						backgroundPosition: "center left",
					}
				},
				{
					fileName: "6.png",
					customStyles: {}
				},
				{
					fileName: "7.png",
					customStyles: {}
				},
				{
					fileName: "8.png",
					customStyles: {
						backgroundPosition: "bottom right"
					}
				},
				{
					fileName: "9.png",
					customStyles: {}
				},
				{
					fileName: "10.png",
					customStyles: {}
				},
				{
					fileName: "11.png",
					customStyles: {}
				},
				{
					fileName: "12.png",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "13.png",
					customStyles: {}
				},
				{
					fileName: "19.png",
					customStyles: {}
				},
				{
					fileName: "25.png",
					customStyles: {}
				},
				{
					fileName: "38.png",
					customStyles: {}
				},
				{
					fileName: "47.png",
					customStyles: {}
				},
				{
					fileName: "50.png",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "51.png",
					customStyles: {}
				},
				{
					fileName: "52.png",
					span: 3,
					customStyles: {
						backgroundPosition: "center 30%"
					}
				},
				{
					fileName: "55.png",
					customStyles: {}
				},
				{
					fileName: "58.png",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "59.png",
					customStyles: {}
				},
				{
					fileName: "61.png",
					customStyles: {}
				},
				{
					fileName: "64.png",
					customStyles: {}
				},
				{
					fileName: "71.png",
					customStyles: {}
				},
				{
					fileName: "79.png",
					customStyles: {}
				},
				{
					fileName: "94.png",
					customStyles: {}
				},
				{
					fileName: "97.png",
					customStyles: {}
				},
				{
					fileName: "75.png",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "87.png",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "100.png",
					customStyles: {}
				},
				{
					fileName: "101.png",
					customStyles: {}
				},
				{
					fileName: "102.png",
					customStyles: {}
				},
				{
					fileName: "103.png",
					customStyles: {}
				},
			]
		},

		/* Morgana */
		"morgana": {
			path: "portraits/morgana/",
			thumbnailPath: "portraits_small/morgana/",
			previewImage: {
				caption: "Morgana",
				fileName: "38.jpg",
				customStyles: {
					backgroundPosition: "center"
				},
				span: 2
			},
			images: [
				{
					fileName: "44.jpg",
					customStyles: {}
				},
				{
					fileName: "46.jpg",
					customStyles: {}
				},
				{
					fileName: "2.jpg",
					customStyles: {}
				},
				{
					fileName: "3.jpg",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "7.jpg",
					customStyles: {}
				},
				{
					fileName: "10.jpg",
					customStyles: {}
				},
				{
					fileName: "8.jpg",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "9.jpg",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "11.jpg",
					customStyles: {
						backgroundPosition: "left center"
					}
				},
				{
					fileName: "13.jpg",
					customStyles: {}
				},
				{
					fileName: "15.jpg",
					customStyles: {}
				},
				{
					fileName: "20.jpg",
					customStyles: {}
				},
				{
					fileName: "21.jpg",
					customStyles: {}
				},
				{
					fileName: "22.jpg",
					customStyles: {}
				},
				{
					fileName: "24.jpg",
					customStyles: {}
				},
				{
					fileName: "25.jpg",
					customStyles: {}
				},
				{
					fileName: "28.jpg",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "29.jpg",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "30.jpg",
					customStyles: {}
				},
				{
					fileName: "33.jpg",
					customStyles: {}
				},
				{
					fileName: "31.jpg",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "37.jpg",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "34.jpg",
					customStyles: {}
				},
				{
					fileName: "38.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "36.jpg",
					customStyles: {}
				},
				{
					fileName: "39.jpg",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "40.jpg",
					customStyles: {}
				},
				{
					fileName: "41.jpg",
					customStyles: {}
				},
				{
					fileName: "42.jpg",
					customStyles: {}
				},
				{
					fileName: "49.jpg",
					customStyles: {}
				},
				{
					fileName: "50.jpg",
					customStyles: {}
				},
				{
					fileName: "51.jpg",
					customStyles: {}
				},
				{
					fileName: "52.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center 8%"
					}
				},
				{
					fileName: "53.jpg",
					customStyles: {}
				},
				{
					fileName: "54.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 8%"
					}
				},
				{
					fileName: "55.jpg",
					customStyles: {}
				},
				{
					fileName: "56.jpg",
					customStyles: {}
				},
				{
					fileName: "57.jpg",
					customStyles: {}
				},
				{
					fileName: "58.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "59.jpg",
					customStyles: {}
				},
				{
					fileName: "60.jpg",
					customStyles: {}
				},
				{
					fileName: "61.jpg",
					customStyles: {}
				},
				{
					fileName: "62.jpg",
					customStyles: {}
				},
				{
					fileName: "63.jpg",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "64.jpg",
					customStyles: {}
				},
			]
		},

		/* Victoria */
		"victoria": {
			path: "portraits/victoria/",
			thumbnailPath: "portraits_small/victoria/",
			previewImage: {
				caption: "Victoria",
				fileName: "26.jpg",
				customStyles: {
					backgroundPosition: "center"
				},
				span: 1
			},
			images: [
				{
					fileName: "1.jpg",
					customStyles: {}
				},
				{
					fileName: "2.jpg",
					customStyles: {}
				},
				{
					fileName: "3.jpg",
					customStyles: {}
				},
				{
					fileName: "5.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 30%"
					}
				},
				{
					fileName: "6.jpg",
					customStyles: {}
				},
				{
					fileName: "9.jpg",
					customStyles: {
					}
				},
				{
					fileName: "4.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 10%"
					}
				},
				{
					fileName: "7.jpg",
					customStyles: {}
				},
				{
					fileName: "11.jpg",
					customStyles: {}
				},
				{
					fileName: "8.jpg",
					customStyles: {}
				},
				{
					fileName: "14.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 10%"
					}
				},
				{
					fileName: "12.jpg",
					customStyles: {}
				},
				{
					fileName: "10.jpg",
					customStyles: {}
				},
				{
					fileName: "13.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 20%"
					}
				},
				{
					fileName: "16.jpg",
					customStyles: {}
				},
				{
					fileName: "17.jpg",
					customStyles: {}
				},
				{
					fileName: "18.jpg",
					customStyles: {}
				},
				{
					fileName: "15.jpg",
					customStyles: {}
				},
				{
					fileName: "19.jpg",
					customStyles: {}
				},
				{
					fileName: "20.jpg",
					customStyles: {}
				},
				{
					fileName: "21.jpg",
					customStyles: {}
				},
				{
					fileName: "22.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center center"
					}
				},
				{
					fileName: "23.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 10%"
					}
				},
				{
					fileName: "24.jpg",
					customStyles: {}
				},
				{
					fileName: "25.jpg",
					customStyles: {}
				},
				{
					fileName: "26.jpg",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "27.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center center"
					}
				},
				{
					fileName: "28.jpg",
					customStyles: {}
				},
				{
					fileName: "30.jpg",
					customStyles: {}
				},
				{
					fileName: "29.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 15%"
					}
				},
				{
					fileName: "32.jpg",
					customStyles: {}
				},
				{
					fileName: "33.jpg",
					customStyles: {}
				},
				{
					fileName: "34.jpg",
					customStyles: {}
				},
				{
					fileName: "31.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 25%"
					}
				},
				{
					fileName: "35.jpg",
					customStyles: {}
				},
				{
					fileName: "37.jpg",
					customStyles: {}
				},
				{
					fileName: "38.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 10%"
					}
				},
				{
					fileName: "36.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 35%"
					}
				},
				{
					fileName: "39.jpg",
					customStyles: {}
				},
			]
		},

		/* Savannah */
		"savannah": {
			path: "portraits/savannah/",
			thumbnailPath: "portraits_small/savannah/",
			previewImage: {
				caption: "Savannah",
				fileName: "78.JPG",
				customStyles: {
					backgroundPosition: "center"
				},
				span: 3
			},
			images: [
				{
					fileName: "1.JPG",
					span: 2,
					customStyles: {
						backgroundPosition: "center 40%"
					}
				},
				{
					fileName: "3.JPG",
					customStyles: {}
				},
				{
					fileName: "4.JPG",
					customStyles: {}
				},
				{
					fileName: "5.JPG",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "7.JPG",
					customStyles: {}
				},
				{
					fileName: "8.JPG",
					customStyles: {}
				},
				{
					fileName: "9.JPG",
					customStyles: {}
				},
				{
					fileName: "10.JPG",
					customStyles: {}
				},
				{
					fileName: "11.JPG",
					customStyles: {}
				},
				{
					fileName: "12.JPG",
					customStyles: {}
				},
				{
					fileName: "13.JPG",
					customStyles: {}
				},
				{
					fileName: "14.JPG",
					customStyles: {}
				},
				{
					fileName: "15.JPG",
					customStyles: {}
				},
				{
					fileName: "16.JPG",
					span: 2,
					customStyles: {
						backgroundPosition: "center 50%"
					}
				},
				{
					fileName: "17.JPG",
					customStyles: {}
				},
				{
					fileName: "18.JPG",
					customStyles: {}
				},
				{
					fileName: "19.JPG",
					customStyles: {}
				},
				{
					fileName: "20.JPG",
					customStyles: {}
				},
				{
					fileName: "21.JPG",
					customStyles: {}
				},
				{
					fileName: "22.JPG",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "23.JPG",
					customStyles: {}
				},
				{
					fileName: "24.JPG",
					customStyles: {}
				},
				{
					fileName: "25.JPG",
					customStyles: {}
				},
				{
					fileName: "26.JPG",
					customStyles: {}
				},
				{
					fileName: "27.JPG",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "28.JPG",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "29.JPG",
					customStyles: {}
				},
				{
					fileName: "30.JPG",
					customStyles: {}
				},
				{
					fileName: "31.JPG",
					customStyles: {}
				},
				{
					fileName: "32.JPG",
					customStyles: {}
				},
				{
					fileName: "33.JPG",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "34.JPG",
					customStyles: {}
				},
				{
					fileName: "35.JPG",
					customStyles: {}
				},
				{
					fileName: "36.JPG",
					customStyles: {}
				},
				{
					fileName: "37.JPG",
					customStyles: {}
				},
				{
					fileName: "38.JPG",
					customStyles: {}
				},
				{
					fileName: "39.JPG",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "40.JPG",
					span: 3,
					customStyles: {
						backgroundPosition: "center 30%"
					}
				},
				{
					fileName: "41.JPG",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "42.JPG",
					customStyles: {}
				},
				{
					fileName: "43.JPG",
					customStyles: {}
				},
				{
					fileName: "44.JPG",
					customStyles: {}
				},
				{
					fileName: "45.JPG",
					customStyles: {}
				},
				{
					fileName: "46.JPG",
					customStyles: {}
				},
				{
					fileName: "47.JPG",
					customStyles: {}
				},
				{
					fileName: "48.JPG",
					customStyles: {}
				},
				{
					fileName: "49.JPG",
					customStyles: {}
				},
				{
					fileName: "50.JPG",
					span: 2,
					customStyles: {
						backgroundPosition: "center 30%"
					}
				},
				{
					fileName: "51.JPG",
					customStyles: {}
				},
				{
					fileName: "52.JPG",
					span: 2,
					customStyles: {
						backgroundPosition: "center 40%"
					}
				},
				{
					fileName: "53.JPG",
					customStyles: {}
				},
				{
					fileName: "54.JPG",
					customStyles: {}
				},
				{
					fileName: "55.JPG",
					customStyles: {}
				},
				{
					fileName: "56.JPG",
					customStyles: {}
				},
				{
					fileName: "57.JPG",
					customStyles: {}
				},
				{
					fileName: "58.JPG",
					customStyles: {}
				},
				{
					fileName: "59.JPG",
					span: 3,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "60.JPG",
					customStyles: {}
				},
				{
					fileName: "61.JPG",
					span: 2,
					customStyles: {
						backgroundPosition: "center 50%"
					}
				},
				{
					fileName: "62.JPG",
					customStyles: {}
				},
				{
					fileName: "63.JPG",
					customStyles: {}
				},
				{
					fileName: "64.JPG",
					customStyles: {}
				},
				{
					fileName: "65.JPG",
					span: 3,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "66.JPG",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "67.JPG",
					customStyles: {}
				},
				{
					fileName: "68.JPG",
					customStyles: {}
				},
				{
					fileName: "69.JPG",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "70.JPG",
					customStyles: {}
				},
				{
					fileName: "71.JPG",
					customStyles: {}
				},
				{
					fileName: "72.JPG",
					customStyles: {}
				},
				{
					fileName: "73.JPG",
					span: 2,
					customStyles: {
						backgroundPosition: "center 35%"
					}
				},
				{
					fileName: "74.JPG",
					customStyles: {}
				},
				{
					fileName: "75.JPG",
					customStyles: {}
				},
				{
					fileName: "76.JPG",
					customStyles: {}
				},
				{
					fileName: "77.JPG",
					customStyles: {}
				},
				{
					fileName: "78.JPG",
					customStyles: {}
				},
				{
					fileName: "79.JPG",
					customStyles: {}
				},
				{
					fileName: "80.JPG",
					customStyles: {}
				},
				{
					fileName: "81.JPG",
					customStyles: {}
				},
				{
					fileName: "82.JPG",
					span: 2,
					customStyles: {
						backgroundPosition: "center bottom",
					}
				},
				{
					fileName: "83.JPG",
					span: 2,
					customStyles: {}
				},
				{
					fileName: "84.JPG",
					customStyles: {}
				},
			]
		},

		/* Fyre photoshoot */
		"fyre": {
			path: "portraits/fyre/",
			thumbnailPath: "portraits_small/fyre/",
			previewImage: {
				caption: "Fyre 02/20",
				fileName: "2.jpg",
				customStyles: {
					backgroundPosition: "center 20%"
				},
				span: 1
			},
			images: [
				{
					fileName: "1.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "2.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 20%"
					}
				},
				{
					fileName: "6.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 30%"
					}
				},
				{
					fileName: "3.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "4.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "5.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 10%"
					}
				},
				{
					fileName: "7.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "9.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "8.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "12.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center 20%"
					}
				},
				{
					fileName: "10.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "11.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "13.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "14.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 20%"
					}
				},
				{
					fileName: "15.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "16.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "17.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "18.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "21.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center 30%"
					}
				},
				{
					fileName: "19.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "20.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "22.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "23.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "24.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "25.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "26.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 20%"
					}
				},
				{
					fileName: "27.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "28.jpg",
					span: 1,
					customStyles: {}
				},
				{
					fileName: "29.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 20%"
					}
				},
				{
					fileName: "30.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 20%"
					}
				},
				{
					fileName: "31.jpg",
					span: 1,
					customStyles: {}
				},
			]
		},

		"2018": {
			path: "landscapes/2018_and_older/",
			thumbnailPath: "landscapes_small/2018_and_older/",
			previewImage: {
				caption: "Pre-2018 Landscapes",
				fileName: "31.jpg",
				customStyles: {
					backgroundPosition: "center"
				},
				span: 2
			},
			images: [
				{
					fileName: "1.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "2.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "7.png",
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "3.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "4.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "8.png",
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "6.png",
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "5.png",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "9.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "10.jpg",
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "11.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "12.jpg",
					customStyles: {
						backgroundPosition: "left center"
					}
				},
				{
					fileName: "13.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "31.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "30.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "33.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "34.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center top"
					}
				},
				{
					fileName: "35.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "24.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "29.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "26.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "14.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "16.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "32.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "17.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "19.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "20.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "21.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "22.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "23.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "18.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "28.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "27.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
			].reverse()
		},

		"2019": {
			path: "landscapes/2019/",
			thumbnailPath: "landscapes_small/2019/",
			previewImage: {
				caption: "2019 Landscapes",
				fileName: "12.jpg",
				customStyles: {
					backgroundPosition: "center"
				},
				span: 2
			},
			images: [
				{
					fileName: "1.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center top"
					}
				},
				{
					fileName: "2.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "3.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "4.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center bottom"
					}
				},
				{
					fileName: "5.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "6.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center top"
					}
				},
				{
					fileName: "7.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "13.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "8.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "9.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "10.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "12.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "11.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "14.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "15.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "16.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "17.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 70%"
					}
				},
				{
					fileName: "18.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "19.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "20.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "21.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "22.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "23.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "24.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "25.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "26.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "27.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "28.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "29.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
			].reverse()
		},

		"2020": {
			path: "landscapes/2020/",
			thumbnailPath: "landscapes_small/2020/",
			previewImage: {
				caption: "2020 Landscapes",
				fileName: "33.jpg",
				customStyles: {
					backgroundPosition: "center"
				},
				span: 1
			},
			images: [
				{
					fileName: "25.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center bottom"
					}
				},
				{
					fileName: "26.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "28.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "27.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center 80%"
					}
				},
				{
					fileName: "30.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "29.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "31.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "32.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 60%"
					}
				},
				{
					fileName: "33.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "34.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "8.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center 20%"
					}
				},
				{
					fileName: "7.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "3.jpg",
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "1.jpg",
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "2.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "4.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "6.jpg",
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "9.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center 10%"
					}
				},
				{
					fileName: "5.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "11.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "10.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "12.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "13.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "14.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "15.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center 70%"
					}
				},
				{
					fileName: "16.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "17.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "18.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "20.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "21.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "22.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "23.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "left bottom"
					}
				},
				{
					fileName: "24.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "36.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "37.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "38.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "41.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "39.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "40.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "42.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "43.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "44.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "45.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "46.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "47.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "48.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "50.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "49.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "51.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "54.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 75%"
					}
				},
				{
					fileName: "52.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center top"
					}
				},
				{
					fileName: "56.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "right top"
					}
				},
				{
					fileName: "53.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "55.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "57.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "58.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center bottom"
					}
				},
				{
					fileName: "59.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "60.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "61.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "64.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 80%"
					}
				},
				{
					fileName: "62.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 90%"
					}
				},
				{
					fileName: "63.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "65.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "left top"
					}
				},
				{
					fileName: "66.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center top"
					}
				},
				{
					fileName: "67.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "left center"
					}
				},
				{
					fileName: "69.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center 20%"
					}
				},
				{
					fileName: "68.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "left 20%"
					}
				},
				{
					fileName: "70.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center center"
					}
				},
				{
					fileName: "71.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center bottom"
					}
				},
				{
					fileName: "72.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center bottom"
					}
				},
				{
					fileName: "73.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "74.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "75.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "76.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "78.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "77.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "79.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "80.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "81.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "82.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "83.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "84.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "89.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center top"
					}
				},
				{
					fileName: "87.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center top"
					}
				},
				{
					fileName: "88.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center top"
					}
				},
				{
					fileName: "85.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "90.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center top"
					}
				},
				{
					fileName: "91.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center top"
					}
				},
				{
					fileName: "92.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center 70%"
					}
				},
				{
					fileName: "93.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 70%"
					}
				},
				{
					fileName: "94.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center 70%"
					}
				},
				{
					fileName: "102.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "96.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "95.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "97.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "98.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "100.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "101.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "99.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "103.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "104.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "26% center"
					}
				},
				{
					fileName: "105.jpg",
					span: 1,
					customStyles: {
						backgroundPosition: "center"
					}
				},
				{
					fileName: "106.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "26% center"
					}
				},
				{
					fileName: "107.jpg",
					customStyles: {
					}
				},
				{
					fileName: "108.jpg",
					customStyles: {
					}
				},
				{
					fileName: "109.jpg",
					customStyles: {
					}
				},
				{
					fileName: "111.jpg",
					span: 3,
					customStyles: {
						backgroundPosition: "center 30%"
					}
				},
				{
					fileName: "112.jpg",
					customStyles: {
					}
				},
				{
					fileName: "110.jpg",
					span: 2,
					customStyles: {
						backgroundPosition: "center 40%"
					}
				},
				{
					fileName: "113.jpg",
					span: 2,
					customStyles: {
					}
				},
				{
					fileName: "114.jpg",
					customStyles: {
					}
				},
				{
					fileName: "115.jpg",
					customStyles: {
					}
				},
				{
					fileName: "116.jpg",
					span: 2,
					customStyles: {
					}
				},
			].reverse()
		},
	}
};
