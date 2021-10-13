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

export const sliderTestimonials = new SliderTestimonials(2500, 1);
export const sliderPortfolio = new SliderPorfolio(2500, 3);