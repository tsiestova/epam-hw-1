
export class Slider {
  constructor() {
    this.init();
    this.time = 2000;
  }

  render() {
    this.list.style.transform = `translateX(-${this.step * 100}%)`;
  }

  init() {

    this.target = document.getElementById('section-testimonials');
    this.observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startAnimation();
        } else {
          clearTimeout(this.testimonialSliderMove);
        }
      });
    });
    this.observer.observe(this.target);

    this.step = 1;

    this.list = document.getElementById('slider-list');
    this.leftButton = document.getElementById('flip-left');
    this.rightButton = document.getElementById('flip-right');
    this.sliderBox = document.getElementById('testimonials-photo-list_wrap');

    const elFirst = this.list.children[0];
    const elLast = this.list.children[this.list.children.length -1];

    const cloneFirst = elFirst.cloneNode(true);
    const cloneLast = elLast.cloneNode(true);

    this.list.appendChild(cloneFirst);
    this.list.insertBefore(cloneLast, elFirst);

    this.count = this.list.children.length;

    this.render();

    this.rightButton.addEventListener('click', () => this.moveRight());
    this.leftButton.addEventListener('click', () => this.moveLeft());

    this.sliderBox.addEventListener('mouseleave', () => this.startAnimation());
    this.sliderBox.addEventListener('mouseenter', () => clearTimeout(this.testimonialSliderMove));
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

  moveRight() {
    if (this.step < this.count - 1) {
      this.step++;
    }

    if (this.step === this.count - 1) {
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

  animateLeft = () => {
    this.step = this.list.children.length - 2;
    this.list.style.transition = 'none';
    this.render();

    setTimeout(() => {
      this.list.style.transition = '';
    });

    this.list.removeEventListener('transitionend', this.animateLeft);
  }

  startAnimation () {

      this.testimonialSliderMove = setTimeout( () => {
      this.moveRight();
      this.startAnimation();
    }, this.time)
  }

  destroy () {
    clearTimeout(this.testimonialSliderMove);
    this.observer.disconnect();
  }
}
