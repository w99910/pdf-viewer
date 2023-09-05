export default function onClickOutside(
  element: HTMLElement,
  callback: Function
) {
  document.addEventListener("click", (e) => {
    const elementRect = element.getBoundingClientRect();
    let targetElement = e.target as HTMLElement;
    const targetElementRect = targetElement.getBoundingClientRect();
    if (
      targetElementRect.left < elementRect.left ||
      targetElementRect.right > elementRect.right ||
      targetElementRect.top < elementRect.top ||
      targetElementRect.bottom > elementRect.bottom
    ) {
      callback(e);
    }
  });
}
