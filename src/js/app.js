import {Header} from './components/header/header'
import {Navigation} from './components/navigation/navigation'
import {Footer} from './components/footer/footer'

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
};

class SectionTopContent {
  constructor(blockContent) {
    this.blockContent = blockContent;
  }
  /**
   *
   * @return {*}
   */

  renderText() {
    return ` <div class="section__top-heading text-h1">
                       ${this.blockContent.title}
                    </div>
                    <div class="section__top-text">
                        ${this.blockContent.text}
                    </div>`;
  }

  createButtons(item) {
    return `<a href="${item.href}" class="${item.type}">${item.title}</a>`;
  }

  renderButtons() {
    return this.blockContent.buttons.map((el) => this.createButtons(el)).join('');
  }

  render() {
    return `
       <div class="section__top" id="section__top">
            <div class="layout">
                <div class="section__top-wrap">
                   ${this.renderText()}
                   ${this.renderButtons()} 
                </div>
            </div>
        </div>`;
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  // Containers
  const applicationContainer = document.getElementById('app');

  const navigation = new Navigation(data.nav, data.nav[0]);
  const header = new Header(navigation);
  const footer = new Footer(navigation);
  const sectionTopContent = new SectionTopContent(data.blockContent);

  applicationContainer.innerHTML = `
    ${header.render()}
      <div class="sections-wrap">
          ${sectionTopContent.render()}   
      </div>
    ${footer.render()}
    
  `;
});
