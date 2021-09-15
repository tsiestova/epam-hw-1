export class SectionTopContent {
  constructor(blockContent) {
    this.blockContent = blockContent;
  }
  /**
   *
   * @return {*}
   */

  renderText() {
    return ` <div class="section__top-heading text-h1">
                       ${this.blockContent.title}
                    </div>
                    <div class="section__top-text">
                        ${this.blockContent.text}
                    </div>`;
  }

  createButtons(item) {
    return `<a href="${item.href}" class="${item.type}">${item.title}</a>`;
  }

  renderButtons() {
    return this.blockContent.buttons
      .map((el) => this.createButtons(el))
      .join("");
  }

  render() {
    return `
       <div class="section__top" id="section__top">
            <div class="layout">
                <div class="section__top-wrap">
                   ${this.renderText()}
                   ${this.renderButtons()} 
                </div>
            </div>
        </div>`;
  }
}
