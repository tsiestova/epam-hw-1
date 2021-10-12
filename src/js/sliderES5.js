function Slider (time) {

    this.time = time;

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
        if (this.step < this.count - 1) {
            this.step++;
        }

        if (this.step === this.count - 1) {
            this.list.addEventListener('transitionend', this.animateRight);
            console.log(this);
        }

        this.render();
    }

    this.animateRight = function () {
        console.log(this);

        this.step = 1;
        this.list.style.transition = 'none';
        this.render();

        setTimeout(() => {
            this.list.style.transition = '';
        });

        this.list.removeEventListener('transitionend', this.animateRight);
    }

    this.animateLeft = function () {
        this.step =  this.list.children.length - 2;

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

function SliderTestimonials(time) {
    Slider.call(this);

    this.init = function () {

        // this.target = document.getElementById('section-testimonials');
        this.step = 1;

        this.list = document.getElementById('slider-list');

        this.leftButton = document.getElementById('flip-left');
        this.rightButton = document.getElementById('flip-right');
        this.sliderBox = document.getElementById('testimonials-photo-list_wrap');

        const elFirst = this.list.children[0];
        console.log(elFirst);

        const elLast = this.list.children[this.list.children.length -1];

        const cloneFirst = elFirst.cloneNode(true);
        const cloneLast = elLast.cloneNode(true);

        this.list.appendChild(cloneFirst);
        this.list.insertBefore(cloneLast, elFirst);

        this.count = this.list.children.length;

        this.render();

        this.rightButton.addEventListener('click', () => this.moveRight());
        this.leftButton.addEventListener('click', () => this.moveLeft());

        // this.sliderBox.addEventListener('mouseleave', () => this.startAnimation());
        // this.sliderBox.addEventListener('mouseenter', () => clearTimeout(this.testimonialSliderMove));

        // this.observer = new IntersectionObserver((entries) => {
        //
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             this.startAnimation();
        //         } else {
        //             clearTimeout(this.testimonialSliderMove);
        //         }
        //     });
        // });
        // this.observer.observe(this.target);
    }

    // this.startAnimation = function () {
    //     this.testimonialSliderMove = setTimeout( () => {
    //         this.moveRight();
    //         this.startAnimation();
    //     }, this.time)
    // }

    // this.destroy = function () {
    //     clearTimeout(this.testimonialSliderMove);
    //     this.observer.disconnect();
    // }
    // console.log(this);
}

/// ****************************************************************************************************
function SliderPorfolio () {
    Slider.call(this);

    this.init = function () {

        this.step = 1;
        this.list = document.getElementsByClassName('gallery__slider');
        console.log(this.list);

        this.leftButton = document.getElementById('portfolio__flip-left');
        this.rightButton = document.getElementById('portfolio__flip-right');


        this.rightButton.addEventListener('click', () => this.moveRight());
        this.leftButton.addEventListener('click', () => this.moveLeft());
    }
}


export const sliderTestimonials = new SliderTestimonials(1500);
export const sliderPortfolio = new SliderPorfolio(1500);