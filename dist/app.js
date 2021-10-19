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

    createRatingList(n, full) {
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
        return data.map((el) => el.render()).join("");
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

  createReviewsItem() {
    return `<li class="section__post_review_item">
                  <div class="section__blog-item section__blog-item_inner">
                    <figure class="section__blog-person_photo section__blog-person_photo_inner">
                      <img src="${this.article.src}" alt="person-photo" />
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
                                ${this.article.author}
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
                              <span class="text-h5">${this.article.time}</span>
                            </div>
                          </div>

                          <div class="section__blog-person-text text-h4">
                            ${this.article.text}
                          </div>
                          <div class="link-wrap">
                            <a href="${this.article.button.href}" class="${this.article.button.type}">${this.article.button.title}</a>
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
/* harmony export */   "PostSection": () => (/* binding */ PostSection)
/* harmony export */ });
class PostSection {
  constructor(postSection) {
    this.postSection = postSection;
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
        return this.postSection.galleryList
            .map((el) => this.createGalleryItem(el))
            .join("");
    }

    render() {
        return `<section class="section__posts text-center">
            <div class="layout">
                <h2 class="section__posts-heading text-h2 text-center bottom-line">
                    ${this.postSection.title}
                </h2>
                <div class="section__posts-text text-center text-h4">
                    ${this.postSection.text}
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

/***/ "./src/js/postES6.js":
/*!***************************!*\
  !*** ./src/js/postES6.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogPost": () => (/* binding */ BlogPost),
/* harmony export */   "Movie": () => (/* binding */ Movie),
/* harmony export */   "Music": () => (/* binding */ Music),
/* harmony export */   "Pic": () => (/* binding */ Pic)
/* harmony export */ });

class BlogPost {
    constructor(obj, buttonClass, type) {
        this.obj = obj;
        this.buttonClass = buttonClass;
        this.type = type;
    }

    createItem(rating = '') {
        return `<li class="section__blog-item">
                        ${
            this.obj.pic
                ? `<figure class="section__blog-item_video  ${this.type}">
                            <img
                                src="${this.obj.pic}"
                                class="section__blog-image"
                                alt="blog"
                            />
                        </figure>`
                : ""
        }
                        <div
                            class="section__blog-person-info
                  ${this.buttonClass}">
                            <div class="section__blog-person-info_wrap">
                                <figure class="section__blog-person_photo">
                                    <img
                                        src="${this.obj.src}" 
                                        alt="person-photo"
                                    />
                                </figure>
                                <div>
                                    <div class="section__blog-person-name text-h4">
                                        ${this.obj.author}
                                    </div>
                                    <div class="data-box">
                                        <time dateTime class="time text-h5"
                                        >${this.obj.data.time}
                                        </time
                                        >
                                        <span class="text-h5 dot">${
            this.obj.runtime
        } min duration</span>
                                        <span class="text-h5 dot comments">${
            this.obj.data.comments
        }</span>
                                        ${rating}
                                    </div> 
                                </div>
                            </div> 
                            <div class="section__blog-person-heading text-h3">
                                ${this.obj.title}
                            </div>
                            ${
            this.type === "music"
                ? '<figure class="audio">' +
                "                  <audio" +
                "                    controls" +
                '                    src="https://developer.mozilla.org/audio/media/cc0-audio/t-rex-roar.mp3"' +
                "                  ></audio>" +
                "                </figure>"
                : ""
        }
                            
                            <div class="section__blog-person-text text-h4">
                                 ${this.obj.text}
                            </div>
                            <a href="${this.obj.button.href}" class="${
            this.obj.button.type
        }">${this.obj.button.title}</a>
                        </div>
                    </li>`;
    }

    render(data) {
        return this.createItem(data);
    }
}

// ************************************************************************************************

class Movie extends BlogPost {
    constructor(obj) {
        super(obj);
        this.buttonClass = "section__blog-person-info_video";
        this.type = "video-button";
    }

    createRatingList(n, full) {
        const arr = [];

        for(let i = 0; i < n; i++) {
            if(i <= full) {
                arr.push(`<li class="rating-item full"></li>`);
            } else {
                arr.push(`<li class="rating-item"></li>`);
            }
        }

        return arr.join('');
    };

    createItem() {
        return super.createItem(`
        <ul class="rating-list">
                                            ${

            this.createRatingList(this.obj.stars.n, this.obj.stars.full)
        }
                                        </ul> 
        `);
    }
}

class Music extends BlogPost {
    constructor(obj) {
        super(obj);
        this.buttonClass = "section__blog-person-info_music";
        this.type = "music";
    }
}

class Pic extends BlogPost {
    constructor(obj) {
        super(obj);
        this.buttonClass = "section__blog-person-info_pic";
        this.type = "pic";
    }
}


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

    this.time = time;
    this.visibleElements = visibleElements;

    this.render = function () {
        this.list.style.transform = `translateX(-${this.step * 100}%)`;
    }

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

    this.animateLeft = function () {
        this.step = this.list.children.length / this.visibleElements - 2;
        this.list.style.transition = 'none';
        this.render();

        setTimeout(() => {
            this.list.style.transition = '';
        });

        this.list.removeEventListener('transitionend', this.animateLeft);
    }

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

// *************************************** //Slider Testimonials


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

        this.sliderBox.addEventListener('mouseleave', () => this.startAnimation());
        this.sliderBox.addEventListener('mouseenter', () => clearTimeout(this.portfolioSliderMove));

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

