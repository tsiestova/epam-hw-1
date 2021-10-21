export class Blog {
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
                        <input id="blog-list-search"
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