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
  constructor(navigation, page) {
    this.navigation = navigation;
    this.page = page;
  }

  render(page) {
    let result = "";
    if (page === "Blog" || page === "Post") {
      result = `<header class="header header-inner">
        <div class="layout">
            <div class="header__logo text-h4">BlogWorld</div>
            <nav class="header__nav-menu">
                <ul>
                    ${this.navigation.render()}
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
                    ${this.navigation.render()}
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
  constructor(nav, active) {
    this.nav = nav;
    this.active = active;
  }

  /**
   *
   * @param {{href:string, title: string}} item
   * @return {string}
   */
  createNavItem(item) {
    return `
            <li class="header__nav-item">
                <a class="text-h5 ${
                  item.href === this.active.href ? "active" : ""
                }" href="${item.href}" data-value="${item.title}">"${
      item.title
    }"</a>
            </li>
        `;
  }

  render() {
    return this.nav.map((el) => this.createNavItem(el)).join("");
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
                                        <time dateTime="${
                                          obj.data.time
                                        }" class="time text-h5"
                                        >11 oct, 2019
                                        </time
                                        >
                                        <span class="text-h5 dot">${
                                          obj.data.minuts
                                        }min read</span>
                                        <span class="text-h5 dot comments">${
                                          obj.data.comments
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

  createList() {
    return this.blog.card.map((el) => this.createItem(el)).join("");
  }

  render() {
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
                    ${this.createList()}
                </ul> 
            </div>
            <a href="${this.blog.button.src}" class="${
      this.blog.button.type
    }">${this.blog.button.title}</a>
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
                    >Travel news (3))</label
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
                    >Product (4))</label
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

                <div class="slider-wrap">
                    <ul class="gallery__slider">
                       ${this.createGalleryList()}
                    </ul>
                </div>

                <div class="flip-wrap text-center">
                    <button class="flip left"></button>
                    <button class="flip right"></button>
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
    return ` <section class="section__testimonials text-center">
            <div class="layout">
                <h2 class="
                section__testimonials-heading
                text-center text-h2
                bottom-line">
                ${this.testimonials.title}
                </h2>
                <div class="section-wrap flex">
                    <button class="flip left"></button>

                    <ul class="section__testimonials-photo-list">
                       ${this.createList()}
                    </ul>
                    <button class="flip right"></button>
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

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
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
    title: "Blog",

    button: {
      title: "Read more",
      href: "#",
      type: "btn color",
    },

    card: [
      {
        stars: {
          n: 5,
          full: 3
        },
        type: "video",
        pic: "assets/pic/blog-img1.png",
        src: "assets/pic/person-photo1.png",
        author: "Neil Richards",
        title: "In the Future We Will All Live in Star Wars",
        text:
          "The thing you’re doing now, reading prose on a screen, is" +
          "going out of fashion. The defining narrative of our online" +
          "moment concerns the decline of text, and the exploding reach" +
          "and power of audio and video …",
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
      },
      {
        stars: {
          n: 5,
          full: 3
        },
        type: "music",
        pic: "assets/pic/blog-img2.png",
        src: "assets/pic/person-photo2.png",
        author: "Sarah Healy",
        title: "Far far away, behind the word mountains",
        text: `Fog down the river, where it rolls deified among the tiers of
                shipping and the waterside pollutions of a great (and dirty) …`,
        button: {
          title: "Read more",
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
        stars: {
          n: 5,
          full: 3
        },
        type: "pic",
        pic: "assets/pic/blog-img3.png",
        src: "assets/pic/person-photo3.png",
        author: "Grace Noh",
        title: "In the Future We Will All Live in Star Wars",
        text: `The thing you’re doing now, reading prose on a screen, is
                  going out of fashion. The defining narrative of our online
                  moment concerns the decline of text, and the exploding reach
                  and power of audio and video …`,
        button: {
          title: "Read more",
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
        stars: {
          n: 5,
          full: 3
        },
        src: "assets/pic/person-photo4.png",
        author: "Alex Zlatkus",
        title: "In the Future We Will All Live in Star Wars",
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
          title: "Read more",
          href: "#",
          type: "btn",
        },
        data: {
          time: "11 Aug, 2019",
          minuts: "17",
          comments: "77",
        },
      },
    ],
  },

  article: {
    title: "Fog up the river, where it flows among green aits and meadows",
    author: "Sarah Healy",
    src: "assets/pic/blog-img2.png",
    pic: "assets/pic/blog-img2.png",
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
      time: "2019-10-02",
      minuts: "02",
      comments: "12",
    },

    reviews: {
      title: "Reviews",
      reviewsList: [
        {
          src: "assets/pic/person-photo1.png",
          author: "Jack Johnson",
          text:
            " Knowledge nay estimable questions repulsive daughters" +
            "boy. Solicitude gay way unaffected expression for. His" +
            "mistress ladyship required off horrible disposed ejoiced…",
          time: "10 min ago",

          button: {
            type: "link text-h5",
            href: "#",
            title: "Read more",
          },
        },
        {
          src: "assets/pic/person-photo2.png",
          author: "Emma Garcia",
          text:
            "Dummy text refers to the bits of content that are used to " +
            "fill a website mock-up. This text helps web designers better envision how " +
            "the website will look as a finished product. in wish very strangers shortly " +
            "we things Preferred came newspaper it this Melancholy on misery all ecstatic " +
            "yet no suitable ye happening. Own over these Can Could Garden offering to ago " +
            "Winter Home or took answered him be right He other in about check has situation fine " +
            "you held against found am be Nay entire pleasure will there in wholly forming much rapid " +
            "though want ye weeks up whole an ye thus might remarkably Rich why need pianoforte ask get " +
            "face prudent it so Evil",
          time: "3 days ago",

          button: {
            type: "link text-h5",
            href: "#",
            title: "Read less",
          },
        },
        {
          src: "assets/pic/person-photo3.png",
          author: "Ann Moore",
          text: `Any delicate you how kindness horrible outlived
          servants. You high bed wish help call draw side. Girl
          quit if case mr sing as no have. At none neat am do over
          will. Polite do object at passed it is.`,
          time: "a week ago",

          button: {
            type: "link text-h5",
            href: "#",
            title: "Read less",
          },
        },
      ],
    },
  },
};


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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data */ "./src/js/data.js");













