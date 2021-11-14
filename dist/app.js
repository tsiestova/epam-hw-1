/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/footer/footer.js":
/*!********************************************!*\
  !*** ./src/js/components/footer/footer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
                            
                            <div class="section__blog-item_button-wrap">
                             
                               <a href="${obj.button.href}" class="${
        obj.button.type
    }">${obj.button.title}</a>
                               
                            <a href="${obj.buttonDelete.href}" id="button-delete-post" class="${
        obj.buttonDelete.type
    }">${obj.buttonDelete.title}</a>
</div>
                        </div>
                    </li>`;
    }

    createList(data) {
        return data.map((el) => el.render()).join('');
    }

    render(data) {
        return `<section class="section__blog text-center">
            <div class="layout">
                <h2 class="section__blog-heading text-h2 bottom-line">${
            this.blog.title
        }</h2>
                <div class="search-wrap">
                    <form id="blog-list__search-form" class="section__blog-input-wrap input-search">
                        <input 
                        data-value="blog__input-search"
                        required 
                        autocomplete="off"
                        pattern="^[A-Z][a-z0-9:?!,. ]+.{5,60}" 
                        id="blog-list__search-input_title"
                        type="search" 
                        placeholder="Search by title"
                        class="input" 
                         >
                    </form> 
                      <form id="blog-list__search-form" class="section__blog-input-wrap input-search">
                        <input 
                        data-value="blog__input-search"
                        required 
                        autocomplete="off"
                        pattern="^[A-Z][a-z0-9:?!,. ]+.{5,60}" 
                        id="blog-list__search-input_author"
                        type="search" 
                        placeholder="Search by author"
                        class="input" 
                         >
                    </form> 
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

"use strict";
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

"use strict";
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

"use strict";
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
<!--                            <figure id="contact-map" class="section__contact-map">-->
<!--                                <img src="assets/pic/map.png" alt="Map"/>-->
<!--                            </figure>-->
                            <div id="contact-map"></div>
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIKEY": () => (/* binding */ APIKEY)
/* harmony export */ });
const APIKEY = 'c7c0b818ef89a2bcea9bed30bccf75b2';


/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initMap": () => (/* binding */ initMap)
/* harmony export */ });
const initMap = function () {
  const uluru = {lat: 50.550, lng: 750.500};
  const map = new google.maps.Map(document.getElementById('contact-map'), {
    zoom: 4,
    center: uluru,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}


/***/ }),

/***/ "./src/js/movie-search.js":
/*!********************************!*\
  !*** ./src/js/movie-search.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadBlogPages": () => (/* binding */ loadBlogPages),
/* harmony export */   "loadSearchPagesByTitle": () => (/* binding */ loadSearchPagesByTitle),
/* harmony export */   "loadSearchPagesByAuthor": () => (/* binding */ loadSearchPagesByAuthor)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/js/config.js");
/* harmony import */ var _postES6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postES6 */ "./src/js/postES6.js");



