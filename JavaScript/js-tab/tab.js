(() => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
  const $content = $tab.querySelectorAll("[data-content]");
  const ACTIVE_CLASS = "is-active";
  const navLen = $nav.length;

  //   inithialize
  const init = () => {
    $content[0].style.display = "block";
  };
  init();

  //   click event
  const handleClick = (e) => {
    e.preventDefault();

    // get clicked nav and the data
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    // Reset all non-target contents
    let index = 0;
    while (index < navLen) {
      $content[index].style.display = "none";
      $nav[index].classList.remove("is-active");
      index++;
    }

    // active the target contents
    $tab.querySelectorAll(
      "[data-content='" + targetVal + "']"
    )[0].style.display = "block";
    $nav[targetVal].classList.add("is-active");
  };

  //   Apply functions to all nav elements
  let index = 0;
  while (index < navLen) {
    $nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }

  console.log("$content", $content);
})();
