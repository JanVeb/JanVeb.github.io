import self from '../img/self.png';
import mock1 from '../img/PianoFlash3.gif';
import mock2 from '../img/RecCal.gif';
import mock3 from '../img/PianoFlash3.png';
import mock4 from '../img/mock4.png';
import mock5 from '../img/mock5.png';

// let mock1 = <div id="smartphone"></div>;

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: 'Jani',
  lastName: 'Veble',
  initials: 'jv', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🚲',
      text: 'invigorated by sports',
    },
    {
      emoji: '🌎',
      text: 'based in the Taiwan',
    },
    {
      emoji: '💼',
      text: 'Teaching English',
    },
    {
      emoji: '📧',
      text: 'janveble@protonmail.com',
    },
  ],
  socials: [
    {
      link: 'https://github.com/JanVeb',
      icon: 'fab fa-github',
    },
    {
      link: 'https://www.linkedin.com/in/jani-veble-36209a232/',
      icon: 'fab fa-linkedin',
    },
    {
      link: 'http://discordapp.com/users/688383456270614529',
      icon: 'fab fa-discord',
    },
    {
      link: 'https://play.google.com/store/apps/developer?id=IndieLearning+Team&gl=DE',
      icon: 'fab fa-google-play',
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'git',
      'github',
      'bootstrap',
      'html5',
      'css3',
      'figma',
    ],
    exposedTo: ['nodejs', 'python', 'adobe illustrator'],
  },
  hobbies: [
    {
      label: 'reading',
      emoji: '📖',
    },
    {
      label: 'theater',
      emoji: '🎭',
    },
    {
      label: 'movies',
      emoji: '🎥',
    },
    {
      label: 'cooking',
      emoji: '🌶',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'Piano Flashcards',
      live: 'https://play.google.com/store/apps/details?id=org.example.pianotrainer&gl=DE', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      image: mock1,
    },
    {
      title: 'Recipe Calculator',
      live: 'https://recipecalculator.netlify.app/#/',
      source: 'https://github.com/JanVeb/recipe_calculator',
      image: mock2,
    },
    // {
    //   title: 'Project 3',
    //   live: 'https://recipecalculator.netlify.app/#/',
    //   source: 'https://github.com/JanVeb/recipe_calculator',
    //   image: mock3,
    // },
    // {
    //   title: 'Project 4',
    //   live: 'https://paytonpierce.dev',
    //   source: 'https://github.com/paytonjewell',
    //   image: mock4,
    // },
    // {
    //   title: 'Project 5',
    //   live: 'https://paytonpierce.dev',
    //   source: 'https://github.com/paytonjewell',
    //   image: mock5,
    // },
  ],
};
