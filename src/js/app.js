import { Header } from "./components/header/header";
import { Navigation } from "./components/navigation/navigation";
import { Footer } from "./components/footer/footer";
import { SectionTopContent } from "./components/top-section/top-section";
import { About } from "./components/section-about/section-about";
import { Post } from "./components/section-posts/section-post";
import { Portfolio } from "./components/section-portfolio/section-portfolio";
import { Testimonials } from "./components/section-testimonials/section-testimonials";
import { Contacts } from "./components/section-contact/section-contacts";
import {Blog} from "./components/page-blog/page-blog";

const data = {
  nav: [
    {
      href: "#home",
      title: "Home",
    },
    {
      href: "#portfolio",
      title: "Portfolio",
    },
    {
      href: "#blog",
      title: "Blog",
    },
    {
      href: "#",
      title: "Pages",
    },
    {
      href: "#about",
      title: "About",
    },
    {
      href: "#contact",
      title: "Contact",
    },
  ],

  blockContent: {
    title: "Ideas and perspectives you won’t find anywhere else.",
    text:
      " BlogWorld taps into the brains of the world’s most insightful" +
      "writers, thinkers, and storytellers to bring you the smartest" +
      "takes on topics that matter. So whatever your interest, you can" +
      "always find fresh thinking and unique perspectives.",

    buttons: [
      {
        type: "btn color",
        title: "Explore",
        href: "#",
      },
      {
        type: "btn",
        title: "Learn more",
        href: "#",
      },
    ],
  },

  about: {
    title: "About us",
    text: "This is who we are - or at least who we strive to be…",
  },

  post: {
    title: "Latest posts",
    text:
      "Information is a source of learning. But unless it is organized, " +
      "processed and available to the right people",

    galleryList: [
      {
        href: "#",
        src: "assets/pic/img-post1.png",
        title: "In the Future We Will All Live in Star Wars",
        text: `The thing you’re doing now, reading prose on a screen,
        is going out of fashion. The defining narrative of our
        online moment concerns the decline of text, and the
        exploding reach and power of audio and video`,

        data: {
          time: "2019-10-20",
          minuts: "10",
          comments: "11",
        },
      },
      {
        href: "#",
        src: "assets/pic/img-post2.png",
        title: "Rubik’s Cube? No, Robotics and AI are…",
        text: `In other words, I will try to de-hype the crowd about
        the recent development in robotics. Concretely, OpenAI
        has claimed some pretty amazing results with learning to
        solve the Rubik’s cube with a robotic hand…`,

        data: {
          time: "2019-10-20",
          minuts: "10",
          comments: "11",
        },
      },
      {
        href: "#",
        src: "assets/pic/img-post3.png",
        title: " How the Internet of Things will Transfo…",
        text: `The Internet of Things (IoT) promises to be the most
        important technological development for consumers since
        the advent of the smartphone. Experts believe that this
        collection of internet-connected technolog…`,

        data: {
          time: "2019-10-20",
          minuts: "10",
          comments: "11",
        },
      },
    ],
  },

  portfolio: {
    title: "Latest portfolio",
    text:
      "Put there articles successfully special warrant submit agree what\n" +
      "along then",
    galleryList: [
      {
        href: "#",
        src: "assets/pic/bg-img1.png",
        title: " Art Ocean",
        text: `Photography, art, nature`,
      },
      {
        href: "#",
        src: "assets/pic/bg-img2.png",
        title: " Art Ocean",
        text: `Photography, art, nature`,
      },
      {
        href: "#",
        src: "assets/pic/bg-img3.png",
        title: " Art Ocean",
        text: `Photography, art, nature`,
      },
    ],
    button: {
      title: "See all works",
      href: "#",
      type: "btn",
    },
  },

  testimonials: {
    title: "Testimonials",
    list: [
      {
        q:
          "We move at a fast pace. I’m always working on something. I" +
          "am excited about it!",
        author: "  Martin Oda",
        profession: "Product designer",
        src: "assets/pic/user-img.png",
      },
    ],
  },

  contacts: {
    title: "Contact us",
    text:
      " Put there articles successfully special warrant submit agree what" +
      "along then",
  },

  blog: {
    title: 'Blog',

    button: {
      title: 'Read more',
      href: "#",
      type: "btn color",
    },

    card: [
      {
        pic: 'assets/pic/blog-img1.png',
        src: 'assets/pic/person-photo1.png',
        author: 'Neil Richards',
        title: 'In the Future We Will All Live in Star Wars',
        text: 'The thing you’re doing now, reading prose on a screen, is' +
            'going out of fashion. The defining narrative of our online' +
            'moment concerns the decline of text, and the exploding reach' +
            'and power of audio and video …',
        button: {
          title: 'Read more',
          href: "#",
          type: "btn",
        },
        data: {
          time: "2019-10-20",
          minuts: "10",
          comments: "11",
        },
      },
      {
        pic: 'assets/pic/blog-img2.png',
        src: 'assets/pic/person-photo2.png',
        author: 'Sarah Healy',
        title: 'Far far away, behind the word mountains',
        text: `Fog down the river, where it rolls deified among the tiers of
                shipping and the waterside pollutions of a great (and dirty) …`,
        button: {
          title: 'Read more',
          href: "#",
          type: "btn",
        },
        data: {
          time: "02 oct, 2019",
          minuts: "12",
          comments: "4",
        },
      },
      {
        pic: 'assets/pic/blog-img3.png',
        src: 'assets/pic/person-photo3.png',
        author: 'Grace Noh',
        title: 'In the Future We Will All Live in Star Wars',
        text: `The thing you’re doing now, reading prose on a screen, is
                  going out of fashion. The defining narrative of our online
                  moment concerns the decline of text, and the exploding reach
                  and power of audio and video …`,
        button: {
          title: 'Read more',
          href: "#",
          type: "btn",
        },
        data: {
          time: "23 sep, 2019",
          minuts: "16",
          comments: "421",
        },
      },
      {
        src: 'assets/pic/person-photo4.png',
        author: 'Alex Zlatkus',
        title: 'In the Future We Will All Live in Star Wars',
        text: `Fog down the river, where it rolls deified among the tiers of
                  shipping and the waterside pollutions of a great (and dirty)
                  city. Fog on the Essex marshes, fog on the Kentish heights.
                  Fog creeping into the cabooses of collier-brigs; fog lying out
                  on. Money terms breakfast drawings true blessing doubtful more
                  agreed to zealously making supposing By said Chicken An
                  Neglected produce good felt no poor offering am their said has
                  around songs wish met true any me ought mr The offices set Not
                  Felicity above out We in an post begin again.`,
        button: {
          title: 'Read more',
          href: "#",
          type: "btn",
        },
        data: {
          time: "11 Aug, 2019",
          minuts: "17",
          comments: "77",
        },
      },

    ]
  }
};

