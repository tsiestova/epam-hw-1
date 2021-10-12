import { Header } from "./components/header/header";
import { Navigation } from "./components/navigation/navigation";
import { Footer } from "./components/footer/footer";
import { SectionTopContent } from "./components/top-section/top-section";
import { About } from "./components/section-about/section-about";
import { Post } from "./components/section-posts/section-post";
import { Portfolio } from "./components/section-portfolio/section-portfolio";
import { Testimonials } from "./components/section-testimonials/section-testimonials";
import { Contacts } from "./components/section-contact/section-contacts";
import { Blog } from "./components/page-blog/page-blog";
import { Article } from "./components/page-post/page-post";
import data from "./data.json";
import { APIKEY } from "./config";
// import { Slider} from "./slider";
import {sliderPortfolio, sliderTestimonials} from "./sliderES5";

document.addEventListener("DOMContentLoaded", function (event) {
  const applicationContainer = document.getElementById("app");
  const navigation = new Navigation(data.nav);
  const header = new Header(navigation);
  const footer = new Footer(navigation);
  const sectionTopContent = new SectionTopContent(data.blockContent);
  const about = new About(data.about);
  const post = new Post(data.post);
  const portfolio = new Portfolio(data.portfolio);
  const testimonials = new Testimonials(data.testimonials);
  const contacts = new Contacts(data.contacts);
  const blog = new Blog(data.blog);
  const article = new Article(data.article);
  let testimonialsSlider;

  let baseURL = "https://api.themoviedb.org/3";

  function renderHome() {
    return `
       ${header.render("#home")}
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

  const getBlogData = function () {

    return fetch(`${baseURL}/movie/popular?api_key=${APIKEY}&page=1`)
        .then((result) => result.json())
        .then((data) => {
          return data.results.map((el) => {
            return {
              stars: {
                n: 5,
                full: 1.5,
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
                time: "2019-10-20",
                minuts: "10",
                comments: "11",
              },
            };
          });
        });

  };

  function renderPage(href) {
    cleanUp();
    switch (href) {
      case "#blog":
        getBlogData().then((data) => {
          applicationContainer.innerHTML = renderBlog(data);
        })

        break;
      case "#post":
        applicationContainer.innerHTML = renderPost();
        break;

      default:
        applicationContainer.innerHTML = renderHome();
        // testimonialsSlider = new Slider();
        sliderTestimonials.init();
        sliderPortfolio.init();
    }
  }

  function cleanUp() {
    if(testimonialsSlider) {
      testimonialsSlider.destroy();
      testimonialsSlider = null;
    }
  }
  renderPage(location.hash);


  window.addEventListener("hashchange", (event) => {
    renderPage(location.hash);
  });
});
