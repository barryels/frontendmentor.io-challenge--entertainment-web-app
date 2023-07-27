import { LitElement, html } from "lit";

export class AppHeader extends LitElement {
  static properties = {
    links: [],
  };

  constructor() {
    super();
    this.links = [
      { id: "home", path: "/" },
      { id: "trending", path: "/trending" },
      { id: "movies", path: "/movies" },
      { id: "tv-shows", path: "/shows" },
      { id: "bookmarks", path: "/bookmarks" },
    ];
  }

  render() {
    return html`<header>
      <nav>
        <ul>
          ${this.links.map((link) => {
            return html`<li><a href="${link.path}">${link.id}</a></li>`;
          })}
        </ul>
      </nav>
    </header>`;
  }
}

customElements.define("app-header", AppHeader);
