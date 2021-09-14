export class Testimonials {
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
        </li>`
    }

    createList() {
        return this.testimonials.list.map(el => this.createItem(el)).join('');
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
        </section>`
    }
}