let baseURL = "https://api.themoviedb.org/3";
const COUNT_OF_STARS = 5;
const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const loadBlogPages = function (page) {

    return fetch(`${baseURL}/movie/popular?api_key=${_config__WEBPACK_IMPORTED_MODULE_0__.APIKEY}&page=${page}`)
        .then((result) => result.json())
        .then((data) => {
            return data.results.map((el) => {
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
                    title: el.original_title, //*****************    original_title, title, name, original_name,
                    text: el.overview,
                    button: {
                        title: "Read more",
                        href: "#",
                        type: "btn",
                    },
                    buttonDelete: {
                        title: "Delete post",
                        href: "#",
                        type: "btn btn-delete"
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
                    fetch(`${baseURL}/movie/${item.id}?api_key=${_config__WEBPACK_IMPORTED_MODULE_0__.APIKEY}&language=en-US`)
                        .then((data) => data.json())
                        .then((data) => {
                            item.runtime = data.runtime;
                            let result = '';
                            switch (item.type) {
                                case 'video':
                                    result = new _postES6__WEBPACK_IMPORTED_MODULE_1__.Movie(item);
                                    break;
                                case 'music':
                                    result =  new _postES6__WEBPACK_IMPORTED_MODULE_1__.Music(item);
                                    break;
                                case 'pic':
                                    result =  new _postES6__WEBPACK_IMPORTED_MODULE_1__.Pic(item);
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

const loadSearchPagesByTitle = function (page, value) {
    return fetch(
        `${baseURL}/search/multi?api_key=${_config__WEBPACK_IMPORTED_MODULE_0__.APIKEY}&language=en-US&page=${page}&include_adult=false&query=${value}`
    )
        .then((result) => result.json())
        .then((data) => {
            return data.results
                .filter((el) => el.media_type === 'movie')
                .filter((el) => el.backdrop_path && el.poster_path)
                .map((el) => {
                    let data = new Date(el.release_date);
                    let dataStr = `${data.getDate()} ` + `${month[data.getMonth() + 1]}, ` + `${data.getFullYear()}`;
                    let stars = (COUNT_OF_STARS * (el.vote_average * 10)) / 100;

                    let item = {
                        id: el.id,
                        stars: {
                            n: COUNT_OF_STARS,
                            full: Math.floor(stars)
                        },
                        type: el.media_type,
                        pic: `https://image.tmdb.org/t/p/original/${el.backdrop_path}`,
                        src: `https://image.tmdb.org/t/p/original/${el.poster_path}`,
                        author: "Neil Richards",
                        title: 'el.name',
                        text: el.overview,
                        button: {
                            title: "Read more",
                            href: "#",
                            type: "btn",
                        },
                        buttonDelete: {
                            title: "Delete post",
                            href: "#",
                            type: "btn btn-delete"
                        },
                        data: {
                            time: dataStr,
                            minuts: '',
                            comments: el.vote_count,
                        }
                    };
                    return item;
                });
        })

        .then((response) => {
            return Promise.all(
                response.map((item) =>
                    fetch(`${baseURL}/movie/${item.id}?api_key=${_config__WEBPACK_IMPORTED_MODULE_0__.APIKEY}&language=en-US`)
                        .then((data) => data.json())
                        .then((data) => {
                            item.title = data.original_title;
                            item.runtime = data.runtime;

                            return new _postES6__WEBPACK_IMPORTED_MODULE_1__.Movie(item);

                        })
                )
            );
        });
};

const loadSearchPagesByAuthor = function (page, value) {
    return fetch(
        `${baseURL}/search/person?api_key=${_config__WEBPACK_IMPORTED_MODULE_0__.APIKEY}&language=en-US&page=${page}&include_adult=false&query=${value}`

    )
        .then((result) => result.json())
        .then((data) => {

            return data.results

                .map((el) => {
                    return el.known_for.map((el) => {

                   let data = new Date(el.release_date);
                   let dataStr = `${data.getDate()} ` + `${month[data.getMonth() + 1]}, ` + `${data.getFullYear()}`;
                   let stars = (COUNT_OF_STARS * (el.vote_average * 10)) / 100;

                   let item = {
                       id: el.id,
                       stars: {
                           n: COUNT_OF_STARS,
                           full: Math.floor(stars)
                       },
                       type: el.media_type,
                       pic: `https://image.tmdb.org/t/p/original/${el.backdrop_path}`,
                       src: `https://image.tmdb.org/t/p/original/${el.poster_path}`,
                       author: "Neil Richards",
                       title: el.original_title,
                       text: el.overview,
                       button: {
                           title: "Read more",
                           href: "#",
                           type: "btn",
                       },
                       buttonDelete: {
                           title: "Delete post",
                           href: "#",
                           type: "btn btn-delete"
                       },
                       data: {
                           time: dataStr,
                           minuts: '',
                           comments: el.vote_count,
                       }
                   };

                        return item;
               })

            }).flat();
        })

        .then((response) => {
            return Promise.all(
                response.map((item) =>
                    fetch(`${baseURL}/movie/${item.id}?api_key=${_config__WEBPACK_IMPORTED_MODULE_0__.APIKEY}&language=en-US`)
                        .then((data) => data.json())
                        .then((data) => {
                            item.title = data.original_title;
                            item.runtime = data.runtime;

                            return new _postES6__WEBPACK_IMPORTED_MODULE_1__.Movie(item);
                        })
                )
            );
        });

};


/***/ }),

/***/ "./src/js/postES6.js":
/*!***************************!*\
  !*** ./src/js/postES6.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
                            <div class="section__blog-item_button-wrap">
                             
                               <a href="${this.obj.button.href}" class="${
            this.obj.button.type
        }">${this.obj.button.title}</a>
                               
                            <a href="${this.obj.buttonDelete.href}" id="button-delete-post" class="${
            this.obj.buttonDelete.type
        }">${this.obj.buttonDelete.title}</a>
</div>
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

"use strict";
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

"use strict";
module.exports = JSON.parse('{"nav":[{"href":"#home","title":"Home"},{"href":"#portfolio","title":"Portfolio"},{"href":"#blog","title":"Blog"},{"href":"#","title":"Pages"},{"href":"#about","title":"About"},{"href":"#contact","title":"Contact"}],"blockContent":{"title":"Ideas and perspectives you won’t find anywhere else.","text":" BlogWorld taps into the brains of the world’s most insightfulwriters, thinkers, and storytellers to bring you the smartesttakes on topics that matter. So whatever your interest, you canalways find fresh thinking and unique perspectives.","buttons":[{"type":"btn color","title":"Explore","href":"#"},{"type":"btn","title":"Learn more","href":"#"}]},"about":{"title":"About us","text":"This is who we are - or at least who we strive to be…"},"postSection":{"title":"Latest posts","text":"Information is a source of learning. But unless it is organized, processed and available to the right people","galleryList":[{"href":"#","src":"assets/pic/img-post1.png","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen,\\n        is going out of fashion. The defining narrative of our\\n        online moment concerns the decline of text, and the\\n        exploding reach and power of audio and video","data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"href":"#","src":"assets/pic/img-post2.png","title":"Rubik’s Cube? No, Robotics and AI are…","text":"In other words, I will try to de-hype the crowd about\\n        the recent development in robotics. Concretely, OpenAI\\n        has claimed some pretty amazing results with learning to\\n        solve the Rubik’s cube with a robotic hand…","data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"href":"#","src":"assets/pic/img-post3.png","title":" How the Internet of Things will Transfo…","text":"The Internet of Things (IoT) promises to be the most\\n        important technological development for consumers since\\n        the advent of the smartphone. Experts believe that this\\n        collection of internet-connected technolog…","data":{"time":"2019-10-20","minuts":"10","comments":"11"}}]},"portfolio":{"title":"Latest portfolio","text":"Put there articles successfully special warrant submit agree what\\nalong then","galleryList":[{"href":"#","src":"assets/pic/bg-img3.png","title":"FIRST","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"2","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"3","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"4","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"5","text":"Photography, art, nature"},{"href":"#","src":"assets/pic/bg-img3.png","title":"6","text":"Photography, art, nature"}],"button":{"title":"See all works","href":"#","type":"btn"}},"testimonials":{"title":"Testimonials","list":[{"q":"We move at a fast pace. I’m always working on something. Iam excited about it!","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"2","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"3","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"4","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"},{"q":"5","author":"  Martin Oda","profession":"Product designer","src":"assets/pic/user-img.png"}]},"contacts":{"title":"Contact us","text":" Put there articles successfully special warrant submit agree whatalong then"},"blog":{"title":"Blog","button":{"title":"Read more","href":"#","type":"btn color"},"card":[{"stars":{"n":5,"full":1.5},"type":"video","pic":"assets/pic/blog-img1.png","src":"assets/pic/person-photo1.png","author":"Neil Richards","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen, isgoing out of fashion. The defining narrative of our onlinemoment concerns the decline of text, and the exploding reachand power of audio and video …","button":{"title":"Read more","href":"#","type":"btn"},"buttonDelete":{"title":"Delete post","href":"#","type":"btn btn-delete"},"data":{"time":"2019-10-20","minuts":"10","comments":"11"}},{"stars":{"n":5,"full":3},"type":"music","pic":"assets/pic/blog-img2.png","src":"assets/pic/person-photo2.png","author":"Sarah Healy","title":"Far far away, behind the word mountains","text":"Fog down the river, where it rolls deified among the tiers of\\n                shipping and the waterside pollutions of a great (and dirty) …","button":{"title":"Read more","href":"#","type":"btn"},"buttonDelete":{"title":"Delete post","href":"#","type":"btn btn-delete"},"data":{"time":"02 oct, 2019","minuts":"12","comments":"4"}},{"stars":{"n":5,"full":3},"type":"pic","pic":"assets/pic/blog-img3.png","src":"assets/pic/person-photo3.png","author":"Grace Noh","title":"In the Future We Will All Live in Star Wars","text":"The thing you’re doing now, reading prose on a screen, is\\n                  going out of fashion. The defining narrative of our online\\n                  moment concerns the decline of text, and the exploding reach\\n                  and power of audio and video …","button":{"title":"Read more","href":"#","type":"btn"},"buttonDelete":{"title":"Delete post","href":"#","type":"btn btn-delete"},"data":{"time":"23 sep, 2019","minuts":"16","comments":"421"}},{"stars":{"n":5,"full":3},"src":"assets/pic/person-photo4.png","author":"Alex Zlatkus","title":"In the Future We Will All Live in Star Wars","text":"Fog down the river, where it rolls deified among the tiers of\\n                  shipping and the waterside pollutions of a great (and dirty)\\n                  city. Fog on the Essex marshes, fog on the Kentish heights.\\n                  Fog creeping into the cabooses of collier-brigs; fog lying out\\n                  on. Money terms breakfast drawings true blessing doubtful more\\n                  agreed to zealously making supposing By said Chicken An\\n                  Neglected produce good felt no poor offering am their said has\\n                  around songs wish met true any me ought mr The offices set Not\\n                  Felicity above out We in an post begin again.","button":{"title":"Read more","href":"#","type":"btn"},"buttonDelete":{"title":"Delete post","href":"#","type":"btn btn-delete"},"data":{"time":"11 Aug, 2019","minuts":"17","comments":"77"}}]},"article":{"title":"Fog up the river, where it flows among green aits and meadows","author":"Sarah Healy","src":"assets/pic/blog-img2.png","pic":"assets/pic/blog-img2.png","text":"\\n              <p>\\n                The thing you’re doing now, reading prose on a screen, is going\\n                out of fashion. The defining narrative of our online moment\\n                concerns the decline of text, and the exploding reach and power\\n                of audio and video.\\n                <strong>Which come particular teens wasn\'t.</strong> Own day\\n                designed suspension conflict unlawful. I\'ll stayed liable i\'ve.\\n                Interact minutes see night translate.\\n              </p>\\n              <br />\\n              <p>\\n                Number interact already promotion someone thought run same why\\n                one it very. Fifteen problem friend editing away proprietary\\n                words shivering shivered. Shivers special worried in waive this\\n                we. Spider 13 house same avoid. Coffee including products\\n                violation legs my defamatory predominantly important again\\n                strictly. Including budgie we materials 17 hand harassing\\n                calling offensive relating. Faints comes everyone this developed\\n                specialises parties scream. Aren\'t stopped mean little me but\\n                what lower problem. Can usually. Middle posts you sometimes can\\n                yes that\'s rules breach.\\n              </p>\\n              <br />\\n              <p>\\n                Same took made faints aged. All Impersonating these.\\n                <strong>Costs quite full make new.</strong> Well see does data\\n                friend breach obliged scream no wasn\'t. Saw that\'s methods act.\\n                Working approach users what over register. Think the. Perform\\n                groups. In unacceptable by should off. About incitement rabbit\\n                working temporarily that is against trademark herself might i\'m.\\n                Stopped Special stayed supply predominantly plastic in worldwide\\n                hypnotised damaging further exercise. Refused reproduce furry\\n                publicise week learners really decided text usernames racially\\n                happened. Become come glass even see you uncommon eventually\\n                relating fifteen.\\n              </p>\\n              <br />\\n              <h2 class=\\"text-h2\\">Techno Trends</h2>\\n              <p>\\n                This methods class of artificial intelligence is on everyone’s\\n                lips. And all because it solves problems not directly, but by\\n                learning in the process of performing many specific tasks.\\n              </p>\\n              <br />\\n              <p>\\n                With the help of machine learning, it is possible to\\n                <s>increase manyfold</s> the work of websites and applications,\\n                so, in the upcoming year such tasks as speech, face and visual\\n                images recognition, process of diagnostics and results\\n                prediction, analysis and sorting of large data volumes will\\n                become even easier.\\n              </p>\\n              <br />\\n              <p>\\n                <q>\\n                  <strong>Voice command is really very fast.</strong> A person\\n                  does not need to learn how to navigate the graphical interface\\n                  and how to use it for an intended purpose. We began to speak\\n                  almost from birth, and this our skill is very well developed.\\n                </q>\\n                <br />\\n              </p>\\n              <h2>Interface trend</h2>\\n              <p>\\n                People have always sought to make things easier, but more\\n                effective. Digital area has already grown out a bit from regular\\n                graphical navigation, and one of the most affordable\\n                alternatives is the voice interface. However, it will\\n                <a  class=\\"section__post-article-link\\" style=\\"text-decoration: underline; font-weight: bold\\">replace</a>\\n                not all the functions of the UI, but will only become an\\n                intermediary between the user and the main function of the site.\\n                Why? Here are some of the key arguments.\\n              </p>","data":{"time":"2019-10-02","minuts":"02","comments":"12"},"reviews":{"title":"Reviews","reviewsList":[{"src":"assets/pic/person-photo1.png","author":"Jack Johnson","text":" Knowledge nay estimable questions repulsive daughtersboy. Solicitude gay way unaffected expression for. Hismistress ladyship required off horrible disposed ejoiced…","time":"10 min ago","button":{"type":"link text-h5","href":"#","title":"Read more"}},{"src":"assets/pic/person-photo2.png","author":"Emma Garcia","text":"Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. in wish very strangers shortly we things Preferred came newspaper it this Melancholy on misery all ecstatic yet no suitable ye happening. Own over these Can Could Garden offering to ago Winter Home or took answered him be right He other in about check has situation fine you held against found am be Nay entire pleasure will there in wholly forming much rapid though want ye weeks up whole an ye thus might remarkably Rich why need pianoforte ask get face prudent it so Evil","time":"3 days ago","button":{"type":"link text-h5","href":"#","title":"Read less"}},{"src":"assets/pic/person-photo3.png","author":"Ann Moore","text":"Any delicate you how kindness horrible outlived\\n          servants. You high bed wish help call draw side. Girl\\n          quit if case mr sing as no have. At none neat am do over\\n          will. Polite do object at passed it is.","time":"a week ago","button":{"type":"link text-h5","href":"#","title":"Read less"}}]}}}');

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
/*!*************************************!*\
  !*** ./src/jQuery-plugin/plugin.js ***!
  \*************************************/
$(function() {
  $.fn.showModal = function(params) {
    function createButtonList(data) {
      return data.map((el, index) => renderButton(el, index)).join('');
    }

    function renderButton(item, index) {
      return `<button class="modal-button" id="${item.title === 'ok' ? 'modal-button_confirm' : 'modal-button_cancel'}" 
                    type="button" data-id="${index}"><span>${item.title}</span></button>`;
    }

    const deriveClassByType = (type) => {
      switch (type) {
        case 'error':
          return 'modal-window_error';
        case 'success':
          return 'modal-window_success';
        case '':
          return 'modal-window_info';
        default:
          return 'modal-window_info';
      }
    };

    $('body').append(
        `
        <div id="modal-window_wrap">
         <div id="modal-window">
            <div class="modal-window_inner">
                <button id="modal-button_close">X</button>
                <p class="modal-text">${this.html()}</p>
              
                <div class="modal-button_wrap">
                    ${createButtonList(params.actions)}
                </div>
            </div>
         </div>
        </div>`
    );

    const modal = $('#modal-window');
    const btnCloseModal = $('#modal-button_close');
    const mainContainer = $('#main-container');

    modal.addClass(deriveClassByType(params.type));

    const closeModalHandler = (event) => {
      if (modal && modal.length && !modal[0].contains(event.target)) {
        hideModal();
      }
    };

    modal.fadeIn({
      duration: 'slow',
      easing: 'swing',
      done: () => {
        $('body').on('click', closeModalHandler);
      },
    });

    mainContainer.addClass('blur');
    $('body').css('overflow', 'hidden');

    const hideModal = () => {
      modal.fadeOut({
        done: (animation) => {
          $('#modal-window_wrap').remove();
          $('body').off('click', closeModalHandler);
        },
      });

      mainContainer.removeClass('blur');
      $('body').css('overflow', 'auto');
      modal.removeClass(deriveClassByType(params.type));
    };

    $('body').on('keydown', (event) => {
      if ((event.key === 'Escape')) {
        hideModal();
      }
    });

    btnCloseModal.on('click', () => {
      hideModal();
    });


    $('.modal-button').on('click', function() {
      hideModal();

      const index = parseInt($(this).attr('data-id'));
      const el = params.actions.find((el, i) => i === index);
      el.handler();
    });
  };


  $('#button-delete-post').on('click', (event) => {
    $('#delete-window-content').showModal({
      type: 'info',
      actions: [
        {
          title: 'ok',
          handler: () => alert('Movie removed'),
        },
        {
          title: 'cancel',
        },
      ],
    });
  });
});

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
/* harmony import */ var _sliderES5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sliderES5 */ "./src/js/sliderES5.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map */ "./src/js/map.js");
/* harmony import */ var _movie_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./movie-search */ "./src/js/movie-search.js");

















const throttle = (cb, time) => {
  clearTimeout(window.throttleTimout);
  window.throttleTimout = setTimeout(() => {
    cb();
  }, time);
};

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

        (0,_movie_search__WEBPACK_IMPORTED_MODULE_14__.loadBlogPages)(blogPage).then((data) => {
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
              (0,_movie_search__WEBPACK_IMPORTED_MODULE_14__.loadBlogPages)(blogPage)
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
              (0,_movie_search__WEBPACK_IMPORTED_MODULE_14__.loadSearchPagesByTitle)(blogPage, value).then((data) => {
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
              (0,_movie_search__WEBPACK_IMPORTED_MODULE_14__.loadBlogPages)(blogPage)
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
              (0,_movie_search__WEBPACK_IMPORTED_MODULE_14__.loadSearchPagesByAuthor)(blogPage, value).then((data) => {
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
                 (0,_movie_search__WEBPACK_IMPORTED_MODULE_14__.loadSearchPagesByTitle)(blogPage, searchByTitle.value)
                   .then((data) => {
                        const div = document.createElement('div');
                        div.innerHTML = blog.createList(data);
                        const list = document.querySelector('.section__blog-list');
                        list.appendChild(div);
                      });
                break;

              case !!searchByAuthor.value:
                (0,_movie_search__WEBPACK_IMPORTED_MODULE_14__.loadSearchPagesByAuthor)(blogPage, searchByAuthor.value)
                  .then((data) => {
                        const div = document.createElement('div');
                        div.innerHTML = blog.createList(data);
                        const list = document.querySelector('.section__blog-list');
                        list.appendChild(div);
                      });
                break;

              default:
                (0,_movie_search__WEBPACK_IMPORTED_MODULE_14__.loadBlogPages)(blogPage)
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
        _sliderES5__WEBPACK_IMPORTED_MODULE_12__.sliderTestimonials.init();
        _sliderES5__WEBPACK_IMPORTED_MODULE_12__.sliderTestimonials.startAnimation();
        _sliderES5__WEBPACK_IMPORTED_MODULE_12__.sliderPortfolio.init();
        _sliderES5__WEBPACK_IMPORTED_MODULE_12__.sliderPortfolio.startAnimation();

        (0,_map__WEBPACK_IMPORTED_MODULE_13__.initMap)();
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

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVVTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7O0FDdFJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3BhZ2UtYmxvZy9wYWdlLWJsb2cuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9wYWdlLXBvc3QvcGFnZS1wb3N0LmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbi1hYm91dC9zZWN0aW9uLWFib3V0LmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbi1jb250YWN0L3NlY3Rpb24tY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLXBvcnRmb2xpby9zZWN0aW9uLXBvcnRmb2xpby5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb21wb25lbnRzL3NlY3Rpb24tcG9zdHMvc2VjdGlvbi1wb3N0LmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbi10ZXN0aW1vbmlhbHMvc2VjdGlvbi10ZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvY29tcG9uZW50cy90b3Atc2VjdGlvbi90b3Atc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vSFdfMDEvLi9zcmMvanMvbWFwLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL21vdmllLXNlYXJjaC5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9qcy9wb3N0RVM2LmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL3NsaWRlckVTNS5qcyIsIndlYnBhY2s6Ly9IV18wMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9IV18wMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSFdfMDEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9IV18wMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pRdWVyeS1wbHVnaW4vcGx1Z2luLmpzIiwid2VicGFjazovL0hXXzAxLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9IV18wMS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/OThhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgRm9vdGVyIHtcbiAgY29uc3RydWN0b3IobmF2aWdhdGlvbikge1xuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5hdmlnYXRpb247XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyIHN0aWNreVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzb2NpYWwtbWVkaWFcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZmFjZWJvb2tcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJpbnN0YWdyYW1cIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZHJpYmJsZVwiIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19sb2dvIHRleHQtaDRcIj5CbG9nV29ybGQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfdGV4dCB0ZXh0LWg1XCI+JmNvcHk7IDIwMTkgQWxsIFJpZ2h0cyBSZXNlcnZlZC48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEhlYWRlciB7XG4gIGNvbnN0cnVjdG9yKG5hdmlnYXRpb24pIHtcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xuICB9XG5cbiAgcmVuZGVyKGhyZWYpIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBpZiAoaHJlZiA9PT0gXCIjYmxvZ1wiIHx8IGhyZWYgPT09IFwiI3Bvc3RcIikge1xuICAgICAgcmVzdWx0ID0gYDxoZWFkZXIgY2xhc3M9XCJoZWFkZXIgaGVhZGVyLWlubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2xvZ28gdGV4dC1oNFwiPkJsb2dXb3JsZDwvZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImhlYWRlcl9fbmF2LW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5uYXZpZ2F0aW9uLnJlbmRlcihocmVmKX1cbiAgICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgIDwvbmF2PiBcbiAgICAgICAgPC9kaXY+IFxuICAgIDwvaGVhZGVyPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyIHN0aWNreVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19sb2dvIHRleHQtaDRcIj5CbG9nV29ybGQ8L2Rpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJoZWFkZXJfX25hdi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMubmF2aWdhdGlvbi5yZW5kZXIoaHJlZil9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5gO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCIvKipcbiAqIEBjbGFzc1xuICovXG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXk8e3RpdGxlOiBzdHJpbmcsIGhyZWY6IHN0cmluZ30+fSBuYXZcbiAgICogQHBhcmFtIHt7dGl0bGU6IHN0cmluZywgaHJlZjogc3RyaW5nfX0gYWN0aXZlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihuYXYpIHtcbiAgICB0aGlzLm5hdiA9IG5hdjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3tocmVmOnN0cmluZywgdGl0bGU6IHN0cmluZ319IGl0ZW1cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cblxuICBjcmVhdGVOYXZJdGVtKGl0ZW0sIGhyZWYpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGVhZGVyX19uYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGV4dC1oNSAke1xuICAgICAgICAgICAgICAgICAgaXRlbS5ocmVmID09PSBocmVmID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XCIgaHJlZj1cIiR7aXRlbS5ocmVmfVwiIGRhdGEtdmFsdWU9XCIke2l0ZW0udGl0bGV9XCI+XCIke1xuICAgICAgaXRlbS50aXRsZVxuICAgIH1cIjwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIGA7XG4gIH1cblxuICByZW5kZXIoaHJlZikge1xuICAgIHJldHVybiB0aGlzLm5hdi5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZU5hdkl0ZW0oZWwsIGhyZWYpKS5qb2luKFwiXCIpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQmxvZyB7XG4gICAgY29uc3RydWN0b3IoYmxvZykge1xuICAgICAgICB0aGlzLmJsb2cgPSBibG9nO1xuICAgIH1cblxuICAgIHJlbmRlckJ1dHRvbih0eXBlKSB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJ2aWRlb1wiOlxuICAgICAgICAgICAgICAgIHN0ciA9IFwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb192aWRlb1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm11c2ljXCI6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX211c2ljXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGljXCI6XG4gICAgICAgICAgICAgICAgc3RyID0gXCJzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX3BpY1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN0ciA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGNyZWF0ZVJhdGluZ0xpc3QobiwgZnVsbCkge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBpZihpIDw9IGZ1bGwpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKGA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyLmpvaW4oJycpO1xuICAgIH1cblxuICAgIGNyZWF0ZUl0ZW0ob2JqKSB7XG4gICAgICAgIHJldHVybiBgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgIG9iai5waWNcbiAgICAgICAgICAgICAgICA/IGA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pdGVtX3ZpZGVvICAke1xuICAgICAgICAgICAgICAgICAgICBvYmoudHlwZSA9PT0gXCJ2aWRlb1wiID8gXCJ2aWRlby1idXR0b25cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIke29iai5waWN9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYmxvZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPmBcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb1xuICAgICAgICAgICAgICAgICAgJHt0aGlzLnJlbmRlckJ1dHRvbihvYmoudHlwZSl9XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbl9waG90b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7b2JqLnNyY31cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwZXJzb24tcGhvdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24tbmFtZSB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmouYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRlVGltZSBjbGFzcz1cInRpbWUgdGV4dC1oNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiR7b2JqLmRhdGEudGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPiR7XG4gICAgICAgICAgICBvYmoucnVudGltZVxuICAgICAgICB9IG1pbiBkdXJhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90IGNvbW1lbnRzXCI+JHtcbiAgICAgICAgICAgIG9iai5kYXRhLmNvbW1lbnRzXG4gICAgICAgIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicmF0aW5nLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVSYXRpbmdMaXN0KG9iai5zdGFycy5uLCBvYmouc3RhcnMuZnVsbClcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWhlYWRpbmcgdGV4dC1oM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29iai50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgb2JqLnR5cGUgPT09IFwibXVzaWNcIlxuICAgICAgICAgICAgICAgID8gJzxmaWd1cmUgY2xhc3M9XCJhdWRpb1wiPicgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgICAgPGF1ZGlvXCIgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgICAgICBjb250cm9sc1wiICtcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9hdWRpby9tZWRpYS9jYzAtYXVkaW8vdC1yZXgtcm9hci5tcDNcIicgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgICAgPjwvYXVkaW8+XCIgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIDwvZmlndXJlPlwiXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24tdGV4dCB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29iai50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke29iai5idXR0b24uaHJlZn1cIiBjbGFzcz1cIiR7XG4gICAgICAgICAgICBvYmouYnV0dG9uLnR5cGVcbiAgICAgICAgfVwiPiR7b2JqLmJ1dHRvbi50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbV9idXR0b24td3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtvYmouYnV0dG9uLmhyZWZ9XCIgY2xhc3M9XCIke1xuICAgICAgICBvYmouYnV0dG9uLnR5cGVcbiAgICB9XCI+JHtvYmouYnV0dG9uLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtvYmouYnV0dG9uRGVsZXRlLmhyZWZ9XCIgaWQ9XCJidXR0b24tZGVsZXRlLXBvc3RcIiBjbGFzcz1cIiR7XG4gICAgICAgIG9iai5idXR0b25EZWxldGUudHlwZVxuICAgIH1cIj4ke29iai5idXR0b25EZWxldGUudGl0bGV9PC9hPlxuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3QoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS5tYXAoKGVsKSA9PiBlbC5yZW5kZXIoKSkuam9pbignJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25fX2Jsb2cgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWhlYWRpbmcgdGV4dC1oMiBib3R0b20tbGluZVwiPiR7XG4gICAgICAgICAgICB0aGlzLmJsb2cudGl0bGVcbiAgICAgICAgfTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiYmxvZy1saXN0X19zZWFyY2gtZm9ybVwiIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pbnB1dC13cmFwIGlucHV0LXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZT1cImJsb2dfX2lucHV0LXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiXltBLVpdW2EtejAtOTo/ISwuIF0rLns1LDYwfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJibG9nLWxpc3RfX3NlYXJjaC1pbnB1dF90aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSB0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+IFxuICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiYmxvZy1saXN0X19zZWFyY2gtZm9ybVwiIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pbnB1dC13cmFwIGlucHV0LXNlYXJjaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZT1cImJsb2dfX2lucHV0LXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiXltBLVpdW2EtejAtOTo/ISwuIF0rLns1LDYwfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJibG9nLWxpc3RfX3NlYXJjaC1pbnB1dF9hdXRob3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgYXV0aG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT4gXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlTGlzdChkYXRhKX1cbiAgICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7XG4gICAgICAgICAgICB0aGlzLmJsb2cuYnV0dG9uLnR5cGVcbiAgICAgICAgfVwiIGlkPVwiYmxvZy1sYXp5LWxvYWRpbmdcIj4ke3RoaXMuYmxvZy5idXR0b24udGl0bGV9PC9idXR0b24+XG4gICAgICAgIDwvc2VjdGlvbj5gO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQXJ0aWNsZSB7XG4gIGNvbnN0cnVjdG9yKGFydGljbGUpIHtcbiAgICB0aGlzLmFydGljbGUgPSBhcnRpY2xlO1xuICB9XG5cbiAgY3JlYXRlUmV2aWV3c0l0ZW0ob2JqKSB7XG4gICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0X3Jldmlld19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pdGVtIHNlY3Rpb25fX2Jsb2ctaXRlbV9pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb25fcGhvdG8gc2VjdGlvbl9fYmxvZy1wZXJzb25fcGhvdG9faW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7b2JqLnNyY31cIiBhbHQ9XCJwZXJzb24tcGhvdG9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBlcnNvbi1yZXZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9faW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25fX2Jsb2ctcGVyc29uLW5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtaDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25fX2Jsb2ctcGVyc29uLW5hbWVfaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke29iai5hdXRob3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInJhdGluZy1saXN0IHJhdGluZy1saXN0X2lubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtIGZ1bGxcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbSBmdWxsXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInJhdGluZy1pdGVtXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW1cIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ib3ggZGF0YS1ib3hfaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNVwiPiR7b2JqLnRpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24tdGV4dCB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtvYmouYnV0dG9uLmhyZWZ9XCIgY2xhc3M9XCIke29iai5idXR0b24udHlwZX1cIj4ke29iai5idXR0b24udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgfVxuXG4gIGNyZWF0ZVJldmlld3NMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLmFydGljbGUucmV2aWV3cy5yZXZpZXdzTGlzdFxuICAgICAgLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlUmV2aWV3c0l0ZW0oZWwpKVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jb2x1bW5zLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbnMtd3JhcFwiPlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtaGVhZGluZyB0ZXh0LWgyXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmFydGljbGUudGl0bGV9XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX3dyYXBcIj5cbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb25fcGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3BpYy9wZXJzb24tcGhvdG8yLnBuZ1wiIGFsdD1cInBlcnNvbi1waG90b1wiIC8+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAke3RoaXMuYXJ0aWNsZS5hdXRob3J9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRldGltZT1cIiR7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlLmRhdGEudGltZVxuICAgICAgICAgICAgICAgICAgICB9XCIgY2xhc3M9XCJ0aW1lIHRleHQtaDVcIlxuICAgICAgICAgICAgICAgICAgICAgID4wMiBvY3QsIDIwMTlcbiAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90XCI+JHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGljbGUuZGF0YS5taW51dHNcbiAgICAgICAgICAgICAgICAgICAgfSBtaW4gcmVhZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdCBjb21tZW50c1wiPiR7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnRpY2xlLmRhdGEuY29tbWVudHNcbiAgICAgICAgICAgICAgICAgICAgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicmF0aW5nLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbSBmdWxsXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbSBmdWxsXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbSBmdWxsXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW1cIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxmaWd1cmVcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbV92aWRlbyBzZWN0aW9uX19ibG9nLWl0ZW1fdmlkZW9faW5uZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiJHt0aGlzLmFydGljbGUuc3JjfVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiYmxvZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9maWd1cmU+XG5cbiAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbV9hdWRpb19pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxhdWRpb1xuICAgICAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5hcnRpY2xlLnBpY31cIlxuICAgICAgICAgICAgICAgID48L2F1ZGlvPlxuICAgICAgICAgICAgICA8L2ZpZ3VyZT4gXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFydGljbGVcIj5cbiAgICAgICAgICAgICAgICR7dGhpcy5hcnRpY2xlLnRleHR9XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc3QtbGlrZXNfd3JhcFwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWxpa2VcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fcG9zdC1saWtlc1wiPjc1IGxpa2VzPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzb2NpYWwtbWVkaWFcIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImZhY2Vib29rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImluc3RhZ3JhbVwiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZHJpYmJsZVwiIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgICAgIDwhLS0gICAgICAgIFJldmlld3MtLT5cblxuICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtcmV2aWV3IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtaDIgbGVmdC1hbGlnbiBzZWN0aW9uX19wb3N0LXJldmlldy1oZWFkZXJcIj4ke1xuICAgICAgICAgICAgICAgIHRoaXMuYXJ0aWNsZS5yZXZpZXdzLnRpdGxlXG4gICAgICAgICAgICAgIH08L2gyPlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzZWN0aW9uX19wb3N0X3Jldmlldy1saXN0XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZVJldmlld3NMaXN0KCl9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG5cIj5Nb3JlIGNvbW1lbnRzPC9hPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhc3NpZHMtd3JhcFwiPlxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3QtYm94XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdC1oZWFkaW5nIHRleHQtaDIgYXNpZGUtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgIExhdGVzdCBwb3N0c1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VjdGlvbl9fbGF0ZXN0LXBvc3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdF9waG90b1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvYXNpZGUtaW1nMS5wbmdcIiBhbHQ9XCJQaG90byBwb3N0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LXN1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICBNdWNoIGN1cmUgaW5hcHByb3ByaWF0ZSBjb3VsZCB0aGlzIHJlc3RyaWN0aW9ucyDigKZcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOS0xMC0wMlwiIGNsYXNzPVwidGltZSB0ZXh0LWg1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+MDIgb2N0LCAyMDE5XG4gICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3RcIj4xMiBtaW4gcmVhZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90IGNvbW1lbnRzXCI+NDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19sYXRlc3QtcG9zdF9waG90b1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9waWMvYXNpZGUtaW1nMi5wbmdcIiBhbHQ9XCJQaG90byBwb3N0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2xhdGVzdC1wb3N0LXN1YmhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICBNdWNoIGN1cmUgaW5hcHByb3ByaWF0ZSBjb3VsZCB0aGlzIHJlc3RyaWN0aW9ucyDigKZcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiMjAxOS0xMC0wMlwiIGNsYXNzPVwidGltZSB0ZXh0LWg1XCJcbiAgICAgICAgICAgICAgICAgICAgICA+MDIgb2N0LCAyMDE5XG4gICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3RcIj4xMiBtaW4gcmVhZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90IGNvbW1lbnRzXCI+NDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluay13cmFwXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0blwiPk1vcmUgcG9zdHM8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hc2lkZT5cblxuICAgICAgICAgICAgPGFzaWRlIGNsYXNzPVwic2VjdGlvbl9fcG9zdC1jYXRlZ29yaWVzLWJveFwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaGVkaW5nIHRleHQtaDIgYXNpZGUtaGVhZGluZ1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0cmF2ZWxcIiB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImlucHV0LWFjY29yZGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidHJhdmVsXCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5SZXN0YXVyYW50IGZvb2QgKDMpPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaGlkZGVuLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZXN0YXVyYW50XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1hY2NvcmRpb25cIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXN0YXVyYW50XCIgY2xhc3M9XCJsYWJlbC1hY2NvcmRpb24gdGV4dC1oNFwiXG4gICAgICAgICAgICAgICAgICAgID5UcmF2ZWwgbmV3cyAoMyk8L2xhYmVsXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJoaWRkZW4tbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW4tbGlzdF9pdGVtIHRleHQtaDVcIj48YSBocmVmPVwiI1wiPkhpa2luZzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW4tbGlzdF9pdGVtIHRleHQtaDVcIj48YSBocmVmPVwiI1wiPkJpY3ljbGUgdHJpcDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJoaWRkZW4tbGlzdF9pdGVtIHRleHQtaDVcIj48YSBocmVmPVwiI1wiPk1vdW50YWlucyB0cmlwPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19wb3N0LWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGVjaG5vbG9neVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYWNjb3JkaW9uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGVjaG5vbG9neVwiIGNsYXNzPVwibGFiZWwtYWNjb3JkaW9uIHRleHQtaDRcIlxuICAgICAgICAgICAgICAgICAgICA+TW9kZXJuIHRlY2hub2xvZ3kgKDYpPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaGlkZGVuLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwcm9kdWN0XCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJpbnB1dC1hY2NvcmRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2R1Y3RcIiBjbGFzcz1cImxhYmVsLWFjY29yZGlvbiB0ZXh0LWg0XCJcbiAgICAgICAgICAgICAgICAgICAgPlByb2R1Y3QgKDQpPC9sYWJlbFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaGlkZGVuLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuLWxpc3RfaXRlbSB0ZXh0LWg1XCI+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3Bvc3QtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnNwaXJhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtYWNjb3JkaW9uXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5zcGlyYXRpb25cIiBjbGFzcz1cImxhYmVsLWFjY29yZGlvbiB0ZXh0LWg0XCJcbiAgICAgICAgICAgICAgICAgICAgPkluc3BpcmF0aW9uICgyKTwvbGFiZWxcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImhpZGRlbi1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImhpZGRlbi1saXN0X2l0ZW0gdGV4dC1oNVwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2FzaWRlPlxuXG4gICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJzZWN0aW9uX19wb3N0LXRhZ3MtYm94XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1oZWFkaW5nIHRleHQtaDIgYXNpZGUtaGVhZGluZ1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUYWdzXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIlwiPkxvdmU8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+U2lnbnM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+V2F0ZXJmYWxsPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkluc3BpcmF0aW9uPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPlF1b3RlczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5TZWE8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+U2Vuc2U8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+Q29mZmVlPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkdvbGQ8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+SW1hZ2VzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGFncy1jYXRlZ29yaWVzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIHRleHQtaDVcIiBocmVmPVwiI1wiPkNvdXJhZ2U8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX190YWdzLWNhdGVnb3JpZXMtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidG4gdGV4dC1oNVwiIGhyZWY9XCIjXCI+RGFuY2luZzwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlY3Rpb25fX3RhZ3MtY2F0ZWdvcmllcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biB0ZXh0LWg1XCIgaHJlZj1cIiNcIj5WaWRlbzwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQWJvdXQge1xuICBjb25zdHJ1Y3RvcihhYm91dCkge1xuICAgIHRoaXMuYWJvdXQgPSBhYm91dDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYCAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uX19hYm91dC1oZWFkaW5nIHRleHQtY2VudGVyIHRleHQtaDIgYm90dG9tLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmFib3V0LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtc3ViLWhlYWRpbmcgdGV4dC1jZW50ZXIgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuYWJvdXQudGV4dH1cbiAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LWJsb2NrIHR5cG9ncmFwaHlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LWJsb2NrX3RpdGxlIHRleHQtaDRcIlxuICAgICAgICAgICAgICAgID5UeXBvZ3JhcGh5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LWJsb2NrIGljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VjdGlvbl9fYWJvdXQtYmxvY2tfdGl0bGUgdGV4dC1oNFwiPkljb24gc2V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LWJsb2NrIGFjY3VyYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlY3Rpb25fX2Fib3V0LWJsb2NrX3RpdGxlIHRleHQtaDRcIj5BY2N1cmF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19hYm91dC12aWRlbyB2aWRlby1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3BpYy9hYm91dC1waWN0dXJlLnBuZ1wiIGFsdD1cIkFib3V0IHBpY3R1cmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5gO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29udGFjdHMge1xuICBjb25zdHJ1Y3Rvcihjb250YWN0cykge1xuICAgIHRoaXMuY29udGFjdHMgPSBjb250YWN0cztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiY29udGFjdFwiIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1oZWFkaW5nIHRleHQtaDIgYm90dG9tLWxpbmVcIj5cbiAgICAgICAgICAgICAgICR7dGhpcy5jb250YWN0cy50aXRsZX1cbiAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LXRleHQgdGV4dC1jZW50ZXIgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAke3RoaXMuY29udGFjdHMudGV4dH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwic29jaWFsLW1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZmFjZWJvb2tcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJpbnN0YWdyYW1cIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiZHJpYmJsZVwiIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9cIj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1iYWNrZ3JvdW5kLXdyYXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LWNvbHVtbl9sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1zdWJoZWFkaW5nIHRleHQtaDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGF0IHdpbGwgYmUgbmV4dCBzdGVwP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b2wgc3RhcnQ9XCIxXCIgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LXN0ZXBzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LXN0ZXBzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzLWl0ZW1faGVhZGluZyB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZeKAmWxsIHByZXBhcmUgYSBwcm9wb3NhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzLWl0ZW1fdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXF1aXJlZCBzY29wZSwgdGltZWxpbmUgYW5kIGFwci4gcHJpY2Ugd2lsbCBiZSBpbmNsdWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgeW91IHByb3ZpZGUgdXMgd2l0aCBkZXRhaWwgaW5mb3JtYXRpb24gYWJvdXQgYSBwcm9qZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1zdGVwcy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwcy1pdGVtX2hlYWRpbmcgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9nZXRoZXIgd2UgZGlzY3VzcyBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzLWl0ZW1fdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZeKAmXMgZ2V0IGFjcXVhaW50ZWQgYW5kIGRpc2N1c3MgYWxsIHRoZSBwb3NzaWJsZSB2YXJpYW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3B0aW9ucy4gR29vZ2xlIEhhbmdvdXRzIG9yIFNreXBlIHVzdWFsbHkgd2lya3MgZ3JlYXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWN0aW9uX19jb250YWN0LXN0ZXBzLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzLWl0ZW1faGVhZGluZyB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXTigJlzIHN0YXJ0IGJ1aWxkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHMtaXRlbV90ZXh0IHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gdGhlIGNvbnRyYWN0IGlzIHNpZ25lZCBhbmQgYWxsIGdvYWxzIGFyZSBzZXQgd2UgY2FuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCB0aGUgZmlyc3Qgc3ByaW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtY29sdW1uX3JpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1mb3JtLW1lc3NhZ2UgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdyaXRlIHVzIGEgZmV3IHdvcmRzIGFib3V0IHlvdXIgcHJvamVjdCBhbmQgd2Ugd2lsbCBwcmVwYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcG9zYWwgZm9yIHlvdSB3aXRoaW4gMjQgaG91cnNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbl9yaWdodC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwicG9zdFwiIG1ldGhvZD1cInBvc3RcIiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPllvdXIgbmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dF9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgY2xhc3M9XCJpbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgY2xhc3M9XCJ0ZXh0LWg0XCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRfX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJpbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicGFzc3dvcmQtc2hvdyB0ZXh0LWg0XCIgZm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dF9fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cImlucHV0XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBjb2xvciB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5kIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2NvbnRhY3QtZm9ybV9lbWFpbCB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiB5b3UgbmVlZCB0byBoYXZlIGEgRE5BIGZpcnN0LCBqdXN0IGNvbnRhY3QgdXMgYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86ZW1haWxAZ21haWwuY29tXCI+ZW1haWxAZ21haWwuY29tPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgaWQ9XCJjb250YWN0LW1hcFwiIGNsYXNzPVwic2VjdGlvbl9fY29udGFjdC1tYXBcIj4tLT5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL3BpYy9tYXAucG5nXCIgYWx0PVwiTWFwXCIvPi0tPlxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFjdC1tYXBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBvcnRmb2xpbyB7XG4gIGNvbnN0cnVjdG9yKHBvcnRmb2xpbykge1xuICAgIHRoaXMucG9ydGZvbGlvID0gcG9ydGZvbGlvO1xuICB9XG5cbiAgY3JlYXRlR2FsbGVyeUl0ZW0ob2JqKSB7XG4gICAgcmV0dXJuIGAgPGxpIGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW1cIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+IFxuICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtvYmouc3JjfVwiIGFsdD1cImdhbGxlcnktaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnlfX3NsaWRlci1pdGVtLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5X19zbGlkZXItaXRlbS1oZWFkaW5nIHRleHQtaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW0tc3ViaGVhZGluZyB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29iai50ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeV9fc2xpZGVyLWl0ZW0tYm94XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+YDtcbiAgfVxuXG4gIGNyZWF0ZUdhbGxlcnlMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLnBvcnRmb2xpby5nYWxsZXJ5TGlzdFxuICAgICAgLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlR2FsbGVyeUl0ZW0oZWwpKVxuICAgICAgLmpvaW4oXCJcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBpZD1cInBvcnRmb2xpb1wiIGNsYXNzPVwic2VjdGlvbl9fcG9ydGZvbGlvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX3BvcnRmb2xpby1oZWFkaW5nIHRleHQtaDIgdGV4dC1jZW50ZXIgYm90dG9tLWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAke3RoaXMucG9ydGZvbGlvLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fcG9ydGZvbGlvLXRleHQgdGV4dC1jZW50ZXIgdGV4dC1oNFwiPlxuICAgICAgICAgICAgICAgICAgICR7dGhpcy5wb3J0Zm9saW8udGV4dH0gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicG9ydGZvbGlvLXNsaWRlci1ib3hcIj4gXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBpZD1cInBvcnRmb2xpby1saXN0XCIgY2xhc3M9XCJnYWxsZXJ5X19zbGlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNyZWF0ZUdhbGxlcnlMaXN0KCl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtd3JhcCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicG9ydGZvbGlvX19mbGlwLWxlZnRcIiBjbGFzcz1cImZsaXAgbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwicG9ydGZvbGlvX19mbGlwLXJpZ2h0XCIgY2xhc3M9XCJmbGlwIHJpZ2h0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt0aGlzLnBvcnRmb2xpby5idXR0b24uaHJlZn1cIiBjbGFzcz1cIiR7XG4gICAgICB0aGlzLnBvcnRmb2xpby5idXR0b24udHlwZVxuICAgIH1cIj4gJHt0aGlzLnBvcnRmb2xpby5idXR0b24udGl0bGV9IDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBvc3RTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IocG9zdFNlY3Rpb24pIHtcbiAgICB0aGlzLnBvc3RTZWN0aW9uID0gcG9zdFNlY3Rpb247XG4gIH1cblxuICAgIGNyZWF0ZUdhbGxlcnlJdGVtKG9iaikge1xuICAgICAgICByZXR1cm4gYCA8bGkgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtvYmouaHJlZn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtvYmouc3JjfVwiIGFsdD1cImdhbGxlcnkgaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1pdGVtX19oZWFkaW5nIHRleHQtaDNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnktaXRlbV9fdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7b2JqLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJveFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGRhdGV0aW1lPVwiJHtvYmouZGF0YS50aW1lfVwiIGNsYXNzPVwidGltZSB0ZXh0LWg1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4yOCBzZXAsIDIwMTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGltZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3RcIj4ke29iai5kYXRhLm1pbnV0c30gbWluIHJlYWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDUgZG90IGNvbW1lbnRzXCI+JHtvYmouZGF0YS5jb21tZW50c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgICB9XG5cbiAgICBjcmVhdGVHYWxsZXJ5TGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdFNlY3Rpb24uZ2FsbGVyeUxpc3RcbiAgICAgICAgICAgIC5tYXAoKGVsKSA9PiB0aGlzLmNyZWF0ZUdhbGxlcnlJdGVtKGVsKSlcbiAgICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25fX3Bvc3RzIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbl9fcG9zdHMtaGVhZGluZyB0ZXh0LWgyIHRleHQtY2VudGVyIGJvdHRvbS1saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wb3N0U2VjdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19wb3N0cy10ZXh0IHRleHQtY2VudGVyIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnBvc3RTZWN0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX3Bvc3RzXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImdhbGxlcnktbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlR2FsbGVyeUxpc3QoKX0gXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFRlc3RpbW9uaWFscyB7XG4gIGNvbnN0cnVjdG9yKHRlc3RpbW9uaWFscykge1xuICAgIHRoaXMudGVzdGltb25pYWxzID0gdGVzdGltb25pYWxzO1xuICB9XG5cbiAgY3JlYXRlSXRlbShvYmopIHtcblxuICAgIHJldHVybiBgPGxpIGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXBob3RvLWl0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtcGhvdG8tYm94XCI+XG4gICAgICAgICAgICAgICAgPHEgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdGV4dCB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7b2JqLnF9XG4gICAgICAgICAgICAgICAgPC9xPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdGV4dC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMtdGV4dCB0ZXh0LWg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29iai5hdXRob3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXRleHQgdGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtvYmoucHJvZmVzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXVzZXItcGhvdG9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7b2JqLnNyY31cIiBhbHQ9XCJ1c2VyLXBob3RvXCIvPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvbGk+YDtcbiAgfVxuXG4gIGNyZWF0ZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdGltb25pYWxzLmxpc3QubWFwKChlbCkgPT4gdGhpcy5jcmVhdGVJdGVtKGVsKSkuam9pbihcIlwiKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYCA8c2VjdGlvbiBpZD1cInNlY3Rpb24tdGVzdGltb25pYWxzXCIgY2xhc3M9XCJzZWN0aW9uX190ZXN0aW1vbmlhbHMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgICAgICBzZWN0aW9uX190ZXN0aW1vbmlhbHMtaGVhZGluZ1xuICAgICAgICAgICAgICAgIHRleHQtY2VudGVyIHRleHQtaDJcbiAgICAgICAgICAgICAgICBib3R0b20tbGluZVwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy50ZXN0aW1vbmlhbHMudGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi13cmFwXCIgaWQ9XCJ0ZXN0aW1vbmlhbHMtcGhvdG8tbGlzdF93cmFwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJmbGlwLWxlZnRcIiBjbGFzcz1cImZsaXAgbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXBob3RvLWxpc3Rfd3JhcFwiPlxuICAgICAgICAgICAgICA8dWwgaWQ9XCJzbGlkZXItbGlzdFwiIGNsYXNzPVwic2VjdGlvbl9fdGVzdGltb25pYWxzLXBob3RvLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlTGlzdCgpfVxuICAgICAgICAgICAgICA8L3VsPiBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJmbGlwLXJpZ2h0XCIgY2xhc3M9XCJmbGlwIHJpZ2h0XCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTZWN0aW9uVG9wQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKGJsb2NrQ29udGVudCkge1xuICAgIHRoaXMuYmxvY2tDb250ZW50ID0gYmxvY2tDb250ZW50O1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cblxuICByZW5kZXJUZXh0KCkge1xuICAgIHJldHVybiBgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190b3AtaGVhZGluZyB0ZXh0LWgxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5ibG9ja0NvbnRlbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fdG9wLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5ibG9ja0NvbnRlbnQudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgfVxuXG4gIGNyZWF0ZUJ1dHRvbnMoaXRlbSkge1xuICAgIHJldHVybiBgPGEgaHJlZj1cIiR7aXRlbS5ocmVmfVwiIGNsYXNzPVwiJHtpdGVtLnR5cGV9XCI+JHtpdGVtLnRpdGxlfTwvYT5gO1xuICB9XG5cbiAgcmVuZGVyQnV0dG9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5ibG9ja0NvbnRlbnQuYnV0dG9uc1xuICAgICAgLm1hcCgoZWwpID0+IHRoaXMuY3JlYXRlQnV0dG9ucyhlbCkpXG4gICAgICAuam9pbihcIlwiKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYFxuICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190b3BcIiBpZD1cInNlY3Rpb25fX3RvcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxheW91dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX190b3Atd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICR7dGhpcy5yZW5kZXJUZXh0KCl9XG4gICAgICAgICAgICAgICAgICAgJHt0aGlzLnJlbmRlckJ1dHRvbnMoKX0gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEFQSUtFWSA9ICdjN2MwYjgxOGVmODlhMmJjZWE5YmVkMzBiY2NmNzViMic7XG4iLCJleHBvcnQgY29uc3QgaW5pdE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdWx1cnUgPSB7bGF0OiA1MC41NTAsIGxuZzogNzUwLjUwMH07XG4gIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtbWFwJyksIHtcbiAgICB6b29tOiA0LFxuICAgIGNlbnRlcjogdWx1cnUsXG4gIH0pO1xuXG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgIHBvc2l0aW9uOiB1bHVydSxcbiAgICBtYXA6IG1hcCxcbiAgfSk7XG59XG4iLCJpbXBvcnQge0FQSUtFWX0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQge01vdmllLCBNdXNpYywgUGljfSBmcm9tIFwiLi9wb3N0RVM2XCI7XG5cbmxldCBiYXNlVVJMID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zXCI7XG5jb25zdCBDT1VOVF9PRl9TVEFSUyA9IDU7XG5jb25zdCBtb250aCA9IFsnamFuJywgJ2ZlYicsICdtYXInLCAnYXByJywgJ21heScsICdqdW4nLFxuICAgICdqdWwnLCAnYXVnJywgJ3NlcCcsICdvY3QnLCAnbm92JywgJ2RlYyddO1xuXG5leHBvcnQgY29uc3QgbG9hZEJsb2dQYWdlcyA9IGZ1bmN0aW9uIChwYWdlKSB7XG5cbiAgICByZXR1cm4gZmV0Y2goYCR7YmFzZVVSTH0vbW92aWUvcG9wdWxhcj9hcGlfa2V5PSR7QVBJS0VZfSZwYWdlPSR7cGFnZX1gKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0cy5tYXAoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRGF0ZShlbC5yZWxlYXNlX2RhdGUpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhU3RyID0gYCR7ZGF0YS5nZXREYXRlKCl9IGAgKyBgJHttb250aFtkYXRhLmdldE1vbnRoKCkgKyAxXX0sIGAgKyBgJHtkYXRhLmdldEZ1bGxZZWFyKCl9YDtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnMgPSAoQ09VTlRfT0ZfU1RBUlMgKiAoZWwudm90ZV9hdmVyYWdlICogMTApKSAvIDEwMDtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBlbC5pZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG46IENPVU5UX09GX1NUQVJTLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbDogTWF0aC5mbG9vcihzdGFycylcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ2aWRlb1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyBwaWM6IFwiYXNzZXRzL3BpYy9ibG9nLWltZzEucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgIHBpYzogYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsLyR7ZWwuYmFja2Ryb3BfcGF0aH1gLFxuICAgICAgICAgICAgICAgICAgICAvLyBwaWM6IGAke2Jhc2VVUkx9L21vdmllL3BvcHVsYXI/YXBpX2tleT0ke0FQSUtFWX0ke2VsLmJhY2tkcm9wX3BhdGh9YCxcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvJHtlbC5wb3N0ZXJfcGF0aH1gLFxuICAgICAgICAgICAgICAgICAgICBhdXRob3I6IFwiTmVpbCBSaWNoYXJkc1wiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogZWwub3JpZ2luYWxfdGl0bGUsIC8vKioqKioqKioqKioqKioqKiogICAgb3JpZ2luYWxfdGl0bGUsIHRpdGxlLCBuYW1lLCBvcmlnaW5hbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlbC5vdmVydmlldyxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJSZWFkIG1vcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidG5cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uRGVsZXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZWxldGUgcG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ0biBidG4tZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogZGF0YVN0cixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0czogXCIxMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHM6IGVsLnZvdGVfY291bnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYCR7YmFzZVVSTH0vbW92aWUvJHtpdGVtLmlkfT9hcGlfa2V5PSR7QVBJS0VZfSZsYW5ndWFnZT1lbi1VU2ApXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVudGltZSA9IGRhdGEucnVudGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndmlkZW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IE1vdmllKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ211c2ljJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgTXVzaWMoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncGljJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICBuZXcgUGljKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkU2VhcmNoUGFnZXNCeVRpdGxlID0gZnVuY3Rpb24gKHBhZ2UsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgICBgJHtiYXNlVVJMfS9zZWFyY2gvbXVsdGk/YXBpX2tleT0ke0FQSUtFWX0mbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0ke3BhZ2V9JmluY2x1ZGVfYWR1bHQ9ZmFsc2UmcXVlcnk9JHt2YWx1ZX1gXG4gICAgKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0c1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbC5tZWRpYV90eXBlID09PSAnbW92aWUnKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbC5iYWNrZHJvcF9wYXRoICYmIGVsLnBvc3Rlcl9wYXRoKVxuICAgICAgICAgICAgICAgIC5tYXAoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IERhdGUoZWwucmVsZWFzZV9kYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFTdHIgPSBgJHtkYXRhLmdldERhdGUoKX0gYCArIGAke21vbnRoW2RhdGEuZ2V0TW9udGgoKSArIDFdfSwgYCArIGAke2RhdGEuZ2V0RnVsbFllYXIoKX1gO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnMgPSAoQ09VTlRfT0ZfU1RBUlMgKiAoZWwudm90ZV9hdmVyYWdlICogMTApKSAvIDEwMDtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbjogQ09VTlRfT0ZfU1RBUlMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbDogTWF0aC5mbG9vcihzdGFycylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlbC5tZWRpYV90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGljOiBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvJHtlbC5iYWNrZHJvcF9wYXRofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGBodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8ke2VsLnBvc3Rlcl9wYXRofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IFwiTmVpbCBSaWNoYXJkc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdlbC5uYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVsLm92ZXJ2aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhZCBtb3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25EZWxldGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZWxldGUgcG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnRuIGJ0bi1kZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBkYXRhU3RyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0czogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHM6IGVsLnZvdGVfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYCR7YmFzZVVSTH0vbW92aWUvJHtpdGVtLmlkfT9hcGlfa2V5PSR7QVBJS0VZfSZsYW5ndWFnZT1lbi1VU2ApXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGl0bGUgPSBkYXRhLm9yaWdpbmFsX3RpdGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVudGltZSA9IGRhdGEucnVudGltZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTW92aWUoaXRlbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZFNlYXJjaFBhZ2VzQnlBdXRob3IgPSBmdW5jdGlvbiAocGFnZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICAgIGAke2Jhc2VVUkx9L3NlYXJjaC9wZXJzb24/YXBpX2tleT0ke0FQSUtFWX0mbGFuZ3VhZ2U9ZW4tVVMmcGFnZT0ke3BhZ2V9JmluY2x1ZGVfYWR1bHQ9ZmFsc2UmcXVlcnk9JHt2YWx1ZX1gXG5cbiAgICApXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHNcblxuICAgICAgICAgICAgICAgIC5tYXAoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbC5rbm93bl9mb3IubWFwKChlbCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRGF0ZShlbC5yZWxlYXNlX2RhdGUpO1xuICAgICAgICAgICAgICAgICAgIGxldCBkYXRhU3RyID0gYCR7ZGF0YS5nZXREYXRlKCl9IGAgKyBgJHttb250aFtkYXRhLmdldE1vbnRoKCkgKyAxXX0sIGAgKyBgJHtkYXRhLmdldEZ1bGxZZWFyKCl9YDtcbiAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnMgPSAoQ09VTlRfT0ZfU1RBUlMgKiAoZWwudm90ZV9hdmVyYWdlICogMTApKSAvIDEwMDtcblxuICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICBpZDogZWwuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgIHN0YXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBuOiBDT1VOVF9PRl9TVEFSUyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGw6IE1hdGguZmxvb3Ioc3RhcnMpXG4gICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGVsLm1lZGlhX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgIHBpYzogYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsLyR7ZWwuYmFja2Ryb3BfcGF0aH1gLFxuICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGBodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8ke2VsLnBvc3Rlcl9wYXRofWAsXG4gICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcjogXCJOZWlsIFJpY2hhcmRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlbC5vcmlnaW5hbF90aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZWwub3ZlcnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhZCBtb3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkRlbGV0ZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVsZXRlIHBvc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidG4gYnRuLWRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGRhdGFTdHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dHM6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHM6IGVsLnZvdGVfY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pLmZsYXQoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICByZXNwb25zZS5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGAke2Jhc2VVUkx9L21vdmllLyR7aXRlbS5pZH0/YXBpX2tleT0ke0FQSUtFWX0mbGFuZ3VhZ2U9ZW4tVVNgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRpdGxlID0gZGF0YS5vcmlnaW5hbF90aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnJ1bnRpbWUgPSBkYXRhLnJ1bnRpbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE1vdmllKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxufTtcbiIsImV4cG9ydCBjbGFzcyBCbG9nUG9zdCB7XG4gICAgY29uc3RydWN0b3Iob2JqLCBidXR0b25DbGFzcywgdHlwZSkge1xuICAgICAgICB0aGlzLm9iaiA9IG9iajtcbiAgICAgICAgdGhpcy5idXR0b25DbGFzcyA9IGJ1dHRvbkNsYXNzO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIGNyZWF0ZUl0ZW0ocmF0aW5nID0gJycpIHtcbiAgICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJzZWN0aW9uX19ibG9nLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLm9iai5waWNcbiAgICAgICAgICAgICAgICA/IGA8ZmlndXJlIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pdGVtX3ZpZGVvICAke3RoaXMudHlwZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5vYmoucGljfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbl9fYmxvZy1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImJsb2dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5gXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWluZm9cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5idXR0b25DbGFzc31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbl9waG90b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7dGhpcy5vYmouc3JjfVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInBlcnNvbi1waG90b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uX19ibG9nLXBlcnNvbi1uYW1lIHRleHQtaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub2JqLmF1dGhvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZVRpbWUgY2xhc3M9XCJ0aW1lIHRleHQtaDVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4ke3RoaXMub2JqLmRhdGEudGltZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWg1IGRvdFwiPiR7XG4gICAgICAgICAgICB0aGlzLm9iai5ydW50aW1lXG4gICAgICAgIH0gbWluIGR1cmF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1oNSBkb3QgY29tbWVudHNcIj4ke1xuICAgICAgICAgICAgdGhpcy5vYmouZGF0YS5jb21tZW50c1xuICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cmF0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctcGVyc29uLWhlYWRpbmcgdGV4dC1oM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub2JqLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPT09IFwibXVzaWNcIlxuICAgICAgICAgICAgICAgID8gJzxmaWd1cmUgY2xhc3M9XCJhdWRpb1wiPicgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgICAgPGF1ZGlvXCIgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgICAgICBjb250cm9sc1wiICtcbiAgICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9hdWRpby9tZWRpYS9jYzAtYXVkaW8vdC1yZXgtcm9hci5tcDNcIicgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgICAgPjwvYXVkaW8+XCIgK1xuICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIDwvZmlndXJlPlwiXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbl9fYmxvZy1wZXJzb24tdGV4dCB0ZXh0LWg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMub2JqLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25fX2Jsb2ctaXRlbV9idXR0b24td3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHt0aGlzLm9iai5idXR0b24uaHJlZn1cIiBjbGFzcz1cIiR7XG4gICAgICAgICAgICB0aGlzLm9iai5idXR0b24udHlwZVxuICAgICAgICB9XCI+JHt0aGlzLm9iai5idXR0b24udGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMub2JqLmJ1dHRvbkRlbGV0ZS5ocmVmfVwiIGlkPVwiYnV0dG9uLWRlbGV0ZS1wb3N0XCIgY2xhc3M9XCIke1xuICAgICAgICAgICAgdGhpcy5vYmouYnV0dG9uRGVsZXRlLnR5cGVcbiAgICAgICAgfVwiPiR7dGhpcy5vYmouYnV0dG9uRGVsZXRlLnRpdGxlfTwvYT5cbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgICB9XG5cbiAgICByZW5kZXIoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVJdGVtKGRhdGEpO1xuICAgIH1cbn1cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmV4cG9ydCBjbGFzcyBNb3ZpZSBleHRlbmRzIEJsb2dQb3N0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgc3VwZXIob2JqKTtcbiAgICAgICAgdGhpcy5idXR0b25DbGFzcyA9IFwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb192aWRlb1wiO1xuICAgICAgICB0aGlzLnR5cGUgPSBcInZpZGVvLWJ1dHRvblwiO1xuICAgIH1cblxuICAgIGNyZWF0ZVJhdGluZ0xpc3QobiwgZnVsbCkge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBpZihpIDw9IGZ1bGwpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChgPGxpIGNsYXNzPVwicmF0aW5nLWl0ZW0gZnVsbFwiPjwvbGk+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKGA8bGkgY2xhc3M9XCJyYXRpbmctaXRlbVwiPjwvbGk+YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyLmpvaW4oJycpO1xuICAgIH07XG5cbiAgICBjcmVhdGVJdGVtKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuY3JlYXRlSXRlbShgXG4gICAgICAgIDx1bCBjbGFzcz1cInJhdGluZy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJhdGluZ0xpc3QodGhpcy5vYmouc3RhcnMubiwgdGhpcy5vYmouc3RhcnMuZnVsbClcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+IFxuICAgICAgICBgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNdXNpYyBleHRlbmRzIEJsb2dQb3N0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmopIHtcbiAgICAgICAgc3VwZXIob2JqKTtcbiAgICAgICAgdGhpcy5idXR0b25DbGFzcyA9IFwic2VjdGlvbl9fYmxvZy1wZXJzb24taW5mb19tdXNpY1wiO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIm11c2ljXCI7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGljIGV4dGVuZHMgQmxvZ1Bvc3Qge1xuICAgIGNvbnN0cnVjdG9yKG9iaikge1xuICAgICAgICBzdXBlcihvYmopO1xuICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzID0gXCJzZWN0aW9uX19ibG9nLXBlcnNvbi1pbmZvX3BpY1wiO1xuICAgICAgICB0aGlzLnR5cGUgPSBcInBpY1wiO1xuICAgIH1cbn0iLCJmdW5jdGlvbiBTbGlkZXIgKHRpbWUsIHZpc2libGVFbGVtZW50cykge1xuXG4gICAgdGhpcy50aW1lID0gdGltZTtcbiAgICB0aGlzLnZpc2libGVFbGVtZW50cyA9IHZpc2libGVFbGVtZW50cztcblxuICAgIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxpc3Quc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7dGhpcy5zdGVwICogMTAwfSUpYDtcbiAgICB9XG5cbiAgICB0aGlzLm1vdmVMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZih0aGlzLnN0ZXAgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0ZXAtLTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnN0ZXAgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmFuaW1hdGVMZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlUmlnaHQgPSBmdW5jdGlvbiAoKXtcbiAgICAgICAgaWYgKHRoaXMuc3RlcCA8IHRoaXMubGlzdC5jaGlsZHJlbi5sZW5ndGggLyB0aGlzLnZpc2libGVFbGVtZW50cyAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuc3RlcCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RlcCA9PT0gdGhpcy5saXN0LmNoaWxkcmVuLmxlbmd0aCAvIHRoaXMudmlzaWJsZUVsZW1lbnRzIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmFuaW1hdGVSaWdodCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRlUmlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RlcCA9IDE7XG4gICAgICAgIHRoaXMubGlzdC5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmFuaW1hdGVSaWdodCk7XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRlTGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5saXN0LmNoaWxkcmVuLmxlbmd0aCAvIHRoaXMudmlzaWJsZUVsZW1lbnRzIC0gMjtcbiAgICAgICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3Quc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuYW5pbWF0ZUxlZnQpO1xuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0ZVJpZ2h0ID0gdGhpcy5hbmltYXRlUmlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFuaW1hdGVMZWZ0ID0gdGhpcy5hbmltYXRlTGVmdC5iaW5kKHRoaXMpO1xufVxuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogU2xpZGVyIFRlc3RpbW9uaWFsc1xuXG5mdW5jdGlvbiBTbGlkZXJUZXN0aW1vbmlhbHModGltZSwgdmlzaWJsZUVsZW1lbnRzKSB7XG4gICAgU2xpZGVyLmNhbGwodGhpcyk7XG5cbiAgICB0aGlzLnRpbWUgPSB0aW1lO1xuICAgIHRoaXMudmlzaWJsZUVsZW1lbnRzID0gdmlzaWJsZUVsZW1lbnRzO1xuXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0ZXAgPSAxO1xuICAgICAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyLWxpc3QnKTtcbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsaXAtbGVmdCcpO1xuICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsaXAtcmlnaHQnKTtcbiAgICAgICAgdGhpcy5zbGlkZXJCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdGltb25pYWxzLXBob3RvLWxpc3Rfd3JhcCcpO1xuXG4gICAgICAgIGNvbnN0IGVsRmlyc3QgPSB0aGlzLmxpc3QuY2hpbGRyZW5bMF07XG4gICAgICAgIGNvbnN0IGVsTGFzdCA9IHRoaXMubGlzdC5jaGlsZHJlblt0aGlzLmxpc3QuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGNsb25lRmlyc3QgPSBlbEZpcnN0LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgY2xvbmVMYXN0ID0gZWxMYXN0LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKGNsb25lRmlyc3QpO1xuICAgICAgICB0aGlzLmxpc3QuaW5zZXJ0QmVmb3JlKGNsb25lTGFzdCwgZWxGaXJzdCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICB0aGlzLnJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tb3ZlUmlnaHQoKSk7XG4gICAgICAgIHRoaXMubGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubW92ZUxlZnQoKSk7XG5cblxuICAgICAgICB0aGlzLnNsaWRlckJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5zdGFydEFuaW1hdGlvbigpKTtcbiAgICAgICAgdGhpcy5zbGlkZXJCb3guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IGNsZWFyVGltZW91dCh0aGlzLnRlc3RpbW9uaWFsU2xpZGVyTW92ZSkpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGVzdGltb25pYWxTbGlkZXJNb3ZlID0gc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgfSwgdGhpcy50aW1lKVxuICAgIH1cblxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGVzdGltb25pYWxTbGlkZXJNb3ZlKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxufVxuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogLy9TbGlkZXIgVGVzdGltb25pYWxzXG5cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFNsaWRlciBQb3J0Zm9saW9cbmZ1bmN0aW9uIFNsaWRlclBvcmZvbGlvICh0aW1lLCB2aXNpYmxlRWxlbWVudHMpIHtcbiAgICBTbGlkZXIuY2FsbCh0aGlzKTtcblxuICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcbiAgICAgICAgdGhpcy52aXNpYmxlRWxlbWVudHMgPSB2aXNpYmxlRWxlbWVudHM7XG5cbiAgICAgICAgdGhpcy5zdGVwID0gMTtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAwO1xuICAgICAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvLWxpc3QnKTtcblxuICAgICAgICB0aGlzLmxlZnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9ydGZvbGlvX19mbGlwLWxlZnQnKTtcbiAgICAgICAgdGhpcy5yaWdodEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Zm9saW9fX2ZsaXAtcmlnaHQnKTtcblxuICAgICAgICB0aGlzLnNsaWRlckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3J0Zm9saW8tc2xpZGVyLWJveCcpO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyQm94LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLnN0YXJ0QW5pbWF0aW9uKCkpO1xuICAgICAgICB0aGlzLnNsaWRlckJveC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gY2xlYXJUaW1lb3V0KHRoaXMucG9ydGZvbGlvU2xpZGVyTW92ZSkpO1xuXG4gICAgICAgIHRoaXMucmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm1vdmVSaWdodCgpKTtcbiAgICAgICAgdGhpcy5sZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5tb3ZlTGVmdCgpKTtcblxuICAgICAgICBsZXQgZmlyc3RJdGVtID0gdGhpcy5saXN0LmNoaWxkcmVuWzBdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnZpc2libGVFbGVtZW50czsgaSA+PSAxOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBlbExhc3QgPSB0aGlzLmxpc3QuY2hpbGRyZW5bdGhpcy5saXN0LmNoaWxkcmVuLmxlbmd0aCAtIGldO1xuICAgICAgICAgICAgbGV0IGNsb25lTGFzdCA9IGVsTGFzdC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QuaW5zZXJ0QmVmb3JlKGNsb25lTGFzdCwgZmlyc3RJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52aXNpYmxlRWxlbWVudHM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsRmlyc3QgPSB0aGlzLmxpc3QuY2hpbGRyZW5bdGhpcy52aXNpYmxlRWxlbWVudHMgKyBpXTtcbiAgICAgICAgICAgIGxldCBjbG9uZUZpcnN0ID0gZWxGaXJzdC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQoY2xvbmVGaXJzdCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucG9ydGZvbGlvU2xpZGVyTW92ZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oKTtcbiAgICAgICAgfSwgdGhpcy50aW1lKVxuICAgIH1cblxuICAgIHRoaXMuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBvcnRmb2xpb1NsaWRlck1vdmUpO1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNsaWRlclRlc3RpbW9uaWFscyA9IG5ldyBTbGlkZXJUZXN0aW1vbmlhbHMoMjUwMCwgMSk7XG5leHBvcnQgY29uc3Qgc2xpZGVyUG9ydGZvbGlvID0gbmV3IFNsaWRlclBvcmZvbGlvKDI1MDAsIDMpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiJChmdW5jdGlvbigpIHtcbiAgJC5mbi5zaG93TW9kYWwgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b25MaXN0KGRhdGEpIHtcbiAgICAgIHJldHVybiBkYXRhLm1hcCgoZWwsIGluZGV4KSA9PiByZW5kZXJCdXR0b24oZWwsIGluZGV4KSkuam9pbignJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQnV0dG9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJtb2RhbC1idXR0b25cIiBpZD1cIiR7aXRlbS50aXRsZSA9PT0gJ29rJyA/ICdtb2RhbC1idXR0b25fY29uZmlybScgOiAnbW9kYWwtYnV0dG9uX2NhbmNlbCd9XCIgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBkYXRhLWlkPVwiJHtpbmRleH1cIj48c3Bhbj4ke2l0ZW0udGl0bGV9PC9zcGFuPjwvYnV0dG9uPmA7XG4gICAgfVxuXG4gICAgY29uc3QgZGVyaXZlQ2xhc3NCeVR5cGUgPSAodHlwZSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICByZXR1cm4gJ21vZGFsLXdpbmRvd19lcnJvcic7XG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgIHJldHVybiAnbW9kYWwtd2luZG93X3N1Y2Nlc3MnO1xuICAgICAgICBjYXNlICcnOlxuICAgICAgICAgIHJldHVybiAnbW9kYWwtd2luZG93X2luZm8nO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiAnbW9kYWwtd2luZG93X2luZm8nO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAkKCdib2R5JykuYXBwZW5kKFxuICAgICAgICBgXG4gICAgICAgIDxkaXYgaWQ9XCJtb2RhbC13aW5kb3dfd3JhcFwiPlxuICAgICAgICAgPGRpdiBpZD1cIm1vZGFsLXdpbmRvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd19pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJtb2RhbC1idXR0b25fY2xvc2VcIj5YPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtb2RhbC10ZXh0XCI+JHt0aGlzLmh0bWwoKX08L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idXR0b25fd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAke2NyZWF0ZUJ1dHRvbkxpc3QocGFyYW1zLmFjdGlvbnMpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuICAgICk7XG5cbiAgICBjb25zdCBtb2RhbCA9ICQoJyNtb2RhbC13aW5kb3cnKTtcbiAgICBjb25zdCBidG5DbG9zZU1vZGFsID0gJCgnI21vZGFsLWJ1dHRvbl9jbG9zZScpO1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSAkKCcjbWFpbi1jb250YWluZXInKTtcblxuICAgIG1vZGFsLmFkZENsYXNzKGRlcml2ZUNsYXNzQnlUeXBlKHBhcmFtcy50eXBlKSk7XG5cbiAgICBjb25zdCBjbG9zZU1vZGFsSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKG1vZGFsICYmIG1vZGFsLmxlbmd0aCAmJiAhbW9kYWxbMF0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBoaWRlTW9kYWwoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbW9kYWwuZmFkZUluKHtcbiAgICAgIGR1cmF0aW9uOiAnc2xvdycsXG4gICAgICBlYXNpbmc6ICdzd2luZycsXG4gICAgICBkb25lOiAoKSA9PiB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBjbG9zZU1vZGFsSGFuZGxlcik7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgbWFpbkNvbnRhaW5lci5hZGRDbGFzcygnYmx1cicpO1xuICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuXG4gICAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4ge1xuICAgICAgbW9kYWwuZmFkZU91dCh7XG4gICAgICAgIGRvbmU6IChhbmltYXRpb24pID0+IHtcbiAgICAgICAgICAkKCcjbW9kYWwtd2luZG93X3dyYXAnKS5yZW1vdmUoKTtcbiAgICAgICAgICAkKCdib2R5Jykub2ZmKCdjbGljaycsIGNsb3NlTW9kYWxIYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNsYXNzKCdibHVyJyk7XG4gICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdhdXRvJyk7XG4gICAgICBtb2RhbC5yZW1vdmVDbGFzcyhkZXJpdmVDbGFzc0J5VHlwZShwYXJhbXMudHlwZSkpO1xuICAgIH07XG5cbiAgICAkKCdib2R5Jykub24oJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICgoZXZlbnQua2V5ID09PSAnRXNjYXBlJykpIHtcbiAgICAgICAgaGlkZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidG5DbG9zZU1vZGFsLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgIGhpZGVNb2RhbCgpO1xuICAgIH0pO1xuXG5cbiAgICAkKCcubW9kYWwtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBoaWRlTW9kYWwoKTtcblxuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSk7XG4gICAgICBjb25zdCBlbCA9IHBhcmFtcy5hY3Rpb25zLmZpbmQoKGVsLCBpKSA9PiBpID09PSBpbmRleCk7XG4gICAgICBlbC5oYW5kbGVyKCk7XG4gICAgfSk7XG4gIH07XG5cblxuICAkKCcjYnV0dG9uLWRlbGV0ZS1wb3N0Jykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgJCgnI2RlbGV0ZS13aW5kb3ctY29udGVudCcpLnNob3dNb2RhbCh7XG4gICAgICB0eXBlOiAnaW5mbycsXG4gICAgICBhY3Rpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ29rJyxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiBhbGVydCgnTW92aWUgcmVtb3ZlZCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdjYW5jZWwnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsImltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIjtcbmltcG9ydCB7IFNlY3Rpb25Ub3BDb250ZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90b3Atc2VjdGlvbi90b3Atc2VjdGlvblwiO1xuaW1wb3J0IHsgQWJvdXQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tYWJvdXQvc2VjdGlvbi1hYm91dFwiO1xuaW1wb3J0IHtQb3N0U2VjdGlvbn0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9uLXBvc3RzL3NlY3Rpb24tcG9zdFwiO1xuaW1wb3J0IHsgUG9ydGZvbGlvIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9uLXBvcnRmb2xpby9zZWN0aW9uLXBvcnRmb2xpb1wiO1xuaW1wb3J0IHsgVGVzdGltb25pYWxzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zZWN0aW9uLXRlc3RpbW9uaWFscy9zZWN0aW9uLXRlc3RpbW9uaWFsc1wiO1xuaW1wb3J0IHsgQ29udGFjdHMgfSBmcm9tIFwiLi9jb21wb25lbnRzL3NlY3Rpb24tY29udGFjdC9zZWN0aW9uLWNvbnRhY3RzXCI7XG5pbXBvcnQgeyBCbG9nIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlLWJsb2cvcGFnZS1ibG9nXCI7XG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlLXBvc3QvcGFnZS1wb3N0XCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi9kYXRhLmpzb25cIjtcbmltcG9ydCB7c2xpZGVyUG9ydGZvbGlvLCBzbGlkZXJUZXN0aW1vbmlhbHN9IGZyb20gXCIuL3NsaWRlckVTNVwiO1xuXG5pbXBvcnQge2luaXRNYXB9IGZyb20gXCIuL21hcFwiO1xuaW1wb3J0IHtcbiAgbG9hZEJsb2dQYWdlcyxcbiAgbG9hZFNlYXJjaFBhZ2VzQnlUaXRsZSxcbiAgbG9hZFNlYXJjaFBhZ2VzQnlBdXRob3Jcbn0gZnJvbSBcIi4vbW92aWUtc2VhcmNoXCI7XG5cbmNvbnN0IHRocm90dGxlID0gKGNiLCB0aW1lKSA9PiB7XG4gIGNsZWFyVGltZW91dCh3aW5kb3cudGhyb3R0bGVUaW1vdXQpO1xuICB3aW5kb3cudGhyb3R0bGVUaW1vdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjYigpO1xuICB9LCB0aW1lKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCBhcHBsaWNhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuICBjb25zdCBuYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oZGF0YS5uYXYpO1xuICBjb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVyKG5hdmlnYXRpb24pO1xuICBjb25zdCBmb290ZXIgPSBuZXcgRm9vdGVyKG5hdmlnYXRpb24pO1xuICBjb25zdCBzZWN0aW9uVG9wQ29udGVudCA9IG5ldyBTZWN0aW9uVG9wQ29udGVudChkYXRhLmJsb2NrQ29udGVudCk7XG4gIGNvbnN0IGFib3V0ID0gbmV3IEFib3V0KGRhdGEuYWJvdXQpO1xuICBjb25zdCBwb3N0U2VjdGlvbiA9IG5ldyBQb3N0U2VjdGlvbihkYXRhLnBvc3RTZWN0aW9uKTtcbiAgY29uc3QgcG9ydGZvbGlvID0gbmV3IFBvcnRmb2xpbyhkYXRhLnBvcnRmb2xpbyk7XG4gIGNvbnN0IHRlc3RpbW9uaWFscyA9IG5ldyBUZXN0aW1vbmlhbHMoZGF0YS50ZXN0aW1vbmlhbHMpO1xuICBjb25zdCBjb250YWN0cyA9IG5ldyBDb250YWN0cyhkYXRhLmNvbnRhY3RzKTtcbiAgY29uc3QgYmxvZyA9IG5ldyBCbG9nKGRhdGEuYmxvZyk7XG4gIGNvbnN0IGFydGljbGUgPSBuZXcgQXJ0aWNsZShkYXRhLmFydGljbGUpO1xuICBsZXQgdGVzdGltb25pYWxzU2xpZGVyO1xuICBsZXQgcG9ydGZvbGlvU2xpZGVyO1xuICBsZXQgYmxvZ1BhZ2U7XG5cbiAgZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICR7aGVhZGVyLnJlbmRlcihcIiNob21lXCIpfVxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbnMtd3JhcFwiPlxuICAgICAgICAgICAgJHtzZWN0aW9uVG9wQ29udGVudC5yZW5kZXIoKX0gXG4gICAgICAgICAgICAke2Fib3V0LnJlbmRlcigpfVxuICAgICAgICAgICAgJHtwb3N0U2VjdGlvbi5yZW5kZXIoKX1cbiAgICAgICAgICAgICR7cG9ydGZvbGlvLnJlbmRlcigpfSAgXG4gICAgICAgICAgICAke3Rlc3RpbW9uaWFscy5yZW5kZXIoKX1cbiAgICAgICAgICAgICR7Y29udGFjdHMucmVuZGVyKCl9ICAgICAgICBcbiAgICAgICAgPC9kaXY+IFxuICAgICAgJHtmb290ZXIucmVuZGVyKCl9IFxuICAgIGA7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJCbG9nKGRhdGEpIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtoZWFkZXIucmVuZGVyKFwiI2Jsb2dcIil9XG4gICAgICAke2Jsb2cucmVuZGVyKGRhdGEpfSBcbiAgICAgICR7Zm9vdGVyLnJlbmRlcigpfSBcbiAgICBgO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUG9zdCgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICR7aGVhZGVyLnJlbmRlcihcIiNwb3N0XCIpfSBcbiAgICAgICR7YXJ0aWNsZS5yZW5kZXIoKX1cbiAgICAgICR7Zm9vdGVyLnJlbmRlcigpfSBcbiAgICBgO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUGFnZShocmVmKSB7XG4gICAgY2xlYW5VcCgpO1xuICAgIHN3aXRjaCAoaHJlZikge1xuICAgICAgY2FzZSBcIiNibG9nXCI6XG4gICAgICAgIGJsb2dQYWdlID0gMTtcblxuICAgICAgICBsb2FkQmxvZ1BhZ2VzKGJsb2dQYWdlKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgYXBwbGljYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gcmVuZGVyQmxvZyhkYXRhKTtcbiAgICAgICAgICBsZXQgaWQ7XG4gICAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsdWU9XCJibG9nX19pbnB1dC1zZWFyY2hcIl0nKTtcbiAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2ctbGlzdF9fc2VhcmNoLWZvcm0nKTtcbiAgICAgICAgICBjb25zdCBzZWFyY2hCeVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2ctbGlzdF9fc2VhcmNoLWlucHV0X3RpdGxlJyk7XG4gICAgICAgICAgY29uc3Qgc2VhcmNoQnlBdXRob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvZy1saXN0X19zZWFyY2gtaW5wdXRfYXV0aG9yJyk7XG5cbiAgICAgICAgICBsZXQgbG9jYWxTdG9yYWdlVGl0bGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGl0bGUnKTtcbiAgICAgICAgICBsZXQgbG9jYWxTdG9yYWdlQXV0aG9yID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGhvcicpO1xuXG4gICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBzZWFyY2hCeVRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGJsb2dQYWdlID0gMTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RpdGxlJywgdmFsdWUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhvcicsICcnKTtcblxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICBsb2FkQmxvZ1BhZ2VzKGJsb2dQYWdlKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9fYmxvZy1saXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBibG9nLmNyZWF0ZUxpc3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VhcmNoQnlBdXRob3IudmFsdWUgPSAnJztcblxuICAgICAgICAgICAgdGhyb3R0bGUoKCkgPT4ge1xuICAgICAgICAgICAgICBsb2FkU2VhcmNoUGFnZXNCeVRpdGxlKGJsb2dQYWdlLCB2YWx1ZSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYmxvZy5jcmVhdGVMaXN0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzxoMT5ObyBkYXRhIGZvciB5b3UgcmVxdWVzdDwvaDE+JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25fX2Jsb2ctbGlzdCcpO1xuICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNlYXJjaEJ5QXV0aG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGJsb2dQYWdlID0gMTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhvcicsIHZhbHVlKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aXRsZScsICcnKTtcblxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICBsb2FkQmxvZ1BhZ2VzKGJsb2dQYWdlKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9fYmxvZy1saXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBibG9nLmNyZWF0ZUxpc3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VhcmNoQnlUaXRsZS52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICB0aHJvdHRsZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGxvYWRTZWFyY2hQYWdlc0J5QXV0aG9yKGJsb2dQYWdlLCB2YWx1ZSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYmxvZy5jcmVhdGVMaXN0KGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gJzxoMT5ObyBkYXRhIGZvciB5b3UgcmVxdWVzdDwvaDE+JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb25fX2Jsb2ctbGlzdCcpO1xuICAgICAgICAgICAgICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZVRpdGxlKSB7XG4gICAgICAgICAgICBzZWFyY2hCeVRpdGxlLnZhbHVlID0gbG9jYWxTdG9yYWdlVGl0bGVcbiAgICAgICAgICAgIHNlYXJjaEJ5VGl0bGUuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHNlYXJjaEJ5QXV0aG9yLnZhbHVlID0gbG9jYWxTdG9yYWdlQXV0aG9yXG4gICAgICAgICAgICBzZWFyY2hCeUF1dGhvci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICBpZCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ludmFsaWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoYEZpcnN0IGxldHRlciB1cHBlcmNhc2UgXFxuIEF0IGxlYXN0IDYgY2hhcmFjdGVycy4gXFxuIE9ubHkgTGF0aW4gY2hhcmFjdGVycyBcXG4gQWxsb3dlZCBzeW1ib2xzIC0gJz8hLC46J2ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGNvbnN0IGJsb2dMb2FkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2ctbGF6eS1sb2FkaW5nJyk7XG5cbiAgICAgICAgICBibG9nTG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGJsb2dQYWdlICs9IDE7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICBjYXNlICEhc2VhcmNoQnlUaXRsZS52YWx1ZTpcbiAgICAgICAgICAgICAgICAgbG9hZFNlYXJjaFBhZ2VzQnlUaXRsZShibG9nUGFnZSwgc2VhcmNoQnlUaXRsZS52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gYmxvZy5jcmVhdGVMaXN0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19ibG9nLWxpc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICEhc2VhcmNoQnlBdXRob3IudmFsdWU6XG4gICAgICAgICAgICAgICAgbG9hZFNlYXJjaFBhZ2VzQnlBdXRob3IoYmxvZ1BhZ2UsIHNlYXJjaEJ5QXV0aG9yLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IGJsb2cuY3JlYXRlTGlzdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9fYmxvZy1saXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBsb2FkQmxvZ1BhZ2VzKGJsb2dQYWdlKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBibG9nLmNyZWF0ZUxpc3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19ibG9nLWxpc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIiNwb3N0XCI6XG4gICAgICAgIGFwcGxpY2F0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IHJlbmRlclBvc3QoKTtcblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXBwbGljYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gcmVuZGVySG9tZSgpO1xuICAgICAgICAvLyB0ZXN0aW1vbmlhbHNTbGlkZXIgPSBuZXcgU2xpZGVyKCk7XG4gICAgICAgIHNsaWRlclRlc3RpbW9uaWFscy5pbml0KCk7XG4gICAgICAgIHNsaWRlclRlc3RpbW9uaWFscy5zdGFydEFuaW1hdGlvbigpO1xuICAgICAgICBzbGlkZXJQb3J0Zm9saW8uaW5pdCgpO1xuICAgICAgICBzbGlkZXJQb3J0Zm9saW8uc3RhcnRBbmltYXRpb24oKTtcblxuICAgICAgICBpbml0TWFwKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW5VcCgpIHtcbiAgICBpZih0ZXN0aW1vbmlhbHNTbGlkZXIpIHtcbiAgICAgIHRlc3RpbW9uaWFsc1NsaWRlci5kZXN0cm95KCk7XG4gICAgICB0ZXN0aW1vbmlhbHNTbGlkZXIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmKHBvcnRmb2xpb1NsaWRlcikge1xuICAgICAgcG9ydGZvbGlvU2xpZGVyLmRlc3Ryb3koKTtcbiAgICAgIHBvcnRmb2xpb1NsaWRlciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGFnZShsb2NhdGlvbi5oYXNoKTtcblxuICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICByZW5kZXJQYWdlKGxvY2F0aW9uLmhhc2gpO1xuICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9