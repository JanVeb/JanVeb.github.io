import self from '../img/self.png';
import mock1 from '../img/PF2.gif';
import mock2 from '../img/RC2.gif';
import mock3 from '../img/IL20.gif';
// import mock4 from '../img/mock4.png';
// import mock5 from '../img/mock5.png';

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

let myBio = (
  <p>
    ​​Since 2002, when I paused my school in Croatia, I've started to actively
    work, mostly in the tourism and hospitality sector. In 2006 I moved to
    Slovenia and in 2007 I enrolled in Philosophy and next year for a Psychology
    bachelor degree. In 2012 I've moved to Munich, Germany. In Germany, through
    Kruschina agency I've worked in big international companies, such as Intel,
    Microsoft, Allianz Arena, BMW, IBM, and others,
    <br></br>
    <br></br>
    In 2019, while studying Chinese at National Taiwan Normal University, I met
    Phillip Schluetermann, trained Javascript developer, and we started to
    develop a Chinese learning app. Since it was too expensive for us to develop
    good quality Chinese audio learning materials, we stopped working on this
    project. I've started learning Flutter, developed dozens of projects in it
    for learning purposes, and started to develop a Piano Learning app in it as
    well, though, due to lack of functional music sheet plugins in Dart
    language, I've started to develop this project in Javascript instead. Piano
    Flashcard app is a great project in that it was almost free to create,
    learning materials, such as countless great music scores are in public
    domain and therefore, was able to use them free of charge in the project. In
    July of 2021 I started working remotely for Company Kobilica from Croatia,
    mostly working on mobile development in Javascript and Dart languages.
  </p>
);

export const info = {
  firstName: 'Jani',
  lastName: 'Veble',
  initials: 'jv', // the example uses first and last, but feel free to use three or more if you like.
  position: `a Mobile Web App and Web Developer`,
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
      text: 'based in Taiwan',
    },
    {
      emoji: '💼',
      text: 'Mobile Web App / PWA, Web Developer, English Teacher',
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
  ],
  bio: myBio,

  skills: {
    proficientWith: ['javascript', 'react', 'github', 'html5', 'css3', 'trie'],
    exposedTo: [
      'nodejs',
      'dart',
      'flutter',
      'lua',
      'audacity',
      'gimp',
      'inkscape',
      'big data processing',
    ],
    intrestedIn: ['python', 'ai', 'quantum computing'],
  },
  hobbies: [
    {
      label:
        'used to have many hobies before starting to program, now days have only time for sports',
      emoji: '⌨️',
    },
    {
      label: 'hiking',
      emoji: '🥾',
    },
    {
      label: 'walking',
      emoji: '🚶‍♂️',
    },
    {
      label: 'roller skateing',
      emoji: '🛼',
    },
    {
      label: 'biking',
      emoji: '🚴‍♂️',
    },

    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: 'Piano Flashcards',
      live: 'https://play.google.com/store/apps/details?id=org.example.pianotrainer&gl=DE',
      inDev: 'https://piano-flashcards.github.io/',
      youtube: 'https://www.youtube.com/watch?v=6JldTapSEZI',
      info: 'ℹ️ Developed with ReactJs, Ionic, CapacitorJs, Javascript',
      image: mock1,
    },
    {
      title: 'Recipe Calculator',
      live: 'https://recipecalculator.netlify.app/#/',
      netlify: 'https://recipecalculator.netlify.app/#/',
      source: 'https://github.com/JanVeb/recipe_calculator',
      info: 'ℹ️ Developed with Flutter and Dart',
      image: mock2,
    },
    {
      title: 'IndieLearningApp',
      live: 'https://play.google.com/store/apps/details?id=de.schluetermann.philipp.indielearning&hl=gsw&gl=US',
      info: 'ℹ️ Developed with Vue, Cordova, Ionic, and Javascript',
      image: mock3,
    },
  ],
};
