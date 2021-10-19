
export class BlogPost {
    constructor(obj) {
        this.obj = obj;
    }

    renderButton(type) {
        let str = "";
        switch (type) {
            case "video":
                str = "section__obj-person-info_video";
                break;
            case "music":
                str = "section__obj-person-info_music";
                break;
            case "pic":
                str = "section__obj-person-info_pic";
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

    createItem() {
        return `<li class="section__blog-item">
                        ${
            this.obj.pic
                ? `<figure class="section__blog-item_video  ${
                    this.obj.type === "video" ? "video-button" : ""
                }">
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
                  ${this.renderButton(this.obj.type)}
                "
                        >
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
                                        <ul class="rating-list">
                                            ${

            this.createRatingList(this.obj.stars.n, this.obj.stars.full)
        }
                                        </ul> 
                                    </div> 
                                </div>
                            </div> 
                            <div class="section__blog-person-heading text-h3">
                                ${this.obj.title}
                            </div>
                            ${
            this.obj.type === "music"
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

export class Movie extends BlogPost {
    constructor(obj) {
        super(obj);
    }
}



