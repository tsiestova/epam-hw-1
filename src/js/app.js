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

document.addEventListener("DOMContentLoaded", function (event) {
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
  const article = new Article(data.article);

  function renderHome() {
    return `
      ${header.render("Home")}
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
      ${header.render("Blog")}
      ${blog.render()} 
      ${footer.render()} 
    `;
  }

  function renderPost() {
    return `
      ${header.render("Post")} 
      ${article.render()}
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
