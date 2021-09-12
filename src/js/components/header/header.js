
export class Header {
    constructor(navigation) {
        this.navigation = navigation;
    }

    render() {
        return `<header class="header sticky">
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
}
