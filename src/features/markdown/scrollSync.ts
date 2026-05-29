/**
 * Add data-block-index attributes to block-level children
 * of the MarkdownPreview root element (.font-body).
 * Each direct child element gets a sequential index used for scroll sync.
 */
export function tagPreviewBlocks(container: HTMLElement): void {
  const root = container.querySelector<HTMLElement>(".font-body");
  if (!root) return;
  let index = 0;
  for (const child of root.children) {
    if (child instanceof HTMLElement) {
      child.setAttribute("data-block-index", String(index++));
    }
  }
}
