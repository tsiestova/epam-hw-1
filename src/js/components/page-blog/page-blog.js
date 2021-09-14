export class Blog {
    constructor(blog) {
        this.blog = blog;
    }

    createItem(obj) {
        return ` <li class="section__blog-item">
                        <figure class="section__blog-item_video video-button">
                            <img
                                src="${obj.pic}"
                                class="section__blog-image"
                                alt="blog"
                            />
                        </figure>
                        <div
                            class="
                  section__blog-person-info section__blog-person-info_video
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
                                        <time dateTime="${obj.data.time}" class="time text-h5"
                                        >11 oct, 2019
                                        </time
                                        >
                                        <span class="text-h5 dot">${obj.data.minuts}min read</span>
                                        <span class="text-h5 dot comments">${obj.data.comments}</span>
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
                            <div class="section__blog-person-text text-h4">
                                 ${obj.text}
                            </div>
                            <a href="#" class="btn">Read more</a>
                        </div>
                    </li>`
    }


    createList() {
        return this.blog.card.map(el => this.createItem(el)).join('');
    }

    render () {
        return `<section class="section__blog text-center">
            <div class="layout">
                <h2 class="section__blog-heading text-h2 bottom-line">${this.blog.title}</h2>
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
            <a href="${this.blog.button.src}" class="${this.blog.button.type}">${this.blog.button.title}</a>
        </section>`
    }
}