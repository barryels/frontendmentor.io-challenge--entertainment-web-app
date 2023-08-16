import { css } from "lit";

export function horizontalList({ gapMultiplier }) {
  return css`
    .horizontal-list {
      display: flex;
      gap: ${gapMultiplier * 0.8}rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  `;
}
