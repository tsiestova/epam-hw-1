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

    createRatingList(count) {
        console.log(count);
        let star = 5;
        const arr = [];

      for(let i = 0; i < star; i++) {
        arr.push(`<li class="rating-item ${i < count ? "full" : ''}"></li>`);
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
                                            ${this.createRatingList(obj.stars.full)}
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
            <a href="${this.blog.button.href}" class="${
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
    return ` <section id="section-testimonials" class="section__testimonials text-center">
          <div class="layout">
            <h2
              class="
                section__testimonials-heading
                text-center text-h2
                bottom-line">
                ${this.testimonials.title}
            </h2>

            <div class="section-wrap">
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

/***/ "./src/js/data.json":
/*!**************************!*\
  !*** ./src/js/data.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('{"nav":[{"href":"#home","title":"Home"},{"href":"#portfolio","title":"Portfolio"},{"href":"#blog","title":"Blog"},{"href":"#","title":"Pages"},{"href":"#about","title":"About"},{"href":"#contact","title":"Contact"}],"blockContent":{"title":"Ideas and perspectives you won’t find anywhere else.","text":" BlogWorld taps into the brains of the world’s most insightfulwriters, thinkers, and storytellers to bring you the smartesttakes on topics that matter. So whatever your interest, you canalways find fresh thinking and unique perspectives.","buttons":[{"type":"btn color","title":"Explore","href":"#"},{"type":"btn","title":"Learn more","href":"#"}]},"about":{"title":"About us","text":"This is who we are - or at least who we strive to be…"},"post":{"title":"Latest posts","text":"Information is a source of learning. But unless it is organized, processed and available to the right people","galleryList":[{"href":"#","src":"assets/pic/img-post1.png","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen,\\n        is going out of fashion. The defining narrative of our\\n        online moment concerns the decline of text, and the\\n        exploding reach and power of audio and video","data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"href":"#","src":"assets/pic/img-post2.png","title":"Rubik’s Cube? No, Robotics and AI are…","text":"In other words, I will try to de-hype the crowd about\\n        the recent development in robotics. Concretely, OpenAI\\n        has claimed some pretty amazing results with learning to\\n        solve the Rubik’s cube with a robotic hand…","data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"href":"#","src":"assets/pic/img-post3.png","title":" How the Internet of Things will Transfo…","text":"The Internet of Things (IoT) promises to be the most\\n        important technological development for consumers since\\n        the advent of the smartphone. Experts believe that this\\n        collection of internet-connected technolog…","data":{"time":"2019-10-20","minuts":"10","comments":"11"}}]},"portfolio":{"title":"Latest portfolio","text":"Put there articles successfully special warrant submit agree what\\nalong then","galleryList":[{"href":"#","src":"assets/pic/bg-img1.png","title":" Art Ocean","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img2.png","title":" Art Ocean","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":" Art Ocean","text":"Photography, art, nature"}],"button":{"title":"See all works","href":"#","type":"btn"}},"testimonials":{"title":"Testimonials","list":[{"q":"We move at a fast pace. I’m always working on something. Iam excited about it!","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"SECOND!","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"3!","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"4!","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"5","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"}]},"contacts":{"title":"Contact us","text":" Put there articles successfully special warrant submit agree whatalong then"},"blog":{"title":"Blog","button":{"title":"Read more","href":"#","type":"btn color"},"card":[{"stars":{"n":5,"full":5},"type":"video","pic":"assets/pic/blog-img1.png","src":"assets/pic/person-photo1.png","author":"Neil Richards","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen, isgoing out of fashion. The defining narrative of our onlinemoment concerns the decline of text, and the exploding reachand power of audio and video …","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"stars":{"n":5,"full":3},"type":"music","pic":"assets/pic/blog-img2.png","src":"assets/pic/person-photo2.png","author":"Sarah Healy","title":"Far far away, behind the word mountains","text":"Fog down the river, where it rolls deified among the tiers of\\n                shipping and the waterside pollutions of a great (and dirty) …","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"02 oct, 2019","minuts":"12","comments":"4"}},{"stars":{"n":5,"full":3},"type":"pic","pic":"assets/pic/blog-img3.png","src":"assets/pic/person-photo3.png","author":"Grace Noh","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen, is\\n                  going out of fashion. The defining narrative of our online\\n                  moment concerns the decline of text, and the exploding reach\\n                  and power of audio and video …","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"23 sep, 2019","minuts":"16","comments":"421"}},{"stars":{"n":5,"full":3},"src":"assets/pic/person-photo4.png","author":"Alex Zlatkus","title":"In the Future We Will All Live in Star Wars","text":"Fog down the river, where it rolls deified among the tiers of\\n                  shipping and the waterside pollutions of a great (and dirty)\\n                  city. Fog on the Essex marshes, fog on the Kentish heights.\\n                  Fog creeping into the cabooses of collier-brigs; fog lying out\\n                  on. Money terms breakfast drawings true blessing doubtful more\\n                  agreed to zealously making supposing By said Chicken An\\n                  Neglected produce good felt no poor offering am their said has\\n                  around songs wish met true any me ought mr The offices set Not\\n                  Felicity above out We in an post begin again.","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"11 Aug, 2019","minuts":"17","comments":"77"}}]},"article":{"title":"Fog up the river, where it flows among green aits and meadows","author":"Sarah Healy","src":"assets/pic/blog-img2.png","pic":"assets/pic/blog-img2.png","text":"\\n              <p>\\n                The thing you’re doing now, reading prose on a screen, is going\\n                out of fashion. The defining narrative of our online moment\\n                concerns the decline of text, and the exploding reach and power\\n                of audio and video.\\n                <strong>Which come particular teens wasn\'t.</strong> Own day\\n                designed suspension conflict unlawful. I\'ll stayed liable i\'ve.\\n                Interact minutes see night translate.\\n              </p>\\n              <br />\\n              <p>\\n                Number interact already promotion someone thought run same why\\n                one it very. Fifteen problem friend editing away proprietary\\n                words shivering shivered. Shivers special worried in waive this\\n                we. Spider 13 house same avoid. Coffee including products\\n                violation legs my defamatory predominantly important again\\n                strictly. Including budgie we materials 17 hand harassing\\n                calling offensive relating. Faints comes everyone this developed\\n                specialises parties scream. Aren\'t stopped mean little me but\\n                what lower problem. Can usually. Middle posts you sometimes can\\n                yes that\'s rules breach.\\n              </p>\\n              <br />\\n              <p>\\n                Same took made faints aged. All Impersonating these.\\n                <strong>Costs quite full make new.</strong> Well see does data\\n                friend breach obliged scream no wasn\'t. Saw that\'s methods act.\\n                Working approach users what over register. Think the. Perform\\n                groups. In unacceptable by should off. About incitement rabbit\\n                working temporarily that is against trademark herself might i\'m.\\n                Stopped Special stayed supply predominantly plastic in worldwide\\n                hypnotised damaging further exercise. Refused reproduce furry\\n                publicise week learners really decided text usernames racially\\n                happened. Become come glass even see you uncommon eventually\\n                relating fifteen.\\n              </p>\\n              <br />\\n              <h2 class=\\"text-h2\\">Techno Trends</h2>\\n              <p>\\n                This methods class of artificial intelligence is on everyone’s\\n                lips. And all because it solves problems not directly, but by\\n                learning in the process of performing many specific tasks.\\n              </p>\\n              <br />\\n              <p>\\n                With the help of machine learning, it is possible to\\n                <s>increase manyfold</s> the work of websites and applications,\\n                so, in the upcoming year such tasks as speech, face and visual\\n                images recognition, process of diagnostics and results\\n                prediction, analysis and sorting of large data volumes will\\n                become even easier.\\n              </p>\\n              <br />\\n              <p>\\n                <q>\\n                  <strong>Voice command is really very fast.</strong> A person\\n                  does not need to learn how to navigate the graphical interface\\n                  and how to use it for an intended purpose. We began to speak\\n                  almost from birth, and this our skill is very well developed.\\n                </q>\\n                <br />\\n              </p>\\n              <h2>Interface trend</h2>\\n              <p>\\n                People have always sought to make things easier, but more\\n                effective. Digital area has already grown out a bit from regular\\n                graphical navigation, and one of the most affordable\\n                alternatives is the voice interface. However, it will\\n                <a  class=\\"section__post-article-link\\" style=\\"text-decoration: underline; font-weight: bold\\">replace</a>\\n                not all the functions of the UI, but will only become an\\n                intermediary between the user and the main function of the site.\\n                Why? Here are some of the key arguments.\\n              </p>","data":{"time":"2019-10-02","minuts":"02","comments":"12"},"reviews":{"title":"Reviews","reviewsList":[{"src":"assets/pic/person-photo1.png","author":"Jack Johnson","text":" Knowledge nay estimable questions repulsive daughtersboy. Solicitude gay way unaffected expression for. Hismistress ladyship required off horrible disposed ejoiced…","time":"10 min ago","button":{"type":"link text-h5","href":"#","title":"Read more"}},{"src":"assets/pic/person-photo2.png","author":"Emma Garcia","text":"Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. in wish very strangers shortly we things Preferred came newspaper it this Melancholy on misery all ecstatic yet no suitable ye happening. Own over these Can Could Garden offering to ago Winter Home or took answered him be right He other in about check has situation fine you held against found am be Nay entire pleasure will there in wholly forming much rapid though want ye weeks up whole an ye thus might remarkably Rich why need pianoforte ask get face prudent it so Evil","time":"3 days ago","button":{"type":"link text-h5","href":"#","title":"Read less"}},{"src":"assets/pic/person-photo3.png","author":"Ann Moore","text":"Any delicate you how kindness horrible outlived\\n          servants. You high bed wish help call draw side. Girl\\n          quit if case mr sing as no have. At none neat am do over\\n          will. Polite do object at passed it is.","time":"a week ago","button":{"type":"link text-h5","href":"#","title":"Read less"}}]}}}');

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

  function renderBlog() {
    return `
      ${header.render("#blog")}
      ${blog.render()} 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVVTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlC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QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7QUM5RUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvcGFnZS1ibG9nL3BhZ2UtYmxvZy5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3BhZ2UtcG9zdC9wYWdlLXBvc3QuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLWFib3V0L3NlY3Rpb24tYWJvdXQuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLWNvbnRhY3Qvc2VjdGlvbi1jb250YWN0cy5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3NlY3Rpb24tcG9ydGZvbGlvL3NlY3Rpb24tcG9ydGZvbGlvLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbi1wb3N0cy9zZWN0aW9uLXBvc3QuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLXRlc3RpbW9uaWFscy9zZWN0aW9uLXRlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3RvcC1zZWN0aW9uL3RvcC1zZWN0aW9uLmpzIiwid2VicGFjazovL0hXXzAxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hXXzAxL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9IV18wMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0hXXzAxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz85OGFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBGb290ZXIge1xuICBjb25zdHJ1Y3RvcihuYXZpZ2F0aW9uKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uID0gbmF2aWdhdGlvbjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYFxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXIgc3RpY2t5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInNvY2lhbC1tZWRpYVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJmYWNlYm9va1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImluc3RhZ3JhbVwiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJkcmliYmxlXCIgaHJlZj1cImh0dHBzOi8vZHJpYmJibGUuY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2xvZ28gdGV4dC1oNFwiPkJsb2dXb3JsZDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl90ZXh0IHRleHQtaDVcIj4mY29weTsgMjAxOSBBbGwgUmlnaHRzIFJlc2VydmVkLjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5gO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3IobmF2aWdhdGlvbikge1xuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5hdmlnYXRpb247XG4gIH1cblxuICByZW5kZXIoaHJlZikge1xuICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgIGlmIChocmVmID09PSBcIiNibG9nXCIgfHwgaHJlZiA9PT0gXCIjcG9zdFwiKSB7XG4gICAgICByZXN1bHQgPSBgPGhlYWRlciBjbGFzcz1cImhlYWRlciBoZWFkZXItaW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbG9nbyB0ZXh0LWg0XCI+QmxvZ1dvcmxkPC9kaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiaGVhZGVyX19uYXYtbWVudVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm5hdmlnYXRpb24ucmVuZGVyKGhyZWYpfVxuICAgICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICAgICAgPC9uYXY+IFxuICAgICAgICA8L2Rpdj4gXG4gICAgPC9oZWFkZXI+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYDxoZWFkZXIgY2xhc3M9XCJoZWFkZXIgc3RpY2t5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2xvZ28gdGV4dC1oNFwiPkJsb2dXb3JsZDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbmF2LW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5uYXZpZ2F0aW9uLnJlbmRlcihocmVmKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPmA7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQGNsYXNzXG4gKi9cblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24ge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtBcnJheTx7dGl0bGU6IHN0cmluZywgaHJlZjogc3RyaW5nfT59IG5hdlxuICAgKiBAcGFyYW0ge3t0aXRsZTogc3RyaW5nLCBocmVmOiBzdHJpbmd9fSBhY3RpdmVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG5hdikge1xuICAgIHRoaXMubmF2ID0gbmF2O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7e2hyZWY6c3RyaW5nLCB0aXRsZTogc3RyaW5nfX0gaXRlbVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuXG4gIGNyZWF0ZU5hdkl0ZW0oaXRlbSwgaHJlZikge1xuICAgIHJldHVybiBgXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJoZWFkZXJfX25hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJ0ZXh0LWg1ICR7XG4gICAgICAgICAgICAgICAgICBpdGVtLmhyZWYgPT09IGhyZWYgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH1cIiBocmVmPVwiJHtpdGVtLmhyZWZ9XCIgZGF0YS12YWx1ZT1cIiR7aXRlbS50aXRsZX1cIj5cIiR7XG4gICAgICBpdGVtLnRpdGxlXG4gICAgfVwiPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgYDtcbiAgfVxuXG4gIHJlbmRlcihocmVmKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2Lm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlTmF2SXRlbShlbCwgaHJlZikpLmpvaW4oXCJcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBCbG9nIHtcbiAgY29uc3RydWN0b3IoYmxvZykge1xuICAgIHRoaXMuYmxvZyA9IGJsb2c7XG4gIH1cblxuXG4gIHJlbmRlckJ1dHRvbih0eXBlKSB7XG4gICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwidmlkZW9cIjpcbiAgICAgICAgc3RyID0gXCJzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX3ZpZGVvXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm11c2ljXCI6XG4gICAgICAgIHN0ciA9IFwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb19tdXNpY1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJwaWNcIjpcbiAgICAgICAgc3RyID0gXCJzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX3BpY1wiO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RyID0gXCJcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgICBjcmVhdGVSYXRpbmdMaXN0KGNvdW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcbiAgICAgICAgbGV0IHN0YXIgPSA1O1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YXI7IGkrKykge1xuICAgICAgICBhcnIucHVzaChgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gJHtpIDwgY291bnQgPyBcImZ1bGxcIiA6ICcnfVwiPjwvbGk+YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnIuam9pbignJyk7XG4gIH1cblxuXG4gIGNyZWF0ZUl0ZW0ob2JqKSB7XG4gICAgcmV0dXJuIGAgPGxpIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoucGljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbV92aWRlbyAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnR5cGUgPT09IFwidmlkZW9cIiA/IFwidmlkZW8tYnV0dG9uXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke29iai5waWN9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYmxvZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5yZW5kZXJCdXR0b24ob2JqLnR5cGUpfVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb25fcGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke29iai5zcmN9XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicGVyc29uLXBob3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLW5hbWUgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWU9XCIke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmRhdGEudGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjExIG9jdCwgMjAxOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90XCI+JHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5kYXRhLm1pbnV0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1taW4gcmVhZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90IGNvbW1lbnRzXCI+JHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5kYXRhLmNvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyYXRpbmctbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlUmF0aW5nTGlzdChvYmouc3RhcnMuZnVsbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1oZWFkaW5nIHRleHQtaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai50eXBlID09PSBcIm11c2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnPGZpZ3VyZSBjbGFzcz1cImF1ZGlvXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgICA8YXVkaW9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2F1ZGlvL21lZGlhL2NjMC1hdWRpby90LXJleC1yb2FyLm1wM1wiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgICA+PC9hdWRpbz5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgPC9maWd1cmU+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi10ZXh0IHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7b2JqLmJ1dHRvbi5ocmVmfVwiIGNsYXNzPVwiJHtcbiAgICAgIG9iai5idXR0b24udHlwZVxuICAgIH1cIj4ke29iai5idXR0b24udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgfVxuXG4gIGNyZWF0ZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmxvZy5jYXJkLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlSXRlbShlbCkpLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25fX2Jsb2cgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWhlYWRpbmcgdGV4dC1oMiBib3R0b20tbGluZVwiPiR7XG4gICAgICAgICAgICAgICAgICB0aGlzLmJsb2cudGl0bGVcbiAgICAgICAgICAgICAgICB9PC9oMj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaW5wdXQtd3JhcCBpbnB1dC1zZWFyY2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IGF1dGhvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5jcmVhdGVMaXN0KCl9XG4gICAgICAgICAgICAgICAgPC91bD4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMuYmxvZy5idXR0b24uaHJlZn1cIiBjbGFzcz1cIiR7XG4gICAgICB0aGlzLmJsb2cuYnV0dG9uLnR5cGVcbiAgICB9XCI+JHt0aGlzLmJsb2cuYnV0dG9uLnRpdGxlfTwvYT5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBcnRpY2xlIHtcbiAgY29uc3RydWN0b3IoYXJ0aWNsZSkge1xuICAgIHRoaXMuYXJ0aWNsZSA9IGFydGljbGU7XG4gIH1cblxuICBjcmVhdGVSZXZpZXdzSXRlbShvYmopIHtcbiAgICByZXR1cm4gYDxsaSBjbGFzcz1cInNlY3Rpb25fX3Bvc3RfcmV2aWV3X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW0gc2VjdGlvbl9fYmxvZy1pdGVtX2lubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbl9waG90byBzZWN0aW9uX19ibG9nLXBlcnNvbl9waG90b19pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtvYmouc3JjfVwiIGFsdD1cInBlcnNvbi1waG90b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGVyc29uLXJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb19pbm5lclxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbl9fYmxvZy1wZXJzb24tbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1oNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbl9fYmxvZy1wZXJzb24tbmFtZV9pbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicmF0aW5nLWxpc3QgcmF0aW5nLWxpc3RfaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbSBmdWxsXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW1cIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJveCBkYXRhLWJveF9pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1XCI+JHtvYmoudGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi10ZXh0IHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29iai50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmstd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke29iai5idXR0b24uaHJlZn1cIiBjbGFzcz1cIiR7b2JqLmJ1dHRvbi50eXBlfVwiPiR7b2JqLmJ1dHRvbi50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5gO1xuICB9XG5cbiAgY3JlYXRlUmV2aWV3c0xpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJ0aWNsZS5yZXZpZXdzLnJldmlld3NMaXN0XG4gICAgICAubWFwKChlbCkgPT4gdGhpcy5jcmVhdGVSZXZpZXdzSXRlbShlbCkpXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYCA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNvbHVtbnMtd3JhcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9ucy13cmFwXCI+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1oZWFkaW5nIHRleHQtaDJcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuYXJ0aWNsZS50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbl9waG90b1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGljL3BlcnNvbi1waG90bzIucG5nXCIgYWx0PVwicGVyc29uLXBob3RvXCIgLz5cbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLW5hbWUgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICR7dGhpcy5hcnRpY2xlLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiJHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUuZGF0YS50aW1lXG4gICAgICAgICAgICAgICAgICAgIH1cIiBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjAyIG9jdCwgMjAxOVxuICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3RcIj4ke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5kYXRhLm1pbnV0c1xuICAgICAgICAgICAgICAgICAgICB9IG1pbiByZWFkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90IGNvbW1lbnRzXCI+JHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUuZGF0YS5jb21tZW50c1xuICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyYXRpbmctbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGZpZ3VyZVxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pdGVtX3ZpZGVvIHNlY3Rpb25fX2Jsb2ctaXRlbV92aWRlb19pbm5lclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIke3RoaXMuYXJ0aWNsZS5zcmN9XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJibG9nXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2ZpZ3VyZT5cblxuICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pdGVtX2F1ZGlvX2lubmVyXCI+XG4gICAgICAgICAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICAgICAgc3JjPVwiJHt0aGlzLmFydGljbGUucGljfVwiXG4gICAgICAgICAgICAgICAgPjwvYXVkaW8+XG4gICAgICAgICAgICAgIDwvZmlndXJlPiBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXJ0aWNsZVwiPlxuICAgICAgICAgICAgICAgJHt0aGlzLmFydGljbGUudGV4dH1cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zdC1saWtlc193cmFwXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tbGlrZVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWxpa2VzXCI+NzUgbGlrZXM8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNvY2lhbC1tZWRpYVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZmFjZWJvb2tcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiaW5zdGFncmFtXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJkcmliYmxlXCIgaHJlZj1cImh0dHBzOi8vZHJpYmJibGUuY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cblxuICAgICAgICAgICAgPCEtLSAgICAgICAgUmV2aWV3cy0tPlxuXG4gICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1yZXZpZXcgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1oMiBsZWZ0LWFsaWduIHNlY3Rpb25fX3Bvc3QtcmV2aWV3LWhlYWRlclwiPiR7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlLnJldmlld3MudGl0bGVcbiAgICAgICAgICAgICAgfTwvaDI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNlY3Rpb25fX3Bvc3RfcmV2aWV3LWxpc3RcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlUmV2aWV3c0xpc3QoKX1cbiAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0blwiPk1vcmUgY29tbWVudHM8L2E+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFzc2lkcy13cmFwXCI+XG4gICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1ib3hcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LWhlYWRpbmcgdGV4dC1oMiBhc2lkZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgTGF0ZXN0IHBvc3RzXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0X3Bob3RvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3BpYy9hc2lkZS1pbWcxLnBuZ1wiIGFsdD1cIlBob3RvIHBvc3RcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3Qtc3ViaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIE11Y2ggY3VyZSBpbmFwcHJvcHJpYXRlIGNvdWxkIHRoaXMgcmVzdHJpY3Rpb25zIOKAplxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIyMDE5LTEwLTAyXCIgY2xhc3M9XCJ0aW1lIHRleHQtaDVcIlxuICAgICAgICAgICAgICAgICAgICAgID4wMiBvY3QsIDIwMTlcbiAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPjEyIG1pbiByZWFkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3QgY29tbWVudHNcIj40PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0X3Bob3RvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3BpYy9hc2lkZS1pbWcyLnBuZ1wiIGFsdD1cIlBob3RvIHBvc3RcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3Qtc3ViaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIE11Y2ggY3VyZSBpbmFwcHJvcHJpYXRlIGNvdWxkIHRoaXMgcmVzdHJpY3Rpb25zIOKAplxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIyMDE5LTEwLTAyXCIgY2xhc3M9XCJ0aW1lIHRleHQtaDVcIlxuICAgICAgICAgICAgICAgICAgICAgID4wMiBvY3QsIDIwMTlcbiAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPjEyIG1pbiByZWFkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3QgY29tbWVudHNcIj40PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuXCI+TW9yZSBwb3N0czwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FzaWRlPlxuXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtYm94XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1oZWRpbmcgdGV4dC1oMiBhc2lkZS1oZWFkaW5nXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhdGVnb3JpZXNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRyYXZlbFwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaW5wdXQtYWNjb3JkaW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0cmF2ZWxcIiBjbGFzcz1cImxhYmVsLWFjY29yZGlvbiB0ZXh0LWg0XCJcbiAgICAgICAgICAgICAgICAgICAgPlJlc3RhdXJhbnQgZm9vZCAoMyk8L2xhYmVsXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJoaWRkZW4tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW4tbGlzdF9pdGVtIHRleHQtaDVcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cInJlc3RhdXJhbnRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWFjY29yZGlvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInJlc3RhdXJhbnRcIiBjbGFzcz1cImxhYmVsLWFjY29yZGlvbiB0ZXh0LWg0XCJcbiAgICAgICAgICAgICAgICAgICAgPlRyYXZlbCBuZXdzICgzKTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjxhIGhyZWY9XCIjXCI+SGlraW5nPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjxhIGhyZWY9XCIjXCI+QmljeWNsZSB0cmlwPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjxhIGhyZWY9XCIjXCI+TW91bnRhaW5zIHRyaXA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZWNobm9sb2d5XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1hY2NvcmRpb25cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0ZWNobm9sb2d5XCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5Nb2Rlcm4gdGVjaG5vbG9neSAoNik8L2xhYmVsXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJoaWRkZW4tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW4tbGlzdF9pdGVtIHRleHQtaDVcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInByb2R1Y3RcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImlucHV0LWFjY29yZGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvZHVjdFwiIGNsYXNzPVwibGFiZWwtYWNjb3JkaW9uIHRleHQtaDRcIlxuICAgICAgICAgICAgICAgICAgICA+UHJvZHVjdCAoNCk8L2xhYmVsXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJoaWRkZW4tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW4tbGlzdF9pdGVtIHRleHQtaDVcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cImluc3BpcmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1hY2NvcmRpb25cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnNwaXJhdGlvblwiIGNsYXNzPVwibGFiZWwtYWNjb3JkaW9uIHRleHQtaDRcIlxuICAgICAgICAgICAgICAgICAgICA+SW5zcGlyYXRpb24gKDIpPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaGlkZGVuLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvYXNpZGU+XG5cbiAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtdGFncy1ib3hcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWhlYWRpbmcgdGV4dC1oMiBhc2lkZS1oZWFkaW5nXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRhZ3NcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1saXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiXCI+TG92ZTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5TaWduczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5XYXRlcmZhbGw8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+SW5zcGlyYXRpb248L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+UXVvdGVzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPlNlYTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5TZW5zZTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5Db2ZmZWU8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+R29sZDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5JbWFnZXM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+Q291cmFnZTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5EYW5jaW5nPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPlZpZGVvPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBYm91dCB7XG4gIGNvbnN0cnVjdG9yKGFib3V0KSB7XG4gICAgdGhpcy5hYm91dCA9IGFib3V0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3M9XCJzZWN0aW9uX19hYm91dCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LWhlYWRpbmcgdGV4dC1jZW50ZXIgdGV4dC1oMiBib3R0b20tbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuYWJvdXQudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1zdWItaGVhZGluZyB0ZXh0LWNlbnRlciB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5hYm91dC50ZXh0fVxuICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtYmxvY2sgdHlwb2dyYXBoeVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtYmxvY2tfdGl0bGUgdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgPlR5cG9ncmFwaHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtYmxvY2sgaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9ja190aXRsZSB0ZXh0LWg0XCI+SWNvbiBzZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtYmxvY2sgYWNjdXJhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtYmxvY2tfdGl0bGUgdGV4dC1oNFwiPkFjY3VyYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LXZpZGVvIHZpZGVvLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGljL2Fib3V0LXBpY3R1cmUucG5nXCIgYWx0PVwiQWJvdXQgcGljdHVyZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDb250YWN0cyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhY3RzKSB7XG4gICAgdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWhlYWRpbmcgdGV4dC1oMiBib3R0b20tbGluZVwiPlxuICAgICAgICAgICAgICAgJHt0aGlzLmNvbnRhY3RzLnRpdGxlfVxuICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtdGV4dCB0ZXh0LWNlbnRlciB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICR7dGhpcy5jb250YWN0cy50ZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzb2NpYWwtbWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJmYWNlYm9va1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImluc3RhZ3JhbVwiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJkcmliYmxlXCIgaHJlZj1cImh0dHBzOi8vZHJpYmJibGUuY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWJhY2tncm91bmQtd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtY29sdW1uX2xlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LXN1YmhlYWRpbmcgdGV4dC1oMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQgd2lsbCBiZSBuZXh0IHN0ZXA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvbCBzdGFydD1cIjFcIiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3RlcHMtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3RlcHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV9oZWFkaW5nIHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdl4oCZbGwgcHJlcGFyZSBhIHByb3Bvc2FsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV90ZXh0IHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcXVpcmVkIHNjb3BlLCB0aW1lbGluZSBhbmQgYXByLiBwcmljZSB3aWxsIGJlIGluY2x1ZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiB5b3UgcHJvdmlkZSB1cyB3aXRoIGRldGFpbCBpbmZvcm1hdGlvbiBhYm91dCBhIHByb2plY3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LXN0ZXBzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzLWl0ZW1faGVhZGluZyB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2dldGhlciB3ZSBkaXNjdXNzIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV90ZXh0IHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExl4oCZcyBnZXQgYWNxdWFpbnRlZCBhbmQgZGlzY3VzcyBhbGwgdGhlIHBvc3NpYmxlIHZhcmlhbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvcHRpb25zLiBHb29nbGUgSGFuZ291dHMgb3IgU2t5cGUgdXN1YWxseSB3aXJrcyBncmVhdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3RlcHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV9oZWFkaW5nIHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExldOKAmXMgc3RhcnQgYnVpbGRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX3RleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiB0aGUgY29udHJhY3QgaXMgc2lnbmVkIGFuZCBhbGwgZ29hbHMgYXJlIHNldCB3ZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0IHRoZSBmaXJzdCBzcHJpbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1jb2x1bW5fcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWZvcm0tbWVzc2FnZSB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV3JpdGUgdXMgYSBmZXcgd29yZHMgYWJvdXQgeW91ciBwcm9qZWN0IGFuZCB3ZSB3aWxsIHByZXBhcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wb3NhbCBmb3IgeW91IHdpdGhpbiAyNCBob3Vyc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uX3JpZ2h0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJwb3N0XCIgbWV0aG9kPVwicG9zdFwiIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+WW91ciBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0X193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBjbGFzcz1cImlucHV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiBjbGFzcz1cInRleHQtaDRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dF9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImlucHV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwYXNzd29yZC1zaG93IHRleHQtaDRcIiBmb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0X193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGNvbG9yIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmQgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1mb3JtX2VtYWlsIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBuZWVkIHRvIGhhdmUgYSBETkEgZmlyc3QsIGp1c3QgY29udGFjdCB1cyBhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzplbWFpbEBnbWFpbC5jb21cIj5lbWFpbEBnbWFpbC5jb208L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1tYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGljL21hcC5wbmdcIiBhbHQ9XCJNYXBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQb3J0Zm9saW8ge1xuICBjb25zdHJ1Y3Rvcihwb3J0Zm9saW8pIHtcbiAgICB0aGlzLnBvcnRmb2xpbyA9IHBvcnRmb2xpbztcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnlJdGVtKG9iaikge1xuICAgIHJldHVybiBgIDxsaSBjbGFzcz1cImdhbGxlcnlfX3NsaWRlci1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPiBcbiAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7b2JqLnNyY31cIiBhbHQ9XCJnYWxsZXJ5LWltYWdlXCIvPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5X19zbGlkZXItaXRlbS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW0taGVhZGluZyB0ZXh0LWgzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnlfX3NsaWRlci1pdGVtLXN1YmhlYWRpbmcgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnlfX3NsaWRlci1pdGVtLWJveFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPmA7XG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5TGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3J0Zm9saW8uZ2FsbGVyeUxpc3RcbiAgICAgIC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZUdhbGxlcnlJdGVtKGVsKSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgPHNlY3Rpb24gaWQ9XCJwb3J0Zm9saW9cIiBjbGFzcz1cInNlY3Rpb25fX3BvcnRmb2xpbyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19wb3J0Zm9saW8taGVhZGluZyB0ZXh0LWgyIHRleHQtY2VudGVyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgJHt0aGlzLnBvcnRmb2xpby50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3BvcnRmb2xpby10ZXh0IHRleHQtY2VudGVyIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAke3RoaXMucG9ydGZvbGlvLnRleHR9IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImdhbGxlcnlfX3NsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlR2FsbGVyeUxpc3QoKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLXdyYXAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsaXAgbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmxpcCByaWdodFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMucG9ydGZvbGlvLmJ1dHRvbi5ocmVmfVwiIGNsYXNzPVwiJHtcbiAgICAgIHRoaXMucG9ydGZvbGlvLmJ1dHRvbi50eXBlXG4gICAgfVwiPiAke3RoaXMucG9ydGZvbGlvLmJ1dHRvbi50aXRsZX0gPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5gO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgUG9zdCB7XG4gIGNvbnN0cnVjdG9yKHBvc3QpIHtcbiAgICB0aGlzLnBvc3QgPSBwb3N0O1xuICB9XG5cbiAgY3JlYXRlR2FsbGVyeUl0ZW0ob2JqKSB7XG4gICAgcmV0dXJuIGAgPGxpIGNsYXNzPVwiZ2FsbGVyeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7b2JqLmhyZWZ9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7b2JqLnNyY31cIiBhbHQ9XCJnYWxsZXJ5IGltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnktaXRlbV9faGVhZGluZyB0ZXh0LWgzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29iai50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1fX3RleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29iai50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIiR7b2JqLmRhdGEudGltZX1cIiBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Mjggc2VwLCAyMDE5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90XCI+JHtvYmouZGF0YS5taW51dHN9IG1pbiByZWFkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdCBjb21tZW50c1wiPiR7b2JqLmRhdGEuY29tbWVudHN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmA7XG4gIH1cblxuICBjcmVhdGVHYWxsZXJ5TGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3N0LmdhbGxlcnlMaXN0XG4gICAgICAubWFwKChlbCkgPT4gdGhpcy5jcmVhdGVHYWxsZXJ5SXRlbShlbCkpXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbl9fcG9zdHMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uX19wb3N0cy1oZWFkaW5nIHRleHQtaDIgdGV4dC1jZW50ZXIgYm90dG9tLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnBvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fcG9zdHMtdGV4dCB0ZXh0LWNlbnRlciB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wb3N0LnRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Bvc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImdhbGxlcnktbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlR2FsbGVyeUxpc3QoKX0gXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUZXN0aW1vbmlhbHMge1xuICBjb25zdHJ1Y3Rvcih0ZXN0aW1vbmlhbHMpIHtcbiAgICB0aGlzLnRlc3RpbW9uaWFscyA9IHRlc3RpbW9uaWFscztcbiAgfVxuXG4gIGNyZWF0ZUl0ZW0ob2JqKSB7XG5cbiAgICByZXR1cm4gYDxsaSBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy1waG90by1pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXBob3RvLWJveFwiPlxuICAgICAgICAgICAgICAgIDxxIGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXRleHQgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAke29iai5xfVxuICAgICAgICAgICAgICAgIDwvcT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXRleHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXRleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmouYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy10ZXh0IHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnByb2Zlc3Npb259XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy11c2VyLXBob3RvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke29iai5zcmN9XCIgYWx0PVwidXNlci1waG90b1wiLz5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8L2xpPmA7XG4gIH1cblxuICBjcmVhdGVMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnRlc3RpbW9uaWFscy5saXN0Lm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlSXRlbShlbCkpLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGAgPHNlY3Rpb24gaWQ9XCJzZWN0aW9uLXRlc3RpbW9uaWFsc1wiIGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgc2VjdGlvbl9fdGVzdGltb25pYWxzLWhlYWRpbmdcbiAgICAgICAgICAgICAgICB0ZXh0LWNlbnRlciB0ZXh0LWgyXG4gICAgICAgICAgICAgICAgYm90dG9tLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMudGVzdGltb25pYWxzLnRpdGxlfVxuICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24td3JhcFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZmxpcC1sZWZ0XCIgY2xhc3M9XCJmbGlwIGxlZnRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy1waG90by1saXN0X3dyYXBcIj5cbiAgICAgICAgICAgICAgPHVsIGlkPVwic2xpZGVyLWxpc3RcIiBjbGFzcz1cInNlY3Rpb25fX3Rlc3RpbW9uaWFscy1waG90by1saXN0XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUxpc3QoKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJmbGlwLXJpZ2h0XCIgY2xhc3M9XCJmbGlwIHJpZ2h0XCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTZWN0aW9uVG9wQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKGJsb2NrQ29udGVudCkge1xuICAgIHRoaXMuYmxvY2tDb250ZW50ID0gYmxvY2tDb250ZW50O1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cblxuICByZW5kZXJUZXh0KCkge1xuICAgIHJldHVybiBgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190b3AtaGVhZGluZyB0ZXh0LWgxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5ibG9ja0NvbnRlbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdG9wLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5ibG9ja0NvbnRlbnQudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIGNyZWF0ZUJ1dHRvbnMoaXRlbSkge1xuICAgIHJldHVybiBgPGEgaHJlZj1cIiR7aXRlbS5ocmVmfVwiIGNsYXNzPVwiJHtpdGVtLnR5cGV9XCI+JHtpdGVtLnRpdGxlfTwvYT5gO1xuICB9XG5cbiAgcmVuZGVyQnV0dG9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5ibG9ja0NvbnRlbnQuYnV0dG9uc1xuICAgICAgLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlQnV0dG9ucyhlbCkpXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYFxuICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190b3BcIiBpZD1cInNlY3Rpb25fX3RvcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190b3Atd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICR7dGhpcy5yZW5kZXJUZXh0KCl9XG4gICAgICAgICAgICAgICAgICAgJHt0aGlzLnJlbmRlckJ1dHRvbnMoKX0gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXIvZm9vdGVyXCI7XG5pbXBvcnQgeyBTZWN0aW9uVG9wQ29udGVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdG9wLXNlY3Rpb24vdG9wLXNlY3Rpb25cIjtcbmltcG9ydCB7IEFib3V0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9uLWFib3V0L3NlY3Rpb24tYWJvdXRcIjtcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tcG9zdHMvc2VjdGlvbi1wb3N0XCI7XG5pbXBvcnQgeyBQb3J0Zm9saW8gfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tcG9ydGZvbGlvL3NlY3Rpb24tcG9ydGZvbGlvXCI7XG5pbXBvcnQgeyBUZXN0aW1vbmlhbHMgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tdGVzdGltb25pYWxzL3NlY3Rpb24tdGVzdGltb25pYWxzXCI7XG5pbXBvcnQgeyBDb250YWN0cyB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VjdGlvbi1jb250YWN0L3NlY3Rpb24tY29udGFjdHNcIjtcbmltcG9ydCB7IEJsb2cgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2UtYmxvZy9wYWdlLWJsb2dcIjtcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2UtcG9zdC9wYWdlLXBvc3RcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNvblwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgYXBwbGljYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKGRhdGEubmF2KTtcbiAgY29uc3QgaGVhZGVyID0gbmV3IEhlYWRlcihuYXZpZ2F0aW9uKTtcbiAgY29uc3QgZm9vdGVyID0gbmV3IEZvb3RlcihuYXZpZ2F0aW9uKTtcbiAgY29uc3Qgc2VjdGlvblRvcENvbnRlbnQgPSBuZXcgU2VjdGlvblRvcENvbnRlbnQoZGF0YS5ibG9ja0NvbnRlbnQpO1xuICBjb25zdCBhYm91dCA9IG5ldyBBYm91dChkYXRhLmFib3V0KTtcbiAgY29uc3QgcG9zdCA9IG5ldyBQb3N0KGRhdGEucG9zdCk7XG4gIGNvbnN0IHBvcnRmb2xpbyA9IG5ldyBQb3J0Zm9saW8oZGF0YS5wb3J0Zm9saW8pO1xuICBjb25zdCB0ZXN0aW1vbmlhbHMgPSBuZXcgVGVzdGltb25pYWxzKGRhdGEudGVzdGltb25pYWxzKTtcbiAgY29uc3QgY29udGFjdHMgPSBuZXcgQ29udGFjdHMoZGF0YS5jb250YWN0cyk7XG4gIGNvbnN0IGJsb2cgPSBuZXcgQmxvZyhkYXRhLmJsb2cpO1xuICBjb25zdCBhcnRpY2xlID0gbmV3IEFydGljbGUoZGF0YS5hcnRpY2xlKTtcblxuICBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICAgIHJldHVybiBgXG4gICAgICAke2hlYWRlci5yZW5kZXIoXCIjaG9tZVwiKX1cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25zLXdyYXBcIj5cbiAgICAgICAgICAgICR7c2VjdGlvblRvcENvbnRlbnQucmVuZGVyKCl9IFxuICAgICAgICAgICAgJHthYm91dC5yZW5kZXIoKX1cbiAgICAgICAgICAgICR7cG9zdC5yZW5kZXIoKX1cbiAgICAgICAgICAgICR7cG9ydGZvbGlvLnJlbmRlcigpfSAgXG4gICAgICAgICAgICAke3Rlc3RpbW9uaWFscy5yZW5kZXIoKX1cbiAgICAgICAgICAgICR7Y29udGFjdHMucmVuZGVyKCl9ICAgICAgICBcbiAgICAgICAgPC9kaXY+IFxuICAgICAgJHtmb290ZXIucmVuZGVyKCl9IFxuICAgIGA7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJCbG9nKCkge1xuICAgIHJldHVybiBgXG4gICAgICAke2hlYWRlci5yZW5kZXIoXCIjYmxvZ1wiKX1cbiAgICAgICR7YmxvZy5yZW5kZXIoKX0gXG4gICAgICAke2Zvb3Rlci5yZW5kZXIoKX0gXG4gICAgYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclBvc3QoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7aGVhZGVyLnJlbmRlcihcIiNwb3N0XCIpfSBcbiAgICAgICR7YXJ0aWNsZS5yZW5kZXIoKX1cbiAgICAgICR7Zm9vdGVyLnJlbmRlcigpfSBcbiAgICBgO1xuICB9XG5cblxuICBmdW5jdGlvbiByZW5kZXJQYWdlKGhyZWYpIHtcbiAgICBzd2l0Y2ggKGhyZWYpIHtcbiAgICAgIGNhc2UgXCIjYmxvZ1wiOlxuICAgICAgICBhcHBsaWNhdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSByZW5kZXJCbG9nKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIiNwb3N0XCI6XG4gICAgICAgIGFwcGxpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlclBvc3QoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFwcGxpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlckhvbWUoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJQYWdlKGxvY2F0aW9uLmhhc2gpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICByZW5kZXJQYWdlKGxvY2F0aW9uLmhhc2gpO1xuICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9