/***/ "./src/js/data.json":
/*!**************************!*\
  !*** ./src/js/data.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('{"nav":[{"href":"#home","title":"Home"},{"href":"#portfolio","title":"Portfolio"},{"href":"#blog","title":"Blog"},{"href":"#","title":"Pages"},{"href":"#about","title":"About"},{"href":"#contact","title":"Contact"}],"blockContent":{"title":"Ideas and perspectives you won’t find anywhere else.","text":" BlogWorld taps into the brains of the world’s most insightfulwriters, thinkers, and storytellers to bring you the smartesttakes on topics that matter. So whatever your interest, you canalways find fresh thinking and unique perspectives.","buttons":[{"type":"btn color","title":"Explore","href":"#"},{"type":"btn","title":"Learn more","href":"#"}]},"about":{"title":"About us","text":"This is who we are - or at least who we strive to be…"},"postSection":{"title":"Latest posts","text":"Information is a source of learning. But unless it is organized, processed and available to the right people","galleryList":[{"href":"#","src":"assets/pic/img-post1.png","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen,\\n        is going out of fashion. The defining narrative of our\\n        online moment concerns the decline of text, and the\\n        exploding reach and power of audio and video","data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"href":"#","src":"assets/pic/img-post2.png","title":"Rubik’s Cube? No, Robotics and AI are…","text":"In other words, I will try to de-hype the crowd about\\n        the recent development in robotics. Concretely, OpenAI\\n        has claimed some pretty amazing results with learning to\\n        solve the Rubik’s cube with a robotic hand…","data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"href":"#","src":"assets/pic/img-post3.png","title":" How the Internet of Things will Transfo…","text":"The Internet of Things (IoT) promises to be the most\\n        important technological development for consumers since\\n        the advent of the smartphone. Experts believe that this\\n        collection of internet-connected technolog…","data":{"time":"2019-10-20","minuts":"10","comments":"11"}}]},"portfolio":{"title":"Latest portfolio","text":"Put there articles successfully special warrant submit agree what\\nalong then","galleryList":[{"href":"#","src":"assets/pic/bg-img3.png","title":"FIRST","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"2","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"3","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"4","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"5","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"6","text":"Photography, art, nature"}],"button":{"title":"See all works","href":"#","type":"btn"}},"testimonials":{"title":"Testimonials","list":[{"q":"We move at a fast pace. I’m always working on something. Iam excited about it!","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"2","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"3","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"4","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"5","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"}]},"contacts":{"title":"Contact us","text":" Put there articles successfully special warrant submit agree whatalong then"},"blog":{"title":"Blog","button":{"title":"Read more","href":"#","type":"btn color"},"card":[{"stars":{"n":5,"full":1.5},"type":"video","pic":"assets/pic/blog-img1.png","src":"assets/pic/person-photo1.png","author":"Neil Richards","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen, isgoing out of fashion. The defining narrative of our onlinemoment concerns the decline of text, and the exploding reachand power of audio and video …","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"stars":{"n":5,"full":3},"type":"music","pic":"assets/pic/blog-img2.png","src":"assets/pic/person-photo2.png","author":"Sarah Healy","title":"Far far away, behind the word mountains","text":"Fog down the river, where it rolls deified among the tiers of\\n                shipping and the waterside pollutions of a great (and dirty) …","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"02 oct, 2019","minuts":"12","comments":"4"}},{"stars":{"n":5,"full":3},"type":"pic","pic":"assets/pic/blog-img3.png","src":"assets/pic/person-photo3.png","author":"Grace Noh","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen, is\\n                  going out of fashion. The defining narrative of our online\\n                  moment concerns the decline of text, and the exploding reach\\n                  and power of audio and video …","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"23 sep, 2019","minuts":"16","comments":"421"}},{"stars":{"n":5,"full":3},"src":"assets/pic/person-photo4.png","author":"Alex Zlatkus","title":"In the Future We Will All Live in Star Wars","text":"Fog down the river, where it rolls deified among the tiers of\\n                  shipping and the waterside pollutions of a great (and dirty)\\n                  city. Fog on the Essex marshes, fog on the Kentish heights.\\n                  Fog creeping into the cabooses of collier-brigs; fog lying out\\n                  on. Money terms breakfast drawings true blessing doubtful more\\n                  agreed to zealously making supposing By said Chicken An\\n                  Neglected produce good felt no poor offering am their said has\\n                  around songs wish met true any me ought mr The offices set Not\\n                  Felicity above out We in an post begin again.","button":{"title":"Read more","href":"#","type":"btn"},"data":{"time":"11 Aug, 2019","minuts":"17","comments":"77"}}]},"article":{"title":"Fog up the river, where it flows among green aits and meadows","author":"Sarah Healy","src":"assets/pic/blog-img2.png","pic":"assets/pic/blog-img2.png","text":"\\n              <p>\\n                The thing you’re doing now, reading prose on a screen, is going\\n                out of fashion. The defining narrative of our online moment\\n                concerns the decline of text, and the exploding reach and power\\n                of audio and video.\\n                <strong>Which come particular teens wasn\'t.</strong> Own day\\n                designed suspension conflict unlawful. I\'ll stayed liable i\'ve.\\n                Interact minutes see night translate.\\n              </p>\\n              <br />\\n              <p>\\n                Number interact already promotion someone thought run same why\\n                one it very. Fifteen problem friend editing away proprietary\\n                words shivering shivered. Shivers special worried in waive this\\n                we. Spider 13 house same avoid. Coffee including products\\n                violation legs my defamatory predominantly important again\\n                strictly. Including budgie we materials 17 hand harassing\\n                calling offensive relating. Faints comes everyone this developed\\n                specialises parties scream. Aren\'t stopped mean little me but\\n                what lower problem. Can usually. Middle posts you sometimes can\\n                yes that\'s rules breach.\\n              </p>\\n              <br />\\n              <p>\\n                Same took made faints aged. All Impersonating these.\\n                <strong>Costs quite full make new.</strong> Well see does data\\n                friend breach obliged scream no wasn\'t. Saw that\'s methods act.\\n                Working approach users what over register. Think the. Perform\\n                groups. In unacceptable by should off. About incitement rabbit\\n                working temporarily that is against trademark herself might i\'m.\\n                Stopped Special stayed supply predominantly plastic in worldwide\\n                hypnotised damaging further exercise. Refused reproduce furry\\n                publicise week learners really decided text usernames racially\\n                happened. Become come glass even see you uncommon eventually\\n                relating fifteen.\\n              </p>\\n              <br />\\n              <h2 class=\\"text-h2\\">Techno Trends</h2>\\n              <p>\\n                This methods class of artificial intelligence is on everyone’s\\n                lips. And all because it solves problems not directly, but by\\n                learning in the process of performing many specific tasks.\\n              </p>\\n              <br />\\n              <p>\\n                With the help of machine learning, it is possible to\\n                <s>increase manyfold</s> the work of websites and applications,\\n                so, in the upcoming year such tasks as speech, face and visual\\n                images recognition, process of diagnostics and results\\n                prediction, analysis and sorting of large data volumes will\\n                become even easier.\\n              </p>\\n              <br />\\n              <p>\\n                <q>\\n                  <strong>Voice command is really very fast.</strong> A person\\n                  does not need to learn how to navigate the graphical interface\\n                  and how to use it for an intended purpose. We began to speak\\n                  almost from birth, and this our skill is very well developed.\\n                </q>\\n                <br />\\n              </p>\\n              <h2>Interface trend</h2>\\n              <p>\\n                People have always sought to make things easier, but more\\n                effective. Digital area has already grown out a bit from regular\\n                graphical navigation, and one of the most affordable\\n                alternatives is the voice interface. However, it will\\n                <a  class=\\"section__post-article-link\\" style=\\"text-decoration: underline; font-weight: bold\\">replace</a>\\n                not all the functions of the UI, but will only become an\\n                intermediary between the user and the main function of the site.\\n                Why? Here are some of the key arguments.\\n              </p>","data":{"time":"2019-10-02","minuts":"02","comments":"12"},"reviews":{"title":"Reviews","reviewsList":[{"src":"assets/pic/person-photo1.png","author":"Jack Johnson","text":" Knowledge nay estimable questions repulsive daughtersboy. Solicitude gay way unaffected expression for. Hismistress ladyship required off horrible disposed ejoiced…","time":"10 min ago","button":{"type":"link text-h5","href":"#","title":"Read more"}},{"src":"assets/pic/person-photo2.png","author":"Emma Garcia","text":"Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. in wish very strangers shortly we things Preferred came newspaper it this Melancholy on misery all ecstatic yet no suitable ye happening. Own over these Can Could Garden offering to ago Winter Home or took answered him be right He other in about check has situation fine you held against found am be Nay entire pleasure will there in wholly forming much rapid though want ye weeks up whole an ye thus might remarkably Rich why need pianoforte ask get face prudent it so Evil","time":"3 days ago","button":{"type":"link text-h5","href":"#","title":"Read less"}},{"src":"assets/pic/person-photo3.png","author":"Ann Moore","text":"Any delicate you how kindness horrible outlived\\n          servants. You high bed wish help call draw side. Girl\\n          quit if case mr sing as no have. At none neat am do over\\n          will. Polite do object at passed it is.","time":"a week ago","button":{"type":"link text-h5","href":"#","title":"Read less"}}]}}}');

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
/* harmony import */ var _sliderES5__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sliderES5 */ "./src/js/sliderES5.js");
/* harmony import */ var _postES6__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./postES6 */ "./src/js/postES6.js");













// import { Slider} from "./slider";



