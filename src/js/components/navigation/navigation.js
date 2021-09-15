/**
 * @class
 */

export class Navigation {
  /**
   *
   * @param {Array<{title: string, href: string}>} nav
   * @param {{title: string, href: string}} active
   */
  constructor(nav, active) {
    this.nav = nav;
    this.active = active;
  }

  /**
   *
   * @param {{href:string, title: string}} item
   * @return {string}
   */
  createNavItem(item) {
    return `
            <li class="header__nav-item">
                <a class="text-h5 ${
                  item.href === this.active.href ? "active" : ""
                }" href="${item.href}" data-value="${item.title}">"${
      item.title
    }"</a>
            </li>
        `;
  }

  render() {
    return this.nav.map((el) => this.createNavItem(el)).join("");
  }
}
