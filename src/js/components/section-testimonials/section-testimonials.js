export class Testimonials {
    constructor() {
    }

    render() {
        return ` <section class="section__testimonials text-center">
            <div class="layout">
                <h2
                        class="
                section__testimonials-heading
                text-center text-h2
                bottom-line
              "
                >
                    Testimonials
                </h2>

                <div class="section-wrap flex">
                    <button class="flip left"></button>

                    <ul class="section__testimonials-photo-list">
                        <li class="section__testimonials-photo-item">
                            <div class="section__testimonials-photo-box">
                                <q class="section__testimonials-text text-h4">
                                    We move at a fast pace. I’m always working on something. I
                                    am excited about it!
                                </q>
                                <div class="section__testimonials-text-wrap">
                                    <div class="section__testimonials-text text-h5">
                                        Martin Oda
                                    </div>
                                    <div class="section__testimonials-text text-h5">
                                        Product designer
                                    </div>
                                </div>
                            </div>
                            <figure class="section__testimonials-user-photo">
                                <img src="assets/pic/user-img.png" alt="user-photo"/>
                            </figure>
                        </li>
                    </ul>
                    <button class="flip right"></button>
                </div>
            </div>
        </section>`
    }
}