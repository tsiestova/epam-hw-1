/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/footer/footer.js":
/*!********************************************!*\
  !*** ./src/js/components/footer/footer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/**
 * @class
 */
class Footer {
  constructor(navigation) {
    this.navigation = navigation;
  }

  render() {
    return `
    <footer class="footer sticky">
        <div class="layout">
            <ul class="social-media">
                <li>
                    <a target="_blank" class="facebook" href="https://www.facebook.com/"></a>
                </li>
                <li>
                    <a target="_blank" class="instagram" href="https://www.instagram.com/"></a>
                </li>
                <li>
                    <a target="_blank" class="dribble" href="https://dribbble.com/"></a>
                </li>
            </ul>
            <div class="header__logo text-h4">BlogWorld</div>
            <div class="footer_text text-h5">&copy; 2019 All Rights Reserved.</div>
        </div>
    </footer>`;
  }
}


/***/ }),

/***/ "./src/js/components/header/header.js":
/*!********************************************!*\
  !*** ./src/js/components/header/header.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
class Header {
  constructor(navigation) {
    this.navigation = navigation;
  }

  render(href) {
    let result = "";
    if (href === "#blog" || href === "#post") {
      result = `<header class="header header-inner">
        <div class="layout">
            <div class="header__logo text-h4">BlogWorld</div>
            <nav class="header__nav-menu">
                <ul>
                    ${this.navigation.render(href)}
                </ul> 
            </nav> 
        </div> 
    </header>`;
    } else {
      result = `<header class="header sticky">
        <div class="layout">
            <div class="header__logo text-h4">BlogWorld</div>
            <nav class="header__nav-menu">
                <ul>
                    ${this.navigation.render(href)}
                </ul>
            </nav>
        </div>
    </header>`;
    }
    return result;
  }
}


/***/ }),

/***/ "./src/js/components/navigation/navigation.js":
/*!****************************************************!*\
  !*** ./src/js/components/navigation/navigation.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigation": () => (/* binding */ Navigation)
/* harmony export */ });
/**
 * @class
 */

class Navigation {
  /**
   *
   * @param {Array<{title: string, href: string}>} nav
   * @param {{title: string, href: string}} active
   */
  constructor(nav) {
    this.nav = nav;
  }

  /**
   *
   * @param {{href:string, title: string}} item
   * @return {string}
   */

  createNavItem(item, href) {
    return `
            <li class="header__nav-item">
                <a class="text-h5 ${
                  item.href === href ? "active" : ""
                }" href="${item.href}" data-value="${item.title}">"${
      item.title
    }"</a>
            </li>
        `;
  }

  render(href) {
    return this.nav.map((el) => this.createNavItem(el, href)).join("");
  }
}


/***/ }),

/***/ "./src/js/components/page-blog/page-blog.js":
/*!**************************************************!*\
  !*** ./src/js/components/page-blog/page-blog.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blog": () => (/* binding */ Blog)
/* harmony export */ });
class Blog {
  constructor(blog) {
    this.blog = blog;
  }

  renderButton(type) {
    let str = "";
    switch (type) {
      case "video":
        str = "section__blog-person-info_video";
        break;
      case "music":
        str = "section__blog-person-info_music";
        break;
      case "pic":
        str = "section__blog-person-info_pic";
        break;

      default:
        str = "";
    }

    return str;
  }

<<<<<<< HEAD
    createRatingList(count) {
        let star = 5;
=======
    createRatingList(n, full) {
>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463
        const arr = [];

        for(let i = 0; i < n; i++) {
          if(i <= full) {
              arr.push(`<li class="rating-item full"></li>`);
          } else {
              arr.push(`<li class="rating-item"></li>`);
          }
      }

      return arr.join('');
  }

  createItem(obj) {
    return ` <li class="section__blog-item">
                        ${
                          obj.pic
                            ? `<figure class="section__blog-item_video  ${
                                obj.type === "video" ? "video-button" : ""
                              }">
                            <img
                                src="${obj.pic}"
                                class="section__blog-image"
                                alt="blog"
                            />
                        </figure>`
                            : ""
                        }
                        <div
                            class="section__blog-person-info
                  ${this.renderButton(obj.type)}
                "
                        >
                            <div class="section__blog-person-info_wrap">
                                <figure class="section__blog-person_photo">
                                    <img
                                        src="${obj.src}" 
                                        alt="person-photo"
                                    />
                                </figure>
                                <div>
                                    <div class="section__blog-person-name text-h4">
                                        ${obj.author}
                                    </div>
                                    <div class="data-box">
                                        <time dateTime class="time text-h5"
                                        >${obj.data.time}
                                        </time
                                        >
                                        <span class="text-h5 dot">${
                                          obj.runtime
                                        } min duration</span>
                                        <span class="text-h5 dot comments">${
                                          obj.data.comments
                                        }</span>
                                        <ul class="rating-list">
                                            ${
        
        this.createRatingList(obj.stars.n, obj.stars.full)
    }
                                        </ul> 
                                    </div> 
                                </div>
                            </div> 

                            <div class="section__blog-person-heading text-h3">
                                ${obj.title}
                            </div>
                            ${
                              obj.type === "music"
                                ? '<figure class="audio">' +
                                  "                  <audio" +
                                  "                    controls" +
                                  '                    src="https://developer.mozilla.org/audio/media/cc0-audio/t-rex-roar.mp3"' +
                                  "                  ></audio>" +
                                  "                </figure>"
                                : ""
                            }
                            
                            <div class="section__blog-person-text text-h4">
                                 ${obj.text}
                            </div>
                            <a href="${obj.button.href}" class="${
      obj.button.type
    }">${obj.button.title}</a>
                        </div>
                    </li>`;
  }

  createList(data) {
    return data.map((el) => this.createItem(el)).join("");
  }

  render(data) {
    return `<section class="section__blog text-center">
            <div class="layout">
                <h2 class="section__blog-heading text-h2 bottom-line">${
                  this.blog.title
                }</h2>
                
                <div class="search-wrap">
                    <div class="section__blog-input-wrap input-search">
                        <input
                            type="search"
                            placeholder="Search by author"
                            class="input" 
                        />
                    </div>
                </div> 

                <ul class="section__blog-list">
                    ${this.createList(data)}
                </ul> 
            </div>
            <button class="${
      this.blog.button.type
    }" id="blog-lazy-loading">${this.blog.button.title}</button>
        </section>`;
  }
}


/***/ }),

/***/ "./src/js/components/page-post/page-post.js":
/*!**************************************************!*\
  !*** ./src/js/components/page-post/page-post.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Article": () => (/* binding */ Article)
/* harmony export */ });
class Article {
  constructor(article) {
    this.article = article;
  }

  createReviewsItem(obj) {
    return `<li class="section__post_review_item">
                  <div class="section__blog-item section__blog-item_inner">
                    <figure class="section__blog-person_photo section__blog-person_photo_inner">
                      <img src="${obj.src}" alt="person-photo" />
                    </figure>

                    <div class="section__blog-person-info_wrap">
                      <div class="person-review">
                        <div
                                class="
                        section__blog-person-info
                        section__blog-person-info_inner
                      "
                        >
                          <div class="flex-wrap">
                            <div>
                              <div
                                      class="
                              section__blog-person-name
                              text-h4
                              section__blog-person-name_inner
                            "
                              >
                                ${obj.author}
                              </div>
                              <ul class="rating-list rating-list_inner">
                                <li class="rating-item full"></li>
                                <li class="rating-item full"></li>
                                <li class="rating-item full"></li>
                                <li class="rating-item"></li>
                                <li class="rating-item"></li>
                              </ul>
                            </div>
                            <div class="data-box data-box_inner">
                              <span class="text-h5">${obj.time}</span>
                            </div>
                          </div>

                          <div class="section__blog-person-text text-h4">
                            ${obj.text}
                          </div>
                          <div class="link-wrap">
                            <a href="${obj.button.href}" class="${obj.button.type}">${obj.button.title}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>`;
  }

  createReviewsList() {
    return this.article.reviews.reviewsList
      .map((el) => this.createReviewsItem(el))
      .join("");
  }

  render() {
    return ` <div class="layout">
        <div class="section-columns-wrap">
          <div class="sections-wrap">
            <article class="content">
              <h1 class="section__post-heading text-h2">
                ${this.article.title}
              </h1>
             
              <div class="section__blog-person-info_wrap">
                <figure class="section__blog-person_photo">
                  <img src="assets/pic/person-photo2.png" alt="person-photo" />
                </figure>
                <div>
                  <div class="section__blog-person-name text-h4">
                   ${this.article.author}
                  </div>
                  <div class="data-box">
                    <time datetime="${
                      this.article.data.time
                    }" class="time text-h5"
                      >02 oct, 2019
                    </time>
                    <span class="text-h5 dot">${
                      this.article.data.minuts
                    } min read</span>
                    <span class="text-h5 dot comments">${
                      this.article.data.comments
                    }</span>
                    <ul class="rating-list">
                      <li class="rating-item full"></li>
                      <li class="rating-item full"></li>
                      <li class="rating-item full"></li>
                      <li class="rating-item"></li>
                      <li class="rating-item"></li>
                    </ul>
                  </div>
                </div>
              </div>

              <figure
                class="section__blog-item_video section__blog-item_video_inner"
              >
                <img
                  src="${this.article.src}"
                  class="section__blog-image"
                  alt="blog"
                />
              </figure>

              <figure class="section__blog-item_audio_inner">
                <audio
                  controls
                  src="${this.article.pic}"
                ></audio>
              </figure> 
              
               <div class="article">
               ${this.article.text}
               </div>
             
            </article>

            <div class="post-likes_wrap">
              <div>
                <button type="button" class="btn-like"></button>
                <div class="section__post-likes">75 likes</div>
              </div>
              <ul class="social-media">
                <li>
                  <a target="_blank" class="facebook" href="https://www.facebook.com/"></a>
                </li>
                <li>
                  <a target="_blank" class="instagram" href="https://www.instagram.com/"></a>
                </li>
                <li>
                  <a target="_blank" class="dribble" href="https://dribbble.com/"></a>
                </li>
              </ul>
            </div>
            <hr />

            <!--        Reviews-->

           <section class="section__post-review text-center">
              <h2 class="text-h2 left-align section__post-review-header">${
                this.article.reviews.title
              }</h2>
              <ul class="section__post_review-list">
                ${this.createReviewsList()}
           
              </ul>

              <a href="#" class="btn">More comments</a>
            </section>
          </div>

          <!---->
          <div class="assids-wrap">
            <aside class="section__latest-post-box">
              <div class="section__latest-post-heading text-h2 aside-heading">
                Latest posts
              </div>
              <ul class="section__latest-post-list">
                <li class="section__latest-post-item">
                  <figure class="section__latest-post_photo">
                    <img src="assets/pic/aside-img1.png" alt="Photo post" />
                  </figure>
                  <div>
                    <div class="section__latest-post-subheading">
                      Much cure inappropriate could this restrictions …
                    </div>
                    <div class="data-box">
                      <time datetime="2019-10-02" class="time text-h5"
                      >02 oct, 2019
                      </time>
                      <span class="text-h5 dot">12 min read</span>
                      <span class="text-h5 dot comments">4</span>
                    </div>
                  </div>
                </li>
                <li class="section__latest-post-item">
                  <figure class="section__latest-post_photo">
                    <img src="assets/pic/aside-img2.png" alt="Photo post" />
                  </figure>
                  <div>
                    <div class="section__latest-post-subheading">
                      Much cure inappropriate could this restrictions …
                    </div>
                    <div class="data-box">
                      <time datetime="2019-10-02" class="time text-h5"
                      >02 oct, 2019
                      </time>
                      <span class="text-h5 dot">12 min read</span>
                      <span class="text-h5 dot comments">4</span>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="link-wrap">
                <a href="#" class="btn">More posts</a>
              </div>
            </aside>

            <aside class="section__post-categories-box">
              <div
                class="section__post-categories-heding text-h2 aside-heading"
              >
                Categories
              </div>
              <ul class="section__post-categories-list">
                <li class="section__post-categories-item">
                  <input id="travel" type="checkbox" class="input-accordion" />
                  <label for="travel" class="label-accordion text-h4"
                    >Restaurant food (3)</label
                  >
                  <ul class="hidden-list">
                    <li class="hidden-list_item text-h5"></li>
                  </ul>
                </li>

                <li class="section__post-categories-item">
                  <input
                    id="restaurant"
                    type="checkbox"
                    class="input-accordion"
                  />
                  <label for="restaurant" class="label-accordion text-h4"
                    >Travel news (3)</label
                  >
                  <ul class="hidden-list">
                    <li class="hidden-list_item text-h5"><a href="#">Hiking</a></li>
                    <li class="hidden-list_item text-h5"><a href="#">Bicycle trip</a></li>
                    <li class="hidden-list_item text-h5"><a href="#">Mountains trip</a></li>
                  </ul>
                </li>

                <li class="section__post-categories-item">
                  <input
                    id="technology"
                    type="checkbox"
                    class="input-accordion"
                  />
                  <label for="technology" class="label-accordion text-h4"
                    >Modern technology (6)</label
                  >
                  <ul class="hidden-list">
                    <li class="hidden-list_item text-h5"></li>
                  </ul>
                </li>

                <li class="section__post-categories-item">
                  <input id="product" type="checkbox" class="input-accordion" />
                  <label for="product" class="label-accordion text-h4"
                    >Product (4)</label
                  >
                  <ul class="hidden-list">
                    <li class="hidden-list_item text-h5"></li>
                  </ul>
                </li>

                <li class="section__post-categories-item">
                  <input
                    id="inspiration"
                    type="checkbox"
                    class="input-accordion"
                  />
                  <label for="inspiration" class="label-accordion text-h4"
                    >Inspiration (2)</label
                  >
                  <ul class="hidden-list">
                    <li class="hidden-list_item text-h5"></li>
                  </ul>
                </li>
              </ul>
            </aside>

            <aside class="section__post-tags-box">
              <div
                class="section__tags-categories-heading text-h2 aside-heading"
              >
                Tags
              </div>
              <ul class="section__tags-categories-list">
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="">Love</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Signs</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Waterfall</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Inspiration</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Quotes</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Sea</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Sense</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Coffee</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Gold</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Images</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Courage</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Dancing</a>
                </li>
                <li class="section__tags-categories-item">
                  <a class="btn text-h5" href="#">Video</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>`;
  }
}


/***/ }),

/***/ "./src/js/components/section-about/section-about.js":
/*!**********************************************************!*\
  !*** ./src/js/components/section-about/section-about.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "About": () => (/* binding */ About)
/* harmony export */ });
class About {
  constructor(about) {
    this.about = about;
  }

  render() {
    return `  <section id="about" class="section__about text-center">
            <div class="layout">
                <h2 class="section__about-heading text-center text-h2 bottom-line">
                    ${this.about.title}
                </h2>
                <h3 class="section__about-sub-heading text-center text-h4">
                    ${this.about.text}
                </h3>

                <div class="section__about-grid">
                    <div class="section__about-block typography">
                <span class="section__about-block_title text-h4"
                >Typography</span>
                    </div>
                    <div class="section__about-block icon">
                        <span class="section__about-block_title text-h4">Icon set</span>
                    </div>
                    <div class="section__about-block accurate">
                        <span class="section__about-block_title text-h4">Accurate</span>
                    </div>
                    <figure class="section__about-video video-button">
                        <img src="assets/pic/about-picture.png" alt="About picture"/>
                    </figure>
                </div>
            </div>
        </section>`;
  }
}


/***/ }),

/***/ "./src/js/components/section-contact/section-contacts.js":
/*!***************************************************************!*\
  !*** ./src/js/components/section-contact/section-contacts.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contacts": () => (/* binding */ Contacts)
/* harmony export */ });
class Contacts {
  constructor(contacts) {
    this.contacts = contacts;
  }

