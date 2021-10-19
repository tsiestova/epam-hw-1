import { Header } from "./components/header/header";
import { Navigation } from "./components/navigation/navigation";
import { Footer } from "./components/footer/footer";
import { SectionTopContent } from "./components/top-section/top-section";
import { About } from "./components/section-about/section-about";
import {Post, PostSection} from "./components/section-posts/section-post";
import { Portfolio } from "./components/section-portfolio/section-portfolio";
import { Testimonials } from "./components/section-testimonials/section-testimonials";
import { Contacts } from "./components/section-contact/section-contacts";
import { Blog } from "./components/page-blog/page-blog";
import { Article } from "./components/page-post/page-post";
import data from "./data.json";
import { APIKEY } from "./config";
// import { Slider} from "./slider";
import {sliderPortfolio, sliderTestimonials} from "./sliderES5";
import {BlogPost} from "./postES6";

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
  const COUNT_OF_STARS = 5;
  let blogPage;

  let baseURL = "https://api.themoviedb.org/3";

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

  const loadBlogPages = function (blogPage) {
    return fetch(`${baseURL}/movie/popular?api_key=${APIKEY}&page=${blogPage}`)
        .then((result) => result.json())
        .then((data) => {
          return data.results.map((el) => {
            const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
              'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            let data = new Date(el.release_date);
            let dataStr = `${data.getDate()} ` + `${month[data.getMonth() + 1]}, ` + `${data.getFullYear()}`;
            let stars = (COUNT_OF_STARS * (el.vote_average * 10)) / 100;

            return {
              id: el.id,
              stars: {
                n: COUNT_OF_STARS,
                full: Math.floor(stars)
              },
              type: "video",
              // pic: "assets/pic/blog-img1.png",
              pic: `https://image.tmdb.org/t/p/original/${el.backdrop_path}`,
              // pic: `${baseURL}/movie/popular?api_key=${APIKEY}${el.backdrop_path}`,
              src: `https://image.tmdb.org/t/p/original/${el.poster_path}`,
              author: "Neil Richards",
              title: el.original_title,
              text: el.overview,
              button: {
                title: "Read more",
                href: "#",
                type: "btn",
              },
              data: {
                time: dataStr,
                minuts: "10",
                comments: el.vote_count,
              },
            };
          });
        }).then((response) => {
          return Promise.all(
              response.map((item) =>
                  fetch(`${baseURL}/movie/${item.id}?api_key=${APIKEY}&language=en-US`)
                      .then((data) => data.json())
                      .then((data) => {
                        item.runtime = data.runtime;
                        return new BlogPost(item);
                      })
              )
          )
        });
  }

  function renderPage(href) {
    cleanUp();
    switch (href) {
      case "#blog":
        blogPage = 1;
        loadBlogPages(blogPage).then((data) => {
          applicationContainer.innerHTML = renderBlog(data);
          console.log(data);

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