import { Header } from "./components/header/header";
import { Navigation } from "./components/navigation/navigation";
import { Footer } from "./components/footer/footer";
import { SectionTopContent } from "./components/top-section/top-section";
import { About } from "./components/section-about/section-about";
import {PostSection} from "./components/section-posts/section-post";
import { Portfolio } from "./components/section-portfolio/section-portfolio";
import { Testimonials } from "./components/section-testimonials/section-testimonials";
import { Contacts } from "./components/section-contact/section-contacts";
import { Blog } from "./components/page-blog/page-blog";
import { Article } from "./components/page-post/page-post";
import data from "./data.json";
import {sliderPortfolio, sliderTestimonials} from "./sliderES5";
import * as $ from 'jquery'
import './jQuery-plugin/plugin'
import {initMap} from "./map";
import {
  loadBlogPages,
  loadSearchPagesByTitle,
  loadSearchPagesByAuthor
} from "./movie-search";

const throttle = (cb, time) => {
  clearTimeout(window.throttleTimout);
  window.throttleTimout = setTimeout(() => {
    cb();
  }, time);
};

document.addEventListener("DOMContentLoaded", function (event) {
  const applicationContainer = document.getElementById("app");
  const navigation = new Navigation(data.nav);
  const header = new Header(navigation);
  const footer = new Footer(navigation);
  const sectionTopContent = new SectionTopContent(data.blockContent);
  const about = new About(data.about);
  const postSection = new PostSection(data.postSection);
  const portfolio = new Portfolio(data.portfolio);
  const testimonials = new Testimonials(data.testimonials);
  const contacts = new Contacts(data.contacts);
  const blog = new Blog(data.blog);
  const article = new Article(data.article);
  let testimonialsSlider;
  let portfolioSlider;
  let blogPage;

  function renderHome() {
    return `
       ${header.render("#home")}
        <div class="sections-wrap">
            ${sectionTopContent.render()} 
            ${about.render()}
            ${postSection.render()}
            ${portfolio.render()}  
            ${testimonials.render()}
            ${contacts.render()}        
        </div> 
      ${footer.render()} 
    `;
  }

  function renderBlog(data) {
    return `
      ${header.render("#blog")}
      ${blog.render(data)} 
      ${footer.render()} 
    `;
  }

  function renderPost() {
    return `
       ${header.render("#post")} 
      ${article.render()}
      ${footer.render()} 
    `;
  }

  function renderPage(href) {
    cleanUp();
    switch (href) {
      case "#blog":

        blogPage = 1;

        loadBlogPages(blogPage).then((data) => {
          applicationContainer.innerHTML = renderBlog(data);
          let id;
          const inputs = document.querySelectorAll('[data-value="blog__input-search"]');
          const form = document.getElementById('blog-list__search-form');
          const searchByTitle = document.getElementById('blog-list__search-input_title');
          const searchByAuthor = document.getElementById('blog-list__search-input_author');

          let localStorageTitle = localStorage.getItem('title');
          let localStorageAuthor = localStorage.getItem('author');

          form.addEventListener('submit', (e) => {
            e.preventDefault();
          })

          searchByTitle.addEventListener('input', (e) => {
            blogPage = 1;
            const target = e.target;
            const value = target.value.trim();
            localStorage.setItem('title', value);
            localStorage.setItem('author', '');

            if (!value) {
              loadBlogPages(blogPage)
                  .then((data) => {
                    const div = document.createElement('div');
                    const list = document.querySelector('.section__blog-list');
                    div.innerHTML = blog.createList(data);
                    list.innerHTML = '';
                    list.appendChild(div);
                  });
              return;
            }

            if (target.validity.patternMismatch) {
              return;
            }

            searchByAuthor.value = '';

            throttle(() => {
              loadSearchPagesByTitle(blogPage, value).then((data) => {
                const div = document.createElement('div');

                if (data.length) {
                  div.innerHTML = blog.createList(data);
                } else {
                  div.innerHTML = '<h1>No data for you request</h1>';
                }

                const list = document.querySelector('.section__blog-list');
                list.innerHTML = '';
                list.appendChild(div);
              });
            }, 500)
          });

          searchByAuthor.addEventListener('input', (e) => {
            blogPage = 1;
            const target = e.target;
            const value = target.value.trim();
            localStorage.setItem('author', value);
            localStorage.setItem('title', '');

            if (!value) {
              loadBlogPages(blogPage)
                  .then((data) => {
                    const div = document.createElement('div');
                    const list = document.querySelector('.section__blog-list');
                    div.innerHTML = blog.createList(data);
                    list.innerHTML = '';
                    list.appendChild(div);
                  });
              return;
            }

            if (target.validity.patternMismatch) {
              return;
            }

            searchByTitle.value = '';

            throttle(() => {
              loadSearchPagesByAuthor(blogPage, value).then((data) => {
                const div = document.createElement('div');

                if (data.length) {
                  div.innerHTML = blog.createList(data);
                } else {
                  div.innerHTML = '<h1>No data for you request</h1>';
                }

                const list = document.querySelector('.section__blog-list');
                list.innerHTML = '';
                list.appendChild(div);
              });
            }, 500)
          });

          if(localStorageTitle) {
            searchByTitle.value = localStorageTitle
            searchByTitle.dispatchEvent(new Event('input'));
          }else {
            searchByAuthor.value = localStorageAuthor
            searchByAuthor.dispatchEvent(new Event('input'));
          }

          inputs.forEach((input) => {
            input.addEventListener('click', function () {
             id = input.getAttribute('id');
            })

            input.addEventListener('invalid', (event) => {
              input.setCustomValidity(`First letter uppercase \n At least 6 characters. \n Only Latin characters \n Allowed symbols - '?!,.:'`);
            });
          })

          const blogLoadButton = document.getElementById('blog-lazy-loading');

          blogLoadButton.addEventListener('click', function () {
            blogPage += 1;

            switch (true) {
              case !!searchByTitle.value:
                 loadSearchPagesByTitle(blogPage, searchByTitle.value)
                   .then((data) => {
                        const div = document.createElement('div');
                        div.innerHTML = blog.createList(data);
                        const list = document.querySelector('.section__blog-list');
                        list.appendChild(div);
                      });
                break;

              case !!searchByAuthor.value:
                loadSearchPagesByAuthor(blogPage, searchByAuthor.value)
                  .then((data) => {
                        const div = document.createElement('div');
                        div.innerHTML = blog.createList(data);
                        const list = document.querySelector('.section__blog-list');
                        list.appendChild(div);
                      });

                break;

              default:
                loadBlogPages(blogPage)
                    .then((data) => {
                      const div = document.createElement('div');
                      div.innerHTML = blog.createList(data);
                      const list = document.querySelector('.section__blog-list');
                      list.appendChild(div);
                    });
            }
          });
        });

        break;

      case "#post":
        applicationContainer.innerHTML = renderPost();

        break;

      default:
        applicationContainer.innerHTML = renderHome();
        // testimonialsSlider = new Slider();
        sliderTestimonials.init();
        sliderTestimonials.startAnimation();
        sliderPortfolio.init();
        sliderPortfolio.startAnimation();

        initMap();
    }
  }

  function cleanUp() {
    if(testimonialsSlider) {
      testimonialsSlider.destroy();
      testimonialsSlider = null;
    }

    if(portfolioSlider) {
      portfolioSlider.destroy();
      portfolioSlider = null;
    }
  }

  renderPage(location.hash);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", (event) => {
    window.scrollTo(0, 0);
    renderPage(location.hash);
  });
});
