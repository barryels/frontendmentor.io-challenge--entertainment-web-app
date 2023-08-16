import { LitElement, html, css } from "lit";
import { horizontalList } from "../../theme/utils";

export class AppHeader extends LitElement {
  static properties = {
    links: [],
  };
  static styles = css`
    ul li a {
      color: var(--theme-color);
    }

    ${horizontalList({ gapMultiplier: 2 })}
  `;

  constructor() {
    super();
    this.links = [
      { id: "home", path: "/", label: "Home" },
      { id: "trending", path: "/trending", label: "Trending" },
      { id: "movies", path: "/movies", label: "Movies" },
      { id: "tv-shows", path: "/shows", label: "TV Shows" },
      { id: "bookmarks", path: "/bookmarks", label: "Bookmarks" },
    ];
  }

  render() {
    return html`<header>
      <nav>
        <ul class="horizontal-list">
          ${this.links.map((link) => {
            return html`<li><a href="${link.path}">${link.label}</a></li>`;
          })}
        </ul>
      </nav>
    </header>`;
  }
}

customElements.define("app-header", AppHeader);