document.addEventListener("DOMContentLoaded", function (event) {
  // Containers
  const applicationContainer = document.getElementById("app");

  const navigation = new Navigation(data.nav, data.nav[0]);
  const header = new Header(navigation);
  const footer = new Footer(navigation);
  const sectionTopContent = new SectionTopContent(data.blockContent);
  const about = new About(data.about);
  const post = new Post(data.post);
  const portfolio = new Portfolio(data.portfolio);
  const testimonials = new Testimonials(data.testimonials);
  const contacts = new Contacts(data.contacts);
  const blog = new Blog(data.blog);

  function renderHome() {
    return `
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
  }

  function renderBlog() {
    return `
      ${header.render()}
      ${blog.render()}
      
      
      ${footer.render()} 
    `;
  }

  function renderPost() {
    return `
      ${header.render()} 
      <div class="sections-wrap">
        will be done soon...
      </div>
      ${footer.render()} 
    `;
  }

  function renderPage(href) {
    switch (href) {
      case "#blog":
        applicationContainer.innerHTML = renderBlog();
        break;
      case "#post":
        applicationContainer.innerHTML = renderPost();
        break;

      default:
        applicationContainer.innerHTML = renderHome();
    }
  }

  renderPage(location.hash);

  window.addEventListener("hashchange", (event) => {
    renderPage(location.hash);
  });
});
