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
import {initMap} from "./map";
import {loadBlogPages, initBlogSearch, loadBSearchPages, loadSearchPages} from "./movie-search";

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
  let userInput;

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

          const blogLoadButton = document.getElementById('blog-lazy-loading');
          blogLoadButton.addEventListener('click', function () {
            blogPage += 1;
            loadBlogPages(blogPage).then((data) => {
              const div = document.createElement('div');
              div.innerHTML = blog.createList(data);
              const list = document.querySelector('.section__blog-list');
              list.appendChild(div);
            })
          });


          const input = document.getElementById('blog-list__search-input');
          input.addEventListener('invalid', (event) => {
            input.setCustomValidity(`First letter uppercase \n At least 6 characters. \n Only Latin characters \n Allowed symbols - '?!,.:'`);
          });
          const throttle = (cb, time) => {
            clearTimeout(window.throttleTimout);
            window.throttleTimout = setTimeout(() => {
              cb();
            }, time);
          };
          input.addEventListener('input', (e) => {
            userInput = e.target.value;
            throttle(() => {
              loadSearchPages(blogPage, userInput).then((data) => {

                applicationContainer.innerHTML = '';
                applicationContainer.innerHTML = renderBlog(data);

              });
            }, 1000);
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
