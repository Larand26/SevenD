const btns = document.querySelectorAll(".btn_slide");
const slides = document.querySelectorAll(".slide");

const abrir = (evt) => {
  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  evt.target.parentElement.classList.remove("hide");
  evt.target.parentElement.classList.add("all");
  evt.target.classList.add("hide");
  evt.target.parentElement.children[0].classList.add("hide");
  evt.target.parentElement
    .querySelector(".cont_slide")
    .classList.remove("hide");
};

btns.forEach((btn) => {
  btn.addEventListener("click", abrir);
});

const fechar = (evt) => {
  if (evt.target.classList.contains("all")) {
    evt.target.querySelector(".cont_slide").classList.add("hide");
    evt.target.querySelector(".btn_slide").classList.remove("hide");
    evt.target.querySelector(".title_slide").classList.remove("hide");

    evt.target.classList.remove("all");

    slides.forEach((slide) => {
      if (slide.classList.contains("hide")) {
        slide.classList.remove("hide");
      }
    });
  }
};
slides.forEach((slide) => {
  slide.addEventListener("click", fechar);
});
