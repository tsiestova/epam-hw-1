import {Header} from './components/header/header'
import {Navigation} from './components/navigation/navigation'
import {Footer} from './components/footer/footer'
import {SectionTopContent} from './components/top-section/top-section'
import {About} from './components/section-about/section-about'
import {Post} from './components/section-posts/section-post'
import {Portfolio} from "./components/section-portfolio/section-portfolio";
import {Testimonials} from "./components/section-testimonials/section-testimonials";
import {Contacts} from "./components/section-contact/section-contacts";

const data = {
  nav: [
    {
      href: '#home',
      title: 'Home',
    },
    {
      href: '#portfolio',
      title: 'Portfolio',
    },
    {
      href: '#',
      title: 'Blog',
    },
    {
      href: '#',
      title: 'Pages',
    },
    {
      href: '#about',
      title: 'About',
    },
    {
      href: '#contact',
      title: 'Contact',
    },
  ],

  blockContent: {
    title: 'Ideas and perspectives you won’t find anywhere else.',
    text:
        ' BlogWorld taps into the brains of the world’s most insightful' +
        'writers, thinkers, and storytellers to bring you the smartest' +
        'takes on topics that matter. So whatever your interest, you can' +
        'always find fresh thinking and unique perspectives.',

    buttons: [
      {
        type: 'btn color',
        title: 'Explore',
        href: '#',
      },
      {
        type: 'btn',
        title: 'Learn more',
        href: '#',
      },
    ],
  },

  about: {
    title: 'About us',
    text: 'This is who we are - or at least who we strive to be…'
  },

  post: {
    title: 'Latest posts',
    text: 'Information is a source of learning. But unless it is organized, ' +
        'processed and available to the right people',

    galleryList: [
      {
        href: '#',
        src: 'assets/pic/img-post1.png',
        title: 'In the Future We Will All Live in Star Wars',
        text: `The thing you’re doing now, reading prose on a screen,
        is going out of fashion. The defining narrative of our
        online moment concerns the decline of text, and the
        exploding reach and power of audio and video`,

        data: {
          time: '2019-10-20',
          minuts: '10',
          comments: '11'
          }
      },
      {
        href: '#',
        src: 'assets/pic/img-post2.png',
        title: 'Rubik’s Cube? No, Robotics and AI are…',
        text: `In other words, I will try to de-hype the crowd about
        the recent development in robotics. Concretely, OpenAI
        has claimed some pretty amazing results with learning to
        solve the Rubik’s cube with a robotic hand…`,

        data: {
          time: '2019-10-20',
          minuts: '10',
          comments: '11'
        }
      },
      {
        href: '#',
        src: 'assets/pic/img-post3.png',
        title: ' How the Internet of Things will Transfo…',
        text: `The Internet of Things (IoT) promises to be the most
        important technological development for consumers since
        the advent of the smartphone. Experts believe that this
        collection of internet-connected technolog…`,

        data: {
          time: '2019-10-20',
          minuts: '10',
          comments: '11'
        }
      },
    ]
  },


};

document.addEventListener('DOMContentLoaded', function(event) {
  // Containers
  const applicationContainer = document.getElementById('app');

  const navigation = new Navigation(data.nav, data.nav[0]);
  const header = new Header(navigation);
  const footer = new Footer(navigation);
  const sectionTopContent = new SectionTopContent(data.blockContent);
  const about = new About(data.about);
  const post = new Post(data.post);
  const portfolio = new Portfolio(data.portfolio);
  const testimonials = new Testimonials(data.testimonials);
  const contacts = new Contacts(data.contacts);

  applicationContainer.innerHTML = `
    ${header.render()}
      <div class="sections-wrap">
          ${sectionTopContent.render()}
          ${about.render()}
          ${post.render()}
          ${portfolio.render()}  
          ${testimonials.render()}
          ${contacts.render()}        
      </div> 
    ${footer.render()} 
    
  `;
});
