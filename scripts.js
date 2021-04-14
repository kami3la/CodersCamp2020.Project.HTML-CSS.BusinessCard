const rootElement = document.documentElement;
const scrollToTopBtn = document.querySelector(".scrollTopButton");

function goTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", goTop);
// alert(window.innerWidth);