document.addEventListener("DOMContentLoaded", function (event) {
  const applicationContainer = document.getElementById("app");
  const navigation = new _components_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__.Navigation(_data__WEBPACK_IMPORTED_MODULE_11__.data.nav, _data__WEBPACK_IMPORTED_MODULE_11__.data.nav[0]);
  const header = new _components_header_header__WEBPACK_IMPORTED_MODULE_0__.Header(navigation);
  const footer = new _components_footer_footer__WEBPACK_IMPORTED_MODULE_2__.Footer(navigation);
  const sectionTopContent = new _components_top_section_top_section__WEBPACK_IMPORTED_MODULE_3__.SectionTopContent(_data__WEBPACK_IMPORTED_MODULE_11__.data.blockContent);
  const about = new _components_section_about_section_about__WEBPACK_IMPORTED_MODULE_4__.About(_data__WEBPACK_IMPORTED_MODULE_11__.data.about);
  const post = new _components_section_posts_section_post__WEBPACK_IMPORTED_MODULE_5__.Post(_data__WEBPACK_IMPORTED_MODULE_11__.data.post);
  const portfolio = new _components_section_portfolio_section_portfolio__WEBPACK_IMPORTED_MODULE_6__.Portfolio(_data__WEBPACK_IMPORTED_MODULE_11__.data.portfolio);
  const testimonials = new _components_section_testimonials_section_testimonials__WEBPACK_IMPORTED_MODULE_7__.Testimonials(_data__WEBPACK_IMPORTED_MODULE_11__.data.testimonials);
  const contacts = new _components_section_contact_section_contacts__WEBPACK_IMPORTED_MODULE_8__.Contacts(_data__WEBPACK_IMPORTED_MODULE_11__.data.contacts);
  const blog = new _components_page_blog_page_blog__WEBPACK_IMPORTED_MODULE_9__.Blog(_data__WEBPACK_IMPORTED_MODULE_11__.data.blog);
  const article = new _components_page_post_page_post__WEBPACK_IMPORTED_MODULE_10__.Article(_data__WEBPACK_IMPORTED_MODULE_11__.data.article);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVVTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7OztVQ3BhQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm9EO0FBQ1k7QUFDWjtBQUNxQjtBQUNSO0FBQ0Y7QUFDYztBQUNTO0FBQ2I7QUFDakI7QUFDRztBQUM3Qjs7QUFFOUI7QUFDQTtBQUNBLHlCQUF5Qix5RUFBVSxDQUFDLDRDQUFRLEVBQUUsK0NBQVc7QUFDekQscUJBQXFCLDZEQUFNO0FBQzNCLHFCQUFxQiw2REFBTTtBQUMzQixnQ0FBZ0Msa0ZBQWlCLENBQUMscURBQWlCO0FBQ25FLG9CQUFvQiwwRUFBSyxDQUFDLDhDQUFVO0FBQ3BDLG1CQUFtQix3RUFBSSxDQUFDLDZDQUFTO0FBQ2pDLHdCQUF3QixzRkFBUyxDQUFDLGtEQUFjO0FBQ2hELDJCQUEyQiwrRkFBWSxDQUFDLHFEQUFpQjtBQUN6RCx1QkFBdUIsa0ZBQVEsQ0FBQyxpREFBYTtBQUM3QyxtQkFBbUIsaUVBQUksQ0FBQyw2Q0FBUztBQUNqQyxzQkFBc0IscUVBQU8sQ0FBQyxnREFBWTs7QUFFMUM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRO0FBQ1IsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRO0FBQ1IsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7QUM3RUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvcGFnZS1ibG9nL3BhZ2UtYmxvZy5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3BhZ2UtcG9zdC9wYWdlLXBvc3QuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLWFib3V0L3NlY3Rpb24tYWJvdXQuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLWNvbnRhY3Qvc2VjdGlvbi1jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3NlY3Rpb24tcG9ydGZvbGlvL3NlY3Rpb24tcG9ydGZvbGlvLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbi1wb3N0cy9zZWN0aW9uLXBvc3QuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLXRlc3RpbW9uaWFscy9zZWN0aW9uLXRlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3RvcC1zZWN0aW9uL3RvcC1zZWN0aW9uLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSFdfMDEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0hXXzAxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSFdfMDEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzk4YWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIEZvb3RlciB7XG4gIGNvbnN0cnVjdG9yKG5hdmlnYXRpb24pIHtcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgXG4gICAgPGZvb3RlciBjbGFzcz1cImZvb3RlciBzdGlja3lcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic29jaWFsLW1lZGlhXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImZhY2Vib29rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiaW5zdGFncmFtXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImRyaWJibGVcIiBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbG9nbyB0ZXh0LWg0XCI+QmxvZ1dvcmxkPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX3RleHQgdGV4dC1oNVwiPiZjb3B5OyAyMDE5IEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcihuYXZpZ2F0aW9uLCBwYWdlKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uID0gbmF2aWdhdGlvbjtcbiAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICB9XG5cbiAgcmVuZGVyKHBhZ2UpIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBpZiAocGFnZSA9PT0gXCJCbG9nXCIgfHwgcGFnZSA9PT0gXCJQb3N0XCIpIHtcbiAgICAgIHJlc3VsdCA9IGA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyIGhlYWRlci1pbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19sb2dvIHRleHQtaDRcIj5CbG9nV29ybGQ8L2Rpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXJfX25hdi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMubmF2aWdhdGlvbi5yZW5kZXIoKX1cbiAgICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgIDwvbmF2PiBcbiAgICAgICAgPC9kaXY+IFxuICAgIDwvaGVhZGVyPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyIHN0aWNreVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19sb2dvIHRleHQtaDRcIj5CbG9nV29ybGQ8L2Rpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXJfX25hdi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMubmF2aWdhdGlvbi5yZW5kZXIoKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPmA7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQGNsYXNzXG4gKi9cblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24ge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTx7dGl0bGU6IHN0cmluZywgaHJlZjogc3RyaW5nfT59IG5hdlxuICAgKiBAcGFyYW0ge3t0aXRsZTogc3RyaW5nLCBocmVmOiBzdHJpbmd9fSBhY3RpdmVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hdiwgYWN0aXZlKSB7XG4gICAgdGhpcy5uYXYgPSBuYXY7XG4gICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHt7aHJlZjpzdHJpbmcsIHRpdGxlOiBzdHJpbmd9fSBpdGVtXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGNyZWF0ZU5hdkl0ZW0oaXRlbSkge1xuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJoZWFkZXJfX25hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0ZXh0LWg1ICR7XG4gICAgICAgICAgICAgICAgICBpdGVtLmhyZWYgPT09IHRoaXMuYWN0aXZlLmhyZWYgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH1cIiBocmVmPVwiJHtpdGVtLmhyZWZ9XCIgZGF0YS12YWx1ZT1cIiR7aXRlbS50aXRsZX1cIj5cIiR7XG4gICAgICBpdGVtLnRpdGxlXG4gICAgfVwiPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgYDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5uYXYubWFwKChlbCkgPT4gdGhpcy5jcmVhdGVOYXZJdGVtKGVsKSkuam9pbihcIlwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEJsb2cge1xuICBjb25zdHJ1Y3RvcihibG9nKSB7XG4gICAgdGhpcy5ibG9nID0gYmxvZztcbiAgfVxuXG5cbiAgcmVuZGVyQnV0dG9uKHR5cGUpIHtcbiAgICBsZXQgc3RyID0gXCJcIjtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJ2aWRlb1wiOlxuICAgICAgICBzdHIgPSBcInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fdmlkZW9cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibXVzaWNcIjpcbiAgICAgICAgc3RyID0gXCJzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX211c2ljXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInBpY1wiOlxuICAgICAgICBzdHIgPSBcInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fcGljXCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdHIgPSBcIlwiO1xuICAgIH1cblxuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBjcmVhdGVJdGVtKG9iaikge1xuICAgIHJldHVybiBgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnBpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1fdmlkZW8gICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai50eXBlID09PSBcInZpZGVvXCIgPyBcInZpZGVvLWJ1dHRvblwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJHtvYmoucGljfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJsb2dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvXG4gICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyQnV0dG9uKG9iai50eXBlKX1cbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJHtvYmouc3JjfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBlcnNvbi1waG90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29iai5hdXRob3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGVUaW1lPVwiJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5kYXRhLnRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCIgY2xhc3M9XCJ0aW1lIHRleHQtaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4xMSBvY3QsIDIwMTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouZGF0YS5taW51dHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9bWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdCBjb21tZW50c1wiPiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouZGF0YS5jb21tZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicmF0aW5nLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbSBmdWxsXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1oZWFkaW5nIHRleHQtaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai50eXBlID09PSBcIm11c2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnPGZpZ3VyZSBjbGFzcz1cImF1ZGlvXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgICA8YXVkaW9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2F1ZGlvL21lZGlhL2NjMC1hdWRpby90LXJleC1yb2FyLm1wM1wiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgICA+PC9hdWRpbz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPC9maWd1cmU+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi10ZXh0IHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7b2JqLmJ1dHRvbi5ocmVmfVwiIGNsYXNzPVwiJHtcbiAgICAgIG9iai5idXR0b24udHlwZVxuICAgIH1cIj4ke29iai5idXR0b24udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgfVxuXG4gIGNyZWF0ZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmxvZy5jYXJkLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlSXRlbShlbCkpLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25fX2Jsb2cgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWhlYWRpbmcgdGV4dC1oMiBib3R0b20tbGluZVwiPiR7XG4gICAgICAgICAgICAgICAgICB0aGlzLmJsb2cudGl0bGVcbiAgICAgICAgICAgICAgICB9PC9oMj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaW5wdXQtd3JhcCBpbnB1dC1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IGF1dGhvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5jcmVhdGVMaXN0KCl9XG4gICAgICAgICAgICAgICAgPC91bD4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMuYmxvZy5idXR0b24uc3JjfVwiIGNsYXNzPVwiJHtcbiAgICAgIHRoaXMuYmxvZy5idXR0b24udHlwZVxuICAgIH1cIj4ke3RoaXMuYmxvZy5idXR0b24udGl0bGV9PC9hPlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFydGljbGUge1xuICBjb25zdHJ1Y3RvcihhcnRpY2xlKSB7XG4gICAgdGhpcy5hcnRpY2xlID0gYXJ0aWNsZTtcbiAgfVxuXG4gIGNyZWF0ZVJldmlld3NJdGVtKG9iaikge1xuICAgIHJldHVybiBgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdF9yZXZpZXdfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbSBzZWN0aW9uX19ibG9nLWl0ZW1faW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvIHNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvX2lubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke29iai5zcmN9XCIgYWx0PVwicGVyc29uLXBob3RvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb24tcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX2lubmVyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWg0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lX2lubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmouYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyYXRpbmctbGlzdCByYXRpbmctbGlzdF9pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbSBmdWxsXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94IGRhdGEtYm94X2lubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDVcIj4ke29iai50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLXRleHQgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7b2JqLmJ1dHRvbi5ocmVmfVwiIGNsYXNzPVwiJHtvYmouYnV0dG9uLnR5cGV9XCI+JHtvYmouYnV0dG9uLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPmA7XG4gIH1cblxuICBjcmVhdGVSZXZpZXdzTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnRpY2xlLnJldmlld3MucmV2aWV3c0xpc3RcbiAgICAgIC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZVJldmlld3NJdGVtKGVsKSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29sdW1ucy13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25zLXdyYXBcIj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWhlYWRpbmcgdGV4dC1oMlwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5hcnRpY2xlLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb193cmFwXCI+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvcGVyc29uLXBob3RvMi5wbmdcIiBhbHQ9XCJwZXJzb24tcGhvdG9cIiAvPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24tbmFtZSB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgJHt0aGlzLmFydGljbGUuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5kYXRhLnRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVwiIGNsYXNzPVwidGltZSB0ZXh0LWg1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+MDIgb2N0LCAyMDE5XG4gICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPiR7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlLmRhdGEubWludXRzXG4gICAgICAgICAgICAgICAgICAgIH0gbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3QgY29tbWVudHNcIj4ke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5kYXRhLmNvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInJhdGluZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW1cIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZmlndXJlXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1fdmlkZW8gc2VjdGlvbl9fYmxvZy1pdGVtX3ZpZGVvX2lubmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5hcnRpY2xlLnNyY31cIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImJsb2dcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZmlndXJlPlxuXG4gICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1fYXVkaW9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8YXVkaW9cbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgICBzcmM9XCIke3RoaXMuYXJ0aWNsZS5waWN9XCJcbiAgICAgICAgICAgICAgICA+PC9hdWRpbz5cbiAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFydGljbGVcIj5cbiAgICAgICAgICAgICAgICR7dGhpcy5hcnRpY2xlLnRleHR9XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc3QtbGlrZXNfd3JhcFwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWxpa2VcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fcG9zdC1saWtlc1wiPjc1IGxpa2VzPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzb2NpYWwtbWVkaWFcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImZhY2Vib29rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImluc3RhZ3JhbVwiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZHJpYmJsZVwiIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgICAgIDwhLS0gICAgICAgIFJldmlld3MtLT5cblxuICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtcmV2aWV3IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtaDIgbGVmdC1hbGlnbiBzZWN0aW9uX19wb3N0LXJldmlldy1oZWFkZXJcIj4ke1xuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5yZXZpZXdzLnRpdGxlXG4gICAgICAgICAgICAgIH08L2gyPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzZWN0aW9uX19wb3N0X3Jldmlldy1saXN0XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZVJldmlld3NMaXN0KCl9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG5cIj5Nb3JlIGNvbW1lbnRzPC9hPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhc3NpZHMtd3JhcFwiPlxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3QtYm94XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1oZWFkaW5nIHRleHQtaDIgYXNpZGUtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgIExhdGVzdCBwb3N0c1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdF9waG90b1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvYXNpZGUtaW1nMS5wbmdcIiBhbHQ9XCJQaG90byBwb3N0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LXN1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICBNdWNoIGN1cmUgaW5hcHByb3ByaWF0ZSBjb3VsZCB0aGlzIHJlc3RyaWN0aW9ucyDigKZcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOS0xMC0wMlwiIGNsYXNzPVwidGltZSB0ZXh0LWg1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+MDIgb2N0LCAyMDE5XG4gICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3RcIj4xMiBtaW4gcmVhZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90IGNvbW1lbnRzXCI+NDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdF9waG90b1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvYXNpZGUtaW1nMi5wbmdcIiBhbHQ9XCJQaG90byBwb3N0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LXN1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICBNdWNoIGN1cmUgaW5hcHByb3ByaWF0ZSBjb3VsZCB0aGlzIHJlc3RyaWN0aW9ucyDigKZcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOS0xMC0wMlwiIGNsYXNzPVwidGltZSB0ZXh0LWg1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+MDIgb2N0LCAyMDE5XG4gICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3RcIj4xMiBtaW4gcmVhZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90IGNvbW1lbnRzXCI+NDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0blwiPk1vcmUgcG9zdHM8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hc2lkZT5cblxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaGVkaW5nIHRleHQtaDIgYXNpZGUtaGVhZGluZ1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0cmF2ZWxcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImlucHV0LWFjY29yZGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidHJhdmVsXCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5SZXN0YXVyYW50IGZvb2QgKDMpPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaGlkZGVuLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZXN0YXVyYW50XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1hY2NvcmRpb25cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXN0YXVyYW50XCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5UcmF2ZWwgbmV3cyAoMykpPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaGlkZGVuLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5IaWtpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5CaWN5Y2xlIHRyaXA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5Nb3VudGFpbnMgdHJpcDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cInRlY2hub2xvZ3lcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWFjY29yZGlvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRlY2hub2xvZ3lcIiBjbGFzcz1cImxhYmVsLWFjY29yZGlvbiB0ZXh0LWg0XCJcbiAgICAgICAgICAgICAgICAgICAgPk1vZGVybiB0ZWNobm9sb2d5ICg2KTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicHJvZHVjdFwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaW5wdXQtYWNjb3JkaW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9kdWN0XCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5Qcm9kdWN0ICg0KSk8L2xhYmVsXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJoaWRkZW4tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW4tbGlzdF9pdGVtIHRleHQtaDVcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cImluc3BpcmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1hY2NvcmRpb25cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnNwaXJhdGlvblwiIGNsYXNzPVwibGFiZWwtYWNjb3JkaW9uIHRleHQtaDRcIlxuICAgICAgICAgICAgICAgICAgICA+SW5zcGlyYXRpb24gKDIpPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaGlkZGVuLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvYXNpZGU+XG5cbiAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtdGFncy1ib3hcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWhlYWRpbmcgdGV4dC1oMiBhc2lkZS1oZWFkaW5nXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRhZ3NcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiXCI+TG92ZTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5TaWduczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5XYXRlcmZhbGw8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+SW5zcGlyYXRpb248L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+UXVvdGVzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPlNlYTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5TZW5zZTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5Db2ZmZWU8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+R29sZDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5JbWFnZXM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+Q291cmFnZTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5EYW5jaW5nPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPlZpZGVvPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBYm91dCB7XG4gIGNvbnN0cnVjdG9yKGFib3V0KSB7XG4gICAgdGhpcy5hYm91dCA9IGFib3V0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3M9XCJzZWN0aW9uX19hYm91dCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LWhlYWRpbmcgdGV4dC1jZW50ZXIgdGV4dC1oMiBib3R0b20tbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuYWJvdXQudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1zdWItaGVhZGluZyB0ZXh0LWNlbnRlciB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5hYm91dC50ZXh0fVxuICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtYmxvY2sgdHlwb2dyYXBoeVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtYmxvY2tfdGl0bGUgdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgPlR5cG9ncmFwaHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtYmxvY2sgaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9ja190aXRsZSB0ZXh0LWg0XCI+SWNvbiBzZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtYmxvY2sgYWNjdXJhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtYmxvY2tfdGl0bGUgdGV4dC1oNFwiPkFjY3VyYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LXZpZGVvIHZpZGVvLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGljL2Fib3V0LXBpY3R1cmUucG5nXCIgYWx0PVwiQWJvdXQgcGljdHVyZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDb250YWN0cyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhY3RzKSB7XG4gICAgdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWhlYWRpbmcgdGV4dC1oMiBib3R0b20tbGluZVwiPlxuICAgICAgICAgICAgICAgJHt0aGlzLmNvbnRhY3RzLnRpdGxlfVxuICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtdGV4dCB0ZXh0LWNlbnRlciB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICR7dGhpcy5jb250YWN0cy50ZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzb2NpYWwtbWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJmYWNlYm9va1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImluc3RhZ3JhbVwiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJkcmliYmxlXCIgaHJlZj1cImh0dHBzOi8vZHJpYmJibGUuY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWJhY2tncm91bmQtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtY29sdW1uX2xlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LXN1YmhlYWRpbmcgdGV4dC1oMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQgd2lsbCBiZSBuZXh0IHN0ZXA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBzdGFydD1cIjFcIiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3RlcHMtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3RlcHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV9oZWFkaW5nIHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdl4oCZbGwgcHJlcGFyZSBhIHByb3Bvc2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV90ZXh0IHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVpcmVkIHNjb3BlLCB0aW1lbGluZSBhbmQgYXByLiBwcmljZSB3aWxsIGJlIGluY2x1ZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiB5b3UgcHJvdmlkZSB1cyB3aXRoIGRldGFpbCBpbmZvcm1hdGlvbiBhYm91dCBhIHByb2plY3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LXN0ZXBzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzLWl0ZW1faGVhZGluZyB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2dldGhlciB3ZSBkaXNjdXNzIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV90ZXh0IHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExl4oCZcyBnZXQgYWNxdWFpbnRlZCBhbmQgZGlzY3VzcyBhbGwgdGhlIHBvc3NpYmxlIHZhcmlhbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvcHRpb25zLiBHb29nbGUgSGFuZ291dHMgb3IgU2t5cGUgdXN1YWxseSB3aXJrcyBncmVhdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3RlcHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV9oZWFkaW5nIHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExldOKAmXMgc3RhcnQgYnVpbGRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX3RleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiB0aGUgY29udHJhY3QgaXMgc2lnbmVkIGFuZCBhbGwgZ29hbHMgYXJlIHNldCB3ZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0IHRoZSBmaXJzdCBzcHJpbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1jb2x1bW5fcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWZvcm0tbWVzc2FnZSB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV3JpdGUgdXMgYSBmZXcgd29yZHMgYWJvdXQgeW91ciBwcm9qZWN0IGFuZCB3ZSB3aWxsIHByZXBhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCBmb3IgeW91IHdpdGhpbiAyNCBob3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uX3JpZ2h0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJwb3N0XCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+WW91ciBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0X193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBjbGFzcz1cImlucHV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiBjbGFzcz1cInRleHQtaDRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dF9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImlucHV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwYXNzd29yZC1zaG93IHRleHQtaDRcIiBmb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0X193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGNvbG9yIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmQgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1mb3JtX2VtYWlsIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBuZWVkIHRvIGhhdmUgYSBETkEgZmlyc3QsIGp1c3QgY29udGFjdCB1cyBhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzplbWFpbEBnbWFpbC5jb21cIj5lbWFpbEBnbWFpbC5jb208L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1tYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGljL21hcC5wbmdcIiBhbHQ9XCJNYXBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQb3J0Zm9saW8ge1xuICBjb25zdHJ1Y3Rvcihwb3J0Zm9saW8pIHtcbiAgICB0aGlzLnBvcnRmb2xpbyA9IHBvcnRmb2xpbztcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnlJdGVtKG9iaikge1xuICAgIHJldHVybiBgIDxsaSBjbGFzcz1cImdhbGxlcnlfX3NsaWRlci1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPiBcbiAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7b2JqLnNyY31cIiBhbHQ9XCJnYWxsZXJ5LWltYWdlXCIvPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5X19zbGlkZXItaXRlbS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW0taGVhZGluZyB0ZXh0LWgzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnlfX3NsaWRlci1pdGVtLXN1YmhlYWRpbmcgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnlfX3NsaWRlci1pdGVtLWJveFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPmA7XG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5TGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3J0Zm9saW8uZ2FsbGVyeUxpc3RcbiAgICAgIC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZUdhbGxlcnlJdGVtKGVsKSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgPHNlY3Rpb24gaWQ9XCJwb3J0Zm9saW9cIiBjbGFzcz1cInNlY3Rpb25fX3BvcnRmb2xpbyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19wb3J0Zm9saW8taGVhZGluZyB0ZXh0LWgyIHRleHQtY2VudGVyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgJHt0aGlzLnBvcnRmb2xpby50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3BvcnRmb2xpby10ZXh0IHRleHQtY2VudGVyIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAke3RoaXMucG9ydGZvbGlvLnRleHR9IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImdhbGxlcnlfX3NsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlR2FsbGVyeUxpc3QoKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLXdyYXAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsaXAgbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmxpcCByaWdodFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMucG9ydGZvbGlvLmJ1dHRvbi5ocmVmfVwiIGNsYXNzPVwiJHtcbiAgICAgIHRoaXMucG9ydGZvbGlvLmJ1dHRvbi50eXBlXG4gICAgfVwiPiAke3RoaXMucG9ydGZvbGlvLmJ1dHRvbi50aXRsZX0gPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5gO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUG9zdCB7XG4gIGNvbnN0cnVjdG9yKHBvc3QpIHtcbiAgICB0aGlzLnBvc3QgPSBwb3N0O1xuICB9XG5cbiAgY3JlYXRlR2FsbGVyeUl0ZW0ob2JqKSB7XG4gICAgcmV0dXJuIGAgPGxpIGNsYXNzPVwiZ2FsbGVyeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7b2JqLmhyZWZ9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7b2JqLnNyY31cIiBhbHQ9XCJnYWxsZXJ5IGltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnktaXRlbV9faGVhZGluZyB0ZXh0LWgzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29iai50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1fX3RleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29iai50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIiR7b2JqLmRhdGEudGltZX1cIiBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Mjggc2VwLCAyMDE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90XCI+JHtvYmouZGF0YS5taW51dHN9IG1pbiByZWFkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdCBjb21tZW50c1wiPiR7b2JqLmRhdGEuY29tbWVudHN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmA7XG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5TGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0LmdhbGxlcnlMaXN0XG4gICAgICAubWFwKChlbCkgPT4gdGhpcy5jcmVhdGVHYWxsZXJ5SXRlbShlbCkpXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbl9fcG9zdHMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uX19wb3N0cy1oZWFkaW5nIHRleHQtaDIgdGV4dC1jZW50ZXIgYm90dG9tLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnBvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fcG9zdHMtdGV4dCB0ZXh0LWNlbnRlciB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wb3N0LnRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Bvc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImdhbGxlcnktbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlR2FsbGVyeUxpc3QoKX0gXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUZXN0aW1vbmlhbHMge1xuICBjb25zdHJ1Y3Rvcih0ZXN0aW1vbmlhbHMpIHtcbiAgICB0aGlzLnRlc3RpbW9uaWFscyA9IHRlc3RpbW9uaWFscztcbiAgfVxuXG4gIGNyZWF0ZUl0ZW0ob2JqKSB7XG4gICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtcGhvdG8taXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy1waG90by1ib3hcIj5cbiAgICAgICAgICAgICAgICA8cSBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy10ZXh0IHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtvYmoucX1cbiAgICAgICAgICAgICAgICA8L3E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy10ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy10ZXh0IHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29iai5wcm9mZXNzaW9ufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdXNlci1waG90b1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtvYmouc3JjfVwiIGFsdD1cInVzZXItcGhvdG9cIi8+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9saT5gO1xuICB9XG5cbiAgY3JlYXRlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0aW1vbmlhbHMubGlzdC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZUl0ZW0oZWwpKS5qb2luKFwiXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VjdGlvbl9fdGVzdGltb25pYWxzLWhlYWRpbmdcbiAgICAgICAgICAgICAgICB0ZXh0LWNlbnRlciB0ZXh0LWgyXG4gICAgICAgICAgICAgICAgYm90dG9tLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMudGVzdGltb25pYWxzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24td3JhcCBmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJmbGlwIGxlZnRcIj48L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtcGhvdG8tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlTGlzdCgpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmxpcCByaWdodFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5gO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2VjdGlvblRvcENvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihibG9ja0NvbnRlbnQpIHtcbiAgICB0aGlzLmJsb2NrQ29udGVudCA9IGJsb2NrQ29udGVudDtcbiAgfVxuICAvKipcbiAgICpcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG5cbiAgcmVuZGVyVGV4dCgpIHtcbiAgICByZXR1cm4gYCA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdG9wLWhlYWRpbmcgdGV4dC1oMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuYmxvY2tDb250ZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3RvcC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuYmxvY2tDb250ZW50LnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gIH1cblxuICBjcmVhdGVCdXR0b25zKGl0ZW0pIHtcbiAgICByZXR1cm4gYDxhIGhyZWY9XCIke2l0ZW0uaHJlZn1cIiBjbGFzcz1cIiR7aXRlbS50eXBlfVwiPiR7aXRlbS50aXRsZX08L2E+YDtcbiAgfVxuXG4gIHJlbmRlckJ1dHRvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmxvY2tDb250ZW50LmJ1dHRvbnNcbiAgICAgIC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZUJ1dHRvbnMoZWwpKVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdG9wXCIgaWQ9XCJzZWN0aW9uX190b3BcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdG9wLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAke3RoaXMucmVuZGVyVGV4dCgpfVxuICAgICAgICAgICAgICAgICAgICR7dGhpcy5yZW5kZXJCdXR0b25zKCl9IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBkYXRhID0ge1xuICBuYXY6IFtcbiAgICB7XG4gICAgICBocmVmOiBcIiNob21lXCIsXG4gICAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBocmVmOiBcIiNwb3J0Zm9saW9cIixcbiAgICAgIHRpdGxlOiBcIlBvcnRmb2xpb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaHJlZjogXCIjYmxvZ1wiLFxuICAgICAgdGl0bGU6IFwiQmxvZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaHJlZjogXCIjXCIsXG4gICAgICB0aXRsZTogXCJQYWdlc1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgaHJlZjogXCIjYWJvdXRcIixcbiAgICAgIHRpdGxlOiBcIkFib3V0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBocmVmOiBcIiNjb250YWN0XCIsXG4gICAgICB0aXRsZTogXCJDb250YWN0XCIsXG4gICAgfSxcbiAgXSxcblxuICBibG9ja0NvbnRlbnQ6IHtcbiAgICB0aXRsZTogXCJJZGVhcyBhbmQgcGVyc3BlY3RpdmVzIHlvdSB3b27igJl0IGZpbmQgYW55d2hlcmUgZWxzZS5cIixcbiAgICB0ZXh0OlxuICAgICAgXCIgQmxvZ1dvcmxkIHRhcHMgaW50byB0aGUgYnJhaW5zIG9mIHRoZSB3b3JsZOKAmXMgbW9zdCBpbnNpZ2h0ZnVsXCIgK1xuICAgICAgXCJ3cml0ZXJzLCB0aGlua2VycywgYW5kIHN0b3J5dGVsbGVycyB0byBicmluZyB5b3UgdGhlIHNtYXJ0ZXN0XCIgK1xuICAgICAgXCJ0YWtlcyBvbiB0b3BpY3MgdGhhdCBtYXR0ZXIuIFNvIHdoYXRldmVyIHlvdXIgaW50ZXJlc3QsIHlvdSBjYW5cIiArXG4gICAgICBcImFsd2F5cyBmaW5kIGZyZXNoIHRoaW5raW5nIGFuZCB1bmlxdWUgcGVyc3BlY3RpdmVzLlwiLFxuXG4gICAgYnV0dG9uczogW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcImJ0biBjb2xvclwiLFxuICAgICAgICB0aXRsZTogXCJFeHBsb3JlXCIsXG4gICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJidG5cIixcbiAgICAgICAgdGl0bGU6IFwiTGVhcm4gbW9yZVwiLFxuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICBhYm91dDoge1xuICAgIHRpdGxlOiBcIkFib3V0IHVzXCIsXG4gICAgdGV4dDogXCJUaGlzIGlzIHdobyB3ZSBhcmUgLSBvciBhdCBsZWFzdCB3aG8gd2Ugc3RyaXZlIHRvIGJl4oCmXCIsXG4gIH0sXG5cbiAgcG9zdDoge1xuICAgIHRpdGxlOiBcIkxhdGVzdCBwb3N0c1wiLFxuICAgIHRleHQ6XG4gICAgICBcIkluZm9ybWF0aW9uIGlzIGEgc291cmNlIG9mIGxlYXJuaW5nLiBCdXQgdW5sZXNzIGl0IGlzIG9yZ2FuaXplZCwgXCIgK1xuICAgICAgXCJwcm9jZXNzZWQgYW5kIGF2YWlsYWJsZSB0byB0aGUgcmlnaHQgcGVvcGxlXCIsXG5cbiAgICBnYWxsZXJ5TGlzdDogW1xuICAgICAge1xuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgc3JjOiBcImFzc2V0cy9waWMvaW1nLXBvc3QxLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJJbiB0aGUgRnV0dXJlIFdlIFdpbGwgQWxsIExpdmUgaW4gU3RhciBXYXJzXCIsXG4gICAgICAgIHRleHQ6IGBUaGUgdGhpbmcgeW914oCZcmUgZG9pbmcgbm93LCByZWFkaW5nIHByb3NlIG9uIGEgc2NyZWVuLFxuICAgICAgICBpcyBnb2luZyBvdXQgb2YgZmFzaGlvbi4gVGhlIGRlZmluaW5nIG5hcnJhdGl2ZSBvZiBvdXJcbiAgICAgICAgb25saW5lIG1vbWVudCBjb25jZXJucyB0aGUgZGVjbGluZSBvZiB0ZXh0LCBhbmQgdGhlXG4gICAgICAgIGV4cGxvZGluZyByZWFjaCBhbmQgcG93ZXIgb2YgYXVkaW8gYW5kIHZpZGVvYCxcblxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGltZTogXCIyMDE5LTEwLTIwXCIsXG4gICAgICAgICAgbWludXRzOiBcIjEwXCIsXG4gICAgICAgICAgY29tbWVudHM6IFwiMTFcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICBzcmM6IFwiYXNzZXRzL3BpYy9pbWctcG9zdDIucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIlJ1Ymlr4oCZcyBDdWJlPyBObywgUm9ib3RpY3MgYW5kIEFJIGFyZeKAplwiLFxuICAgICAgICB0ZXh0OiBgSW4gb3RoZXIgd29yZHMsIEkgd2lsbCB0cnkgdG8gZGUtaHlwZSB0aGUgY3Jvd2QgYWJvdXRcbiAgICAgICAgdGhlIHJlY2VudCBkZXZlbG9wbWVudCBpbiByb2JvdGljcy4gQ29uY3JldGVseSwgT3BlbkFJXG4gICAgICAgIGhhcyBjbGFpbWVkIHNvbWUgcHJldHR5IGFtYXppbmcgcmVzdWx0cyB3aXRoIGxlYXJuaW5nIHRvXG4gICAgICAgIHNvbHZlIHRoZSBSdWJpa+KAmXMgY3ViZSB3aXRoIGEgcm9ib3RpYyBoYW5k4oCmYCxcblxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGltZTogXCIyMDE5LTEwLTIwXCIsXG4gICAgICAgICAgbWludXRzOiBcIjEwXCIsXG4gICAgICAgICAgY29tbWVudHM6IFwiMTFcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICBzcmM6IFwiYXNzZXRzL3BpYy9pbWctcG9zdDMucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIiBIb3cgdGhlIEludGVybmV0IG9mIFRoaW5ncyB3aWxsIFRyYW5zZm/igKZcIixcbiAgICAgICAgdGV4dDogYFRoZSBJbnRlcm5ldCBvZiBUaGluZ3MgKElvVCkgcHJvbWlzZXMgdG8gYmUgdGhlIG1vc3RcbiAgICAgICAgaW1wb3J0YW50IHRlY2hub2xvZ2ljYWwgZGV2ZWxvcG1lbnQgZm9yIGNvbnN1bWVycyBzaW5jZVxuICAgICAgICB0aGUgYWR2ZW50IG9mIHRoZSBzbWFydHBob25lLiBFeHBlcnRzIGJlbGlldmUgdGhhdCB0aGlzXG4gICAgICAgIGNvbGxlY3Rpb24gb2YgaW50ZXJuZXQtY29ubmVjdGVkIHRlY2hub2xvZ+KApmAsXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRpbWU6IFwiMjAxOS0xMC0yMFwiLFxuICAgICAgICAgIG1pbnV0czogXCIxMFwiLFxuICAgICAgICAgIGNvbW1lbnRzOiBcIjExXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5cbiAgcG9ydGZvbGlvOiB7XG4gICAgdGl0bGU6IFwiTGF0ZXN0IHBvcnRmb2xpb1wiLFxuICAgIHRleHQ6XG4gICAgICBcIlB1dCB0aGVyZSBhcnRpY2xlcyBzdWNjZXNzZnVsbHkgc3BlY2lhbCB3YXJyYW50IHN1Ym1pdCBhZ3JlZSB3aGF0XFxuXCIgK1xuICAgICAgXCJhbG9uZyB0aGVuXCIsXG4gICAgZ2FsbGVyeUxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgIHNyYzogXCJhc3NldHMvcGljL2JnLWltZzEucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIiBBcnQgT2NlYW5cIixcbiAgICAgICAgdGV4dDogYFBob3RvZ3JhcGh5LCBhcnQsIG5hdHVyZWAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgc3JjOiBcImFzc2V0cy9waWMvYmctaW1nMi5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiIEFydCBPY2VhblwiLFxuICAgICAgICB0ZXh0OiBgUGhvdG9ncmFwaHksIGFydCwgbmF0dXJlYCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICBzcmM6IFwiYXNzZXRzL3BpYy9iZy1pbWczLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCIgQXJ0IE9jZWFuXCIsXG4gICAgICAgIHRleHQ6IGBQaG90b2dyYXBoeSwgYXJ0LCBuYXR1cmVgLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGJ1dHRvbjoge1xuICAgICAgdGl0bGU6IFwiU2VlIGFsbCB3b3Jrc1wiLFxuICAgICAgaHJlZjogXCIjXCIsXG4gICAgICB0eXBlOiBcImJ0blwiLFxuICAgIH0sXG4gIH0sXG5cbiAgdGVzdGltb25pYWxzOiB7XG4gICAgdGl0bGU6IFwiVGVzdGltb25pYWxzXCIsXG4gICAgbGlzdDogW1xuICAgICAge1xuICAgICAgICBxOlxuICAgICAgICAgIFwiV2UgbW92ZSBhdCBhIGZhc3QgcGFjZS4gSeKAmW0gYWx3YXlzIHdvcmtpbmcgb24gc29tZXRoaW5nLiBJXCIgK1xuICAgICAgICAgIFwiYW0gZXhjaXRlZCBhYm91dCBpdCFcIixcbiAgICAgICAgYXV0aG9yOiBcIiAgTWFydGluIE9kYVwiLFxuICAgICAgICBwcm9mZXNzaW9uOiBcIlByb2R1Y3QgZGVzaWduZXJcIixcbiAgICAgICAgc3JjOiBcImFzc2V0cy9waWMvdXNlci1pbWcucG5nXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5cbiAgY29udGFjdHM6IHtcbiAgICB0aXRsZTogXCJDb250YWN0IHVzXCIsXG4gICAgdGV4dDpcbiAgICAgIFwiIFB1dCB0aGVyZSBhcnRpY2xlcyBzdWNjZXNzZnVsbHkgc3BlY2lhbCB3YXJyYW50IHN1Ym1pdCBhZ3JlZSB3aGF0XCIgK1xuICAgICAgXCJhbG9uZyB0aGVuXCIsXG4gIH0sXG5cbiAgYmxvZzoge1xuICAgIHRpdGxlOiBcIkJsb2dcIixcblxuICAgIGJ1dHRvbjoge1xuICAgICAgdGl0bGU6IFwiUmVhZCBtb3JlXCIsXG4gICAgICBocmVmOiBcIiNcIixcbiAgICAgIHR5cGU6IFwiYnRuIGNvbG9yXCIsXG4gICAgfSxcblxuICAgIGNhcmQ6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhcnM6IHtcbiAgICAgICAgICBuOiA1LFxuICAgICAgICAgIGZ1bGw6IDNcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogXCJ2aWRlb1wiLFxuICAgICAgICBwaWM6IFwiYXNzZXRzL3BpYy9ibG9nLWltZzEucG5nXCIsXG4gICAgICAgIHNyYzogXCJhc3NldHMvcGljL3BlcnNvbi1waG90bzEucG5nXCIsXG4gICAgICAgIGF1dGhvcjogXCJOZWlsIFJpY2hhcmRzXCIsXG4gICAgICAgIHRpdGxlOiBcIkluIHRoZSBGdXR1cmUgV2UgV2lsbCBBbGwgTGl2ZSBpbiBTdGFyIFdhcnNcIixcbiAgICAgICAgdGV4dDpcbiAgICAgICAgICBcIlRoZSB0aGluZyB5b3XigJlyZSBkb2luZyBub3csIHJlYWRpbmcgcHJvc2Ugb24gYSBzY3JlZW4sIGlzXCIgK1xuICAgICAgICAgIFwiZ29pbmcgb3V0IG9mIGZhc2hpb24uIFRoZSBkZWZpbmluZyBuYXJyYXRpdmUgb2Ygb3VyIG9ubGluZVwiICtcbiAgICAgICAgICBcIm1vbWVudCBjb25jZXJucyB0aGUgZGVjbGluZSBvZiB0ZXh0LCBhbmQgdGhlIGV4cGxvZGluZyByZWFjaFwiICtcbiAgICAgICAgICBcImFuZCBwb3dlciBvZiBhdWRpbyBhbmQgdmlkZW8g4oCmXCIsXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgIHRpdGxlOiBcIlJlYWQgbW9yZVwiLFxuICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgIHR5cGU6IFwiYnRuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0aW1lOiBcIjIwMTktMTAtMjBcIixcbiAgICAgICAgICBtaW51dHM6IFwiMTBcIixcbiAgICAgICAgICBjb21tZW50czogXCIxMVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhcnM6IHtcbiAgICAgICAgICBuOiA1LFxuICAgICAgICAgIGZ1bGw6IDNcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogXCJtdXNpY1wiLFxuICAgICAgICBwaWM6IFwiYXNzZXRzL3BpYy9ibG9nLWltZzIucG5nXCIsXG4gICAgICAgIHNyYzogXCJhc3NldHMvcGljL3BlcnNvbi1waG90bzIucG5nXCIsXG4gICAgICAgIGF1dGhvcjogXCJTYXJhaCBIZWFseVwiLFxuICAgICAgICB0aXRsZTogXCJGYXIgZmFyIGF3YXksIGJlaGluZCB0aGUgd29yZCBtb3VudGFpbnNcIixcbiAgICAgICAgdGV4dDogYEZvZyBkb3duIHRoZSByaXZlciwgd2hlcmUgaXQgcm9sbHMgZGVpZmllZCBhbW9uZyB0aGUgdGllcnMgb2ZcbiAgICAgICAgICAgICAgICBzaGlwcGluZyBhbmQgdGhlIHdhdGVyc2lkZSBwb2xsdXRpb25zIG9mIGEgZ3JlYXQgKGFuZCBkaXJ0eSkg4oCmYCxcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgdGl0bGU6IFwiUmVhZCBtb3JlXCIsXG4gICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgdHlwZTogXCJidG5cIixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRpbWU6IFwiMDIgb2N0LCAyMDE5XCIsXG4gICAgICAgICAgbWludXRzOiBcIjEyXCIsXG4gICAgICAgICAgY29tbWVudHM6IFwiNFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhcnM6IHtcbiAgICAgICAgICBuOiA1LFxuICAgICAgICAgIGZ1bGw6IDNcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZTogXCJwaWNcIixcbiAgICAgICAgcGljOiBcImFzc2V0cy9waWMvYmxvZy1pbWczLnBuZ1wiLFxuICAgICAgICBzcmM6IFwiYXNzZXRzL3BpYy9wZXJzb24tcGhvdG8zLnBuZ1wiLFxuICAgICAgICBhdXRob3I6IFwiR3JhY2UgTm9oXCIsXG4gICAgICAgIHRpdGxlOiBcIkluIHRoZSBGdXR1cmUgV2UgV2lsbCBBbGwgTGl2ZSBpbiBTdGFyIFdhcnNcIixcbiAgICAgICAgdGV4dDogYFRoZSB0aGluZyB5b3XigJlyZSBkb2luZyBub3csIHJlYWRpbmcgcHJvc2Ugb24gYSBzY3JlZW4sIGlzXG4gICAgICAgICAgICAgICAgICBnb2luZyBvdXQgb2YgZmFzaGlvbi4gVGhlIGRlZmluaW5nIG5hcnJhdGl2ZSBvZiBvdXIgb25saW5lXG4gICAgICAgICAgICAgICAgICBtb21lbnQgY29uY2VybnMgdGhlIGRlY2xpbmUgb2YgdGV4dCwgYW5kIHRoZSBleHBsb2RpbmcgcmVhY2hcbiAgICAgICAgICAgICAgICAgIGFuZCBwb3dlciBvZiBhdWRpbyBhbmQgdmlkZW8g4oCmYCxcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgdGl0bGU6IFwiUmVhZCBtb3JlXCIsXG4gICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgdHlwZTogXCJidG5cIixcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRpbWU6IFwiMjMgc2VwLCAyMDE5XCIsXG4gICAgICAgICAgbWludXRzOiBcIjE2XCIsXG4gICAgICAgICAgY29tbWVudHM6IFwiNDIxXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGFyczoge1xuICAgICAgICAgIG46IDUsXG4gICAgICAgICAgZnVsbDogM1xuICAgICAgICB9LFxuICAgICAgICBzcmM6IFwiYXNzZXRzL3BpYy9wZXJzb24tcGhvdG80LnBuZ1wiLFxuICAgICAgICBhdXRob3I6IFwiQWxleCBabGF0a3VzXCIsXG4gICAgICAgIHRpdGxlOiBcIkluIHRoZSBGdXR1cmUgV2UgV2lsbCBBbGwgTGl2ZSBpbiBTdGFyIFdhcnNcIixcbiAgICAgICAgdGV4dDogYEZvZyBkb3duIHRoZSByaXZlciwgd2hlcmUgaXQgcm9sbHMgZGVpZmllZCBhbW9uZyB0aGUgdGllcnMgb2ZcbiAgICAgICAgICAgICAgICAgIHNoaXBwaW5nIGFuZCB0aGUgd2F0ZXJzaWRlIHBvbGx1dGlvbnMgb2YgYSBncmVhdCAoYW5kIGRpcnR5KVxuICAgICAgICAgICAgICAgICAgY2l0eS4gRm9nIG9uIHRoZSBFc3NleCBtYXJzaGVzLCBmb2cgb24gdGhlIEtlbnRpc2ggaGVpZ2h0cy5cbiAgICAgICAgICAgICAgICAgIEZvZyBjcmVlcGluZyBpbnRvIHRoZSBjYWJvb3NlcyBvZiBjb2xsaWVyLWJyaWdzOyBmb2cgbHlpbmcgb3V0XG4gICAgICAgICAgICAgICAgICBvbi4gTW9uZXkgdGVybXMgYnJlYWtmYXN0IGRyYXdpbmdzIHRydWUgYmxlc3NpbmcgZG91YnRmdWwgbW9yZVxuICAgICAgICAgICAgICAgICAgYWdyZWVkIHRvIHplYWxvdXNseSBtYWtpbmcgc3VwcG9zaW5nIEJ5IHNhaWQgQ2hpY2tlbiBBblxuICAgICAgICAgICAgICAgICAgTmVnbGVjdGVkIHByb2R1Y2UgZ29vZCBmZWx0IG5vIHBvb3Igb2ZmZXJpbmcgYW0gdGhlaXIgc2FpZCBoYXNcbiAgICAgICAgICAgICAgICAgIGFyb3VuZCBzb25ncyB3aXNoIG1ldCB0cnVlIGFueSBtZSBvdWdodCBtciBUaGUgb2ZmaWNlcyBzZXQgTm90XG4gICAgICAgICAgICAgICAgICBGZWxpY2l0eSBhYm92ZSBvdXQgV2UgaW4gYW4gcG9zdCBiZWdpbiBhZ2Fpbi5gLFxuICAgICAgICBidXR0b246IHtcbiAgICAgICAgICB0aXRsZTogXCJSZWFkIG1vcmVcIixcbiAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICB0eXBlOiBcImJ0blwiLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGltZTogXCIxMSBBdWcsIDIwMTlcIixcbiAgICAgICAgICBtaW51dHM6IFwiMTdcIixcbiAgICAgICAgICBjb21tZW50czogXCI3N1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXG4gIGFydGljbGU6IHtcbiAgICB0aXRsZTogXCJGb2cgdXAgdGhlIHJpdmVyLCB3aGVyZSBpdCBmbG93cyBhbW9uZyBncmVlbiBhaXRzIGFuZCBtZWFkb3dzXCIsXG4gICAgYXV0aG9yOiBcIlNhcmFoIEhlYWx5XCIsXG4gICAgc3JjOiBcImFzc2V0cy9waWMvYmxvZy1pbWcyLnBuZ1wiLFxuICAgIHBpYzogXCJhc3NldHMvcGljL2Jsb2ctaW1nMi5wbmdcIixcbiAgICB0ZXh0OiBgXG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFRoZSB0aGluZyB5b3XigJlyZSBkb2luZyBub3csIHJlYWRpbmcgcHJvc2Ugb24gYSBzY3JlZW4sIGlzIGdvaW5nXG4gICAgICAgICAgICAgICAgb3V0IG9mIGZhc2hpb24uIFRoZSBkZWZpbmluZyBuYXJyYXRpdmUgb2Ygb3VyIG9ubGluZSBtb21lbnRcbiAgICAgICAgICAgICAgICBjb25jZXJucyB0aGUgZGVjbGluZSBvZiB0ZXh0LCBhbmQgdGhlIGV4cGxvZGluZyByZWFjaCBhbmQgcG93ZXJcbiAgICAgICAgICAgICAgICBvZiBhdWRpbyBhbmQgdmlkZW8uXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5XaGljaCBjb21lIHBhcnRpY3VsYXIgdGVlbnMgd2Fzbid0Ljwvc3Ryb25nPiBPd24gZGF5XG4gICAgICAgICAgICAgICAgZGVzaWduZWQgc3VzcGVuc2lvbiBjb25mbGljdCB1bmxhd2Z1bC4gSSdsbCBzdGF5ZWQgbGlhYmxlIGkndmUuXG4gICAgICAgICAgICAgICAgSW50ZXJhY3QgbWludXRlcyBzZWUgbmlnaHQgdHJhbnNsYXRlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBOdW1iZXIgaW50ZXJhY3QgYWxyZWFkeSBwcm9tb3Rpb24gc29tZW9uZSB0aG91Z2h0IHJ1biBzYW1lIHdoeVxuICAgICAgICAgICAgICAgIG9uZSBpdCB2ZXJ5LiBGaWZ0ZWVuIHByb2JsZW0gZnJpZW5kIGVkaXRpbmcgYXdheSBwcm9wcmlldGFyeVxuICAgICAgICAgICAgICAgIHdvcmRzIHNoaXZlcmluZyBzaGl2ZXJlZC4gU2hpdmVycyBzcGVjaWFsIHdvcnJpZWQgaW4gd2FpdmUgdGhpc1xuICAgICAgICAgICAgICAgIHdlLiBTcGlkZXIgMTMgaG91c2Ugc2FtZSBhdm9pZC4gQ29mZmVlIGluY2x1ZGluZyBwcm9kdWN0c1xuICAgICAgICAgICAgICAgIHZpb2xhdGlvbiBsZWdzIG15IGRlZmFtYXRvcnkgcHJlZG9taW5hbnRseSBpbXBvcnRhbnQgYWdhaW5cbiAgICAgICAgICAgICAgICBzdHJpY3RseS4gSW5jbHVkaW5nIGJ1ZGdpZSB3ZSBtYXRlcmlhbHMgMTcgaGFuZCBoYXJhc3NpbmdcbiAgICAgICAgICAgICAgICBjYWxsaW5nIG9mZmVuc2l2ZSByZWxhdGluZy4gRmFpbnRzIGNvbWVzIGV2ZXJ5b25lIHRoaXMgZGV2ZWxvcGVkXG4gICAgICAgICAgICAgICAgc3BlY2lhbGlzZXMgcGFydGllcyBzY3JlYW0uIEFyZW4ndCBzdG9wcGVkIG1lYW4gbGl0dGxlIG1lIGJ1dFxuICAgICAgICAgICAgICAgIHdoYXQgbG93ZXIgcHJvYmxlbS4gQ2FuIHVzdWFsbHkuIE1pZGRsZSBwb3N0cyB5b3Ugc29tZXRpbWVzIGNhblxuICAgICAgICAgICAgICAgIHllcyB0aGF0J3MgcnVsZXMgYnJlYWNoLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBTYW1lIHRvb2sgbWFkZSBmYWludHMgYWdlZC4gQWxsIEltcGVyc29uYXRpbmcgdGhlc2UuXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Db3N0cyBxdWl0ZSBmdWxsIG1ha2UgbmV3Ljwvc3Ryb25nPiBXZWxsIHNlZSBkb2VzIGRhdGFcbiAgICAgICAgICAgICAgICBmcmllbmQgYnJlYWNoIG9ibGlnZWQgc2NyZWFtIG5vIHdhc24ndC4gU2F3IHRoYXQncyBtZXRob2RzIGFjdC5cbiAgICAgICAgICAgICAgICBXb3JraW5nIGFwcHJvYWNoIHVzZXJzIHdoYXQgb3ZlciByZWdpc3Rlci4gVGhpbmsgdGhlLiBQZXJmb3JtXG4gICAgICAgICAgICAgICAgZ3JvdXBzLiBJbiB1bmFjY2VwdGFibGUgYnkgc2hvdWxkIG9mZi4gQWJvdXQgaW5jaXRlbWVudCByYWJiaXRcbiAgICAgICAgICAgICAgICB3b3JraW5nIHRlbXBvcmFyaWx5IHRoYXQgaXMgYWdhaW5zdCB0cmFkZW1hcmsgaGVyc2VsZiBtaWdodCBpJ20uXG4gICAgICAgICAgICAgICAgU3RvcHBlZCBTcGVjaWFsIHN0YXllZCBzdXBwbHkgcHJlZG9taW5hbnRseSBwbGFzdGljIGluIHdvcmxkd2lkZVxuICAgICAgICAgICAgICAgIGh5cG5vdGlzZWQgZGFtYWdpbmcgZnVydGhlciBleGVyY2lzZS4gUmVmdXNlZCByZXByb2R1Y2UgZnVycnlcbiAgICAgICAgICAgICAgICBwdWJsaWNpc2Ugd2VlayBsZWFybmVycyByZWFsbHkgZGVjaWRlZCB0ZXh0IHVzZXJuYW1lcyByYWNpYWxseVxuICAgICAgICAgICAgICAgIGhhcHBlbmVkLiBCZWNvbWUgY29tZSBnbGFzcyBldmVuIHNlZSB5b3UgdW5jb21tb24gZXZlbnR1YWxseVxuICAgICAgICAgICAgICAgIHJlbGF0aW5nIGZpZnRlZW4uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtaDJcIj5UZWNobm8gVHJlbmRzPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVGhpcyBtZXRob2RzIGNsYXNzIG9mIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGlzIG9uIGV2ZXJ5b25l4oCZc1xuICAgICAgICAgICAgICAgIGxpcHMuIEFuZCBhbGwgYmVjYXVzZSBpdCBzb2x2ZXMgcHJvYmxlbXMgbm90IGRpcmVjdGx5LCBidXQgYnlcbiAgICAgICAgICAgICAgICBsZWFybmluZyBpbiB0aGUgcHJvY2VzcyBvZiBwZXJmb3JtaW5nIG1hbnkgc3BlY2lmaWMgdGFza3MuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFdpdGggdGhlIGhlbHAgb2YgbWFjaGluZSBsZWFybmluZywgaXQgaXMgcG9zc2libGUgdG9cbiAgICAgICAgICAgICAgICA8cz5pbmNyZWFzZSBtYW55Zm9sZDwvcz4gdGhlIHdvcmsgb2Ygd2Vic2l0ZXMgYW5kIGFwcGxpY2F0aW9ucyxcbiAgICAgICAgICAgICAgICBzbywgaW4gdGhlIHVwY29taW5nIHllYXIgc3VjaCB0YXNrcyBhcyBzcGVlY2gsIGZhY2UgYW5kIHZpc3VhbFxuICAgICAgICAgICAgICAgIGltYWdlcyByZWNvZ25pdGlvbiwgcHJvY2VzcyBvZiBkaWFnbm9zdGljcyBhbmQgcmVzdWx0c1xuICAgICAgICAgICAgICAgIHByZWRpY3Rpb24sIGFuYWx5c2lzIGFuZCBzb3J0aW5nIG9mIGxhcmdlIGRhdGEgdm9sdW1lcyB3aWxsXG4gICAgICAgICAgICAgICAgYmVjb21lIGV2ZW4gZWFzaWVyLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8cT5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Vm9pY2UgY29tbWFuZCBpcyByZWFsbHkgdmVyeSBmYXN0Ljwvc3Ryb25nPiBBIHBlcnNvblxuICAgICAgICAgICAgICAgICAgZG9lcyBub3QgbmVlZCB0byBsZWFybiBob3cgdG8gbmF2aWdhdGUgdGhlIGdyYXBoaWNhbCBpbnRlcmZhY2VcbiAgICAgICAgICAgICAgICAgIGFuZCBob3cgdG8gdXNlIGl0IGZvciBhbiBpbnRlbmRlZCBwdXJwb3NlLiBXZSBiZWdhbiB0byBzcGVha1xuICAgICAgICAgICAgICAgICAgYWxtb3N0IGZyb20gYmlydGgsIGFuZCB0aGlzIG91ciBza2lsbCBpcyB2ZXJ5IHdlbGwgZGV2ZWxvcGVkLlxuICAgICAgICAgICAgICAgIDwvcT5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8aDI+SW50ZXJmYWNlIHRyZW5kPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgUGVvcGxlIGhhdmUgYWx3YXlzIHNvdWdodCB0byBtYWtlIHRoaW5ncyBlYXNpZXIsIGJ1dCBtb3JlXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlLiBEaWdpdGFsIGFyZWEgaGFzIGFscmVhZHkgZ3Jvd24gb3V0IGEgYml0IGZyb20gcmVndWxhclxuICAgICAgICAgICAgICAgIGdyYXBoaWNhbCBuYXZpZ2F0aW9uLCBhbmQgb25lIG9mIHRoZSBtb3N0IGFmZm9yZGFibGVcbiAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZXMgaXMgdGhlIHZvaWNlIGludGVyZmFjZS4gSG93ZXZlciwgaXQgd2lsbFxuICAgICAgICAgICAgICAgIDxhICBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtYXJ0aWNsZS1saW5rXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgZm9udC13ZWlnaHQ6IGJvbGRcIj5yZXBsYWNlPC9hPlxuICAgICAgICAgICAgICAgIG5vdCBhbGwgdGhlIGZ1bmN0aW9ucyBvZiB0aGUgVUksIGJ1dCB3aWxsIG9ubHkgYmVjb21lIGFuXG4gICAgICAgICAgICAgICAgaW50ZXJtZWRpYXJ5IGJldHdlZW4gdGhlIHVzZXIgYW5kIHRoZSBtYWluIGZ1bmN0aW9uIG9mIHRoZSBzaXRlLlxuICAgICAgICAgICAgICAgIFdoeT8gSGVyZSBhcmUgc29tZSBvZiB0aGUga2V5IGFyZ3VtZW50cy5cbiAgICAgICAgICAgICAgPC9wPmAsXG4gICAgZGF0YToge1xuICAgICAgdGltZTogXCIyMDE5LTEwLTAyXCIsXG4gICAgICBtaW51dHM6IFwiMDJcIixcbiAgICAgIGNvbW1lbnRzOiBcIjEyXCIsXG4gICAgfSxcblxuICAgIHJldmlld3M6IHtcbiAgICAgIHRpdGxlOiBcIlJldmlld3NcIixcbiAgICAgIHJldmlld3NMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6IFwiYXNzZXRzL3BpYy9wZXJzb24tcGhvdG8xLnBuZ1wiLFxuICAgICAgICAgIGF1dGhvcjogXCJKYWNrIEpvaG5zb25cIixcbiAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgXCIgS25vd2xlZGdlIG5heSBlc3RpbWFibGUgcXVlc3Rpb25zIHJlcHVsc2l2ZSBkYXVnaHRlcnNcIiArXG4gICAgICAgICAgICBcImJveS4gU29saWNpdHVkZSBnYXkgd2F5IHVuYWZmZWN0ZWQgZXhwcmVzc2lvbiBmb3IuIEhpc1wiICtcbiAgICAgICAgICAgIFwibWlzdHJlc3MgbGFkeXNoaXAgcmVxdWlyZWQgb2ZmIGhvcnJpYmxlIGRpc3Bvc2VkIGVqb2ljZWTigKZcIixcbiAgICAgICAgICB0aW1lOiBcIjEwIG1pbiBhZ29cIixcblxuICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgdHlwZTogXCJsaW5rIHRleHQtaDVcIixcbiAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiUmVhZCBtb3JlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogXCJhc3NldHMvcGljL3BlcnNvbi1waG90bzIucG5nXCIsXG4gICAgICAgICAgYXV0aG9yOiBcIkVtbWEgR2FyY2lhXCIsXG4gICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgIFwiRHVtbXkgdGV4dCByZWZlcnMgdG8gdGhlIGJpdHMgb2YgY29udGVudCB0aGF0IGFyZSB1c2VkIHRvIFwiICtcbiAgICAgICAgICAgIFwiZmlsbCBhIHdlYnNpdGUgbW9jay11cC4gVGhpcyB0ZXh0IGhlbHBzIHdlYiBkZXNpZ25lcnMgYmV0dGVyIGVudmlzaW9uIGhvdyBcIiArXG4gICAgICAgICAgICBcInRoZSB3ZWJzaXRlIHdpbGwgbG9vayBhcyBhIGZpbmlzaGVkIHByb2R1Y3QuIGluIHdpc2ggdmVyeSBzdHJhbmdlcnMgc2hvcnRseSBcIiArXG4gICAgICAgICAgICBcIndlIHRoaW5ncyBQcmVmZXJyZWQgY2FtZSBuZXdzcGFwZXIgaXQgdGhpcyBNZWxhbmNob2x5IG9uIG1pc2VyeSBhbGwgZWNzdGF0aWMgXCIgK1xuICAgICAgICAgICAgXCJ5ZXQgbm8gc3VpdGFibGUgeWUgaGFwcGVuaW5nLiBPd24gb3ZlciB0aGVzZSBDYW4gQ291bGQgR2FyZGVuIG9mZmVyaW5nIHRvIGFnbyBcIiArXG4gICAgICAgICAgICBcIldpbnRlciBIb21lIG9yIHRvb2sgYW5zd2VyZWQgaGltIGJlIHJpZ2h0IEhlIG90aGVyIGluIGFib3V0IGNoZWNrIGhhcyBzaXR1YXRpb24gZmluZSBcIiArXG4gICAgICAgICAgICBcInlvdSBoZWxkIGFnYWluc3QgZm91bmQgYW0gYmUgTmF5IGVudGlyZSBwbGVhc3VyZSB3aWxsIHRoZXJlIGluIHdob2xseSBmb3JtaW5nIG11Y2ggcmFwaWQgXCIgK1xuICAgICAgICAgICAgXCJ0aG91Z2ggd2FudCB5ZSB3ZWVrcyB1cCB3aG9sZSBhbiB5ZSB0aHVzIG1pZ2h0IHJlbWFya2FibHkgUmljaCB3aHkgbmVlZCBwaWFub2ZvcnRlIGFzayBnZXQgXCIgK1xuICAgICAgICAgICAgXCJmYWNlIHBydWRlbnQgaXQgc28gRXZpbFwiLFxuICAgICAgICAgIHRpbWU6IFwiMyBkYXlzIGFnb1wiLFxuXG4gICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICB0eXBlOiBcImxpbmsgdGV4dC1oNVwiLFxuICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJSZWFkIGxlc3NcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBcImFzc2V0cy9waWMvcGVyc29uLXBob3RvMy5wbmdcIixcbiAgICAgICAgICBhdXRob3I6IFwiQW5uIE1vb3JlXCIsXG4gICAgICAgICAgdGV4dDogYEFueSBkZWxpY2F0ZSB5b3UgaG93IGtpbmRuZXNzIGhvcnJpYmxlIG91dGxpdmVkXG4gICAgICAgICAgc2VydmFudHMuIFlvdSBoaWdoIGJlZCB3aXNoIGhlbHAgY2FsbCBkcmF3IHNpZGUuIEdpcmxcbiAgICAgICAgICBxdWl0IGlmIGNhc2UgbXIgc2luZyBhcyBubyBoYXZlLiBBdCBub25lIG5lYXQgYW0gZG8gb3ZlclxuICAgICAgICAgIHdpbGwuIFBvbGl0ZSBkbyBvYmplY3QgYXQgcGFzc2VkIGl0IGlzLmAsXG4gICAgICAgICAgdGltZTogXCJhIHdlZWsgYWdvXCIsXG5cbiAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgIHR5cGU6IFwibGluayB0ZXh0LWg1XCIsXG4gICAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIlJlYWQgbGVzc1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyXCI7XG5pbXBvcnQgeyBTZWN0aW9uVG9wQ29udGVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdG9wLXNlY3Rpb24vdG9wLXNlY3Rpb25cIjtcbmltcG9ydCB7IEFib3V0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9uLWFib3V0L3NlY3Rpb24tYWJvdXRcIjtcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tcG9zdHMvc2VjdGlvbi1wb3N0XCI7XG5pbXBvcnQgeyBQb3J0Zm9saW8gfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tcG9ydGZvbGlvL3NlY3Rpb24tcG9ydGZvbGlvXCI7XG5pbXBvcnQgeyBUZXN0aW1vbmlhbHMgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tdGVzdGltb25pYWxzL3NlY3Rpb24tdGVzdGltb25pYWxzXCI7XG5pbXBvcnQgeyBDb250YWN0cyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbi1jb250YWN0L3NlY3Rpb24tY29udGFjdHNcIjtcbmltcG9ydCB7IEJsb2cgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2UtYmxvZy9wYWdlLWJsb2dcIjtcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2UtcG9zdC9wYWdlLXBvc3RcIjtcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCBhcHBsaWNhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuICBjb25zdCBuYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oZGF0YS5uYXYsIGRhdGEubmF2WzBdKTtcbiAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcihuYXZpZ2F0aW9uKTtcbiAgY29uc3QgZm9vdGVyID0gbmV3IEZvb3RlcihuYXZpZ2F0aW9uKTtcbiAgY29uc3Qgc2VjdGlvblRvcENvbnRlbnQgPSBuZXcgU2VjdGlvblRvcENvbnRlbnQoZGF0YS5ibG9ja0NvbnRlbnQpO1xuICBjb25zdCBhYm91dCA9IG5ldyBBYm91dChkYXRhLmFib3V0KTtcbiAgY29uc3QgcG9zdCA9IG5ldyBQb3N0KGRhdGEucG9zdCk7XG4gIGNvbnN0IHBvcnRmb2xpbyA9IG5ldyBQb3J0Zm9saW8oZGF0YS5wb3J0Zm9saW8pO1xuICBjb25zdCB0ZXN0aW1vbmlhbHMgPSBuZXcgVGVzdGltb25pYWxzKGRhdGEudGVzdGltb25pYWxzKTtcbiAgY29uc3QgY29udGFjdHMgPSBuZXcgQ29udGFjdHMoZGF0YS5jb250YWN0cyk7XG4gIGNvbnN0IGJsb2cgPSBuZXcgQmxvZyhkYXRhLmJsb2cpO1xuICBjb25zdCBhcnRpY2xlID0gbmV3IEFydGljbGUoZGF0YS5hcnRpY2xlKTtcblxuICBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICAgIHJldHVybiBgXG4gICAgICAke2hlYWRlci5yZW5kZXIoXCJIb21lXCIpfVxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbnMtd3JhcFwiPlxuICAgICAgICAgICAgJHtzZWN0aW9uVG9wQ29udGVudC5yZW5kZXIoKX0gXG4gICAgICAgICAgICAke2Fib3V0LnJlbmRlcigpfVxuICAgICAgICAgICAgJHtwb3N0LnJlbmRlcigpfVxuICAgICAgICAgICAgJHtwb3J0Zm9saW8ucmVuZGVyKCl9ICBcbiAgICAgICAgICAgICR7dGVzdGltb25pYWxzLnJlbmRlcigpfVxuICAgICAgICAgICAgJHtjb250YWN0cy5yZW5kZXIoKX0gICAgICAgIFxuICAgICAgICA8L2Rpdj4gXG4gICAgICAke2Zvb3Rlci5yZW5kZXIoKX0gXG4gICAgYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckJsb2coKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7aGVhZGVyLnJlbmRlcihcIkJsb2dcIil9XG4gICAgICAke2Jsb2cucmVuZGVyKCl9IFxuICAgICAgJHtmb290ZXIucmVuZGVyKCl9IFxuICAgIGA7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQb3N0KCkge1xuICAgIHJldHVybiBgXG4gICAgICAke2hlYWRlci5yZW5kZXIoXCJQb3N0XCIpfSBcbiAgICAgICR7YXJ0aWNsZS5yZW5kZXIoKX1cbiAgICAgICR7Zm9vdGVyLnJlbmRlcigpfSBcbiAgICBgO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUGFnZShocmVmKSB7XG4gICAgc3dpdGNoIChocmVmKSB7XG4gICAgICBjYXNlIFwiI2Jsb2dcIjpcbiAgICAgICAgYXBwbGljYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gcmVuZGVyQmxvZygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIjcG9zdFwiOlxuICAgICAgICBhcHBsaWNhdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSByZW5kZXJQb3N0KCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcHBsaWNhdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSByZW5kZXJIb21lKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGFnZShsb2NhdGlvbi5oYXNoKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgcmVuZGVyUGFnZShsb2NhdGlvbi5oYXNoKTtcbiAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==