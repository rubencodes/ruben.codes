export default {
  metaTitle: "Ruben Martinez Jr. - Artist, Developer, Technologist",
  metaDescription:
    "Hi! I'm Ruben. I'm a designer, developer, and artist passionate about building cool stuff.",
  metaUrl: "https://ruben.codes/",
  metaImage: "https://ruben.codes/static/photography/landscapes/43.jpg",

  about: `Hi! I'm Ruben. I'm a designer, developer, and artist passionate about building cool stuff. I currently work at Slack, in New York City, where I work on the frontend team creating insightful data visualizations for our enterprise customers. Previously, I worked on the OkCupid web and iOS teams, helping come up with new and interesting ways for people to get to know each other online. I got the opportunity to work on several major projects, including reworking the web experience into a Single Page App, and rewriting OkCupid's instant messenger using React. Prior to that, I designed and built the Progressive Web App frontend for WELL Health Inc, a Techstars-funded startup dedicated to improving the patient healthcare experience. I oversaw the rollout of WELL from zero users to several hundred thousand MAU that were being seen in mid-2018. When I'm not working, I love to make art, apps, and sometimes, even furniture. I graduated from Bowdoin College in 2015 with a degree in Computer Science and Visual Arts. That summer, I was selected to attend WWDC as a Student Scholar. I also helped write a book on building Swift apps for WatchOS. For more information about me, feel free to reach out to me via any of the links listed in the sidebar.`,
  info: {
    phoneNumber: "(210) 860-0656",
    emailAddress: "ruben.martinez93@gmail.com",
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
    "Sketch",
  ],
  languages: ["English", "Spanish", "French", "Italian"],
  links: [
    { title: "GitHub", href: "https://github.com/rubencodes" },
    { title: "LinkedIn", href: "https://linkedin.com/in/rubencodes" },
    { title: "Twitter", href: "https://twitter.com/rubencodes" },
    { title: "Instagram", href: "https://instagram.com/rubencodes" },
    { title: "Resume", href: "/static/docs/resume.pdf" },
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
      name: "Slack",
      location: "New York, New York",
      detail: "Senior Software Engineer",
      startDate: "April 2020",
      endDate: "Present",
      text:
        "I work on the frontend team creating insightful data visualizations for our enterprise customers.",
    },
    {
      name: "OkCupid",
      location: "New York, New York",
      detail: "Senior Software Engineer",
      startDate: "June 2018",
      endDate: "April 2020",
      text:
        "I worked on the web and iOS teams at OkCupid, helping come up with new and interesting ways for people to get to know each other online. I got the opportunity to work on several major projects, including reworking the web experience into a Single Page App, and rewriting OkCupid's instant messenger using React.",
    },
    {
      name: "Well Health Inc",
      location: "San Francisco, CA",
      detail: "Lead Frontend Eng",
      startDate: "September 2015",
      endDate: "June 2018",
      text:
        "Designed and built a HIPAA-compliant encrypted messaging web app with real-time push notifications & offline support, that allows hospitals and clinics to communicate securely and reliably with their patients.",
    },
    {
      name: "All-Star Code",
      location: "New York, NY",
      detail: "Lead Instructor",
      startDate: "June 2015",
      endDate: "August 2016",
      text:
        "Introduced a class of 20 high school students to web & mobile app development, robotics and physical computing, while teaching them to use languages like Python, JS, and C.",
    },
    {
      name: "Apress Media",
      location: "Brunswick, ME",
      detail: "Writer",
      startDate: "February 2015",
      endDate: "June 2015",
      text:
        "Co-authored a book on teaching Swift development of Apple Watch apps using WatchKit 1.0.",
    },
  ],
  education: [
    {
      name: "Bowdoin College",
      location: "Brunswick, ME",
      detail: "B.A.",
      startDate: "August 2011",
      endDate: "May 2015",
      text: "Computer Science major with a Visual Arts minor.",
    },
    {
      name: "University of Texas Brownsville",
      location: "Brownsville, TX",
      detail: "A.S.",
      startDate: "August 2009",
      endDate: "May 2011",
      text: "Majored in Biology and Chemistry.",
    },
  ],
  projects: [
    {
      name: "Recal",
      detail: "React Component",
      text:
        "Built a ~6kb reusable React/Preact Calendar component using CSS Grid. Reached #12 on the global trending repositories on GitHub.",
    },
    {
      name: "Piggy",
      detail: "Mac App",
      text:
        "Developed a Mac menu bar app for viewing up-to-date cryptocurrency prices and Coinbase wallet data.",
    },
    {
      name: "Muzee",
      detail: "iOS App",
      text:
        "Created an iOS app for capturing photos of paintings, correcting skewed perspectives, and viewing them in AR.",
    },
    {
      name: "Avivore",
      detail: " Chrome Extension",
      text:
        'Built an extension that uses Google’s Perspective API to auto-hide "toxic" tweets on Twitter.com in real time.',
    },
    {
      name: "Recloud",
      detail: "NPM Package",
      text:
        "Created a React mixin for memoizing results from API calls given prop or state dependencies.",
    },
    {
      name: "Archive",
      detail: "Chrome Extension",
      text:
        "Developed an extension that allows you to archive websites to the Wayback Machine with just a click.",
    },
    {
      name: "Flat.Style",
      detail: "JavaScript PWA",
      text:
        "Created an offline-ready web app for generating icons with shadow effects given any image using the HTML Canvas API.",
    },
    {
      name: "GroupCodes",
      detail: "JavaScript SPA",
      text:
        "Built a real-time collaborative web-based code editor aimed at students working together on projects.",
    },
    {
      name: "Infinitweet",
      detail: "Chrome Extension, iOS & Android apps",
      text:
        "Created a social media tool for sending “infinitely” long tweets, by converting text into images optimized for Twitter. 3.6k downloads.",
    },
    {
      name: "DUCK!",
      detail: "iOS app",
      text:
        "TouchID/FaceID-secured photo locker, with a responsive layout for iPhone & iPad compatibility. 3.4k downloads.",
    },
    {
      name: "LittleData",
      detail: "Chrome app",
      text:
        "Designed a JavaScript app that used WebAudio API and WebRTC to attempt to translate visual input into a unique, identifiable sound.",
    },
    {
      name: "Bowdoin Dining",
      detail: "JavaScript SPA, iOS & Android apps",
      text:
        "Developed a suite of apps for Bowdoin College Dining used by over 5.6k students and faculty.",
    },
    {
      name: "WBOR Radio",
      detail: "Chrome Extension, iOS & Android apps",
      text:
        "Developed apps to allow anyone to stream WBOR Radio, the Bowdoin College student radio station, from their phone or laptop. 3.8k downloads.",
    },
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
      "Abstract/19.jpg",
    ],
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
      "GroupCodes/GroupCodes.png",
    ],
  },
};
