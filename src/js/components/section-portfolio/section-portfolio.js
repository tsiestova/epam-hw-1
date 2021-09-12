export class Portfolio {
    constructor() {
    }
    
    render() {
        return `<section id="portfolio" class="section__portfolio text-center">
            <div class="layout">
                <h2
                        class="section__portfolio-heading text-h2 text-center bottom-line">
                    Latest portfolio
                </h2>

                <div class="section__portfolio-text text-center text-h4">
                    Put there articles successfully special warrant submit agree what
                    along then
                </div>

                <div class="slider-wrap">
                    <ul class="gallery__slider">
                        <li class="gallery__slider-item">
                            <a href="#">
                                <figure>
                                    <img src="assets/pic/bg-img1.png" alt="gallery-image"/>
                                </figure>
                                <div class="gallery__slider-item-title">
                                    <div class="gallery__slider-item-heading text-h3">
                                        Art Ocean
                                    </div>
                                    <div class="gallery__slider-item-subheading text-h5">
                                        Photography, art, nature
                                    </div>
                                </div>
                                <div class="gallery__slider-item-box"></div>
                            </a>
                        </li>
                        <li class="gallery__slider-item">
                            <a href="#">
                                <figure>
                                    <img src="assets/pic/bg-img2.png" alt="gallery-image"/>
                                </figure>
                                <div class="gallery__slider-item-title">
                                    <div class="gallery__slider-item-heading text-h3">
                                        City guide
                                    </div>
                                    <div class="gallery__slider-item-subheading text-h5">
                                        Photography, city, way
                                    </div>
                                </div>
                                <div class="gallery__slider-item-box"></div>
                            </a>
                        </li>
                        <li class="gallery__slider-item">
                            <a href="#">
                                <figure>
                                    <img src="assets/pic/bg-img3.png" alt="gallery-image"/>
                                </figure>
                                <div class="gallery__slider-item-title">
                                    <div class="gallery__slider-item-heading text-h3">
                                        Mountains
                                    </div>
                                    <div class="gallery__slider-item-subheading text-h5">
                                        Art, hiking
                                    </div>
                                </div>
                                <div class="gallery__slider-item-box"></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="flip-wrap text-center">
                    <button class="flip left"></button>
                    <button class="flip right"></button>
                </div>
                <button class="btn">See all works</button>
            </div>
        </section>`;
    }
}