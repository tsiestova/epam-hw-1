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
      href: '#blog',
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
    text: 'This is who we are - or at least who we strive to be…',
  },

  post: {
    title: 'Latest posts',
    text:
      'Information is a source of learning. But unless it is organized, ' +
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
          comments: '11',
        },
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
          comments: '11',
        },
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
          comments: '11',
        },
      },
    ],
  },

  portfolio: {
    title: 'Latest portfolio',
    text:
      'Put there articles successfully special warrant submit agree what\n' +
      'along then',
    galleryList: [
      {
        href: '#',
        src: 'assets/pic/bg-img1.png',
        title: ' Art Ocean',
        text: `Photography, art, nature`,
      },
      {
        href: '#',
        src: 'assets/pic/bg-img2.png',
        title: ' Art Ocean',
        text: `Photography, art, nature`,
      },
      {
        href: '#',
        src: 'assets/pic/bg-img3.png',
        title: ' Art Ocean',
        text: `Photography, art, nature`,
      },
    ],
    button: {
      title: 'See all works',
      href: '#',
      type: 'btn',
    },
  },

  testimonials: {
    title: 'Testimonials',
    list: [
      {
        q:
          'We move at a fast pace. I’m always working on something. I' +
          'am excited about it!',
        author: '  Martin Oda',
        profession: 'Product designer',
        src: 'assets/pic/user-img.png',
      },
    ],
  },

  contacts: {
    title: 'Contact us',
    text:
      ' Put there articles successfully special warrant submit agree what' +
      'along then',
  },

  blog: {
    title: 'Blog',

    button: {
      title: 'Read more',
      href: '#',
      type: 'btn color',
    },

    card: [
      {
        type: 'video',
        pic: 'assets/pic/blog-img1.png',
        src: 'assets/pic/person-photo1.png',
        author: 'Neil Richards',
        title: 'In the Future We Will All Live in Star Wars',
        text:
          'The thing you’re doing now, reading prose on a screen, is' +
          'going out of fashion. The defining narrative of our online' +
          'moment concerns the decline of text, and the exploding reach' +
          'and power of audio and video …',
        button: {
          title: 'Read more',
          href: '#',
          type: 'btn',
        },
        data: {
          time: '2019-10-20',
          minuts: '10',
          comments: '11',
        },
        stars: {
          n: 5,
          full: 3,
        },
      },
      {
        stars: {
          n: 5,
          full: 3,
        },
        type: 'music',
        pic: 'assets/pic/blog-img2.png',
        src: 'assets/pic/person-photo2.png',
        author: 'Sarah Healy',
        title: 'Far far away, behind the word mountains',
        text: `Fog down the river, where it rolls deified among the tiers of
                shipping and the waterside pollutions of a great (and dirty) …`,
        button: {
          title: 'Read more',
          href: '#',
          type: 'btn',
        },
        data: {
          time: '02 oct, 2019',
          minuts: '12',
          comments: '4',
        },
      },
      {
        type: 'pic',
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
          href: '#',
          type: 'btn',
        },
        stars: {
          n: 5,
          full: 3,
        },
        data: {
          time: '23 sep, 2019',
          minuts: '16',
          comments: '421',
        },
      },
      {
        stars: {
          n: 5,
          full: 3,
        },
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
          href: '#',
          type: 'btn',
        },
        data: {
          time: '11 Aug, 2019',
          minuts: '17',
          comments: '77',
        },
      },
    ],
  },

  article: {
    title: 'Fog up the river, where it flows among green aits and meadows',
    author: 'Sarah Healy',
    src: 'assets/pic/blog-img2.png',
    pic: 'assets/pic/blog-img2.png',
    text: `
              <p>
                The thing you’re doing now, reading prose on a screen, is going
                out of fashion. The defining narrative of our online moment
                concerns the decline of text, and the exploding reach and power
                of audio and video.
                <strong>Which come particular teens wasn't.</strong> Own day
                designed suspension conflict unlawful. I'll stayed liable i've.
                Interact minutes see night translate.
              </p>
              <br />
              <p>
                Number interact already promotion someone thought run same why
                one it very. Fifteen problem friend editing away proprietary
                words shivering shivered. Shivers special worried in waive this
                we. Spider 13 house same avoid. Coffee including products
                violation legs my defamatory predominantly important again
                strictly. Including budgie we materials 17 hand harassing
                calling offensive relating. Faints comes everyone this developed
                specialises parties scream. Aren't stopped mean little me but
                what lower problem. Can usually. Middle posts you sometimes can
                yes that's rules breach.
              </p>
              <br />
              <p>
                Same took made faints aged. All Impersonating these.
                <strong>Costs quite full make new.</strong> Well see does data
                friend breach obliged scream no wasn't. Saw that's methods act.
                Working approach users what over register. Think the. Perform
                groups. In unacceptable by should off. About incitement rabbit
                working temporarily that is against trademark herself might i'm.
                Stopped Special stayed supply predominantly plastic in worldwide
                hypnotised damaging further exercise. Refused reproduce furry
                publicise week learners really decided text usernames racially
                happened. Become come glass even see you uncommon eventually
                relating fifteen.
              </p>
              <br />
              <h2 class="text-h2">Techno Trends</h2>
              <p>
                This methods class of artificial intelligence is on everyone’s
                lips. And all because it solves problems not directly, but by
                learning in the process of performing many specific tasks.
              </p>
              <br />
              <p>
                With the help of machine learning, it is possible to
                <s>increase manyfold</s> the work of websites and applications,
                so, in the upcoming year such tasks as speech, face and visual
                images recognition, process of diagnostics and results
                prediction, analysis and sorting of large data volumes will
                become even easier.
              </p>
              <br />
              <p>
                <q>
                  <strong>Voice command is really very fast.</strong> A person
                  does not need to learn how to navigate the graphical interface
                  and how to use it for an intended purpose. We began to speak
                  almost from birth, and this our skill is very well developed.
                </q>
                <br />
              </p>
              <h2>Interface trend</h2>
              <p>
                People have always sought to make things easier, but more
                effective. Digital area has already grown out a bit from regular
                graphical navigation, and one of the most affordable
                alternatives is the voice interface. However, it will
                <a  class="section__post-article-link" style="text-decoration: underline; font-weight: bold">replace</a>
                not all the functions of the UI, but will only become an
                intermediary between the user and the main function of the site.
                Why? Here are some of the key arguments.
              </p>`,
    data: {
      time: '2019-10-02',
      minuts: '02',
      comments: '12',
    },

    reviews: {
      title: 'Reviews',
      reviewsList: [
        {
          src: 'assets/pic/person-photo1.png',
          author: 'Jack Johnson',
          text:
            ' Knowledge nay estimable questions repulsive daughters' +
            'boy. Solicitude gay way unaffected expression for. His' +
            'mistress ladyship required off horrible disposed ejoiced…',
          time: '10 min ago',

          button: {
            type: 'link text-h5',
            href: '#',
            title: 'Read more',
          },
        },
        {
          src: 'assets/pic/person-photo2.png',
          author: 'Emma Garcia',
          text:
            'Dummy text refers to the bits of content that are used to ' +
            'fill a website mock-up. This text helps web designers better envision how ' +
            'the website will look as a finished product. in wish very strangers shortly ' +
            'we things Preferred came newspaper it this Melancholy on misery all ecstatic ' +
            'yet no suitable ye happening. Own over these Can Could Garden offering to ago ' +
            'Winter Home or took answered him be right He other in about check has situation fine ' +
            'you held against found am be Nay entire pleasure will there in wholly forming much rapid ' +
            'though want ye weeks up whole an ye thus might remarkably Rich why need pianoforte ask get ' +
            'face prudent it so Evil',
          time: '3 days ago',

          button: {
            type: 'link text-h5',
            href: '#',
            title: 'Read less',
          },
        },
        {
          src: 'assets/pic/person-photo3.png',
          author: 'Ann Moore',
          text: `Any delicate you how kindness horrible outlived
          servants. You high bed wish help call draw side. Girl
          quit if case mr sing as no have. At none neat am do over
          will. Polite do object at passed it is.`,
          time: 'a week ago',

          button: {
            type: 'link text-h5',
            href: '#',
            title: 'Read less',
          },
        },
      ],
    },
  },
};