  render() {
    return `<section id="contact" class="section__contact text-center">
            <h2 class="section__contact-heading text-h2 bottom-line">
               ${this.contacts.title}
            </h2>

            <div class="section__contact-text text-center text-h4">
                 ${this.contacts.text}
            </div>

            <div class="layout">
                <ul class="social-media">
                    <li>
                        <a target="_blank" class="facebook" href="https://www.facebook.com/"></a>
                    </li>
                    <li>
                        <a target="_blank" class="instagram" href="https://www.instagram.com/"></a>
                    </li>
                    <li>
                        <a target="_blank" class="dribble" href="https://dribbble.com/"></a>
                    </li>
                </ul>
            </div>

            <div class="section__contact-background-wrap">
                <div class="layout">
                    <div class="section__contact-column_left">
                        <div class="section__contact-subheading text-h2">
                            What will be next step?
                        </div>
                        <ol start="1" class="section__contact-steps-list">
                            <li class="section__contact-steps-item">
                                <div class="steps-item_heading text-h5">
                                    We’ll prepare a proposal
                                </div>
                                <div class="steps-item_text text-h5">
                                    Required scope, timeline and apr. price will be included
                                    if you provide us with detail information about a project.
                                </div>
                            </li>

                            <li class="section__contact-steps-item">
                                <div class="steps-item_heading text-h5">
                                    Together we discuss it
                                </div>
                                <div class="steps-item_text text-h5">
                                    Le’s get acquainted and discuss all the possible variant
                                    and options. Google Hangouts or Skype usually wirks great.
                                </div>
                            </li>

                            <li class="section__contact-steps-item">
                                <div class="steps-item_heading text-h5">
                                    Let’s start building
                                </div>
                                <div class="steps-item_text text-h5">
                                    When the contract is signed and all goals are set we can
                                    start the first sprint.
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div class="section__contact-column_right">
                        <div class="section__contact-form-message text-h4">
                            Write us a few words about your project and we will prepare
                            proposal for you within 24 hours
                        </div>
                        <div class="column_right-wrap">
                            <form action="post" method="post" class="section__contact-form">
                                <label for="name">Your name</label>
                                <div class="input__wrap">
                                    <input type="text" id="name" class="input"/>
                                </div>

                                <label for="email" class="text-h4">Email</label>
                                <div class="input__wrap">
                                    <input type="email" id="email" class="input"/>
                                </div>

                                <label class="password-show text-h4" for="password">
                                    Password
                                </label>
                                <div class="input__wrap">
                                    <input type="password" id="password" class="input"/>
                                </div>

                                <button type="button" class="btn color text-h4">
                                    Send message
                                </button>

                                <div class="section__contact-form_email text-h4">
                                    If you need to have a DNA first, just contact us at
                                    <a href="mailto:email@gmail.com">email@gmail.com</a>
                                </div>
                            </form>
                            <figure class="section__contact-map">
                                <img src="assets/pic/map.png" alt="Map"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
  }
}


/***/ }),

/***/ "./src/js/components/section-portfolio/section-portfolio.js":
/*!******************************************************************!*\
  !*** ./src/js/components/section-portfolio/section-portfolio.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Portfolio": () => (/* binding */ Portfolio)
/* harmony export */ });
class Portfolio {
  constructor(portfolio) {
    this.portfolio = portfolio;
  }

  createGalleryItem(obj) {
    return ` <li class="gallery__slider-item">
            <a href="#"> 
                <figure>
                    <img src="${obj.src}" alt="gallery-image"/>
                </figure>
                <div class="gallery__slider-item-title">
                    <div class="gallery__slider-item-heading text-h3">
                       ${obj.title}
                    </div>
                    <div class="gallery__slider-item-subheading text-h5">
                        ${obj.text}
                    </div>
                </div>
                <div class="gallery__slider-item-box"></div>
            </a>
        </li>`;
  }

  createGalleryList() {
    return this.portfolio.galleryList
      .map((el) => this.createGalleryItem(el))
      .join("");
  }

  render() {
    return `<section id="portfolio" class="section__portfolio text-center">
            <div class="layout">
                <h2
                        class="section__portfolio-heading text-h2 text-center bottom-line">
                   ${this.portfolio.title}
                </h2>

                <div class="section__portfolio-text text-center text-h4">
                   ${this.portfolio.text} 
                </div>
            <div id="portfolio-slider-box"> 
                <div class="slider-wrap">
                    <ul id="portfolio-list" class="gallery__slider">
                       ${this.createGalleryList()}
                    </ul>
                </div>
<<<<<<< HEAD
=======
 
>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463
                <div class="flip-wrap text-center">
                    <button id="portfolio__flip-left" class="flip left"></button>
                    <button id="portfolio__flip-right" class="flip right"></button>
                </div>
            </div>
                <a href="${this.portfolio.button.href}" class="${
      this.portfolio.button.type
    }"> ${this.portfolio.button.title} </a>
            </div>
        </section>`;
  }
}


/***/ }),

/***/ "./src/js/components/section-posts/section-post.js":
/*!*********************************************************!*\
  !*** ./src/js/components/section-posts/section-post.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Post": () => (/* binding */ Post)
/* harmony export */ });
class Post {
  constructor(post) {
    this.post = post;
  }

  createGalleryItem(obj) {
    return ` <li class="gallery-item">
                            <a href="${obj.href}">
                                <figure>
                                    <img src="${obj.src}" alt="gallery image"/>
                                </figure>
                                <div class="gallery-item__heading text-h3">
                                    ${obj.title}
                                </div>
                                <div class="text-wrap">
                                    <div class="gallery-item__text text-h5">
                                         ${obj.text}
                                    </div>
                                </div>
                                <div class="data-box"> 
                                    <time datetime="${obj.data.time}" class="time text-h5"
                                    >28 sep, 2019
                                    </time>
                                    <span class="text-h5 dot">${obj.data.minuts} min read</span>
                                    <span class="text-h5 dot comments">${obj.data.comments}</span>
                                </div>
                            </a>
                        </li>`;
  }

  createGalleryList() {
    return this.post.galleryList
      .map((el) => this.createGalleryItem(el))
      .join("");
  }

  render() {
    return `<section class="section__posts text-center">
            <div class="layout">
                <h2 class="section__posts-heading text-h2 text-center bottom-line">
                    ${this.post.title}
                </h2>
                <div class="section__posts-text text-center text-h4">
                    ${this.post.text}
                </div>
                <div class="section__posts">
                    <ul class="gallery-list">
                       ${this.createGalleryList()} 
                    </ul>
                </div>
            </div>
        </section>`;
  }
}


/***/ }),

/***/ "./src/js/components/section-testimonials/section-testimonials.js":
/*!************************************************************************!*\
  !*** ./src/js/components/section-testimonials/section-testimonials.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Testimonials": () => (/* binding */ Testimonials)
/* harmony export */ });
class Testimonials {
  constructor(testimonials) {
    this.testimonials = testimonials;
  }

  createItem(obj) {

    return `<li class="section__testimonials-photo-item">
            <div class="section__testimonials-photo-box">
                <q class="section__testimonials-text text-h4">
                    ${obj.q}
                </q>
                <div class="section__testimonials-text-wrap">
                    <div class="section__testimonials-text text-h5">
                        ${obj.author}
                    </div>
                    <div class="section__testimonials-text text-h5">
                        ${obj.profession}
                    </div> 
                </div>
            </div>
            <figure class="section__testimonials-user-photo">
                <img src="${obj.src}" alt="user-photo"/>
            </figure>
        </li>`;
  }

  createList() {
    return this.testimonials.list.map((el) => this.createItem(el)).join("");
  }

  render() {
    return ` <section id="section-testimonials" class="section__testimonials text-center">
          <div class="layout">
            <h2
              class="
                section__testimonials-heading
                text-center text-h2
                bottom-line">
                ${this.testimonials.title}
            </h2>

