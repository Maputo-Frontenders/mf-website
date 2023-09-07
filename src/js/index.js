import scrollreveal from "scrollreveal";

const scrollReveal = scrollreveal({
  origin: "top",
  distance: "50px",
  duaration: 1000,
  reset: true
});

scrollReveal.reveal(
  `#hero .container .text h1, #hero .container .text p, #hero .container .text .button, 
  #aboutUs .container .text h2, #aboutUs .container .text p, #aboutUs .container .image,
  #prevEvents .container .text h2, #prevEvents .container .text p`, 
  { interval: 300 }
);

scrollReveal.reveal("#prevEvents .container .events .event, #teamMembers .teamMembers .member", { interval: 100 });
