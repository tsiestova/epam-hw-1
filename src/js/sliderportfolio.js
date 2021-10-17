export class Sliderportfolio {
    constructor(time, visibleElements) {
        this.time = time;
        this.visibleElements = visibleElements;
        this.init();
    }

    render() {
        this.list.style.transform = `translateX(-${this.step * 100}%)`;
    }

    moveLeft() {
        if(this.step > 0) {
            this.step--;
        }
        if(this.step <= 0) {
            this.list.addEventListener('transitionend', this.animateLeft);
        }

        this.render();
    }

    animateLeft = () => {
        this.step = this.list.children.length / this.visibleElements - 2;
        this.list.style.transition = 'none';
        this.render();

        setTimeout(() => {
            this.list.style.transition = '';
        });

        this.list.removeEventListener('transitionend', this.animateLeft);
    }

    moveRight() {
        if (this.step < this.list.children.length / this.visibleElements - 1) {
            this.step++;
        }

        if (this.step === this.list.children.length / this.visibleElements - 1) {
            this.list.addEventListener('transitionend', this.animateRight);
        }


        this.render();
    }

    animateRight = () => {
        this.step = 1;
        this.list.style.transition = 'none';
        this.render();

        setTimeout(() => {
            this.list.style.transition = '';
        });

        this.list.removeEventListener('transitionend', this.animateRight);
    }

    init() {
        this.step = 1;
        this.result = 0;
        this.list = document.getElementById('portfolio-list');

        this.leftButton = document.getElementById('portfolio__flip-left');
        this.rightButton = document.getElementById('portfolio__flip-right');

        this.rightButton.addEventListener('click', () => this.moveRight());
        this.leftButton.addEventListener('click', () => this.moveLeft());

        let elFirst = this.list.children[0];

        for(let i = this.visibleElements; i >= 1; i-- ) {
            let elLast = this.list.children[this.list.children.length - i];
            let cloneLast = elLast.cloneNode(true);
            this.list.insertBefore(cloneLast, elFirst);
        }

        for(let i = 0; i < this.visibleElements; i++) {
            let elNext = this.list.children[this.visibleElements + i];
            let cloneNext = elNext.cloneNode(true);
            this.list.appendChild(cloneNext);
        }

        this.count = this.list.children.length; // кількість слайдів
        this.render();
    }
}