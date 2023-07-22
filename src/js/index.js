import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bannerTitle = document.querySelector(".banner-col h1");
const bannerText = document.querySelector(".banner-col p");
const bannerBtn = document.querySelector(".banner-col .banner-col-btn");

let bannerTl = gsap.timeline();

bannerTl
.from(bannerTitle, {
  y: 35,
  opacity: 0,
  duration: 1,
})
.from(
  bannerText,
  {
    y: 35,
    opacity: 0,
    duration: 1,
  },
  "-=.5"
)
.from(
  bannerBtn,
  {
    y: 35,
    opacity: 0,
    duration: 1,
  },
  "-=.5"
)

gsap.to(".clip", {
  width: "300px",
  height: "80%",
  top: 10,
  left: 20,
  scrollTrigger: {
    trigger: ".container-img",
    scrub: true,
    start: "top top"
  },
  duration: .5
});