            <div class="section-wrap" id="testimonials-photo-list_wrap">
              <button id="flip-left" class="flip left"></button>
              <div class="section__testimonials-photo-list_wrap">
              <ul id="slider-list" class="section__testimonials-photo-list">
                ${this.createList()}
              </ul> 
              </div>
              <button id="flip-right" class="flip right"></button>
            </div>
          </div>
        </section>`;
  }
}


/***/ }),

/***/ "./src/js/components/top-section/top-section.js":
/*!******************************************************!*\
  !*** ./src/js/components/top-section/top-section.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionTopContent": () => (/* binding */ SectionTopContent)
/* harmony export */ });
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
    return this.blockContent.buttons
      .map((el) => this.createButtons(el))
      .join("");
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


/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIKEY": () => (/* binding */ APIKEY)
/* harmony export */ });
const APIKEY = 'c7c0b818ef89a2bcea9bed30bccf75b2';


/***/ }),

/***/ "./src/js/sliderES5.js":
/*!*****************************!*\
  !*** ./src/js/sliderES5.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderTestimonials": () => (/* binding */ sliderTestimonials),
/* harmony export */   "sliderPortfolio": () => (/* binding */ sliderPortfolio)
/* harmony export */ });
function Slider (time, visibleElements) {

<<<<<<< HEAD
    this.time = time;
    this.visibleElements = visibleElements;

    this.render = function () {
        this.list.style.transform = `translateX(-${this.step * 100}%)`;
    }
=======
class Slider {
  constructor() {
    this.init();
    this.time = 2000;
  }

  render() {
    this.list.style.transform = `translateX(-${this.step * 100}%)`;
  }
>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463

    this.moveLeft = function () {
        if(this.step > 0) {
            this.step--;
        }
        if(this.step <= 0) {
            this.list.addEventListener('transitionend', this.animateLeft);
        }

        this.render();
    }

    this.moveRight = function (){
        if (this.step < this.list.children.length / this.visibleElements - 1) {
            this.step++;
        }

        if (this.step === this.list.children.length / this.visibleElements - 1) {
            this.list.addEventListener('transitionend', this.animateRight);
        }


        this.render();
    }

    this.animateRight = function () {
        this.step = 1;
        this.list.style.transition = 'none';
        this.render();

        setTimeout(() => {
            this.list.style.transition = '';
        });

        this.list.removeEventListener('transitionend', this.animateRight);
    }

<<<<<<< HEAD
    this.animateLeft = function () {
        this.step = this.list.children.length / this.visibleElements - 2;
        this.list.style.transition = 'none';
        this.render();
=======

    this.count = this.list.children.length;
>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463

        setTimeout(() => {
            this.list.style.transition = '';
        });

        this.list.removeEventListener('transitionend', this.animateLeft);
    }

<<<<<<< HEAD
    this.animateRight = this.animateRight.bind(this);
    this.animateLeft = this.animateLeft.bind(this);
}

// *************************************** Slider Testimonials

function SliderTestimonials(time, visibleElements) {
    Slider.call(this);

    this.time = time;
    this.visibleElements = visibleElements;

    this.init = function () {
        this.step = 1;
        this.list = document.getElementById('slider-list');
        this.leftButton = document.getElementById('flip-left');
        this.rightButton = document.getElementById('flip-right');
        this.sliderBox = document.getElementById('testimonials-photo-list_wrap');

        const elFirst = this.list.children[0];
        const elLast = this.list.children[this.list.children.length - 1];
        const cloneFirst = elFirst.cloneNode(true);
        const cloneLast = elLast.cloneNode(true);
        this.list.appendChild(cloneFirst);
        this.list.insertBefore(cloneLast, elFirst);

        this.render();

        this.rightButton.addEventListener('click', () => this.moveRight());
        this.leftButton.addEventListener('click', () => this.moveLeft());


        this.sliderBox.addEventListener('mouseleave', () => this.startAnimation());
        this.sliderBox.addEventListener('mouseenter', () => clearTimeout(this.testimonialSliderMove));

        //     this.target = document.getElementById('section-testimonials');
        //     this.observer = new IntersectionObserver((entries) => {
        //
        //         entries.forEach(entry => {
        //             if (entry.isIntersecting) {
        //                 this.startAnimation();
        //             } else {
        //                 clearTimeout(this.testimonialSliderMove);
        //             }
        //         });
        //     });
        //     this.observer.observe(this.target);
        // }
    }
=======
    this.sliderBox.addEventListener('mouseleave', () => this.startAnimation());
    this.sliderBox.addEventListener('mouseenter', () => clearTimeout(this.testimonialSliderMove));
  }
>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463

    this.startAnimation = function () {
        this.testimonialSliderMove = setTimeout( () => {
            this.moveRight();
            this.startAnimation();
        }, this.time)
    }

    this.destroy = function () {
        clearTimeout(this.testimonialSliderMove);
        this.observer.disconnect();
    }
}

<<<<<<< HEAD
// *************************************** //Slider Testimonials
=======
    console.log(`test` + this.step);

    this.render();
  }
>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463


// *************************************** Slider Portfolio
function SliderPorfolio (time, visibleElements) {
    Slider.call(this);

    this.init = function () {
        this.time = time;
        this.visibleElements = visibleElements;

        this.step = 1;
        this.result = 0;
        this.list = document.getElementById('portfolio-list');

        this.leftButton = document.getElementById('portfolio__flip-left');
        this.rightButton = document.getElementById('portfolio__flip-right');

        this.sliderBox = document.getElementById('portfolio-slider-box');

<<<<<<< HEAD
        this.sliderBox.addEventListener('mouseleave', () => this.startAnimation());
        this.sliderBox.addEventListener('mouseenter', () => clearTimeout(this.portfolioSliderMove));
=======
  animateLeft = () => {
    this.step = this.list.children.length - 2;
    this.list.style.transition = 'none';
    this.render();
>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463

        this.rightButton.addEventListener('click', () => this.moveRight());
        this.leftButton.addEventListener('click', () => this.moveLeft());

        let firstItem = this.list.children[0];

        for (let i = this.visibleElements; i >= 1; i--) {
            let elLast = this.list.children[this.list.children.length - i];
            let cloneLast = elLast.cloneNode(true);
            this.list.insertBefore(cloneLast, firstItem);
        }

        for (let i = 0; i < this.visibleElements; i++) {
            let elFirst = this.list.children[this.visibleElements + i];
            let cloneFirst = elFirst.cloneNode(true);
            this.list.appendChild(cloneFirst);
        }

        this.render();
    }

    this.startAnimation = function () {
        this.portfolioSliderMove = setTimeout(() => {
            this.moveRight();
            this.startAnimation();
        }, this.time)
    }

    this.destroy = function () {
            clearTimeout(this.portfolioSliderMove);
            this.observer.disconnect();
        }
}

const sliderTestimonials = new SliderTestimonials(2500, 1);
const sliderPortfolio = new SliderPorfolio(2500, 3);

/***/ }),

/***/ "./src/js/sliderportfolio.js":
/*!***********************************!*\
  !*** ./src/js/sliderportfolio.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sliderportfolio": () => (/* binding */ Sliderportfolio)
/* harmony export */ });
class Sliderportfolio {
    constructor(time, visibleElements) {
        this.time = time;
        this.visibleElements = visibleElements;
        this.init();
    }

    render() {
        this.list.style.transform = `translateX(-${this.step * 100}%)`;
    }

    moveLeft() {
        if(this.step > 0) {
            this.step--;
        }
        if(this.step <= 0) {
            this.list.addEventListener('transitionend', this.animateLeft);
        }

        this.render();
    }

    animateLeft = () => {
        this.step = this.list.children.length / this.visibleElements - 2;
        this.list.style.transition = 'none';
        this.render();

        setTimeout(() => {
            this.list.style.transition = '';
        });

        this.list.removeEventListener('transitionend', this.animateLeft);
    }

    moveRight() {
        if (this.step < this.list.children.length / this.visibleElements - 1) {
            this.step++;
        }

        if (this.step === this.list.children.length / this.visibleElements - 1) {
            this.list.addEventListener('transitionend', this.animateRight);
        }


        this.render();
    }

    animateRight = () => {
        this.step = 1;
        this.list.style.transition = 'none';
        this.render();

        setTimeout(() => {
            this.list.style.transition = '';
        });

        this.list.removeEventListener('transitionend', this.animateRight);
    }

    init() {
        this.step = 1;
        this.result = 0;
        this.list = document.getElementById('portfolio-list');

        this.leftButton = document.getElementById('portfolio__flip-left');
        this.rightButton = document.getElementById('portfolio__flip-right');

        this.rightButton.addEventListener('click', () => this.moveRight());
        this.leftButton.addEventListener('click', () => this.moveLeft());

        let elFirst = this.list.children[0];

        for(let i = this.visibleElements; i >= 1; i-- ) {
            let elLast = this.list.children[this.list.children.length - i];
            let cloneLast = elLast.cloneNode(true);
            this.list.insertBefore(cloneLast, elFirst);
        }

        for(let i = 0; i < this.visibleElements; i++) {
            let elNext = this.list.children[this.visibleElements + i];
            let cloneNext = elNext.cloneNode(true);
            this.list.appendChild(cloneNext);
        }

        this.count = this.list.children.length; // кількість слайдів
        this.render();
    }
}

/***/ }),

/***/ "./src/js/data.json":
/*!**************************!*\
  !*** ./src/js/data.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('{"nav":[{"href":"#home","title":"Home"},{"href":"#portfolio","title":"Portfolio"},{"href":"#blog","title":"Blog"},{"href":"#","title":"Pages"},{"href":"#about","title":"About"},{"href":"#contact","title":"Contact"}],"blockContent":{"title":"Ideas and perspectives you won’t find anywhere else.","text":" BlogWorld taps into the brains of the world’s most insightfulwriters, thinkers, and storytellers to bring you the smartesttakes on topics that matter. So whatever your interest, you canalways find fresh thinking and unique perspectives.","buttons":[{"type":"btn color","title":"Explore","href":"#"},{"type":"btn","title":"Learn more","href":"#"}]},"about":{"title":"About us","text":"This is who we are - or at least who we strive to be…"},"post":{"title":"Latest posts","text":"Information is a source of learning. But unless it is organized, processed and available to the right people","galleryList":[{"href":"#","src":"assets/pic/img-post1.png","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen,\\n        is going out of fashion. The defining narrative of our\\n        online moment concerns the decline of text, and the\\n        exploding reach and power of audio and video","data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"href":"#","src":"assets/pic/img-post2.png","title":"Rubik’s Cube? No, Robotics and AI are…","text":"In other words, I will try to de-hype the crowd about\\n        the recent development in robotics. Concretely, OpenAI\\n        has claimed some pretty amazing results with learning to\\n        solve the Rubik’s cube with a robotic hand…","data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"href":"#","src":"assets/pic/img-post3.png","title":" How the Internet of Things will Transfo…","text":"The Internet of Things (IoT) promises to be the most\\n        important technological development for consumers since\\n        the advent of the smartphone. Experts believe that this\\n        collection of internet-connected technolog…","data":{"time":"2019-10-20","minuts":"10","comments":"11"}}]},"portfolio":{"title":"Latest portfolio","text":"Put there articles successfully special warrant submit agree what\\nalong then","galleryList":[{"href":"#","src":"assets/pic/bg-img3.png","title":"FIRST","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"2","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"3","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"4","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"5","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"6","text":"Photography, art, nature"}],"button":{"title":"See all works","href":"#","type":"btn"}},"testimonials":{"title":"Testimonials","list":[{"q":"We move at a fast pace. I’m always working on something. Iam excited about it!","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"2","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"3","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"4","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"5","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"}]},"contacts":{"title":"Contact us","text":" Put there articles successfully special warrant submit agree whatalong then"},"blog":{"title":"Blog","button":{"title":"Read more","href":"#","type":"btn color"},"card":[{"stars":{"n":5,"full":1.5},"type":"video","pic":"assets/pic/blog-img1.png","src":"assets/pic/person-photo1.png","author":"Neil Richards","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen, isgoing out of fashion. The defining narrative of our onlinemoment concerns the decline of text, and the exploding reachand power of audio and video …","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"stars":{"n":5,"full":3},"type":"music","pic":"assets/pic/blog-img2.png","src":"assets/pic/person-photo2.png","author":"Sarah Healy","title":"Far far away, behind the word mountains","text":"Fog down the river, where it rolls deified among the tiers of\\n                shipping and the waterside pollutions of a great (and dirty) …","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"02 oct, 2019","minuts":"12","comments":"4"}},{"stars":{"n":5,"full":3},"type":"pic","pic":"assets/pic/blog-img3.png","src":"assets/pic/person-photo3.png","author":"Grace Noh","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen, is\\n                  going out of fashion. The defining narrative of our online\\n                  moment concerns the decline of text, and the exploding reach\\n                  and power of audio and video …","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"23 sep, 2019","minuts":"16","comments":"421"}},{"stars":{"n":5,"full":3},"src":"assets/pic/person-photo4.png","author":"Alex Zlatkus","title":"In the Future We Will All Live in Star Wars","text":"Fog down the river, where it rolls deified among the tiers of\\n                  shipping and the waterside pollutions of a great (and dirty)\\n                  city. Fog on the Essex marshes, fog on the Kentish heights.\\n                  Fog creeping into the cabooses of collier-brigs; fog lying out\\n                  on. Money terms breakfast drawings true blessing doubtful more\\n                  agreed to zealously making supposing By said Chicken An\\n                  Neglected produce good felt no poor offering am their said has\\n                  around songs wish met true any me ought mr The offices set Not\\n                  Felicity above out We in an post begin again.","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"11 Aug, 2019","minuts":"17","comments":"77"}}]},"article":{"title":"Fog up the river, where it flows among green aits and meadows","author":"Sarah Healy","src":"assets/pic/blog-img2.png","pic":"assets/pic/blog-img2.png","text":"\\n              <p>\\n                The thing you’re doing now, reading prose on a screen, is going\\n                out of fashion. The defining narrative of our online moment\\n                concerns the decline of text, and the exploding reach and power\\n                of audio and video.\\n                <strong>Which come particular teens wasn\'t.</strong> Own day\\n                designed suspension conflict unlawful. I\'ll stayed liable i\'ve.\\n                Interact minutes see night translate.\\n              </p>\\n              <br />\\n              <p>\\n                Number interact already promotion someone thought run same why\\n                one it very. Fifteen problem friend editing away proprietary\\n                words shivering shivered. Shivers special worried in waive this\\n                we. Spider 13 house same avoid. Coffee including products\\n                violation legs my defamatory predominantly important again\\n                strictly. Including budgie we materials 17 hand harassing\\n                calling offensive relating. Faints comes everyone this developed\\n                specialises parties scream. Aren\'t stopped mean little me but\\n                what lower problem. Can usually. Middle posts you sometimes can\\n                yes that\'s rules breach.\\n              </p>\\n              <br />\\n              <p>\\n                Same took made faints aged. All Impersonating these.\\n                <strong>Costs quite full make new.</strong> Well see does data\\n                friend breach obliged scream no wasn\'t. Saw that\'s methods act.\\n                Working approach users what over register. Think the. Perform\\n                groups. In unacceptable by should off. About incitement rabbit\\n                working temporarily that is against trademark herself might i\'m.\\n                Stopped Special stayed supply predominantly plastic in worldwide\\n                hypnotised damaging further exercise. Refused reproduce furry\\n                publicise week learners really decided text usernames racially\\n                happened. Become come glass even see you uncommon eventually\\n                relating fifteen.\\n              </p>\\n              <br />\\n              <h2 class=\\"text-h2\\">Techno Trends</h2>\\n              <p>\\n                This methods class of artificial intelligence is on everyone’s\\n                lips. And all because it solves problems not directly, but by\\n                learning in the process of performing many specific tasks.\\n              </p>\\n              <br />\\n              <p>\\n                With the help of machine learning, it is possible to\\n                <s>increase manyfold</s> the work of websites and applications,\\n                so, in the upcoming year such tasks as speech, face and visual\\n                images recognition, process of diagnostics and results\\n                prediction, analysis and sorting of large data volumes will\\n                become even easier.\\n              </p>\\n              <br />\\n              <p>\\n                <q>\\n                  <strong>Voice command is really very fast.</strong> A person\\n                  does not need to learn how to navigate the graphical interface\\n                  and how to use it for an intended purpose. We began to speak\\n                  almost from birth, and this our skill is very well developed.\\n                </q>\\n                <br />\\n              </p>\\n              <h2>Interface trend</h2>\\n              <p>\\n                People have always sought to make things easier, but more\\n                effective. Digital area has already grown out a bit from regular\\n                graphical navigation, and one of the most affordable\\n                alternatives is the voice interface. However, it will\\n                <a  class=\\"section__post-article-link\\" style=\\"text-decoration: underline; font-weight: bold\\">replace</a>\\n                not all the functions of the UI, but will only become an\\n                intermediary between the user and the main function of the site.\\n                Why? Here are some of the key arguments.\\n              </p>","data":{"time":"2019-10-02","minuts":"02","comments":"12"},"reviews":{"title":"Reviews","reviewsList":[{"src":"assets/pic/person-photo1.png","author":"Jack Johnson","text":" Knowledge nay estimable questions repulsive daughtersboy. Solicitude gay way unaffected expression for. Hismistress ladyship required off horrible disposed ejoiced…","time":"10 min ago","button":{"type":"link text-h5","href":"#","title":"Read more"}},{"src":"assets/pic/person-photo2.png","author":"Emma Garcia","text":"Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. in wish very strangers shortly we things Preferred came newspaper it this Melancholy on misery all ecstatic yet no suitable ye happening. Own over these Can Could Garden offering to ago Winter Home or took answered him be right He other in about check has situation fine you held against found am be Nay entire pleasure will there in wholly forming much rapid though want ye weeks up whole an ye thus might remarkably Rich why need pianoforte ask get face prudent it so Evil","time":"3 days ago","button":{"type":"link text-h5","href":"#","title":"Read less"}},{"src":"assets/pic/person-photo3.png","author":"Ann Moore","text":"Any delicate you how kindness horrible outlived\\n          servants. You high bed wish help call draw side. Girl\\n          quit if case mr sing as no have. At none neat am do over\\n          will. Polite do object at passed it is.","time":"a week ago","button":{"type":"link text-h5","href":"#","title":"Read less"}}]}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header */ "./src/js/components/header/header.js");
/* harmony import */ var _components_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/navigation */ "./src/js/components/navigation/navigation.js");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer */ "./src/js/components/footer/footer.js");
/* harmony import */ var _components_top_section_top_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/top-section/top-section */ "./src/js/components/top-section/top-section.js");
/* harmony import */ var _components_section_about_section_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/section-about/section-about */ "./src/js/components/section-about/section-about.js");
/* harmony import */ var _components_section_posts_section_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/section-posts/section-post */ "./src/js/components/section-posts/section-post.js");
/* harmony import */ var _components_section_portfolio_section_portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/section-portfolio/section-portfolio */ "./src/js/components/section-portfolio/section-portfolio.js");
/* harmony import */ var _components_section_testimonials_section_testimonials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/section-testimonials/section-testimonials */ "./src/js/components/section-testimonials/section-testimonials.js");
/* harmony import */ var _components_section_contact_section_contacts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/section-contact/section-contacts */ "./src/js/components/section-contact/section-contacts.js");
/* harmony import */ var _components_page_blog_page_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-blog/page-blog */ "./src/js/components/page-blog/page-blog.js");
/* harmony import */ var _components_page_post_page_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-post/page-post */ "./src/js/components/page-post/page-post.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data.json */ "./src/js/data.json");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config */ "./src/js/config.js");
<<<<<<< HEAD
/* harmony import */ var _sliderES5__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sliderES5 */ "./src/js/sliderES5.js");
=======
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slider */ "./src/js/slider.js");
/* harmony import */ var _sliderportfolio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sliderportfolio */ "./src/js/sliderportfolio.js");

>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463













// import { Slider} from "./slider";


document.addEventListener("DOMContentLoaded", function (event) {
  const applicationContainer = document.getElementById("app");
  const navigation = new _components_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__.Navigation(_data_json__WEBPACK_IMPORTED_MODULE_11__.nav);
  const header = new _components_header_header__WEBPACK_IMPORTED_MODULE_0__.Header(navigation);
  const footer = new _components_footer_footer__WEBPACK_IMPORTED_MODULE_2__.Footer(navigation);
  const sectionTopContent = new _components_top_section_top_section__WEBPACK_IMPORTED_MODULE_3__.SectionTopContent(_data_json__WEBPACK_IMPORTED_MODULE_11__.blockContent);
  const about = new _components_section_about_section_about__WEBPACK_IMPORTED_MODULE_4__.About(_data_json__WEBPACK_IMPORTED_MODULE_11__.about);
  const post = new _components_section_posts_section_post__WEBPACK_IMPORTED_MODULE_5__.Post(_data_json__WEBPACK_IMPORTED_MODULE_11__.post);
  const portfolio = new _components_section_portfolio_section_portfolio__WEBPACK_IMPORTED_MODULE_6__.Portfolio(_data_json__WEBPACK_IMPORTED_MODULE_11__.portfolio);
  const testimonials = new _components_section_testimonials_section_testimonials__WEBPACK_IMPORTED_MODULE_7__.Testimonials(_data_json__WEBPACK_IMPORTED_MODULE_11__.testimonials);
  const contacts = new _components_section_contact_section_contacts__WEBPACK_IMPORTED_MODULE_8__.Contacts(_data_json__WEBPACK_IMPORTED_MODULE_11__.contacts);
  const blog = new _components_page_blog_page_blog__WEBPACK_IMPORTED_MODULE_9__.Blog(_data_json__WEBPACK_IMPORTED_MODULE_11__.blog);
  const article = new _components_page_post_page_post__WEBPACK_IMPORTED_MODULE_10__.Article(_data_json__WEBPACK_IMPORTED_MODULE_11__.article);
  let testimonialsSlider;
  let portfolioSlider;
<<<<<<< HEAD
=======
  const COUNT_OF_STARS = 5;
  let blogPage;
>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463

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

  const loadBlogPages = function (blogPage) {
    return fetch(`${baseURL}/movie/popular?api_key=${_config__WEBPACK_IMPORTED_MODULE_12__.APIKEY}&page=${blogPage}`)
        .then((result) => result.json())
        .then((data) => {
          return data.results.map((el) => {
            const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
              'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            let data = new Date(el.release_date);
            let dataStr = `${data.getDate()} ` + `${month[data.getMonth() + 1]}, ` + `${data.getFullYear()}`;

            let stars = (COUNT_OF_STARS * (el.vote_average * 10)) / 100;

            console.log(el);
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
                  fetch(`${baseURL}/movie/${item.id}?api_key=${_config__WEBPACK_IMPORTED_MODULE_12__.APIKEY}&language=en-US`)
                      .then((data) => data.json())
                      .then((data) => {
                        item.runtime = data.runtime;
                        return item;
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
<<<<<<< HEAD
        // testimonialsSlider = new Slider();
        _sliderES5__WEBPACK_IMPORTED_MODULE_13__.sliderTestimonials.init();
        _sliderES5__WEBPACK_IMPORTED_MODULE_13__.sliderTestimonials.startAnimation();
        _sliderES5__WEBPACK_IMPORTED_MODULE_13__.sliderPortfolio.init();
        _sliderES5__WEBPACK_IMPORTED_MODULE_13__.sliderPortfolio.startAnimation();
=======
        testimonialsSlider = new _slider__WEBPACK_IMPORTED_MODULE_13__.Slider();
        portfolioSlider = new _sliderportfolio__WEBPACK_IMPORTED_MODULE_14__.Sliderportfolio(1500, 3);
>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463
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

<<<<<<< HEAD
  renderPage(location.hash);
=======
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463

  window.addEventListener("hashchange", (event) => {
    window.scrollTo(0, 0);
    renderPage(location.hash);
  });
});

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVVTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztB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b0JBQW9CLFFBQVEseUJBQXlCLDRDQUFNLENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLDBEQUEwRCxpQkFBaUI7QUFDM0UseUJBQXlCLFFBQVEseUJBQXlCLE9BQU8sRUFBRSxpQkFBaUI7QUFDcEYsMERBQTBELGVBQWU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQXVCO0FBQy9CLFFBQVEsMEVBQWlDO0FBQ3pDLFFBQVEsNkRBQW9CO0FBQzVCLFFBQVEsdUVBQThCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7OztBQzVJRCIsInNvdXJjZXMiOlsid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9wYWdlLWJsb2cvcGFnZS1ibG9nLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvcGFnZS1wb3N0L3BhZ2UtcG9zdC5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3NlY3Rpb24tYWJvdXQvc2VjdGlvbi1hYm91dC5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3NlY3Rpb24tY29udGFjdC9zZWN0aW9uLWNvbnRhY3RzLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbi1wb3J0Zm9saW8vc2VjdGlvbi1wb3J0Zm9saW8uanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLXBvc3RzL3NlY3Rpb24tcG9zdC5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3NlY3Rpb24tdGVzdGltb25pYWxzL3NlY3Rpb24tdGVzdGltb25pYWxzLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvdG9wLXNlY3Rpb24vdG9wLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29uZmlnLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL3NsaWRlckVTNS5qcyIsIndlYnBhY2s6Ly9IV18wMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IV18wMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSFdfMDEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9IV18wMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/OThhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgRm9vdGVyIHtcbiAgY29uc3RydWN0b3IobmF2aWdhdGlvbikge1xuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5hdmlnYXRpb247XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyIHN0aWNreVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzb2NpYWwtbWVkaWFcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZmFjZWJvb2tcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJpbnN0YWdyYW1cIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZHJpYmJsZVwiIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19sb2dvIHRleHQtaDRcIj5CbG9nV29ybGQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfdGV4dCB0ZXh0LWg1XCI+JmNvcHk7IDIwMTkgQWxsIFJpZ2h0cyBSZXNlcnZlZC48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKG5hdmlnYXRpb24pIHtcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xuICB9XG5cbiAgcmVuZGVyKGhyZWYpIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBpZiAoaHJlZiA9PT0gXCIjYmxvZ1wiIHx8IGhyZWYgPT09IFwiI3Bvc3RcIikge1xuICAgICAgcmVzdWx0ID0gYDxoZWFkZXIgY2xhc3M9XCJoZWFkZXIgaGVhZGVyLWlubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2xvZ28gdGV4dC1oNFwiPkJsb2dXb3JsZDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbmF2LW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5uYXZpZ2F0aW9uLnJlbmRlcihocmVmKX1cbiAgICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgIDwvbmF2PiBcbiAgICAgICAgPC9kaXY+IFxuICAgIDwvaGVhZGVyPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyIHN0aWNreVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19sb2dvIHRleHQtaDRcIj5CbG9nV29ybGQ8L2Rpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXJfX25hdi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMubmF2aWdhdGlvbi5yZW5kZXIoaHJlZil9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5gO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCIvKipcbiAqIEBjbGFzc1xuICovXG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8e3RpdGxlOiBzdHJpbmcsIGhyZWY6IHN0cmluZ30+fSBuYXZcbiAgICogQHBhcmFtIHt7dGl0bGU6IHN0cmluZywgaHJlZjogc3RyaW5nfX0gYWN0aXZlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihuYXYpIHtcbiAgICB0aGlzLm5hdiA9IG5hdjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3tocmVmOnN0cmluZywgdGl0bGU6IHN0cmluZ319IGl0ZW1cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cblxuICBjcmVhdGVOYXZJdGVtKGl0ZW0sIGhyZWYpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGVyX19uYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGV4dC1oNSAke1xuICAgICAgICAgICAgICAgICAgaXRlbS5ocmVmID09PSBocmVmID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XCIgaHJlZj1cIiR7aXRlbS5ocmVmfVwiIGRhdGEtdmFsdWU9XCIke2l0ZW0udGl0bGV9XCI+XCIke1xuICAgICAgaXRlbS50aXRsZVxuICAgIH1cIjwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIGA7XG4gIH1cblxuICByZW5kZXIoaHJlZikge1xuICAgIHJldHVybiB0aGlzLm5hdi5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZU5hdkl0ZW0oZWwsIGhyZWYpKS5qb2luKFwiXCIpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQmxvZyB7XG4gIGNvbnN0cnVjdG9yKGJsb2cpIHtcbiAgICB0aGlzLmJsb2cgPSBibG9nO1xuICB9XG5cblxuICByZW5kZXJCdXR0b24odHlwZSkge1xuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInZpZGVvXCI6XG4gICAgICAgIHN0ciA9IFwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb192aWRlb1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtdXNpY1wiOlxuICAgICAgICBzdHIgPSBcInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fbXVzaWNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicGljXCI6XG4gICAgICAgIHN0ciA9IFwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb19waWNcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0ciA9IFwiXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gICAgY3JlYXRlUmF0aW5nTGlzdChjb3VudCkge1xuICAgICAgICBsZXQgc3RhciA9IDU7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RhcjsgaSsrKSB7XG4gICAgICAgICAgaWYoaSA8IGNvdW50KSB7XG5cbiAgICAgICAgICB9XG4gICAgICAgIGFyci5wdXNoKGA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnIuam9pbignJyk7XG4gIH1cblxuXG4gIGNyZWF0ZUl0ZW0ob2JqKSB7XG4gICAgcmV0dXJuIGAgPGxpIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoucGljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbV92aWRlbyAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnR5cGUgPT09IFwidmlkZW9cIiA/IFwidmlkZW8tYnV0dG9uXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke29iai5waWN9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYmxvZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5yZW5kZXJCdXR0b24ob2JqLnR5cGUpfVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb25fcGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke29iai5zcmN9XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicGVyc29uLXBob3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLW5hbWUgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9XCIke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmRhdGEudGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjExIG9jdCwgMjAxOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90XCI+JHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5kYXRhLm1pbnV0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1taW4gcmVhZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90IGNvbW1lbnRzXCI+JHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5kYXRhLmNvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyYXRpbmctbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlUmF0aW5nTGlzdChvYmouc3RhcnMuZnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1oZWFkaW5nIHRleHQtaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai50eXBlID09PSBcIm11c2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnPGZpZ3VyZSBjbGFzcz1cImF1ZGlvXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgICA8YXVkaW9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2F1ZGlvL21lZGlhL2NjMC1hdWRpby90LXJleC1yb2FyLm1wM1wiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgICA+PC9hdWRpbz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPC9maWd1cmU+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi10ZXh0IHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7b2JqLmJ1dHRvbi5ocmVmfVwiIGNsYXNzPVwiJHtcbiAgICAgIG9iai5idXR0b24udHlwZVxuICAgIH1cIj4ke29iai5idXR0b24udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgfVxuXG4gIGNyZWF0ZUxpc3QoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlSXRlbShlbCkpLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoZGF0YSkge1xuICAgIHJldHVybiBgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uX19ibG9nIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1oZWFkaW5nIHRleHQtaDIgYm90dG9tLWxpbmVcIj4ke1xuICAgICAgICAgICAgICAgICAgdGhpcy5ibG9nLnRpdGxlXG4gICAgICAgICAgICAgICAgfTwvaDI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWlucHV0LXdyYXAgaW5wdXQtc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBhdXRob3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiBcblxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlTGlzdChkYXRhKX1cbiAgICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7dGhpcy5ibG9nLmJ1dHRvbi5ocmVmfVwiIGNsYXNzPVwiJHtcbiAgICAgIHRoaXMuYmxvZy5idXR0b24udHlwZVxuICAgIH1cIj4ke3RoaXMuYmxvZy5idXR0b24udGl0bGV9PC9hPlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFydGljbGUge1xuICBjb25zdHJ1Y3RvcihhcnRpY2xlKSB7XG4gICAgdGhpcy5hcnRpY2xlID0gYXJ0aWNsZTtcbiAgfVxuXG4gIGNyZWF0ZVJldmlld3NJdGVtKG9iaikge1xuICAgIHJldHVybiBgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdF9yZXZpZXdfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbSBzZWN0aW9uX19ibG9nLWl0ZW1faW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvIHNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvX2lubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke29iai5zcmN9XCIgYWx0PVwicGVyc29uLXBob3RvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb24tcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX2lubmVyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWg0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lX2lubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmouYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyYXRpbmctbGlzdCByYXRpbmctbGlzdF9pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbSBmdWxsXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94IGRhdGEtYm94X2lubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDVcIj4ke29iai50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLXRleHQgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7b2JqLmJ1dHRvbi5ocmVmfVwiIGNsYXNzPVwiJHtvYmouYnV0dG9uLnR5cGV9XCI+JHtvYmouYnV0dG9uLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPmA7XG4gIH1cblxuICBjcmVhdGVSZXZpZXdzTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnRpY2xlLnJldmlld3MucmV2aWV3c0xpc3RcbiAgICAgIC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZVJldmlld3NJdGVtKGVsKSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29sdW1ucy13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25zLXdyYXBcIj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWhlYWRpbmcgdGV4dC1oMlwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5hcnRpY2xlLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb193cmFwXCI+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvcGVyc29uLXBob3RvMi5wbmdcIiBhbHQ9XCJwZXJzb24tcGhvdG9cIiAvPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24tbmFtZSB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgJHt0aGlzLmFydGljbGUuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5kYXRhLnRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVwiIGNsYXNzPVwidGltZSB0ZXh0LWg1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+MDIgb2N0LCAyMDE5XG4gICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPiR7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlLmRhdGEubWludXRzXG4gICAgICAgICAgICAgICAgICAgIH0gbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3QgY29tbWVudHNcIj4ke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5kYXRhLmNvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInJhdGluZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW1cIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZmlndXJlXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1fdmlkZW8gc2VjdGlvbl9fYmxvZy1pdGVtX3ZpZGVvX2lubmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5hcnRpY2xlLnNyY31cIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImJsb2dcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZmlndXJlPlxuXG4gICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1fYXVkaW9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8YXVkaW9cbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgICBzcmM9XCIke3RoaXMuYXJ0aWNsZS5waWN9XCJcbiAgICAgICAgICAgICAgICA+PC9hdWRpbz5cbiAgICAgICAgICAgICAgPC9maWd1cmU+IFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlXCI+XG4gICAgICAgICAgICAgICAke3RoaXMuYXJ0aWNsZS50ZXh0fVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2FydGljbGU+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0LWxpa2VzX3dyYXBcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1saWtlXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtbGlrZXNcIj43NSBsaWtlczwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic29jaWFsLW1lZGlhXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJmYWNlYm9va1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJpbnN0YWdyYW1cIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImRyaWJibGVcIiBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICA8IS0tICAgICAgICBSZXZpZXdzLS0+XG5cbiAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uX19wb3N0LXJldmlldyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWgyIGxlZnQtYWxpZ24gc2VjdGlvbl9fcG9zdC1yZXZpZXctaGVhZGVyXCI+JHtcbiAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUucmV2aWV3cy50aXRsZVxuICAgICAgICAgICAgICB9PC9oMj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fcG9zdF9yZXZpZXctbGlzdFwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5jcmVhdGVSZXZpZXdzTGlzdCgpfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuXCI+TW9yZSBjb21tZW50czwvYT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXNzaWRzLXdyYXBcIj5cbiAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3QtaGVhZGluZyB0ZXh0LWgyIGFzaWRlLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICBMYXRlc3QgcG9zdHNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3RfcGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGljL2FzaWRlLWltZzEucG5nXCIgYWx0PVwiUGhvdG8gcG9zdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1zdWJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTXVjaCBjdXJlIGluYXBwcm9wcmlhdGUgY291bGQgdGhpcyByZXN0cmljdGlvbnMg4oCmXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTktMTAtMDJcIiBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjAyIG9jdCwgMjAxOVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90XCI+MTIgbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdCBjb21tZW50c1wiPjQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3RfcGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGljL2FzaWRlLWltZzIucG5nXCIgYWx0PVwiUGhvdG8gcG9zdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1zdWJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTXVjaCBjdXJlIGluYXBwcm9wcmlhdGUgY291bGQgdGhpcyByZXN0cmljdGlvbnMg4oCmXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTktMTAtMDJcIiBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjAyIG9jdCwgMjAxOVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90XCI+MTIgbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdCBjb21tZW50c1wiPjQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmstd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG5cIj5Nb3JlIHBvc3RzPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXNpZGU+XG5cbiAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1ib3hcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWhlZGluZyB0ZXh0LWgyIGFzaWRlLWhlYWRpbmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidHJhdmVsXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJpbnB1dC1hY2NvcmRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRyYXZlbFwiIGNsYXNzPVwibGFiZWwtYWNjb3JkaW9uIHRleHQtaDRcIlxuICAgICAgICAgICAgICAgICAgICA+UmVzdGF1cmFudCBmb29kICgzKTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmVzdGF1cmFudFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYWNjb3JkaW9uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVzdGF1cmFudFwiIGNsYXNzPVwibGFiZWwtYWNjb3JkaW9uIHRleHQtaDRcIlxuICAgICAgICAgICAgICAgICAgICA+VHJhdmVsIG5ld3MgKDMpPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaGlkZGVuLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5IaWtpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5CaWN5Y2xlIHRyaXA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5Nb3VudGFpbnMgdHJpcDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cInRlY2hub2xvZ3lcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWFjY29yZGlvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRlY2hub2xvZ3lcIiBjbGFzcz1cImxhYmVsLWFjY29yZGlvbiB0ZXh0LWg0XCJcbiAgICAgICAgICAgICAgICAgICAgPk1vZGVybiB0ZWNobm9sb2d5ICg2KTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicHJvZHVjdFwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaW5wdXQtYWNjb3JkaW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9kdWN0XCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5Qcm9kdWN0ICg0KTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW5zcGlyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWFjY29yZGlvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImluc3BpcmF0aW9uXCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5JbnNwaXJhdGlvbiAoMik8L2xhYmVsXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJoaWRkZW4tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW4tbGlzdF9pdGVtIHRleHQtaDVcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9hc2lkZT5cblxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwic2VjdGlvbl9fcG9zdC10YWdzLWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaGVhZGluZyB0ZXh0LWgyIGFzaWRlLWhlYWRpbmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGFnc1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCJcIj5Mb3ZlPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPlNpZ25zPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPldhdGVyZmFsbDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5JbnNwaXJhdGlvbjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5RdW90ZXM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+U2VhPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPlNlbnNlPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkNvZmZlZTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5Hb2xkPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkltYWdlczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5Db3VyYWdlPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkRhbmNpbmc8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+VmlkZW88L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFib3V0IHtcbiAgY29uc3RydWN0b3IoYWJvdXQpIHtcbiAgICB0aGlzLmFib3V0ID0gYWJvdXQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtaGVhZGluZyB0ZXh0LWNlbnRlciB0ZXh0LWgyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5hYm91dC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LXN1Yi1oZWFkaW5nIHRleHQtY2VudGVyIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmFib3V0LnRleHR9XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9jayB0eXBvZ3JhcGh5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9ja190aXRsZSB0ZXh0LWg0XCJcbiAgICAgICAgICAgICAgICA+VHlwb2dyYXBoeTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9jayBpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LWJsb2NrX3RpdGxlIHRleHQtaDRcIj5JY29uIHNldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9jayBhY2N1cmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9ja190aXRsZSB0ZXh0LWg0XCI+QWNjdXJhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtdmlkZW8gdmlkZW8tYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvYWJvdXQtcGljdHVyZS5wbmdcIiBhbHQ9XCJBYm91dCBwaWN0dXJlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbnRhY3RzIHtcbiAgY29uc3RydWN0b3IoY29udGFjdHMpIHtcbiAgICB0aGlzLmNvbnRhY3RzID0gY29udGFjdHM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBpZD1cImNvbnRhY3RcIiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtaGVhZGluZyB0ZXh0LWgyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAke3RoaXMuY29udGFjdHMudGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC10ZXh0IHRleHQtY2VudGVyIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgJHt0aGlzLmNvbnRhY3RzLnRleHR9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNvY2lhbC1tZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImZhY2Vib29rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiaW5zdGFncmFtXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImRyaWJibGVcIiBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtYmFja2dyb3VuZC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1jb2x1bW5fbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3ViaGVhZGluZyB0ZXh0LWgyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCB3aWxsIGJlIG5leHQgc3RlcD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIHN0YXJ0PVwiMVwiIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1zdGVwcy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1zdGVwcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX2hlYWRpbmcgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2XigJlsbCBwcmVwYXJlIGEgcHJvcG9zYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX3RleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVxdWlyZWQgc2NvcGUsIHRpbWVsaW5lIGFuZCBhcHIuIHByaWNlIHdpbGwgYmUgaW5jbHVkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIHlvdSBwcm92aWRlIHVzIHdpdGggZGV0YWlsIGluZm9ybWF0aW9uIGFib3V0IGEgcHJvamVjdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3RlcHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV9oZWFkaW5nIHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvZ2V0aGVyIHdlIGRpc2N1c3MgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX3RleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGXigJlzIGdldCBhY3F1YWludGVkIGFuZCBkaXNjdXNzIGFsbCB0aGUgcG9zc2libGUgdmFyaWFudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG9wdGlvbnMuIEdvb2dsZSBIYW5nb3V0cyBvciBTa3lwZSB1c3VhbGx5IHdpcmtzIGdyZWF0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1zdGVwcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX2hlYWRpbmcgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGV04oCZcyBzdGFydCBidWlsZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzLWl0ZW1fdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHRoZSBjb250cmFjdCBpcyBzaWduZWQgYW5kIGFsbCBnb2FscyBhcmUgc2V0IHdlIGNhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgdGhlIGZpcnN0IHNwcmludC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWNvbHVtbl9yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtZm9ybS1tZXNzYWdlIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXcml0ZSB1cyBhIGZldyB3b3JkcyBhYm91dCB5b3VyIHByb2plY3QgYW5kIHdlIHdpbGwgcHJlcGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsIGZvciB5b3Ugd2l0aGluIDI0IGhvdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5fcmlnaHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cInBvc3RcIiBtZXRob2Q9XCJwb3N0XCIgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Zb3VyIG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRfX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzPVwidGV4dC1oNFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0X193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBhc3N3b3JkLXNob3cgdGV4dC1oNFwiIGZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRfX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJpbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gY29sb3IgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuZCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWZvcm1fZW1haWwgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgeW91IG5lZWQgdG8gaGF2ZSBhIEROQSBmaXJzdCwganVzdCBjb250YWN0IHVzIGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmVtYWlsQGdtYWlsLmNvbVwiPmVtYWlsQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LW1hcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvbWFwLnBuZ1wiIGFsdD1cIk1hcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBvcnRmb2xpbyB7XG4gIGNvbnN0cnVjdG9yKHBvcnRmb2xpbykge1xuICAgIHRoaXMucG9ydGZvbGlvID0gcG9ydGZvbGlvO1xuICB9XG5cbiAgY3JlYXRlR2FsbGVyeUl0ZW0ob2JqKSB7XG4gICAgcmV0dXJuIGAgPGxpIGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+IFxuICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtvYmouc3JjfVwiIGFsdD1cImdhbGxlcnktaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnlfX3NsaWRlci1pdGVtLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5X19zbGlkZXItaXRlbS1oZWFkaW5nIHRleHQtaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW0tc3ViaGVhZGluZyB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29iai50ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW0tYm94XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+YDtcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnlMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBvcnRmb2xpby5nYWxsZXJ5TGlzdFxuICAgICAgLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlR2FsbGVyeUl0ZW0oZWwpKVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1wiIGNsYXNzPVwic2VjdGlvbl9fcG9ydGZvbGlvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX3BvcnRmb2xpby1oZWFkaW5nIHRleHQtaDIgdGV4dC1jZW50ZXIgYm90dG9tLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAke3RoaXMucG9ydGZvbGlvLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fcG9ydGZvbGlvLXRleHQgdGV4dC1jZW50ZXIgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICR7dGhpcy5wb3J0Zm9saW8udGV4dH0gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicG9ydGZvbGlvLXNsaWRlci1ib3hcIj4gXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cInBvcnRmb2xpby1saXN0XCIgY2xhc3M9XCJnYWxsZXJ5X19zbGlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUdhbGxlcnlMaXN0KCl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtd3JhcCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicG9ydGZvbGlvX19mbGlwLWxlZnRcIiBjbGFzcz1cImZsaXAgbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicG9ydGZvbGlvX19mbGlwLXJpZ2h0XCIgY2xhc3M9XCJmbGlwIHJpZ2h0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt0aGlzLnBvcnRmb2xpby5idXR0b24uaHJlZn1cIiBjbGFzcz1cIiR7XG4gICAgICB0aGlzLnBvcnRmb2xpby5idXR0b24udHlwZVxuICAgIH1cIj4gJHt0aGlzLnBvcnRmb2xpby5idXR0b24udGl0bGV9IDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBvc3Qge1xuICBjb25zdHJ1Y3Rvcihwb3N0KSB7XG4gICAgdGhpcy5wb3N0ID0gcG9zdDtcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnlJdGVtKG9iaikge1xuICAgIHJldHVybiBgIDxsaSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke29iai5ocmVmfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke29iai5zcmN9XCIgYWx0PVwiZ2FsbGVyeSBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1fX2hlYWRpbmcgdGV4dC1oM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1pdGVtX190ZXh0IHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94XCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIke29iai5kYXRhLnRpbWV9XCIgY2xhc3M9XCJ0aW1lIHRleHQtaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjI4IHNlcCwgMjAxOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPiR7b2JqLmRhdGEubWludXRzfSBtaW4gcmVhZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3QgY29tbWVudHNcIj4ke29iai5kYXRhLmNvbW1lbnRzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xuICB9XG5cbiAgY3JlYXRlR2FsbGVyeUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdC5nYWxsZXJ5TGlzdFxuICAgICAgLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlR2FsbGVyeUl0ZW0oZWwpKVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25fX3Bvc3RzIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbl9fcG9zdHMtaGVhZGluZyB0ZXh0LWgyIHRleHQtY2VudGVyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Bvc3RzLXRleHQgdGV4dC1jZW50ZXIgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMucG9zdC50ZXh0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19wb3N0c1wiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJnYWxsZXJ5LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUdhbGxlcnlMaXN0KCl9IFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5gO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGVzdGltb25pYWxzIHtcbiAgY29uc3RydWN0b3IodGVzdGltb25pYWxzKSB7XG4gICAgdGhpcy50ZXN0aW1vbmlhbHMgPSB0ZXN0aW1vbmlhbHM7XG4gIH1cblxuICBjcmVhdGVJdGVtKG9iaikge1xuXG4gICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtcGhvdG8taXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy1waG90by1ib3hcIj5cbiAgICAgICAgICAgICAgICA8cSBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy10ZXh0IHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtvYmoucX1cbiAgICAgICAgICAgICAgICA8L3E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy10ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy10ZXh0IHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29iai5wcm9mZXNzaW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdXNlci1waG90b1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtvYmouc3JjfVwiIGFsdD1cInVzZXItcGhvdG9cIi8+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9saT5gO1xuICB9XG5cbiAgY3JlYXRlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0aW1vbmlhbHMubGlzdC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZUl0ZW0oZWwpKS5qb2luKFwiXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgIDxzZWN0aW9uIGlkPVwic2VjdGlvbi10ZXN0aW1vbmlhbHNcIiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlY3Rpb25fX3Rlc3RpbW9uaWFscy1oZWFkaW5nXG4gICAgICAgICAgICAgICAgdGV4dC1jZW50ZXIgdGV4dC1oMlxuICAgICAgICAgICAgICAgIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLnRlc3RpbW9uaWFscy50aXRsZX1cbiAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXdyYXBcIiBpZD1cInRlc3RpbW9uaWFscy1waG90by1saXN0X3dyYXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZsaXAtbGVmdFwiIGNsYXNzPVwiZmxpcCBsZWZ0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtcGhvdG8tbGlzdF93cmFwXCI+XG4gICAgICAgICAgICAgIDx1bCBpZD1cInNsaWRlci1saXN0XCIgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtcGhvdG8tbGlzdFwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5jcmVhdGVMaXN0KCl9XG4gICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZsaXAtcmlnaHRcIiBjbGFzcz1cImZsaXAgcmlnaHRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb25Ub3BDb250ZW50IHtcbiAgY29uc3RydWN0b3IoYmxvY2tDb250ZW50KSB7XG4gICAgdGhpcy5ibG9ja0NvbnRlbnQgPSBibG9ja0NvbnRlbnQ7XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuXG4gIHJlbmRlclRleHQoKSB7XG4gICAgcmV0dXJuIGAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3RvcC1oZWFkaW5nIHRleHQtaDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmJsb2NrQ29udGVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190b3AtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmJsb2NrQ29udGVudC50ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgY3JlYXRlQnV0dG9ucyhpdGVtKSB7XG4gICAgcmV0dXJuIGA8YSBocmVmPVwiJHtpdGVtLmhyZWZ9XCIgY2xhc3M9XCIke2l0ZW0udHlwZX1cIj4ke2l0ZW0udGl0bGV9PC9hPmA7XG4gIH1cblxuICByZW5kZXJCdXR0b25zKCkge1xuICAgIHJldHVybiB0aGlzLmJsb2NrQ29udGVudC5idXR0b25zXG4gICAgICAubWFwKChlbCkgPT4gdGhpcy5jcmVhdGVCdXR0b25zKGVsKSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgXG4gICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3RvcFwiIGlkPVwic2VjdGlvbl9fdG9wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3RvcC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgJHt0aGlzLnJlbmRlclRleHQoKX1cbiAgICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyQnV0dG9ucygpfSBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQVBJS0VZID0gJ2M3YzBiODE4ZWY4OWEyYmNlYTliZWQzMGJjY2Y3NWIyJztcbiIsImZ1bmN0aW9uIFNsaWRlciAodGltZSwgdmlzaWJsZUVsZW1lbnRzKSB7XG5cbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzID0gdmlzaWJsZUVsZW1lbnRzO1xuXG4gICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt0aGlzLnN0ZXAgKiAxMDB9JSlgO1xuICAgIH1cblxuICAgIHRoaXMubW92ZUxlZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RlcCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3RlcCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuYW5pbWF0ZUxlZnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVSaWdodCA9IGZ1bmN0aW9uICgpe1xuICAgICAgICBpZiAodGhpcy5zdGVwIDwgdGhpcy5saXN0LmNoaWxkcmVuLmxlbmd0aCAvIHRoaXMudmlzaWJsZUVsZW1lbnRzIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5zdGVwKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGVwID09PSB0aGlzLmxpc3QuY2hpbGRyZW4ubGVuZ3RoIC8gdGhpcy52aXNpYmxlRWxlbWVudHMgLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuYW5pbWF0ZVJpZ2h0KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGVSaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdGVwID0gMTtcbiAgICAgICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3Quc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuYW5pbWF0ZVJpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGVMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLmxpc3QuY2hpbGRyZW4ubGVuZ3RoIC8gdGhpcy52aXNpYmxlRWxlbWVudHMgLSAyO1xuICAgICAgICB0aGlzLmxpc3Quc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5hbmltYXRlTGVmdCk7XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRlUmlnaHQgPSB0aGlzLmFuaW1hdGVSaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYW5pbWF0ZUxlZnQgPSB0aGlzLmFuaW1hdGVMZWZ0LmJpbmQodGhpcyk7XG59XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBTbGlkZXIgVGVzdGltb25pYWxzXG5cbmZ1bmN0aW9uIFNsaWRlclRlc3RpbW9uaWFscyh0aW1lLCB2aXNpYmxlRWxlbWVudHMpIHtcbiAgICBTbGlkZXIuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgdGhpcy52aXNpYmxlRWxlbWVudHMgPSB2aXNpYmxlRWxlbWVudHM7XG5cbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXItbGlzdCcpO1xuICAgICAgICB0aGlzLmxlZnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcC1sZWZ0Jyk7XG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcC1yaWdodCcpO1xuICAgICAgICB0aGlzLnNsaWRlckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0aW1vbmlhbHMtcGhvdG8tbGlzdF93cmFwJyk7XG5cbiAgICAgICAgY29uc3QgZWxGaXJzdCA9IHRoaXMubGlzdC5jaGlsZHJlblswXTtcbiAgICAgICAgY29uc3QgZWxMYXN0ID0gdGhpcy5saXN0LmNoaWxkcmVuW3RoaXMubGlzdC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgY2xvbmVGaXJzdCA9IGVsRmlyc3QuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBjbG9uZUxhc3QgPSBlbExhc3QuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQoY2xvbmVGaXJzdCk7XG4gICAgICAgIHRoaXMubGlzdC5pbnNlcnRCZWZvcmUoY2xvbmVMYXN0LCBlbEZpcnN0KTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm1vdmVSaWdodCgpKTtcbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tb3ZlTGVmdCgpKTtcblxuXG4gICAgICAgIHRoaXMuc2xpZGVyQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLnN0YXJ0QW5pbWF0aW9uKCkpO1xuICAgICAgICB0aGlzLnNsaWRlckJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gY2xlYXJUaW1lb3V0KHRoaXMudGVzdGltb25pYWxTbGlkZXJNb3ZlKSk7XG5cbiAgICAgICAgLy8gICAgIHRoaXMudGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tdGVzdGltb25pYWxzJyk7XG4gICAgICAgIC8vICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50ZXN0aW1vbmlhbFNsaWRlck1vdmUpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnRhcmdldCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRlc3RpbW9uaWFsU2xpZGVyTW92ZSA9IHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgIH0sIHRoaXMudGltZSlcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRlc3RpbW9uaWFsU2xpZGVyTW92ZSk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbn1cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIC8vU2xpZGVyIFRlc3RpbW9uaWFsc1xuXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBTbGlkZXIgUG9ydGZvbGlvXG5mdW5jdGlvbiBTbGlkZXJQb3Jmb2xpbyAodGltZSwgdmlzaWJsZUVsZW1lbnRzKSB7XG4gICAgU2xpZGVyLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzID0gdmlzaWJsZUVsZW1lbnRzO1xuXG4gICAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gMDtcbiAgICAgICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRmb2xpby1saXN0Jyk7XG5cbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRmb2xpb19fZmxpcC1sZWZ0Jyk7XG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvX19mbGlwLXJpZ2h0Jyk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvLXNsaWRlci1ib3gnKTtcblxuICAgICAgICB0aGlzLnNsaWRlckJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5zdGFydEFuaW1hdGlvbigpKTtcbiAgICAgICAgdGhpcy5zbGlkZXJCb3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IGNsZWFyVGltZW91dCh0aGlzLnBvcnRmb2xpb1NsaWRlck1vdmUpKTtcblxuICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tb3ZlUmlnaHQoKSk7XG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubW92ZUxlZnQoKSk7XG5cbiAgICAgICAgbGV0IGZpcnN0SXRlbSA9IHRoaXMubGlzdC5jaGlsZHJlblswXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy52aXNpYmxlRWxlbWVudHM7IGkgPj0gMTsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgZWxMYXN0ID0gdGhpcy5saXN0LmNoaWxkcmVuW3RoaXMubGlzdC5jaGlsZHJlbi5sZW5ndGggLSBpXTtcbiAgICAgICAgICAgIGxldCBjbG9uZUxhc3QgPSBlbExhc3QuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5saXN0Lmluc2VydEJlZm9yZShjbG9uZUxhc3QsIGZpcnN0SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmlzaWJsZUVsZW1lbnRzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbEZpcnN0ID0gdGhpcy5saXN0LmNoaWxkcmVuW3RoaXMudmlzaWJsZUVsZW1lbnRzICsgaV07XG4gICAgICAgICAgICBsZXQgY2xvbmVGaXJzdCA9IGVsRmlyc3QuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKGNsb25lRmlyc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBvcnRmb2xpb1NsaWRlck1vdmUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgIH0sIHRoaXMudGltZSlcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5wb3J0Zm9saW9TbGlkZXJNb3ZlKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzbGlkZXJUZXN0aW1vbmlhbHMgPSBuZXcgU2xpZGVyVGVzdGltb25pYWxzKDI1MDAsIDEpO1xuZXhwb3J0IGNvbnN0IHNsaWRlclBvcnRmb2xpbyA9IG5ldyBTbGlkZXJQb3Jmb2xpbygyNTAwLCAzKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIjtcbmltcG9ydCB7IFNlY3Rpb25Ub3BDb250ZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90b3Atc2VjdGlvbi90b3Atc2VjdGlvblwiO1xuaW1wb3J0IHsgQWJvdXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tYWJvdXQvc2VjdGlvbi1hYm91dFwiO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbi1wb3N0cy9zZWN0aW9uLXBvc3RcIjtcbmltcG9ydCB7IFBvcnRmb2xpbyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbi1wb3J0Zm9saW8vc2VjdGlvbi1wb3J0Zm9saW9cIjtcbmltcG9ydCB7IFRlc3RpbW9uaWFscyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbi10ZXN0aW1vbmlhbHMvc2VjdGlvbi10ZXN0aW1vbmlhbHNcIjtcbmltcG9ydCB7IENvbnRhY3RzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9uLWNvbnRhY3Qvc2VjdGlvbi1jb250YWN0c1wiO1xuaW1wb3J0IHsgQmxvZyB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZS1ibG9nL3BhZ2UtYmxvZ1wiO1xuaW1wb3J0IHsgQXJ0aWNsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZS1wb3N0L3BhZ2UtcG9zdFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YS5qc29uXCI7XG5pbXBvcnQgeyBBUElLRVkgfSBmcm9tIFwiLi9jb25maWdcIjtcbi8vIGltcG9ydCB7IFNsaWRlcn0gZnJvbSBcIi4vc2xpZGVyXCI7XG5pbXBvcnQge3NsaWRlclBvcnRmb2xpbywgc2xpZGVyVGVzdGltb25pYWxzfSBmcm9tIFwiLi9zbGlkZXJFUzVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IGFwcGxpY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbihkYXRhLm5hdik7XG4gIGNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXIobmF2aWdhdGlvbik7XG4gIGNvbnN0IGZvb3RlciA9IG5ldyBGb290ZXIobmF2aWdhdGlvbik7XG4gIGNvbnN0IHNlY3Rpb25Ub3BDb250ZW50ID0gbmV3IFNlY3Rpb25Ub3BDb250ZW50KGRhdGEuYmxvY2tDb250ZW50KTtcbiAgY29uc3QgYWJvdXQgPSBuZXcgQWJvdXQoZGF0YS5hYm91dCk7XG4gIGNvbnN0IHBvc3QgPSBuZXcgUG9zdChkYXRhLnBvc3QpO1xuICBjb25zdCBwb3J0Zm9saW8gPSBuZXcgUG9ydGZvbGlvKGRhdGEucG9ydGZvbGlvKTtcbiAgY29uc3QgdGVzdGltb25pYWxzID0gbmV3IFRlc3RpbW9uaWFscyhkYXRhLnRlc3RpbW9uaWFscyk7XG4gIGNvbnN0IGNvbnRhY3RzID0gbmV3IENvbnRhY3RzKGRhdGEuY29udGFjdHMpO1xuICBjb25zdCBibG9nID0gbmV3IEJsb2coZGF0YS5ibG9nKTtcbiAgY29uc3QgYXJ0aWNsZSA9IG5ldyBBcnRpY2xlKGRhdGEuYXJ0aWNsZSk7XG4gIGxldCB0ZXN0aW1vbmlhbHNTbGlkZXI7XG4gIGxldCBwb3J0Zm9saW9TbGlkZXI7XG5cbiAgbGV0IGJhc2VVUkwgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzNcIjtcblxuICBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICAgIHJldHVybiBgXG4gICAgICAgJHtoZWFkZXIucmVuZGVyKFwiI2hvbWVcIil9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9ucy13cmFwXCI+XG4gICAgICAgICAgICAke3NlY3Rpb25Ub3BDb250ZW50LnJlbmRlcigpfSBcbiAgICAgICAgICAgICR7YWJvdXQucmVuZGVyKCl9XG4gICAgICAgICAgICAke3Bvc3QucmVuZGVyKCl9XG4gICAgICAgICAgICAke3BvcnRmb2xpby5yZW5kZXIoKX0gIFxuICAgICAgICAgICAgJHt0ZXN0aW1vbmlhbHMucmVuZGVyKCl9XG4gICAgICAgICAgICAke2NvbnRhY3RzLnJlbmRlcigpfSAgICAgICAgXG4gICAgICAgIDwvZGl2PiBcbiAgICAgICR7Zm9vdGVyLnJlbmRlcigpfSBcbiAgICBgO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyQmxvZyhkYXRhKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7aGVhZGVyLnJlbmRlcihcIiNibG9nXCIpfVxuICAgICAgJHtibG9nLnJlbmRlcihkYXRhKX0gXG4gICAgICAke2Zvb3Rlci5yZW5kZXIoKX0gXG4gICAgYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBvc3QoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAke2hlYWRlci5yZW5kZXIoXCIjcG9zdFwiKX0gXG4gICAgICAke2FydGljbGUucmVuZGVyKCl9XG4gICAgICAke2Zvb3Rlci5yZW5kZXIoKX0gXG4gICAgYDtcbiAgfVxuXG4gIGNvbnN0IGdldEJsb2dEYXRhID0gZnVuY3Rpb24gKCkge1xuXG4gICAgcmV0dXJuIGZldGNoKGAke2Jhc2VVUkx9L21vdmllL3BvcHVsYXI/YXBpX2tleT0ke0FQSUtFWX0mcGFnZT0xYClcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICByZXR1cm4gZGF0YS5yZXN1bHRzLm1hcCgoZWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHN0YXJzOiB7XG4gICAgICAgICAgICAgICAgbjogNSxcbiAgICAgICAgICAgICAgICBmdWxsOiAxLjUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHR5cGU6IFwidmlkZW9cIixcbiAgICAgICAgICAgICAgLy8gcGljOiBcImFzc2V0cy9waWMvYmxvZy1pbWcxLnBuZ1wiLFxuICAgICAgICAgICAgICBwaWM6IGBodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8ke2VsLmJhY2tkcm9wX3BhdGh9YCxcbiAgICAgICAgICAgICAgLy8gcGljOiBgJHtiYXNlVVJMfS9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElLRVl9JHtlbC5iYWNrZHJvcF9wYXRofWAsXG4gICAgICAgICAgICAgIHNyYzogYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsLyR7ZWwucG9zdGVyX3BhdGh9YCxcbiAgICAgICAgICAgICAgYXV0aG9yOiBcIk5laWwgUmljaGFyZHNcIixcbiAgICAgICAgICAgICAgdGl0bGU6IGVsLm9yaWdpbmFsX3RpdGxlLFxuICAgICAgICAgICAgICB0ZXh0OiBlbC5vdmVydmlldyxcbiAgICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhZCBtb3JlXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJidG5cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRpbWU6IFwiMjAxOS0xMC0yMFwiLFxuICAgICAgICAgICAgICAgIG1pbnV0czogXCIxMFwiLFxuICAgICAgICAgICAgICAgIGNvbW1lbnRzOiBcIjExXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbmRlclBhZ2UoaHJlZikge1xuICAgIGNsZWFuVXAoKTtcbiAgICBzd2l0Y2ggKGhyZWYpIHtcbiAgICAgIGNhc2UgXCIjYmxvZ1wiOlxuICAgICAgICBnZXRCbG9nRGF0YSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBhcHBsaWNhdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSByZW5kZXJCbG9nKGRhdGEpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIiNwb3N0XCI6XG4gICAgICAgIGFwcGxpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlclBvc3QoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFwcGxpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlckhvbWUoKTtcbiAgICAgICAgLy8gdGVzdGltb25pYWxzU2xpZGVyID0gbmV3IFNsaWRlcigpO1xuICAgICAgICBzbGlkZXJUZXN0aW1vbmlhbHMuaW5pdCgpO1xuICAgICAgICBzbGlkZXJUZXN0aW1vbmlhbHMuc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgc2xpZGVyUG9ydGZvbGlvLmluaXQoKTtcbiAgICAgICAgc2xpZGVyUG9ydGZvbGlvLnN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW5VcCgpIHtcbiAgICBpZih0ZXN0aW1vbmlhbHNTbGlkZXIpIHtcbiAgICAgIHRlc3RpbW9uaWFsc1NsaWRlci5kZXN0cm95KCk7XG4gICAgICB0ZXN0aW1vbmlhbHNTbGlkZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmKHBvcnRmb2xpb1NsaWRlcikge1xuICAgICAgcG9ydGZvbGlvU2xpZGVyLmRlc3Ryb3koKTtcbiAgICAgIHBvcnRmb2xpb1NsaWRlciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGFnZShsb2NhdGlvbi5oYXNoKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgcmVuZGVyUGFnZShsb2NhdGlvbi5oYXNoKTtcbiAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVVTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0Es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QTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDTzs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsZ0JBQWdCO0FBQy9EOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BITztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsMENBQTBDLFFBQVE7QUFD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V18wMS8uL3NyYy9qcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvcGFnZS1ibG9nL3BhZ2UtYmxvZy5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3BhZ2UtcG9zdC9wYWdlLXBvc3QuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLWFib3V0L3NlY3Rpb24tYWJvdXQuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLWNvbnRhY3Qvc2VjdGlvbi1jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3NlY3Rpb24tcG9ydGZvbGlvL3NlY3Rpb24tcG9ydGZvbGlvLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbi1wb3N0cy9zZWN0aW9uLXBvc3QuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLXRlc3RpbW9uaWFscy9zZWN0aW9uLXRlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3RvcC1zZWN0aW9uL3RvcC1zZWN0aW9uLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvc2xpZGVycG9ydGZvbGlvLmpzIiwid2VicGFjazovL0hXXzAxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hXXzAxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9IV18wMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0hXXzAxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz85OGFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBGb290ZXIge1xuICBjb25zdHJ1Y3RvcihuYXZpZ2F0aW9uKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uID0gbmF2aWdhdGlvbjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYFxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXIgc3RpY2t5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInNvY2lhbC1tZWRpYVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJmYWNlYm9va1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImluc3RhZ3JhbVwiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJkcmliYmxlXCIgaHJlZj1cImh0dHBzOi8vZHJpYmJibGUuY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2xvZ28gdGV4dC1oNFwiPkJsb2dXb3JsZDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl90ZXh0IHRleHQtaDVcIj4mY29weTsgMjAxOSBBbGwgUmlnaHRzIFJlc2VydmVkLjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5gO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IobmF2aWdhdGlvbikge1xuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5hdmlnYXRpb247XG4gIH1cblxuICByZW5kZXIoaHJlZikge1xuICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgIGlmIChocmVmID09PSBcIiNibG9nXCIgfHwgaHJlZiA9PT0gXCIjcG9zdFwiKSB7XG4gICAgICByZXN1bHQgPSBgPGhlYWRlciBjbGFzcz1cImhlYWRlciBoZWFkZXItaW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbG9nbyB0ZXh0LWg0XCI+QmxvZ1dvcmxkPC9kaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiaGVhZGVyX19uYXYtbWVudVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm5hdmlnYXRpb24ucmVuZGVyKGhyZWYpfVxuICAgICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICAgICAgPC9uYXY+IFxuICAgICAgICA8L2Rpdj4gXG4gICAgPC9oZWFkZXI+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYDxoZWFkZXIgY2xhc3M9XCJoZWFkZXIgc3RpY2t5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2xvZ28gdGV4dC1oNFwiPkJsb2dXb3JsZDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbmF2LW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5uYXZpZ2F0aW9uLnJlbmRlcihocmVmKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPmA7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQGNsYXNzXG4gKi9cblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24ge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTx7dGl0bGU6IHN0cmluZywgaHJlZjogc3RyaW5nfT59IG5hdlxuICAgKiBAcGFyYW0ge3t0aXRsZTogc3RyaW5nLCBocmVmOiBzdHJpbmd9fSBhY3RpdmVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hdikge1xuICAgIHRoaXMubmF2ID0gbmF2O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7e2hyZWY6c3RyaW5nLCB0aXRsZTogc3RyaW5nfX0gaXRlbVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuXG4gIGNyZWF0ZU5hdkl0ZW0oaXRlbSwgaHJlZikge1xuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJoZWFkZXJfX25hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0ZXh0LWg1ICR7XG4gICAgICAgICAgICAgICAgICBpdGVtLmhyZWYgPT09IGhyZWYgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH1cIiBocmVmPVwiJHtpdGVtLmhyZWZ9XCIgZGF0YS12YWx1ZT1cIiR7aXRlbS50aXRsZX1cIj5cIiR7XG4gICAgICBpdGVtLnRpdGxlXG4gICAgfVwiPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgYDtcbiAgfVxuXG4gIHJlbmRlcihocmVmKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2Lm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlTmF2SXRlbShlbCwgaHJlZikpLmpvaW4oXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBCbG9nIHtcbiAgY29uc3RydWN0b3IoYmxvZykge1xuICAgIHRoaXMuYmxvZyA9IGJsb2c7XG4gIH1cblxuICByZW5kZXJCdXR0b24odHlwZSkge1xuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInZpZGVvXCI6XG4gICAgICAgIHN0ciA9IFwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb192aWRlb1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtdXNpY1wiOlxuICAgICAgICBzdHIgPSBcInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fbXVzaWNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicGljXCI6XG4gICAgICAgIHN0ciA9IFwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb19waWNcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0ciA9IFwiXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gICAgY3JlYXRlUmF0aW5nTGlzdChuLCBmdWxsKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBpZihpIDw9IGZ1bGwpIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goYDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPmApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKGA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+YCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyLmpvaW4oJycpO1xuICB9XG5cbiAgY3JlYXRlSXRlbShvYmopIHtcbiAgICByZXR1cm4gYCA8bGkgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5waWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pdGVtX3ZpZGVvICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoudHlwZSA9PT0gXCJ2aWRlb1wiID8gXCJ2aWRlby1idXR0b25cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7b2JqLnBpY31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJibG9nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb1xuICAgICAgICAgICAgICAgICAgJHt0aGlzLnJlbmRlckJ1dHRvbihvYmoudHlwZSl9XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbl9waG90b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7b2JqLnNyY31cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwZXJzb24tcGhvdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24tbmFtZSB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmouYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRlVGltZSBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiR7b2JqLmRhdGEudGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoucnVudGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gbWluIGR1cmF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3QgY29tbWVudHNcIj4ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmRhdGEuY29tbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInJhdGluZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNyZWF0ZVJhdGluZ0xpc3Qob2JqLnN0YXJzLm4sIG9iai5zdGFycy5mdWxsKVxuICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWhlYWRpbmcgdGV4dC1oM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29iai50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnR5cGUgPT09IFwibXVzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICc8ZmlndXJlIGNsYXNzPVwiYXVkaW9cIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgIDxhdWRpb1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvYXVkaW8vbWVkaWEvY2MwLWF1ZGlvL3QtcmV4LXJvYXIubXAzXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgID48L2F1ZGlvPlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLXRleHQgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtvYmouYnV0dG9uLmhyZWZ9XCIgY2xhc3M9XCIke1xuICAgICAgb2JqLmJ1dHRvbi50eXBlXG4gICAgfVwiPiR7b2JqLmJ1dHRvbi50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xuICB9XG5cbiAgY3JlYXRlTGlzdChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKChlbCkgPT4gdGhpcy5jcmVhdGVJdGVtKGVsKSkuam9pbihcIlwiKTtcbiAgfVxuXG4gIHJlbmRlcihkYXRhKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25fX2Jsb2cgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWhlYWRpbmcgdGV4dC1oMiBib3R0b20tbGluZVwiPiR7XG4gICAgICAgICAgICAgICAgICB0aGlzLmJsb2cudGl0bGVcbiAgICAgICAgICAgICAgICB9PC9oMj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaW5wdXQtd3JhcCBpbnB1dC1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IGF1dGhvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5jcmVhdGVMaXN0KGRhdGEpfVxuICAgICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHtcbiAgICAgIHRoaXMuYmxvZy5idXR0b24udHlwZVxuICAgIH1cIiBpZD1cImJsb2ctbGF6eS1sb2FkaW5nXCI+JHt0aGlzLmJsb2cuYnV0dG9uLnRpdGxlfTwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFydGljbGUge1xuICBjb25zdHJ1Y3RvcihhcnRpY2xlKSB7XG4gICAgdGhpcy5hcnRpY2xlID0gYXJ0aWNsZTtcbiAgfVxuXG4gIGNyZWF0ZVJldmlld3NJdGVtKG9iaikge1xuICAgIHJldHVybiBgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdF9yZXZpZXdfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbSBzZWN0aW9uX19ibG9nLWl0ZW1faW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvIHNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvX2lubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke29iai5zcmN9XCIgYWx0PVwicGVyc29uLXBob3RvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb24tcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX2lubmVyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWg0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lX2lubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmouYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyYXRpbmctbGlzdCByYXRpbmctbGlzdF9pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbSBmdWxsXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94IGRhdGEtYm94X2lubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDVcIj4ke29iai50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLXRleHQgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7b2JqLmJ1dHRvbi5ocmVmfVwiIGNsYXNzPVwiJHtvYmouYnV0dG9uLnR5cGV9XCI+JHtvYmouYnV0dG9uLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPmA7XG4gIH1cblxuICBjcmVhdGVSZXZpZXdzTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnRpY2xlLnJldmlld3MucmV2aWV3c0xpc3RcbiAgICAgIC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZVJldmlld3NJdGVtKGVsKSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29sdW1ucy13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25zLXdyYXBcIj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWhlYWRpbmcgdGV4dC1oMlwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5hcnRpY2xlLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb193cmFwXCI+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvcGVyc29uLXBob3RvMi5wbmdcIiBhbHQ9XCJwZXJzb24tcGhvdG9cIiAvPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24tbmFtZSB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgJHt0aGlzLmFydGljbGUuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5kYXRhLnRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVwiIGNsYXNzPVwidGltZSB0ZXh0LWg1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+MDIgb2N0LCAyMDE5XG4gICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPiR7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlLmRhdGEubWludXRzXG4gICAgICAgICAgICAgICAgICAgIH0gbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3QgY29tbWVudHNcIj4ke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5kYXRhLmNvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInJhdGluZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW1cIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZmlndXJlXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1fdmlkZW8gc2VjdGlvbl9fYmxvZy1pdGVtX3ZpZGVvX2lubmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5hcnRpY2xlLnNyY31cIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImJsb2dcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZmlndXJlPlxuXG4gICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1fYXVkaW9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8YXVkaW9cbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgICBzcmM9XCIke3RoaXMuYXJ0aWNsZS5waWN9XCJcbiAgICAgICAgICAgICAgICA+PC9hdWRpbz5cbiAgICAgICAgICAgICAgPC9maWd1cmU+IFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlXCI+XG4gICAgICAgICAgICAgICAke3RoaXMuYXJ0aWNsZS50ZXh0fVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2FydGljbGU+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0LWxpa2VzX3dyYXBcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1saWtlXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtbGlrZXNcIj43NSBsaWtlczwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic29jaWFsLW1lZGlhXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJmYWNlYm9va1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJpbnN0YWdyYW1cIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImRyaWJibGVcIiBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICA8IS0tICAgICAgICBSZXZpZXdzLS0+XG5cbiAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uX19wb3N0LXJldmlldyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWgyIGxlZnQtYWxpZ24gc2VjdGlvbl9fcG9zdC1yZXZpZXctaGVhZGVyXCI+JHtcbiAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUucmV2aWV3cy50aXRsZVxuICAgICAgICAgICAgICB9PC9oMj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fcG9zdF9yZXZpZXctbGlzdFwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5jcmVhdGVSZXZpZXdzTGlzdCgpfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuXCI+TW9yZSBjb21tZW50czwvYT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXNzaWRzLXdyYXBcIj5cbiAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3QtaGVhZGluZyB0ZXh0LWgyIGFzaWRlLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICBMYXRlc3QgcG9zdHNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3RfcGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGljL2FzaWRlLWltZzEucG5nXCIgYWx0PVwiUGhvdG8gcG9zdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1zdWJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTXVjaCBjdXJlIGluYXBwcm9wcmlhdGUgY291bGQgdGhpcyByZXN0cmljdGlvbnMg4oCmXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTktMTAtMDJcIiBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjAyIG9jdCwgMjAxOVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90XCI+MTIgbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdCBjb21tZW50c1wiPjQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3RfcGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGljL2FzaWRlLWltZzIucG5nXCIgYWx0PVwiUGhvdG8gcG9zdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1zdWJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTXVjaCBjdXJlIGluYXBwcm9wcmlhdGUgY291bGQgdGhpcyByZXN0cmljdGlvbnMg4oCmXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTktMTAtMDJcIiBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjAyIG9jdCwgMjAxOVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90XCI+MTIgbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdCBjb21tZW50c1wiPjQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmstd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG5cIj5Nb3JlIHBvc3RzPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXNpZGU+XG5cbiAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1ib3hcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWhlZGluZyB0ZXh0LWgyIGFzaWRlLWhlYWRpbmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidHJhdmVsXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJpbnB1dC1hY2NvcmRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRyYXZlbFwiIGNsYXNzPVwibGFiZWwtYWNjb3JkaW9uIHRleHQtaDRcIlxuICAgICAgICAgICAgICAgICAgICA+UmVzdGF1cmFudCBmb29kICgzKTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmVzdGF1cmFudFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYWNjb3JkaW9uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVzdGF1cmFudFwiIGNsYXNzPVwibGFiZWwtYWNjb3JkaW9uIHRleHQtaDRcIlxuICAgICAgICAgICAgICAgICAgICA+VHJhdmVsIG5ld3MgKDMpPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaGlkZGVuLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5IaWtpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5CaWN5Y2xlIHRyaXA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5Nb3VudGFpbnMgdHJpcDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cInRlY2hub2xvZ3lcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWFjY29yZGlvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRlY2hub2xvZ3lcIiBjbGFzcz1cImxhYmVsLWFjY29yZGlvbiB0ZXh0LWg0XCJcbiAgICAgICAgICAgICAgICAgICAgPk1vZGVybiB0ZWNobm9sb2d5ICg2KTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicHJvZHVjdFwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaW5wdXQtYWNjb3JkaW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9kdWN0XCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5Qcm9kdWN0ICg0KTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW5zcGlyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWFjY29yZGlvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImluc3BpcmF0aW9uXCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5JbnNwaXJhdGlvbiAoMik8L2xhYmVsXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJoaWRkZW4tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW4tbGlzdF9pdGVtIHRleHQtaDVcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9hc2lkZT5cblxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwic2VjdGlvbl9fcG9zdC10YWdzLWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaGVhZGluZyB0ZXh0LWgyIGFzaWRlLWhlYWRpbmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGFnc1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCJcIj5Mb3ZlPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPlNpZ25zPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPldhdGVyZmFsbDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5JbnNwaXJhdGlvbjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5RdW90ZXM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+U2VhPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPlNlbnNlPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkNvZmZlZTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5Hb2xkPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkltYWdlczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5Db3VyYWdlPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkRhbmNpbmc8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+VmlkZW88L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFib3V0IHtcbiAgY29uc3RydWN0b3IoYWJvdXQpIHtcbiAgICB0aGlzLmFib3V0ID0gYWJvdXQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtaGVhZGluZyB0ZXh0LWNlbnRlciB0ZXh0LWgyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5hYm91dC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LXN1Yi1oZWFkaW5nIHRleHQtY2VudGVyIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmFib3V0LnRleHR9XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9jayB0eXBvZ3JhcGh5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9ja190aXRsZSB0ZXh0LWg0XCJcbiAgICAgICAgICAgICAgICA+VHlwb2dyYXBoeTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9jayBpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LWJsb2NrX3RpdGxlIHRleHQtaDRcIj5JY29uIHNldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9jayBhY2N1cmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9ja190aXRsZSB0ZXh0LWg0XCI+QWNjdXJhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtdmlkZW8gdmlkZW8tYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvYWJvdXQtcGljdHVyZS5wbmdcIiBhbHQ9XCJBYm91dCBwaWN0dXJlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbnRhY3RzIHtcbiAgY29uc3RydWN0b3IoY29udGFjdHMpIHtcbiAgICB0aGlzLmNvbnRhY3RzID0gY29udGFjdHM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBpZD1cImNvbnRhY3RcIiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtaGVhZGluZyB0ZXh0LWgyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAke3RoaXMuY29udGFjdHMudGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC10ZXh0IHRleHQtY2VudGVyIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgJHt0aGlzLmNvbnRhY3RzLnRleHR9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNvY2lhbC1tZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImZhY2Vib29rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiaW5zdGFncmFtXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImRyaWJibGVcIiBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtYmFja2dyb3VuZC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1jb2x1bW5fbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3ViaGVhZGluZyB0ZXh0LWgyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCB3aWxsIGJlIG5leHQgc3RlcD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIHN0YXJ0PVwiMVwiIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1zdGVwcy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1zdGVwcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX2hlYWRpbmcgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2XigJlsbCBwcmVwYXJlIGEgcHJvcG9zYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX3RleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVxdWlyZWQgc2NvcGUsIHRpbWVsaW5lIGFuZCBhcHIuIHByaWNlIHdpbGwgYmUgaW5jbHVkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIHlvdSBwcm92aWRlIHVzIHdpdGggZGV0YWlsIGluZm9ybWF0aW9uIGFib3V0IGEgcHJvamVjdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3RlcHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV9oZWFkaW5nIHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvZ2V0aGVyIHdlIGRpc2N1c3MgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX3RleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGXigJlzIGdldCBhY3F1YWludGVkIGFuZCBkaXNjdXNzIGFsbCB0aGUgcG9zc2libGUgdmFyaWFudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG9wdGlvbnMuIEdvb2dsZSBIYW5nb3V0cyBvciBTa3lwZSB1c3VhbGx5IHdpcmtzIGdyZWF0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1zdGVwcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX2hlYWRpbmcgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGV04oCZcyBzdGFydCBidWlsZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzLWl0ZW1fdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHRoZSBjb250cmFjdCBpcyBzaWduZWQgYW5kIGFsbCBnb2FscyBhcmUgc2V0IHdlIGNhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgdGhlIGZpcnN0IHNwcmludC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWNvbHVtbl9yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtZm9ybS1tZXNzYWdlIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXcml0ZSB1cyBhIGZldyB3b3JkcyBhYm91dCB5b3VyIHByb2plY3QgYW5kIHdlIHdpbGwgcHJlcGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsIGZvciB5b3Ugd2l0aGluIDI0IGhvdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5fcmlnaHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cInBvc3RcIiBtZXRob2Q9XCJwb3N0XCIgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Zb3VyIG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRfX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzPVwidGV4dC1oNFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0X193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBhc3N3b3JkLXNob3cgdGV4dC1oNFwiIGZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRfX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJpbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gY29sb3IgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuZCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWZvcm1fZW1haWwgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgeW91IG5lZWQgdG8gaGF2ZSBhIEROQSBmaXJzdCwganVzdCBjb250YWN0IHVzIGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmVtYWlsQGdtYWlsLmNvbVwiPmVtYWlsQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LW1hcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvbWFwLnBuZ1wiIGFsdD1cIk1hcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBvcnRmb2xpbyB7XG4gIGNvbnN0cnVjdG9yKHBvcnRmb2xpbykge1xuICAgIHRoaXMucG9ydGZvbGlvID0gcG9ydGZvbGlvO1xuICB9XG5cbiAgY3JlYXRlR2FsbGVyeUl0ZW0ob2JqKSB7XG4gICAgcmV0dXJuIGAgPGxpIGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+IFxuICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtvYmouc3JjfVwiIGFsdD1cImdhbGxlcnktaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnlfX3NsaWRlci1pdGVtLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5X19zbGlkZXItaXRlbS1oZWFkaW5nIHRleHQtaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW0tc3ViaGVhZGluZyB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29iai50ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW0tYm94XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+YDtcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnlMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBvcnRmb2xpby5nYWxsZXJ5TGlzdFxuICAgICAgLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlR2FsbGVyeUl0ZW0oZWwpKVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1wiIGNsYXNzPVwic2VjdGlvbl9fcG9ydGZvbGlvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX3BvcnRmb2xpby1oZWFkaW5nIHRleHQtaDIgdGV4dC1jZW50ZXIgYm90dG9tLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAke3RoaXMucG9ydGZvbGlvLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fcG9ydGZvbGlvLXRleHQgdGV4dC1jZW50ZXIgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICR7dGhpcy5wb3J0Zm9saW8udGV4dH0gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwicG9ydGZvbGlvLWxpc3RcIiBjbGFzcz1cImdhbGxlcnlfX3NsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlR2FsbGVyeUxpc3QoKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC13cmFwIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwb3J0Zm9saW9fX2ZsaXAtbGVmdFwiIGNsYXNzPVwiZmxpcCBsZWZ0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwb3J0Zm9saW9fX2ZsaXAtcmlnaHRcIiBjbGFzcz1cImZsaXAgcmlnaHRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt0aGlzLnBvcnRmb2xpby5idXR0b24uaHJlZn1cIiBjbGFzcz1cIiR7XG4gICAgICB0aGlzLnBvcnRmb2xpby5idXR0b24udHlwZVxuICAgIH1cIj4gJHt0aGlzLnBvcnRmb2xpby5idXR0b24udGl0bGV9IDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBvc3Qge1xuICBjb25zdHJ1Y3Rvcihwb3N0KSB7XG4gICAgdGhpcy5wb3N0ID0gcG9zdDtcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnlJdGVtKG9iaikge1xuICAgIHJldHVybiBgIDxsaSBjbGFzcz1cImdhbGxlcnktaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke29iai5ocmVmfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke29iai5zcmN9XCIgYWx0PVwiZ2FsbGVyeSBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1fX2hlYWRpbmcgdGV4dC1oM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1pdGVtX190ZXh0IHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94XCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIke29iai5kYXRhLnRpbWV9XCIgY2xhc3M9XCJ0aW1lIHRleHQtaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjI4IHNlcCwgMjAxOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPiR7b2JqLmRhdGEubWludXRzfSBtaW4gcmVhZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3QgY29tbWVudHNcIj4ke29iai5kYXRhLmNvbW1lbnRzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xuICB9XG5cbiAgY3JlYXRlR2FsbGVyeUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zdC5nYWxsZXJ5TGlzdFxuICAgICAgLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlR2FsbGVyeUl0ZW0oZWwpKVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25fX3Bvc3RzIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbl9fcG9zdHMtaGVhZGluZyB0ZXh0LWgyIHRleHQtY2VudGVyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Bvc3RzLXRleHQgdGV4dC1jZW50ZXIgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMucG9zdC50ZXh0fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19wb3N0c1wiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJnYWxsZXJ5LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUdhbGxlcnlMaXN0KCl9IFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5gO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGVzdGltb25pYWxzIHtcbiAgY29uc3RydWN0b3IodGVzdGltb25pYWxzKSB7XG4gICAgdGhpcy50ZXN0aW1vbmlhbHMgPSB0ZXN0aW1vbmlhbHM7XG4gIH1cblxuICBjcmVhdGVJdGVtKG9iaikge1xuXG4gICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtcGhvdG8taXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy1waG90by1ib3hcIj5cbiAgICAgICAgICAgICAgICA8cSBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy10ZXh0IHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtvYmoucX1cbiAgICAgICAgICAgICAgICA8L3E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy10ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy10ZXh0IHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29iai5wcm9mZXNzaW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdXNlci1waG90b1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtvYmouc3JjfVwiIGFsdD1cInVzZXItcGhvdG9cIi8+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9saT5gO1xuICB9XG5cbiAgY3JlYXRlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0aW1vbmlhbHMubGlzdC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZUl0ZW0oZWwpKS5qb2luKFwiXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgIDxzZWN0aW9uIGlkPVwic2VjdGlvbi10ZXN0aW1vbmlhbHNcIiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgIHNlY3Rpb25fX3Rlc3RpbW9uaWFscy1oZWFkaW5nXG4gICAgICAgICAgICAgICAgdGV4dC1jZW50ZXIgdGV4dC1oMlxuICAgICAgICAgICAgICAgIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLnRlc3RpbW9uaWFscy50aXRsZX1cbiAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXdyYXBcIiBpZD1cInRlc3RpbW9uaWFscy1waG90by1saXN0X3dyYXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZsaXAtbGVmdFwiIGNsYXNzPVwiZmxpcCBsZWZ0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtcGhvdG8tbGlzdF93cmFwXCI+XG4gICAgICAgICAgICAgIDx1bCBpZD1cInNsaWRlci1saXN0XCIgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtcGhvdG8tbGlzdFwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5jcmVhdGVMaXN0KCl9XG4gICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZsaXAtcmlnaHRcIiBjbGFzcz1cImZsaXAgcmlnaHRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb25Ub3BDb250ZW50IHtcbiAgY29uc3RydWN0b3IoYmxvY2tDb250ZW50KSB7XG4gICAgdGhpcy5ibG9ja0NvbnRlbnQgPSBibG9ja0NvbnRlbnQ7XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuXG4gIHJlbmRlclRleHQoKSB7XG4gICAgcmV0dXJuIGAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3RvcC1oZWFkaW5nIHRleHQtaDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmJsb2NrQ29udGVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190b3AtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmJsb2NrQ29udGVudC50ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICB9XG5cbiAgY3JlYXRlQnV0dG9ucyhpdGVtKSB7XG4gICAgcmV0dXJuIGA8YSBocmVmPVwiJHtpdGVtLmhyZWZ9XCIgY2xhc3M9XCIke2l0ZW0udHlwZX1cIj4ke2l0ZW0udGl0bGV9PC9hPmA7XG4gIH1cblxuICByZW5kZXJCdXR0b25zKCkge1xuICAgIHJldHVybiB0aGlzLmJsb2NrQ29udGVudC5idXR0b25zXG4gICAgICAubWFwKChlbCkgPT4gdGhpcy5jcmVhdGVCdXR0b25zKGVsKSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgXG4gICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3RvcFwiIGlkPVwic2VjdGlvbl9fdG9wXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3RvcC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgJHt0aGlzLnJlbmRlclRleHQoKX1cbiAgICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyQnV0dG9ucygpfSBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQVBJS0VZID0gJ2M3YzBiODE4ZWY4OWEyYmNlYTliZWQzMGJjY2Y3NWIyJztcbiIsIlxuZXhwb3J0IGNsYXNzIFNsaWRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMudGltZSA9IDIwMDA7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RoaXMuc3RlcCAqIDEwMH0lKWA7XG4gIH1cblxuICBpbml0KCkge1xuXG4gICAgdGhpcy50YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbi10ZXN0aW1vbmlhbHMnKTtcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG5cbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50ZXN0aW1vbmlhbFNsaWRlck1vdmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnRhcmdldCk7XG5cbiAgICB0aGlzLnN0ZXAgPSAxO1xuXG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlci1saXN0Jyk7XG4gICAgdGhpcy5sZWZ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsaXAtbGVmdCcpO1xuICAgIHRoaXMucmlnaHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcC1yaWdodCcpO1xuICAgIHRoaXMuc2xpZGVyQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RpbW9uaWFscy1waG90by1saXN0X3dyYXAnKTtcblxuICAgIGNvbnN0IGVsRmlyc3QgPSB0aGlzLmxpc3QuY2hpbGRyZW5bMF07XG4gICAgY29uc3QgZWxMYXN0ID0gdGhpcy5saXN0LmNoaWxkcmVuW3RoaXMubGlzdC5jaGlsZHJlbi5sZW5ndGggLTFdO1xuXG4gICAgY29uc3QgY2xvbmVGaXJzdCA9IGVsRmlyc3QuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IGNsb25lTGFzdCA9IGVsTGFzdC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQoY2xvbmVGaXJzdCk7XG4gICAgdGhpcy5saXN0Lmluc2VydEJlZm9yZShjbG9uZUxhc3QsIGVsRmlyc3QpO1xuXG5cbiAgICB0aGlzLmNvdW50ID0gdGhpcy5saXN0LmNoaWxkcmVuLmxlbmd0aDtcblxuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICB0aGlzLnJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tb3ZlUmlnaHQoKSk7XG4gICAgdGhpcy5sZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tb3ZlTGVmdCgpKTtcblxuICAgIHRoaXMuc2xpZGVyQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLnN0YXJ0QW5pbWF0aW9uKCkpO1xuICAgIHRoaXMuc2xpZGVyQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiBjbGVhclRpbWVvdXQodGhpcy50ZXN0aW1vbmlhbFNsaWRlck1vdmUpKTtcbiAgfVxuXG4gIG1vdmVMZWZ0KCkge1xuICAgIGlmKHRoaXMuc3RlcCA+IDApIHtcbiAgICAgIHRoaXMuc3RlcC0tO1xuICAgIH1cbiAgICBpZih0aGlzLnN0ZXAgPD0gMCkge1xuICAgICAgdGhpcy5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmFuaW1hdGVMZWZ0KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgdGVzdGAgKyB0aGlzLnN0ZXApO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG1vdmVSaWdodCgpIHtcbiAgICBpZiAodGhpcy5zdGVwIDwgdGhpcy5jb3VudCAtIDEpIHtcbiAgICAgIHRoaXMuc3RlcCsrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0ZXAgPT09IHRoaXMuY291bnQgLSAxKSB7XG4gICAgICB0aGlzLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuYW5pbWF0ZVJpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYW5pbWF0ZVJpZ2h0ID0gKCkgPT4ge1xuICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB9KTtcblxuICAgIHRoaXMubGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5hbmltYXRlUmlnaHQpO1xuICB9XG5cbiAgYW5pbWF0ZUxlZnQgPSAoKSA9PiB7XG4gICAgdGhpcy5zdGVwID0gdGhpcy5saXN0LmNoaWxkcmVuLmxlbmd0aCAtIDI7XG4gICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB9KTtcblxuICAgIHRoaXMubGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5hbmltYXRlTGVmdCk7XG4gIH1cblxuICBzdGFydEFuaW1hdGlvbiAoKSB7XG5cbiAgICAgIHRoaXMudGVzdGltb25pYWxTbGlkZXJNb3ZlID0gc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oKTtcbiAgICB9LCB0aGlzLnRpbWUpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50ZXN0aW1vbmlhbFNsaWRlck1vdmUpO1xuICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2xpZGVycG9ydGZvbGlvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aW1lLCB2aXNpYmxlRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgdGhpcy52aXNpYmxlRWxlbWVudHMgPSB2aXNpYmxlRWxlbWVudHM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3RoaXMuc3RlcCAqIDEwMH0lKWA7XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RlcCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3RlcCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuYW5pbWF0ZUxlZnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlTGVmdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5saXN0LmNoaWxkcmVuLmxlbmd0aCAvIHRoaXMudmlzaWJsZUVsZW1lbnRzIC0gMjtcbiAgICAgICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3Quc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuYW5pbWF0ZUxlZnQpO1xuICAgIH1cblxuICAgIG1vdmVSaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RlcCA8IHRoaXMubGlzdC5jaGlsZHJlbi5sZW5ndGggLyB0aGlzLnZpc2libGVFbGVtZW50cyAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RlcCA9PT0gdGhpcy5saXN0LmNoaWxkcmVuLmxlbmd0aCAvIHRoaXMudmlzaWJsZUVsZW1lbnRzIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmFuaW1hdGVSaWdodCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZVJpZ2h0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnN0ZXAgPSAxO1xuICAgICAgICB0aGlzLmxpc3Quc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5hbmltYXRlUmlnaHQpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gMDtcbiAgICAgICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRmb2xpby1saXN0Jyk7XG5cbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRmb2xpb19fZmxpcC1sZWZ0Jyk7XG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvX19mbGlwLXJpZ2h0Jyk7XG5cbiAgICAgICAgdGhpcy5yaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubW92ZVJpZ2h0KCkpO1xuICAgICAgICB0aGlzLmxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm1vdmVMZWZ0KCkpO1xuXG4gICAgICAgIGxldCBlbEZpcnN0ID0gdGhpcy5saXN0LmNoaWxkcmVuWzBdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IHRoaXMudmlzaWJsZUVsZW1lbnRzOyBpID49IDE7IGktLSApIHtcbiAgICAgICAgICAgIGxldCBlbExhc3QgPSB0aGlzLmxpc3QuY2hpbGRyZW5bdGhpcy5saXN0LmNoaWxkcmVuLmxlbmd0aCAtIGldO1xuICAgICAgICAgICAgbGV0IGNsb25lTGFzdCA9IGVsTGFzdC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QuaW5zZXJ0QmVmb3JlKGNsb25lTGFzdCwgZWxGaXJzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy52aXNpYmxlRWxlbWVudHM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsTmV4dCA9IHRoaXMubGlzdC5jaGlsZHJlblt0aGlzLnZpc2libGVFbGVtZW50cyArIGldO1xuICAgICAgICAgICAgbGV0IGNsb25lTmV4dCA9IGVsTmV4dC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQoY2xvbmVOZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY291bnQgPSB0aGlzLmxpc3QuY2hpbGRyZW4ubGVuZ3RoOyAvLyDQutGW0LvRjNC60ZbRgdGC0Ywg0YHQu9Cw0LnQtNGW0LJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyXCI7XG5pbXBvcnQgeyBTZWN0aW9uVG9wQ29udGVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdG9wLXNlY3Rpb24vdG9wLXNlY3Rpb25cIjtcbmltcG9ydCB7IEFib3V0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9uLWFib3V0L3NlY3Rpb24tYWJvdXRcIjtcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tcG9zdHMvc2VjdGlvbi1wb3N0XCI7XG5pbXBvcnQgeyBQb3J0Zm9saW8gfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tcG9ydGZvbGlvL3NlY3Rpb24tcG9ydGZvbGlvXCI7XG5pbXBvcnQgeyBUZXN0aW1vbmlhbHMgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tdGVzdGltb25pYWxzL3NlY3Rpb24tdGVzdGltb25pYWxzXCI7XG5pbXBvcnQgeyBDb250YWN0cyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbi1jb250YWN0L3NlY3Rpb24tY29udGFjdHNcIjtcbmltcG9ydCB7IEJsb2cgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2UtYmxvZy9wYWdlLWJsb2dcIjtcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2UtcG9zdC9wYWdlLXBvc3RcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNvblwiO1xuaW1wb3J0IHsgQVBJS0VZIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBTbGlkZXJ9IGZyb20gXCIuL3NsaWRlclwiO1xuaW1wb3J0IHsgU2xpZGVycG9ydGZvbGlvIH0gZnJvbSBcIi4vc2xpZGVycG9ydGZvbGlvXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCBhcHBsaWNhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuICBjb25zdCBuYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oZGF0YS5uYXYpO1xuICBjb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKG5hdmlnYXRpb24pO1xuICBjb25zdCBmb290ZXIgPSBuZXcgRm9vdGVyKG5hdmlnYXRpb24pO1xuICBjb25zdCBzZWN0aW9uVG9wQ29udGVudCA9IG5ldyBTZWN0aW9uVG9wQ29udGVudChkYXRhLmJsb2NrQ29udGVudCk7XG4gIGNvbnN0IGFib3V0ID0gbmV3IEFib3V0KGRhdGEuYWJvdXQpO1xuICBjb25zdCBwb3N0ID0gbmV3IFBvc3QoZGF0YS5wb3N0KTtcbiAgY29uc3QgcG9ydGZvbGlvID0gbmV3IFBvcnRmb2xpbyhkYXRhLnBvcnRmb2xpbyk7XG4gIGNvbnN0IHRlc3RpbW9uaWFscyA9IG5ldyBUZXN0aW1vbmlhbHMoZGF0YS50ZXN0aW1vbmlhbHMpO1xuICBjb25zdCBjb250YWN0cyA9IG5ldyBDb250YWN0cyhkYXRhLmNvbnRhY3RzKTtcbiAgY29uc3QgYmxvZyA9IG5ldyBCbG9nKGRhdGEuYmxvZyk7XG4gIGNvbnN0IGFydGljbGUgPSBuZXcgQXJ0aWNsZShkYXRhLmFydGljbGUpO1xuICBsZXQgdGVzdGltb25pYWxzU2xpZGVyO1xuICBsZXQgcG9ydGZvbGlvU2xpZGVyO1xuICBjb25zdCBDT1VOVF9PRl9TVEFSUyA9IDU7XG4gIGxldCBibG9nUGFnZTtcblxuICBsZXQgYmFzZVVSTCA9IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvM1wiO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAke2hlYWRlci5yZW5kZXIoXCIjaG9tZVwiKX1cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25zLXdyYXBcIj5cbiAgICAgICAgICAgICR7c2VjdGlvblRvcENvbnRlbnQucmVuZGVyKCl9IFxuICAgICAgICAgICAgJHthYm91dC5yZW5kZXIoKX1cbiAgICAgICAgICAgICR7cG9zdC5yZW5kZXIoKX1cbiAgICAgICAgICAgICR7cG9ydGZvbGlvLnJlbmRlcigpfSAgXG4gICAgICAgICAgICAke3Rlc3RpbW9uaWFscy5yZW5kZXIoKX1cbiAgICAgICAgICAgICR7Y29udGFjdHMucmVuZGVyKCl9ICAgICAgICBcbiAgICAgICAgPC9kaXY+IFxuICAgICAgJHtmb290ZXIucmVuZGVyKCl9IFxuICAgIGA7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJCbG9nKGRhdGEpIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtoZWFkZXIucmVuZGVyKFwiI2Jsb2dcIil9XG4gICAgICAke2Jsb2cucmVuZGVyKGRhdGEpfSBcbiAgICAgICR7Zm9vdGVyLnJlbmRlcigpfSBcbiAgICBgO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUG9zdCgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICR7aGVhZGVyLnJlbmRlcihcIiNwb3N0XCIpfSBcbiAgICAgICR7YXJ0aWNsZS5yZW5kZXIoKX1cbiAgICAgICR7Zm9vdGVyLnJlbmRlcigpfSBcbiAgICBgO1xuICB9XG5cbiAgY29uc3QgbG9hZEJsb2dQYWdlcyA9IGZ1bmN0aW9uIChibG9nUGFnZSkge1xuICAgIHJldHVybiBmZXRjaChgJHtiYXNlVVJMfS9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElLRVl9JnBhZ2U9JHtibG9nUGFnZX1gKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHMubWFwKChlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBbJ2phbicsICdmZWInLCAnbWFyJywgJ2FwcicsICdtYXknLCAnanVuJyxcbiAgICAgICAgICAgICAgJ2p1bCcsICdhdWcnLCAnc2VwJywgJ29jdCcsICdub3YnLCAnZGVjJ107XG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBEYXRlKGVsLnJlbGVhc2VfZGF0ZSk7XG4gICAgICAgICAgICBsZXQgZGF0YVN0ciA9IGAke2RhdGEuZ2V0RGF0ZSgpfSBgICsgYCR7bW9udGhbZGF0YS5nZXRNb250aCgpICsgMV19LCBgICsgYCR7ZGF0YS5nZXRGdWxsWWVhcigpfWA7XG5cbiAgICAgICAgICAgIGxldCBzdGFycyA9IChDT1VOVF9PRl9TVEFSUyAqIChlbC52b3RlX2F2ZXJhZ2UgKiAxMCkpIC8gMTAwO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpZDogZWwuaWQsXG4gICAgICAgICAgICAgIHN0YXJzOiB7XG4gICAgICAgICAgICAgICAgbjogQ09VTlRfT0ZfU1RBUlMsXG4gICAgICAgICAgICAgICAgZnVsbDogTWF0aC5mbG9vcihzdGFycylcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdHlwZTogXCJ2aWRlb1wiLFxuICAgICAgICAgICAgICAvLyBwaWM6IFwiYXNzZXRzL3BpYy9ibG9nLWltZzEucG5nXCIsXG4gICAgICAgICAgICAgIHBpYzogYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsLyR7ZWwuYmFja2Ryb3BfcGF0aH1gLFxuICAgICAgICAgICAgICAvLyBwaWM6IGAke2Jhc2VVUkx9L21vdmllL3BvcHVsYXI/YXBpX2tleT0ke0FQSUtFWX0ke2VsLmJhY2tkcm9wX3BhdGh9YCxcbiAgICAgICAgICAgICAgc3JjOiBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvJHtlbC5wb3N0ZXJfcGF0aH1gLFxuICAgICAgICAgICAgICBhdXRob3I6IFwiTmVpbCBSaWNoYXJkc1wiLFxuICAgICAgICAgICAgICB0aXRsZTogZWwub3JpZ2luYWxfdGl0bGUsXG4gICAgICAgICAgICAgIHRleHQ6IGVsLm92ZXJ2aWV3LFxuICAgICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFkIG1vcmVcIixcbiAgICAgICAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJ0blwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdGltZTogZGF0YVN0cixcbiAgICAgICAgICAgICAgICBtaW51dHM6IFwiMTBcIixcbiAgICAgICAgICAgICAgICBjb21tZW50czogZWwudm90ZV9jb3VudCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICByZXNwb25zZS5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICBmZXRjaChgJHtiYXNlVVJMfS9tb3ZpZS8ke2l0ZW0uaWR9P2FwaV9rZXk9JHtBUElLRVl9Jmxhbmd1YWdlPWVuLVVTYClcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVudGltZSA9IGRhdGEucnVudGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUGFnZShocmVmKSB7XG4gICAgY2xlYW5VcCgpO1xuICAgIHN3aXRjaCAoaHJlZikge1xuICAgICAgY2FzZSBcIiNibG9nXCI6XG4gICAgICAgIGJsb2dQYWdlID0gMTtcbiAgICAgICAgbG9hZEJsb2dQYWdlcyhibG9nUGFnZSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGFwcGxpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlckJsb2coZGF0YSk7XG5cbiAgICAgICAgICBjb25zdCBibG9nTG9hZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9nLWxhenktbG9hZGluZycpO1xuICAgICAgICAgIGJsb2dMb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYmxvZ1BhZ2UgKz0gMTtcbiAgICAgICAgICAgIGxvYWRCbG9nUGFnZXMoYmxvZ1BhZ2UpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBibG9nLmNyZWF0ZUxpc3QoZGF0YSk7XG4gICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9fYmxvZy1saXN0Jyk7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIiNwb3N0XCI6XG4gICAgICAgIGFwcGxpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlclBvc3QoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFwcGxpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlckhvbWUoKTtcbiAgICAgICAgdGVzdGltb25pYWxzU2xpZGVyID0gbmV3IFNsaWRlcigpO1xuICAgICAgICBwb3J0Zm9saW9TbGlkZXIgPSBuZXcgU2xpZGVycG9ydGZvbGlvKDE1MDAsIDMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFuVXAoKSB7XG4gICAgaWYodGVzdGltb25pYWxzU2xpZGVyKSB7XG4gICAgICB0ZXN0aW1vbmlhbHNTbGlkZXIuZGVzdHJveSgpO1xuICAgICAgdGVzdGltb25pYWxzU2xpZGVyID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmVuZGVyUGFnZShsb2NhdGlvbi5oYXNoKTtcblxuICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICByZW5kZXJQYWdlKGxvY2F0aW9uLmhhc2gpO1xuICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> 9228f5c036b37419fa9f10affc2bbdef7a14f463
