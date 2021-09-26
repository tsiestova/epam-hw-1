/* export function initialSlider(list) {
    console.log(list);

    let index = 0;
    let time = 1000;

    list[index].classList.add('active');

    setInterval( () => {
        list[index].classList.remove('active');

        index++;

        if (index === list.length) {
            index = 0;
        }

        list[index].classList.add('active');

    }, time);
}*/

export class Slider {
  constructor() {
    this.init();
  }

  render() {
    this.list.style.transform = `translateX(-${this.step * 100}%)`;
  }

  init() {
    this.step = 1;
    
    this.list = document.getElementById('slider-list');
    this.leftButton = document.getElementById('flip-left');
    this.rightButton = document.getElementById('flip-right');

    const elFirst = this.list.children[0];
    const elLast = this.list.children[this.list.children.length -1];

    const cloneFirst = elFirst.cloneNode(true);
    const cloneLast = elLast.cloneNode(true);

    this.list.appendChild(cloneFirst);
    this.list.insertBefore(cloneLast, elFirst);

    this.count = this.list.children.length;

    this.render();

    this.rightButton.addEventListener('click', () => this.moveRight());

    this.leftButton.addEventListener('click', () => {
      if(this.step > 0) {
        this.step--;
      } else {
        this.step = this.count - 1;
      }

      this.render();
    });
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

  moveRight() {
    if (this.step < this.count - 1) {
      this.step++;
    }

    if (this.step === this.count - 1) {
      this.list.addEventListener('transitionend', this.animateRight);
    }

    this.render();
  }

  startMoving() {
    setTimeout(() => {
      this.moveRight();
    }, 1000)
  }
}