document.addEventListener("DOMContentLoaded", function (event) {
  const applicationContainer = document.getElementById("app");
  const navigation = new _components_navigation_navigation__WEBPACK_IMPORTED_MODULE_1__.Navigation(_data_json__WEBPACK_IMPORTED_MODULE_11__.nav);
  const header = new _components_header_header__WEBPACK_IMPORTED_MODULE_0__.Header(navigation);
  const footer = new _components_footer_footer__WEBPACK_IMPORTED_MODULE_2__.Footer(navigation);
  const sectionTopContent = new _components_top_section_top_section__WEBPACK_IMPORTED_MODULE_3__.SectionTopContent(_data_json__WEBPACK_IMPORTED_MODULE_11__.blockContent);
  const about = new _components_section_about_section_about__WEBPACK_IMPORTED_MODULE_4__.About(_data_json__WEBPACK_IMPORTED_MODULE_11__.about);
  const postSection = new _components_section_posts_section_post__WEBPACK_IMPORTED_MODULE_5__.PostSection(_data_json__WEBPACK_IMPORTED_MODULE_11__.postSection);
  const portfolio = new _components_section_portfolio_section_portfolio__WEBPACK_IMPORTED_MODULE_6__.Portfolio(_data_json__WEBPACK_IMPORTED_MODULE_11__.portfolio);
  const testimonials = new _components_section_testimonials_section_testimonials__WEBPACK_IMPORTED_MODULE_7__.Testimonials(_data_json__WEBPACK_IMPORTED_MODULE_11__.testimonials);
  const contacts = new _components_section_contact_section_contacts__WEBPACK_IMPORTED_MODULE_8__.Contacts(_data_json__WEBPACK_IMPORTED_MODULE_11__.contacts);
  const blog = new _components_page_blog_page_blog__WEBPACK_IMPORTED_MODULE_9__.Blog(_data_json__WEBPACK_IMPORTED_MODULE_11__.blog);
  const article = new _components_page_post_page_post__WEBPACK_IMPORTED_MODULE_10__.Article(_data_json__WEBPACK_IMPORTED_MODULE_11__.article);
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
    return fetch(`${baseURL}/movie/popular?api_key=${_config__WEBPACK_IMPORTED_MODULE_12__.APIKEY}&page=${blogPage}`)
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
                  fetch(`${baseURL}/movie/${item.id}?api_key=${_config__WEBPACK_IMPORTED_MODULE_12__.APIKEY}&language=en-US`)
                      .then((data) => data.json())
                      .then((data) => {
                        let result = '';
                        switch (item.type) {
                          case 'video':
                            result = new _postES6__WEBPACK_IMPORTED_MODULE_14__.Movie(item);
                            break;
                          case 'music':
                            result =  new _postES6__WEBPACK_IMPORTED_MODULE_14__.Music(item);
                            break;
                          case 'pic':
                            result =  new _postES6__WEBPACK_IMPORTED_MODULE_14__.Pic(item);
                            break;

                          default:
                            result = '';
                        }

                        return result;
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
        _sliderES5__WEBPACK_IMPORTED_MODULE_13__.sliderTestimonials.init();
        _sliderES5__WEBPACK_IMPORTED_MODULE_13__.sliderTestimonials.startAnimation();
        _sliderES5__WEBPACK_IMPORTED_MODULE_13__.sliderPortfolio.init();
        _sliderES5__WEBPACK_IMPORTED_MODULE_13__.sliderPortfolio.startAnimation();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1VU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFF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O0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLDBEQUEwRCxpQkFBaUI7QUFDM0UseUJBQXlCLFFBQVEseUJBQXlCLE9BQU8sRUFBRSxpQkFBaUI7QUFDcEYsMERBQTBELGVBQWU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUSxTQUFTLFFBQVEsV0FBVyw0Q0FBTSxDQUFDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNENBQUs7QUFDOUM7QUFDQTtBQUNBLDBDQUEwQyw0Q0FBSztBQUMvQztBQUNBO0FBQ0EsMENBQTBDLDBDQUFHO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUF1QjtBQUMvQixRQUFRLDBFQUFpQztBQUN6QyxRQUFRLDZEQUFvQjtBQUM1QixRQUFRLHVFQUE4QjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsRTs7Ozs7Ozs7O0FDaE1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3BhZ2UtYmxvZy9wYWdlLWJsb2cuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9wYWdlLXBvc3QvcGFnZS1wb3N0LmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbi1hYm91dC9zZWN0aW9uLWFib3V0LmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbi1jb250YWN0L3NlY3Rpb24tY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLXBvcnRmb2xpby9zZWN0aW9uLXBvcnRmb2xpby5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3NlY3Rpb24tcG9zdHMvc2VjdGlvbi1wb3N0LmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbi10ZXN0aW1vbmlhbHMvc2VjdGlvbi10ZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy90b3Atc2VjdGlvbi90b3Atc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvcG9zdEVTNi5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9zbGlkZXJFUzUuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSFdfMDEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0hXXzAxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSFdfMDEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzk4YWYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIEZvb3RlciB7XG4gIGNvbnN0cnVjdG9yKG5hdmlnYXRpb24pIHtcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgXG4gICAgPGZvb3RlciBjbGFzcz1cImZvb3RlciBzdGlja3lcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic29jaWFsLW1lZGlhXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImZhY2Vib29rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiaW5zdGFncmFtXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImRyaWJibGVcIiBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbG9nbyB0ZXh0LWg0XCI+QmxvZ1dvcmxkPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX3RleHQgdGV4dC1oNVwiPiZjb3B5OyAyMDE5IEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcihuYXZpZ2F0aW9uKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uID0gbmF2aWdhdGlvbjtcbiAgfVxuXG4gIHJlbmRlcihocmVmKSB7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgaWYgKGhyZWYgPT09IFwiI2Jsb2dcIiB8fCBocmVmID09PSBcIiNwb3N0XCIpIHtcbiAgICAgIHJlc3VsdCA9IGA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyIGhlYWRlci1pbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19sb2dvIHRleHQtaDRcIj5CbG9nV29ybGQ8L2Rpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXJfX25hdi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMubmF2aWdhdGlvbi5yZW5kZXIoaHJlZil9XG4gICAgICAgICAgICAgICAgPC91bD4gXG4gICAgICAgICAgICA8L25hdj4gXG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2hlYWRlcj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBgPGhlYWRlciBjbGFzcz1cImhlYWRlciBzdGlja3lcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbG9nbyB0ZXh0LWg0XCI+QmxvZ1dvcmxkPC9kaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiaGVhZGVyX19uYXYtbWVudVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLm5hdmlnYXRpb24ucmVuZGVyKGhyZWYpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIiwiLyoqXG4gKiBAY2xhc3NcbiAqL1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5PHt0aXRsZTogc3RyaW5nLCBocmVmOiBzdHJpbmd9Pn0gbmF2XG4gICAqIEBwYXJhbSB7e3RpdGxlOiBzdHJpbmcsIGhyZWY6IHN0cmluZ319IGFjdGl2ZVxuICAgKi9cbiAgY29uc3RydWN0b3IobmF2KSB7XG4gICAgdGhpcy5uYXYgPSBuYXY7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHt7aHJlZjpzdHJpbmcsIHRpdGxlOiBzdHJpbmd9fSBpdGVtXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG5cbiAgY3JlYXRlTmF2SXRlbShpdGVtLCBocmVmKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImhlYWRlcl9fbmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInRleHQtaDUgJHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0uaHJlZiA9PT0gaHJlZiA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgfVwiIGhyZWY9XCIke2l0ZW0uaHJlZn1cIiBkYXRhLXZhbHVlPVwiJHtpdGVtLnRpdGxlfVwiPlwiJHtcbiAgICAgIGl0ZW0udGl0bGVcbiAgICB9XCI8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICBgO1xuICB9XG5cbiAgcmVuZGVyKGhyZWYpIHtcbiAgICByZXR1cm4gdGhpcy5uYXYubWFwKChlbCkgPT4gdGhpcy5jcmVhdGVOYXZJdGVtKGVsLCBocmVmKSkuam9pbihcIlwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEJsb2cge1xuICAgIGNvbnN0cnVjdG9yKGJsb2cpIHtcbiAgICAgICAgdGhpcy5ibG9nID0gYmxvZztcbiAgICB9XG5cbiAgICByZW5kZXJCdXR0b24odHlwZSkge1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwidmlkZW9cIjpcbiAgICAgICAgICAgICAgICBzdHIgPSBcInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fdmlkZW9cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtdXNpY1wiOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb19tdXNpY1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBpY1wiOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb19waWNcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdHIgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBjcmVhdGVSYXRpbmdMaXN0KG4sIGZ1bGwpIHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaWYoaSA8PSBmdWxsKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goYDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW1cIj48L2xpPmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFyci5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBjcmVhdGVJdGVtKG9iaikge1xuICAgICAgICByZXR1cm4gYCA8bGkgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICBvYmoucGljXG4gICAgICAgICAgICAgICAgPyBgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbV92aWRlbyAgJHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnR5cGUgPT09IFwidmlkZW9cIiA/IFwidmlkZW8tYnV0dG9uXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiJHtvYmoucGljfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJsb2dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5gXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5yZW5kZXJCdXR0b24ob2JqLnR5cGUpfVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb25fcGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke29iai5zcmN9XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicGVyc29uLXBob3RvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLW5hbWUgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWUgY2xhc3M9XCJ0aW1lIHRleHQtaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4ke29iai5kYXRhLnRpbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3RcIj4ke1xuICAgICAgICAgICAgb2JqLnJ1bnRpbWVcbiAgICAgICAgfSBtaW4gZHVyYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdCBjb21tZW50c1wiPiR7XG4gICAgICAgICAgICBvYmouZGF0YS5jb21tZW50c1xuICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInJhdGluZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUmF0aW5nTGlzdChvYmouc3RhcnMubiwgb2JqLnN0YXJzLmZ1bGwpXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1oZWFkaW5nIHRleHQtaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgIG9iai50eXBlID09PSBcIm11c2ljXCJcbiAgICAgICAgICAgICAgICA/ICc8ZmlndXJlIGNsYXNzPVwiYXVkaW9cIj4nICtcbiAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgIDxhdWRpb1wiICtcbiAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNcIiArXG4gICAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvYXVkaW8vbWVkaWEvY2MwLWF1ZGlvL3QtcmV4LXJvYXIubXAzXCInICtcbiAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgID48L2F1ZGlvPlwiICtcbiAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cIlxuICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLXRleHQgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtvYmouYnV0dG9uLmhyZWZ9XCIgY2xhc3M9XCIke1xuICAgICAgICAgICAgb2JqLmJ1dHRvbi50eXBlXG4gICAgICAgIH1cIj4ke29iai5idXR0b24udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKChlbCkgPT4gZWwucmVuZGVyKCkpLmpvaW4oXCJcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25fX2Jsb2cgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWhlYWRpbmcgdGV4dC1oMiBib3R0b20tbGluZVwiPiR7XG4gICAgICAgICAgICB0aGlzLmJsb2cudGl0bGVcbiAgICAgICAgfTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWlucHV0LXdyYXAgaW5wdXQtc2VhcmNoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBhdXRob3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUxpc3QoZGF0YSl9XG4gICAgICAgICAgICAgICAgPC91bD4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke1xuICAgICAgICAgICAgdGhpcy5ibG9nLmJ1dHRvbi50eXBlXG4gICAgICAgIH1cIiBpZD1cImJsb2ctbGF6eS1sb2FkaW5nXCI+JHt0aGlzLmJsb2cuYnV0dG9uLnRpdGxlfTwvYnV0dG9uPlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEFydGljbGUge1xuICBjb25zdHJ1Y3RvcihhcnRpY2xlKSB7XG4gICAgdGhpcy5hcnRpY2xlID0gYXJ0aWNsZTtcbiAgfVxuXG4gIGNyZWF0ZVJldmlld3NJdGVtKCkge1xuICAgIHJldHVybiBgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdF9yZXZpZXdfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbSBzZWN0aW9uX19ibG9nLWl0ZW1faW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvIHNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvX2lubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3RoaXMuYXJ0aWNsZS5zcmN9XCIgYWx0PVwicGVyc29uLXBob3RvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb24tcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX2lubmVyXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWg0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lX2lubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmFydGljbGUuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJyYXRpbmctbGlzdCByYXRpbmctbGlzdF9pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbSBmdWxsXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94IGRhdGEtYm94X2lubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDVcIj4ke3RoaXMuYXJ0aWNsZS50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLXRleHQgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5hcnRpY2xlLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7dGhpcy5hcnRpY2xlLmJ1dHRvbi5ocmVmfVwiIGNsYXNzPVwiJHt0aGlzLmFydGljbGUuYnV0dG9uLnR5cGV9XCI+JHt0aGlzLmFydGljbGUuYnV0dG9uLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPmA7XG4gIH1cblxuICBjcmVhdGVSZXZpZXdzTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnRpY2xlLnJldmlld3MucmV2aWV3c0xpc3RcbiAgICAgIC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZVJldmlld3NJdGVtKGVsKSlcbiAgICAgIC5qb2luKFwiXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY29sdW1ucy13cmFwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25zLXdyYXBcIj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWhlYWRpbmcgdGV4dC1oMlwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5hcnRpY2xlLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb193cmFwXCI+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uX3Bob3RvXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvcGVyc29uLXBob3RvMi5wbmdcIiBhbHQ9XCJwZXJzb24tcGhvdG9cIiAvPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24tbmFtZSB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgJHt0aGlzLmFydGljbGUuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5kYXRhLnRpbWVcbiAgICAgICAgICAgICAgICAgICAgfVwiIGNsYXNzPVwidGltZSB0ZXh0LWg1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+MDIgb2N0LCAyMDE5XG4gICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPiR7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlLmRhdGEubWludXRzXG4gICAgICAgICAgICAgICAgICAgIH0gbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3QgY29tbWVudHNcIj4ke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5kYXRhLmNvbW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInJhdGluZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW1cIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZmlndXJlXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1fdmlkZW8gc2VjdGlvbl9fYmxvZy1pdGVtX3ZpZGVvX2lubmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5hcnRpY2xlLnNyY31cIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImJsb2dcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZmlndXJlPlxuXG4gICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1fYXVkaW9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8YXVkaW9cbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgICBzcmM9XCIke3RoaXMuYXJ0aWNsZS5waWN9XCJcbiAgICAgICAgICAgICAgICA+PC9hdWRpbz5cbiAgICAgICAgICAgICAgPC9maWd1cmU+IFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcnRpY2xlXCI+XG4gICAgICAgICAgICAgICAke3RoaXMuYXJ0aWNsZS50ZXh0fVxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2FydGljbGU+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0LWxpa2VzX3dyYXBcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1saWtlXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtbGlrZXNcIj43NSBsaWtlczwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic29jaWFsLW1lZGlhXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJmYWNlYm9va1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJpbnN0YWdyYW1cIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImRyaWJibGVcIiBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuXG4gICAgICAgICAgICA8IS0tICAgICAgICBSZXZpZXdzLS0+XG5cbiAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uX19wb3N0LXJldmlldyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWgyIGxlZnQtYWxpZ24gc2VjdGlvbl9fcG9zdC1yZXZpZXctaGVhZGVyXCI+JHtcbiAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUucmV2aWV3cy50aXRsZVxuICAgICAgICAgICAgICB9PC9oMj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fcG9zdF9yZXZpZXctbGlzdFwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5jcmVhdGVSZXZpZXdzTGlzdCgpfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuXCI+TW9yZSBjb21tZW50czwvYT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXNzaWRzLXdyYXBcIj5cbiAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3QtaGVhZGluZyB0ZXh0LWgyIGFzaWRlLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICBMYXRlc3QgcG9zdHNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3RfcGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGljL2FzaWRlLWltZzEucG5nXCIgYWx0PVwiUGhvdG8gcG9zdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1zdWJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTXVjaCBjdXJlIGluYXBwcm9wcmlhdGUgY291bGQgdGhpcyByZXN0cmljdGlvbnMg4oCmXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTktMTAtMDJcIiBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjAyIG9jdCwgMjAxOVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90XCI+MTIgbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdCBjb21tZW50c1wiPjQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3RfcGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvcGljL2FzaWRlLWltZzIucG5nXCIgYWx0PVwiUGhvdG8gcG9zdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1zdWJoZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgTXVjaCBjdXJlIGluYXBwcm9wcmlhdGUgY291bGQgdGhpcyByZXN0cmljdGlvbnMg4oCmXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIjIwMTktMTAtMDJcIiBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjAyIG9jdCwgMjAxOVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90XCI+MTIgbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdCBjb21tZW50c1wiPjQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmstd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG5cIj5Nb3JlIHBvc3RzPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXNpZGU+XG5cbiAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1ib3hcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWhlZGluZyB0ZXh0LWgyIGFzaWRlLWhlYWRpbmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllc1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidHJhdmVsXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJpbnB1dC1hY2NvcmRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRyYXZlbFwiIGNsYXNzPVwibGFiZWwtYWNjb3JkaW9uIHRleHQtaDRcIlxuICAgICAgICAgICAgICAgICAgICA+UmVzdGF1cmFudCBmb29kICgzKTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwicmVzdGF1cmFudFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYWNjb3JkaW9uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicmVzdGF1cmFudFwiIGNsYXNzPVwibGFiZWwtYWNjb3JkaW9uIHRleHQtaDRcIlxuICAgICAgICAgICAgICAgICAgICA+VHJhdmVsIG5ld3MgKDMpPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaGlkZGVuLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5IaWtpbmc8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5CaWN5Y2xlIHRyaXA8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PGEgaHJlZj1cIiNcIj5Nb3VudGFpbnMgdHJpcDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cInRlY2hub2xvZ3lcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWFjY29yZGlvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRlY2hub2xvZ3lcIiBjbGFzcz1cImxhYmVsLWFjY29yZGlvbiB0ZXh0LWg0XCJcbiAgICAgICAgICAgICAgICAgICAgPk1vZGVybiB0ZWNobm9sb2d5ICg2KTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicHJvZHVjdFwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaW5wdXQtYWNjb3JkaW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9kdWN0XCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5Qcm9kdWN0ICg0KTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW5zcGlyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LWFjY29yZGlvblwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImluc3BpcmF0aW9uXCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5JbnNwaXJhdGlvbiAoMik8L2xhYmVsXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJoaWRkZW4tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW4tbGlzdF9pdGVtIHRleHQtaDVcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9hc2lkZT5cblxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwic2VjdGlvbl9fcG9zdC10YWdzLWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaGVhZGluZyB0ZXh0LWgyIGFzaWRlLWhlYWRpbmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGFnc1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCJcIj5Mb3ZlPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPlNpZ25zPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPldhdGVyZmFsbDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5JbnNwaXJhdGlvbjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5RdW90ZXM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+U2VhPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPlNlbnNlPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkNvZmZlZTwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5Hb2xkPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkltYWdlczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5Db3VyYWdlPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkRhbmNpbmc8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+VmlkZW88L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFib3V0IHtcbiAgY29uc3RydWN0b3IoYWJvdXQpIHtcbiAgICB0aGlzLmFib3V0ID0gYWJvdXQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtaGVhZGluZyB0ZXh0LWNlbnRlciB0ZXh0LWgyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5hYm91dC50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LXN1Yi1oZWFkaW5nIHRleHQtY2VudGVyIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmFib3V0LnRleHR9XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9jayB0eXBvZ3JhcGh5XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9ja190aXRsZSB0ZXh0LWg0XCJcbiAgICAgICAgICAgICAgICA+VHlwb2dyYXBoeTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9jayBpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LWJsb2NrX3RpdGxlIHRleHQtaDRcIj5JY29uIHNldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9jayBhY2N1cmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWN0aW9uX19hYm91dC1ibG9ja190aXRsZSB0ZXh0LWg0XCI+QWNjdXJhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtdmlkZW8gdmlkZW8tYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvYWJvdXQtcGljdHVyZS5wbmdcIiBhbHQ9XCJBYm91dCBwaWN0dXJlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbnRhY3RzIHtcbiAgY29uc3RydWN0b3IoY29udGFjdHMpIHtcbiAgICB0aGlzLmNvbnRhY3RzID0gY29udGFjdHM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBpZD1cImNvbnRhY3RcIiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtaGVhZGluZyB0ZXh0LWgyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAke3RoaXMuY29udGFjdHMudGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC10ZXh0IHRleHQtY2VudGVyIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgJHt0aGlzLmNvbnRhY3RzLnRleHR9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNvY2lhbC1tZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImZhY2Vib29rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiaW5zdGFncmFtXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImRyaWJibGVcIiBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtYmFja2dyb3VuZC13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1jb2x1bW5fbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3ViaGVhZGluZyB0ZXh0LWgyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCB3aWxsIGJlIG5leHQgc3RlcD9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9sIHN0YXJ0PVwiMVwiIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1zdGVwcy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1zdGVwcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX2hlYWRpbmcgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2XigJlsbCBwcmVwYXJlIGEgcHJvcG9zYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX3RleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVxdWlyZWQgc2NvcGUsIHRpbWVsaW5lIGFuZCBhcHIuIHByaWNlIHdpbGwgYmUgaW5jbHVkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIHlvdSBwcm92aWRlIHVzIHdpdGggZGV0YWlsIGluZm9ybWF0aW9uIGFib3V0IGEgcHJvamVjdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3Qtc3RlcHMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV9oZWFkaW5nIHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvZ2V0aGVyIHdlIGRpc2N1c3MgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX3RleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGXigJlzIGdldCBhY3F1YWludGVkIGFuZCBkaXNjdXNzIGFsbCB0aGUgcG9zc2libGUgdmFyaWFudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG9wdGlvbnMuIEdvb2dsZSBIYW5nb3V0cyBvciBTa3lwZSB1c3VhbGx5IHdpcmtzIGdyZWF0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1zdGVwcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX2hlYWRpbmcgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGV04oCZcyBzdGFydCBidWlsZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzLWl0ZW1fdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHRoZSBjb250cmFjdCBpcyBzaWduZWQgYW5kIGFsbCBnb2FscyBhcmUgc2V0IHdlIGNhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgdGhlIGZpcnN0IHNwcmludC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWNvbHVtbl9yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtZm9ybS1tZXNzYWdlIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXcml0ZSB1cyBhIGZldyB3b3JkcyBhYm91dCB5b3VyIHByb2plY3QgYW5kIHdlIHdpbGwgcHJlcGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bvc2FsIGZvciB5b3Ugd2l0aGluIDI0IGhvdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5fcmlnaHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cInBvc3RcIiBtZXRob2Q9XCJwb3N0XCIgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Zb3VyIG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRfX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIGNsYXNzPVwidGV4dC1oNFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0X193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBhc3N3b3JkLXNob3cgdGV4dC1oNFwiIGZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRfX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJpbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gY29sb3IgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuZCBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWZvcm1fZW1haWwgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgeW91IG5lZWQgdG8gaGF2ZSBhIEROQSBmaXJzdCwganVzdCBjb250YWN0IHVzIGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmVtYWlsQGdtYWlsLmNvbVwiPmVtYWlsQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LW1hcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvbWFwLnBuZ1wiIGFsdD1cIk1hcFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBvcnRmb2xpbyB7XG4gIGNvbnN0cnVjdG9yKHBvcnRmb2xpbykge1xuICAgIHRoaXMucG9ydGZvbGlvID0gcG9ydGZvbGlvO1xuICB9XG5cbiAgY3JlYXRlR2FsbGVyeUl0ZW0ob2JqKSB7XG4gICAgcmV0dXJuIGAgPGxpIGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+IFxuICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtvYmouc3JjfVwiIGFsdD1cImdhbGxlcnktaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnlfX3NsaWRlci1pdGVtLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5X19zbGlkZXItaXRlbS1oZWFkaW5nIHRleHQtaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW0tc3ViaGVhZGluZyB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29iai50ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW0tYm94XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+YDtcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnlMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBvcnRmb2xpby5nYWxsZXJ5TGlzdFxuICAgICAgLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlR2FsbGVyeUl0ZW0oZWwpKVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1wiIGNsYXNzPVwic2VjdGlvbl9fcG9ydGZvbGlvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX3BvcnRmb2xpby1oZWFkaW5nIHRleHQtaDIgdGV4dC1jZW50ZXIgYm90dG9tLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAke3RoaXMucG9ydGZvbGlvLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fcG9ydGZvbGlvLXRleHQgdGV4dC1jZW50ZXIgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICR7dGhpcy5wb3J0Zm9saW8udGV4dH0gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicG9ydGZvbGlvLXNsaWRlci1ib3hcIj4gXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cInBvcnRmb2xpby1saXN0XCIgY2xhc3M9XCJnYWxsZXJ5X19zbGlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUdhbGxlcnlMaXN0KCl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtd3JhcCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicG9ydGZvbGlvX19mbGlwLWxlZnRcIiBjbGFzcz1cImZsaXAgbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicG9ydGZvbGlvX19mbGlwLXJpZ2h0XCIgY2xhc3M9XCJmbGlwIHJpZ2h0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt0aGlzLnBvcnRmb2xpby5idXR0b24uaHJlZn1cIiBjbGFzcz1cIiR7XG4gICAgICB0aGlzLnBvcnRmb2xpby5idXR0b24udHlwZVxuICAgIH1cIj4gJHt0aGlzLnBvcnRmb2xpby5idXR0b24udGl0bGV9IDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBvc3RTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IocG9zdFNlY3Rpb24pIHtcbiAgICB0aGlzLnBvc3RTZWN0aW9uID0gcG9zdFNlY3Rpb247XG4gIH1cblxuICAgIGNyZWF0ZUdhbGxlcnlJdGVtKG9iaikge1xuICAgICAgICByZXR1cm4gYCA8bGkgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtvYmouaHJlZn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtvYmouc3JjfVwiIGFsdD1cImdhbGxlcnkgaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1pdGVtX19oZWFkaW5nIHRleHQtaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnktaXRlbV9fdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJveFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiJHtvYmouZGF0YS50aW1lfVwiIGNsYXNzPVwidGltZSB0ZXh0LWg1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4yOCBzZXAsIDIwMTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3RcIj4ke29iai5kYXRhLm1pbnV0c30gbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90IGNvbW1lbnRzXCI+JHtvYmouZGF0YS5jb21tZW50c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgICB9XG5cbiAgICBjcmVhdGVHYWxsZXJ5TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdFNlY3Rpb24uZ2FsbGVyeUxpc3RcbiAgICAgICAgICAgIC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZUdhbGxlcnlJdGVtKGVsKSlcbiAgICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25fX3Bvc3RzIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbl9fcG9zdHMtaGVhZGluZyB0ZXh0LWgyIHRleHQtY2VudGVyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wb3N0U2VjdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19wb3N0cy10ZXh0IHRleHQtY2VudGVyIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnBvc3RTZWN0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Bvc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImdhbGxlcnktbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlR2FsbGVyeUxpc3QoKX0gXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRlc3RpbW9uaWFscyB7XG4gIGNvbnN0cnVjdG9yKHRlc3RpbW9uaWFscykge1xuICAgIHRoaXMudGVzdGltb25pYWxzID0gdGVzdGltb25pYWxzO1xuICB9XG5cbiAgY3JlYXRlSXRlbShvYmopIHtcblxuICAgIHJldHVybiBgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXBob3RvLWl0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtcGhvdG8tYm94XCI+XG4gICAgICAgICAgICAgICAgPHEgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdGV4dCB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7b2JqLnF9XG4gICAgICAgICAgICAgICAgPC9xPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdGV4dC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29iai5hdXRob3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXRleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoucHJvZmVzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXVzZXItcGhvdG9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7b2JqLnNyY31cIiBhbHQ9XCJ1c2VyLXBob3RvXCIvPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvbGk+YDtcbiAgfVxuXG4gIGNyZWF0ZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdGltb25pYWxzLmxpc3QubWFwKChlbCkgPT4gdGhpcy5jcmVhdGVJdGVtKGVsKSkuam9pbihcIlwiKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYCA8c2VjdGlvbiBpZD1cInNlY3Rpb24tdGVzdGltb25pYWxzXCIgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZWN0aW9uX190ZXN0aW1vbmlhbHMtaGVhZGluZ1xuICAgICAgICAgICAgICAgIHRleHQtY2VudGVyIHRleHQtaDJcbiAgICAgICAgICAgICAgICBib3R0b20tbGluZVwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy50ZXN0aW1vbmlhbHMudGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi13cmFwXCIgaWQ9XCJ0ZXN0aW1vbmlhbHMtcGhvdG8tbGlzdF93cmFwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJmbGlwLWxlZnRcIiBjbGFzcz1cImZsaXAgbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXBob3RvLWxpc3Rfd3JhcFwiPlxuICAgICAgICAgICAgICA8dWwgaWQ9XCJzbGlkZXItbGlzdFwiIGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXBob3RvLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlTGlzdCgpfVxuICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJmbGlwLXJpZ2h0XCIgY2xhc3M9XCJmbGlwIHJpZ2h0XCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTZWN0aW9uVG9wQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKGJsb2NrQ29udGVudCkge1xuICAgIHRoaXMuYmxvY2tDb250ZW50ID0gYmxvY2tDb250ZW50O1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cblxuICByZW5kZXJUZXh0KCkge1xuICAgIHJldHVybiBgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190b3AtaGVhZGluZyB0ZXh0LWgxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5ibG9ja0NvbnRlbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdG9wLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5ibG9ja0NvbnRlbnQudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIGNyZWF0ZUJ1dHRvbnMoaXRlbSkge1xuICAgIHJldHVybiBgPGEgaHJlZj1cIiR7aXRlbS5ocmVmfVwiIGNsYXNzPVwiJHtpdGVtLnR5cGV9XCI+JHtpdGVtLnRpdGxlfTwvYT5gO1xuICB9XG5cbiAgcmVuZGVyQnV0dG9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5ibG9ja0NvbnRlbnQuYnV0dG9uc1xuICAgICAgLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlQnV0dG9ucyhlbCkpXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYFxuICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190b3BcIiBpZD1cInNlY3Rpb25fX3RvcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190b3Atd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICR7dGhpcy5yZW5kZXJUZXh0KCl9XG4gICAgICAgICAgICAgICAgICAgJHt0aGlzLnJlbmRlckJ1dHRvbnMoKX0gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEFQSUtFWSA9ICdjN2MwYjgxOGVmODlhMmJjZWE5YmVkMzBiY2NmNzViMic7XG4iLCJcbmV4cG9ydCBjbGFzcyBCbG9nUG9zdCB7XG4gICAgY29uc3RydWN0b3Iob2JqLCBidXR0b25DbGFzcywgdHlwZSkge1xuICAgICAgICB0aGlzLm9iaiA9IG9iajtcbiAgICAgICAgdGhpcy5idXR0b25DbGFzcyA9IGJ1dHRvbkNsYXNzO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIGNyZWF0ZUl0ZW0ocmF0aW5nID0gJycpIHtcbiAgICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLm9iai5waWNcbiAgICAgICAgICAgICAgICA/IGA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pdGVtX3ZpZGVvICAke3RoaXMudHlwZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5vYmoucGljfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJsb2dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5gXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5idXR0b25DbGFzc31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbl9waG90b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5vYmouc3JjfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBlcnNvbi1waG90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub2JqLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWUgY2xhc3M9XCJ0aW1lIHRleHQtaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4ke3RoaXMub2JqLmRhdGEudGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPiR7XG4gICAgICAgICAgICB0aGlzLm9iai5ydW50aW1lXG4gICAgICAgIH0gbWluIGR1cmF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3QgY29tbWVudHNcIj4ke1xuICAgICAgICAgICAgdGhpcy5vYmouZGF0YS5jb21tZW50c1xuICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWhlYWRpbmcgdGV4dC1oM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub2JqLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPT09IFwibXVzaWNcIlxuICAgICAgICAgICAgICAgID8gJzxmaWd1cmUgY2xhc3M9XCJhdWRpb1wiPicgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgICAgPGF1ZGlvXCIgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgICAgICBjb250cm9sc1wiICtcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9hdWRpby9tZWRpYS9jYzAtYXVkaW8vdC1yZXgtcm9hci5tcDNcIicgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgICAgPjwvYXVkaW8+XCIgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIDwvZmlndXJlPlwiXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24tdGV4dCB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub2JqLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7dGhpcy5vYmouYnV0dG9uLmhyZWZ9XCIgY2xhc3M9XCIke1xuICAgICAgICAgICAgdGhpcy5vYmouYnV0dG9uLnR5cGVcbiAgICAgICAgfVwiPiR7dGhpcy5vYmouYnV0dG9uLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPmA7XG4gICAgfVxuXG4gICAgcmVuZGVyKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSXRlbShkYXRhKTtcbiAgICB9XG59XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5leHBvcnQgY2xhc3MgTW92aWUgZXh0ZW5kcyBCbG9nUG9zdCB7XG4gICAgY29uc3RydWN0b3Iob2JqKSB7XG4gICAgICAgIHN1cGVyKG9iaik7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xhc3MgPSBcInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9fdmlkZW9cIjtcbiAgICAgICAgdGhpcy50eXBlID0gXCJ2aWRlby1idXR0b25cIjtcbiAgICB9XG5cbiAgICBjcmVhdGVSYXRpbmdMaXN0KG4sIGZ1bGwpIHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaWYoaSA8PSBmdWxsKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goYDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW1cIj48L2xpPmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFyci5qb2luKCcnKTtcbiAgICB9O1xuXG4gICAgY3JlYXRlSXRlbSgpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUl0ZW0oYFxuICAgICAgICA8dWwgY2xhc3M9XCJyYXRpbmctbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJhdGluZ0xpc3QodGhpcy5vYmouc3RhcnMubiwgdGhpcy5vYmouc3RhcnMuZnVsbClcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICBgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNdXNpYyBleHRlbmRzIEJsb2dQb3N0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgc3VwZXIob2JqKTtcbiAgICAgICAgdGhpcy5idXR0b25DbGFzcyA9IFwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb19tdXNpY1wiO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIm11c2ljXCI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGljIGV4dGVuZHMgQmxvZ1Bvc3Qge1xuICAgIGNvbnN0cnVjdG9yKG9iaikge1xuICAgICAgICBzdXBlcihvYmopO1xuICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzID0gXCJzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX3BpY1wiO1xuICAgICAgICB0aGlzLnR5cGUgPSBcInBpY1wiO1xuICAgIH1cbn1cbiIsImZ1bmN0aW9uIFNsaWRlciAodGltZSwgdmlzaWJsZUVsZW1lbnRzKSB7XG5cbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzID0gdmlzaWJsZUVsZW1lbnRzO1xuXG4gICAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGlzdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt0aGlzLnN0ZXAgKiAxMDB9JSlgO1xuICAgIH1cblxuICAgIHRoaXMubW92ZUxlZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKHRoaXMuc3RlcCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcC0tO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3RlcCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuYW5pbWF0ZUxlZnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVSaWdodCA9IGZ1bmN0aW9uICgpe1xuICAgICAgICBpZiAodGhpcy5zdGVwIDwgdGhpcy5saXN0LmNoaWxkcmVuLmxlbmd0aCAvIHRoaXMudmlzaWJsZUVsZW1lbnRzIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5zdGVwKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGVwID09PSB0aGlzLmxpc3QuY2hpbGRyZW4ubGVuZ3RoIC8gdGhpcy52aXNpYmxlRWxlbWVudHMgLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuYW5pbWF0ZVJpZ2h0KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGVSaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdGVwID0gMTtcbiAgICAgICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3Quc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuYW5pbWF0ZVJpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGVMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0ZXAgPSB0aGlzLmxpc3QuY2hpbGRyZW4ubGVuZ3RoIC8gdGhpcy52aXNpYmxlRWxlbWVudHMgLSAyO1xuICAgICAgICB0aGlzLmxpc3Quc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGlzdC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5hbmltYXRlTGVmdCk7XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRlUmlnaHQgPSB0aGlzLmFuaW1hdGVSaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYW5pbWF0ZUxlZnQgPSB0aGlzLmFuaW1hdGVMZWZ0LmJpbmQodGhpcyk7XG59XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBTbGlkZXIgVGVzdGltb25pYWxzXG5cbmZ1bmN0aW9uIFNsaWRlclRlc3RpbW9uaWFscyh0aW1lLCB2aXNpYmxlRWxlbWVudHMpIHtcbiAgICBTbGlkZXIuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgdGhpcy52aXNpYmxlRWxlbWVudHMgPSB2aXNpYmxlRWxlbWVudHM7XG5cbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXItbGlzdCcpO1xuICAgICAgICB0aGlzLmxlZnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcC1sZWZ0Jyk7XG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcC1yaWdodCcpO1xuICAgICAgICB0aGlzLnNsaWRlckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0aW1vbmlhbHMtcGhvdG8tbGlzdF93cmFwJyk7XG5cbiAgICAgICAgY29uc3QgZWxGaXJzdCA9IHRoaXMubGlzdC5jaGlsZHJlblswXTtcbiAgICAgICAgY29uc3QgZWxMYXN0ID0gdGhpcy5saXN0LmNoaWxkcmVuW3RoaXMubGlzdC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgY2xvbmVGaXJzdCA9IGVsRmlyc3QuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBjbG9uZUxhc3QgPSBlbExhc3QuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQoY2xvbmVGaXJzdCk7XG4gICAgICAgIHRoaXMubGlzdC5pbnNlcnRCZWZvcmUoY2xvbmVMYXN0LCBlbEZpcnN0KTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm1vdmVSaWdodCgpKTtcbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tb3ZlTGVmdCgpKTtcblxuXG4gICAgICAgIHRoaXMuc2xpZGVyQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLnN0YXJ0QW5pbWF0aW9uKCkpO1xuICAgICAgICB0aGlzLnNsaWRlckJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gY2xlYXJUaW1lb3V0KHRoaXMudGVzdGltb25pYWxTbGlkZXJNb3ZlKSk7XG5cbiAgICAgICAgLy8gICAgIHRoaXMudGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tdGVzdGltb25pYWxzJyk7XG4gICAgICAgIC8vICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50ZXN0aW1vbmlhbFNsaWRlck1vdmUpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnRhcmdldCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRlc3RpbW9uaWFsU2xpZGVyTW92ZSA9IHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgIH0sIHRoaXMudGltZSlcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRlc3RpbW9uaWFsU2xpZGVyTW92ZSk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbn1cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIC8vU2xpZGVyIFRlc3RpbW9uaWFsc1xuXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBTbGlkZXIgUG9ydGZvbGlvXG5mdW5jdGlvbiBTbGlkZXJQb3Jmb2xpbyAodGltZSwgdmlzaWJsZUVsZW1lbnRzKSB7XG4gICAgU2xpZGVyLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzID0gdmlzaWJsZUVsZW1lbnRzO1xuXG4gICAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gMDtcbiAgICAgICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRmb2xpby1saXN0Jyk7XG5cbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcnRmb2xpb19fZmxpcC1sZWZ0Jyk7XG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvX19mbGlwLXJpZ2h0Jyk7XG5cbiAgICAgICAgdGhpcy5zbGlkZXJCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvLXNsaWRlci1ib3gnKTtcblxuICAgICAgICB0aGlzLnNsaWRlckJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5zdGFydEFuaW1hdGlvbigpKTtcbiAgICAgICAgdGhpcy5zbGlkZXJCb3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IGNsZWFyVGltZW91dCh0aGlzLnBvcnRmb2xpb1NsaWRlck1vdmUpKTtcblxuICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tb3ZlUmlnaHQoKSk7XG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubW92ZUxlZnQoKSk7XG5cbiAgICAgICAgbGV0IGZpcnN0SXRlbSA9IHRoaXMubGlzdC5jaGlsZHJlblswXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy52aXNpYmxlRWxlbWVudHM7IGkgPj0gMTsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgZWxMYXN0ID0gdGhpcy5saXN0LmNoaWxkcmVuW3RoaXMubGlzdC5jaGlsZHJlbi5sZW5ndGggLSBpXTtcbiAgICAgICAgICAgIGxldCBjbG9uZUxhc3QgPSBlbExhc3QuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5saXN0Lmluc2VydEJlZm9yZShjbG9uZUxhc3QsIGZpcnN0SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmlzaWJsZUVsZW1lbnRzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBlbEZpcnN0ID0gdGhpcy5saXN0LmNoaWxkcmVuW3RoaXMudmlzaWJsZUVsZW1lbnRzICsgaV07XG4gICAgICAgICAgICBsZXQgY2xvbmVGaXJzdCA9IGVsRmlyc3QuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKGNsb25lRmlyc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBvcnRmb2xpb1NsaWRlck1vdmUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgICAgIH0sIHRoaXMudGltZSlcbiAgICB9XG5cbiAgICB0aGlzLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5wb3J0Zm9saW9TbGlkZXJNb3ZlKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzbGlkZXJUZXN0aW1vbmlhbHMgPSBuZXcgU2xpZGVyVGVzdGltb25pYWxzKDI1MDAsIDEpO1xuZXhwb3J0IGNvbnN0IHNsaWRlclBvcnRmb2xpbyA9IG5ldyBTbGlkZXJQb3Jmb2xpbygyNTAwLCAzKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIjtcbmltcG9ydCB7IFNlY3Rpb25Ub3BDb250ZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90b3Atc2VjdGlvbi90b3Atc2VjdGlvblwiO1xuaW1wb3J0IHsgQWJvdXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tYWJvdXQvc2VjdGlvbi1hYm91dFwiO1xuaW1wb3J0IHtQb3N0LCBQb3N0U2VjdGlvbn0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9uLXBvc3RzL3NlY3Rpb24tcG9zdFwiO1xuaW1wb3J0IHsgUG9ydGZvbGlvIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9uLXBvcnRmb2xpby9zZWN0aW9uLXBvcnRmb2xpb1wiO1xuaW1wb3J0IHsgVGVzdGltb25pYWxzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9uLXRlc3RpbW9uaWFscy9zZWN0aW9uLXRlc3RpbW9uaWFsc1wiO1xuaW1wb3J0IHsgQ29udGFjdHMgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tY29udGFjdC9zZWN0aW9uLWNvbnRhY3RzXCI7XG5pbXBvcnQgeyBCbG9nIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlLWJsb2cvcGFnZS1ibG9nXCI7XG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlLXBvc3QvcGFnZS1wb3N0XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhLmpzb25cIjtcbmltcG9ydCB7IEFQSUtFWSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuLy8gaW1wb3J0IHsgU2xpZGVyfSBmcm9tIFwiLi9zbGlkZXJcIjtcbmltcG9ydCB7c2xpZGVyUG9ydGZvbGlvLCBzbGlkZXJUZXN0aW1vbmlhbHN9IGZyb20gXCIuL3NsaWRlckVTNVwiO1xuaW1wb3J0IHtCbG9nUG9zdCwgTW92aWUsIE11c2ljLCBQaWN9IGZyb20gXCIuL3Bvc3RFUzZcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IGFwcGxpY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbihkYXRhLm5hdik7XG4gIGNvbnN0IGhlYWRlciA9IG5ldyBIZWFkZXIobmF2aWdhdGlvbik7XG4gIGNvbnN0IGZvb3RlciA9IG5ldyBGb290ZXIobmF2aWdhdGlvbik7XG4gIGNvbnN0IHNlY3Rpb25Ub3BDb250ZW50ID0gbmV3IFNlY3Rpb25Ub3BDb250ZW50KGRhdGEuYmxvY2tDb250ZW50KTtcbiAgY29uc3QgYWJvdXQgPSBuZXcgQWJvdXQoZGF0YS5hYm91dCk7XG4gIGNvbnN0IHBvc3RTZWN0aW9uID0gbmV3IFBvc3RTZWN0aW9uKGRhdGEucG9zdFNlY3Rpb24pO1xuICBjb25zdCBwb3J0Zm9saW8gPSBuZXcgUG9ydGZvbGlvKGRhdGEucG9ydGZvbGlvKTtcbiAgY29uc3QgdGVzdGltb25pYWxzID0gbmV3IFRlc3RpbW9uaWFscyhkYXRhLnRlc3RpbW9uaWFscyk7XG4gIGNvbnN0IGNvbnRhY3RzID0gbmV3IENvbnRhY3RzKGRhdGEuY29udGFjdHMpO1xuICBjb25zdCBibG9nID0gbmV3IEJsb2coZGF0YS5ibG9nKTtcbiAgY29uc3QgYXJ0aWNsZSA9IG5ldyBBcnRpY2xlKGRhdGEuYXJ0aWNsZSk7XG4gIGxldCB0ZXN0aW1vbmlhbHNTbGlkZXI7XG4gIGxldCBwb3J0Zm9saW9TbGlkZXI7XG4gIGNvbnN0IENPVU5UX09GX1NUQVJTID0gNTtcbiAgbGV0IGJsb2dQYWdlO1xuXG4gIGxldCBiYXNlVVJMID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zXCI7XG5cbiAgZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICR7aGVhZGVyLnJlbmRlcihcIiNob21lXCIpfVxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbnMtd3JhcFwiPlxuICAgICAgICAgICAgJHtzZWN0aW9uVG9wQ29udGVudC5yZW5kZXIoKX0gXG4gICAgICAgICAgICAke2Fib3V0LnJlbmRlcigpfVxuICAgICAgICAgICAgJHtwb3N0U2VjdGlvbi5yZW5kZXIoKX1cbiAgICAgICAgICAgICR7cG9ydGZvbGlvLnJlbmRlcigpfSAgXG4gICAgICAgICAgICAke3Rlc3RpbW9uaWFscy5yZW5kZXIoKX1cbiAgICAgICAgICAgICR7Y29udGFjdHMucmVuZGVyKCl9ICAgICAgICBcbiAgICAgICAgPC9kaXY+IFxuICAgICAgJHtmb290ZXIucmVuZGVyKCl9IFxuICAgIGA7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJCbG9nKGRhdGEpIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtoZWFkZXIucmVuZGVyKFwiI2Jsb2dcIil9XG4gICAgICAke2Jsb2cucmVuZGVyKGRhdGEpfSBcbiAgICAgICR7Zm9vdGVyLnJlbmRlcigpfSBcbiAgICBgO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUG9zdCgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICR7aGVhZGVyLnJlbmRlcihcIiNwb3N0XCIpfSBcbiAgICAgICR7YXJ0aWNsZS5yZW5kZXIoKX1cbiAgICAgICR7Zm9vdGVyLnJlbmRlcigpfSBcbiAgICBgO1xuICB9XG5cbiAgY29uc3QgbG9hZEJsb2dQYWdlcyA9IGZ1bmN0aW9uIChibG9nUGFnZSkge1xuICAgIHJldHVybiBmZXRjaChgJHtiYXNlVVJMfS9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElLRVl9JnBhZ2U9JHtibG9nUGFnZX1gKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHMubWFwKChlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBbJ2phbicsICdmZWInLCAnbWFyJywgJ2FwcicsICdtYXknLCAnanVuJyxcbiAgICAgICAgICAgICAgJ2p1bCcsICdhdWcnLCAnc2VwJywgJ29jdCcsICdub3YnLCAnZGVjJ107XG4gICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBEYXRlKGVsLnJlbGVhc2VfZGF0ZSk7XG4gICAgICAgICAgICBsZXQgZGF0YVN0ciA9IGAke2RhdGEuZ2V0RGF0ZSgpfSBgICsgYCR7bW9udGhbZGF0YS5nZXRNb250aCgpICsgMV19LCBgICsgYCR7ZGF0YS5nZXRGdWxsWWVhcigpfWA7XG4gICAgICAgICAgICBsZXQgc3RhcnMgPSAoQ09VTlRfT0ZfU1RBUlMgKiAoZWwudm90ZV9hdmVyYWdlICogMTApKSAvIDEwMDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaWQ6IGVsLmlkLFxuICAgICAgICAgICAgICBzdGFyczoge1xuICAgICAgICAgICAgICAgIG46IENPVU5UX09GX1NUQVJTLFxuICAgICAgICAgICAgICAgIGZ1bGw6IE1hdGguZmxvb3Ioc3RhcnMpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHR5cGU6IFwidmlkZW9cIixcbiAgICAgICAgICAgICAgLy8gcGljOiBcImFzc2V0cy9waWMvYmxvZy1pbWcxLnBuZ1wiLFxuICAgICAgICAgICAgICBwaWM6IGBodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8ke2VsLmJhY2tkcm9wX3BhdGh9YCxcbiAgICAgICAgICAgICAgLy8gcGljOiBgJHtiYXNlVVJMfS9tb3ZpZS9wb3B1bGFyP2FwaV9rZXk9JHtBUElLRVl9JHtlbC5iYWNrZHJvcF9wYXRofWAsXG4gICAgICAgICAgICAgIHNyYzogYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsLyR7ZWwucG9zdGVyX3BhdGh9YCxcbiAgICAgICAgICAgICAgYXV0aG9yOiBcIk5laWwgUmljaGFyZHNcIixcbiAgICAgICAgICAgICAgdGl0bGU6IGVsLm9yaWdpbmFsX3RpdGxlLFxuICAgICAgICAgICAgICB0ZXh0OiBlbC5vdmVydmlldyxcbiAgICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhZCBtb3JlXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJidG5cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRpbWU6IGRhdGFTdHIsXG4gICAgICAgICAgICAgICAgbWludXRzOiBcIjEwXCIsXG4gICAgICAgICAgICAgICAgY29tbWVudHM6IGVsLnZvdGVfY291bnQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgcmVzcG9uc2UubWFwKChpdGVtKSA9PlxuICAgICAgICAgICAgICAgICAgZmV0Y2goYCR7YmFzZVVSTH0vbW92aWUvJHtpdGVtLmlkfT9hcGlfa2V5PSR7QVBJS0VZfSZsYW5ndWFnZT1lbi1VU2ApXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd2aWRlbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IE1vdmllKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtdXNpYyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gIG5ldyBNdXNpYyhpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncGljJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAgbmV3IFBpYyhpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUGFnZShocmVmKSB7XG4gICAgY2xlYW5VcCgpO1xuICAgIHN3aXRjaCAoaHJlZikge1xuICAgICAgY2FzZSBcIiNibG9nXCI6XG4gICAgICAgIGJsb2dQYWdlID0gMTtcbiAgICAgICAgbG9hZEJsb2dQYWdlcyhibG9nUGFnZSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGFwcGxpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlckJsb2coZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgICBjb25zdCBibG9nTG9hZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9nLWxhenktbG9hZGluZycpO1xuICAgICAgICAgIGJsb2dMb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYmxvZ1BhZ2UgKz0gMTtcbiAgICAgICAgICAgIGxvYWRCbG9nUGFnZXMoYmxvZ1BhZ2UpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBibG9nLmNyZWF0ZUxpc3QoZGF0YSk7XG4gICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9fYmxvZy1saXN0Jyk7XG4gICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIiNwb3N0XCI6XG4gICAgICAgIGFwcGxpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlclBvc3QoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFwcGxpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlckhvbWUoKTtcbiAgICAgICAgLy8gdGVzdGltb25pYWxzU2xpZGVyID0gbmV3IFNsaWRlcigpO1xuICAgICAgICBzbGlkZXJUZXN0aW1vbmlhbHMuaW5pdCgpO1xuICAgICAgICBzbGlkZXJUZXN0aW1vbmlhbHMuc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgc2xpZGVyUG9ydGZvbGlvLmluaXQoKTtcbiAgICAgICAgc2xpZGVyUG9ydGZvbGlvLnN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW5VcCgpIHtcbiAgICBpZih0ZXN0aW1vbmlhbHNTbGlkZXIpIHtcbiAgICAgIHRlc3RpbW9uaWFsc1NsaWRlci5kZXN0cm95KCk7XG4gICAgICB0ZXN0aW1vbmlhbHNTbGlkZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmKHBvcnRmb2xpb1NsaWRlcikge1xuICAgICAgcG9ydGZvbGlvU2xpZGVyLmRlc3Ryb3koKTtcbiAgICAgIHBvcnRmb2xpb1NsaWRlciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGFnZShsb2NhdGlvbi5oYXNoKTtcblxuICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICByZW5kZXJQYWdlKGxvY2F0aW9uLmhhc2gpO1xuICB9KTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==