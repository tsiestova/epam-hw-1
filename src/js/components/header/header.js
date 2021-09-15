export class Header {
  constructor(navigation, page) {
    this.navigation = navigation;
    this.page = page;
  }

  render(page) {
    let result = "";
    if (page === "Blog" || page === "Post") {
      result = `<header class="header header-inner">
        <div class="layout">
            <div class="header__logo text-h4">BlogWorld</div>
            <nav class="header__nav-menu">
                <ul>
                    ${this.navigation.render()}
                </ul> 
            </nav> 
        </div> 
    </header>`;
    } else {
      result = `<header class="header sticky">
        <div class="layout">
            <div class="header__logo text-h4">BlogWorld</div>
            <nav class="header__nav-menu">
                <ul>
                    ${this.navigation.render()}
                </ul>
            </nav>
        </div>
    </header>`;
    }
    return result;
  }
}
