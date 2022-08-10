//linking to respective projects page
const projectUrls = document.querySelectorAll(".link-to-proj");
projectUrls.forEach((el) => {
  el.onclick = function (e) {
    //grab title, category and image source
    let indexTitle = e.target.parentElement.querySelector("h4").innerHTML;
    let indexP = e.target.parentElement.querySelector("p").innerHTML;
    let imgSource =
      e.target.parentElement.parentElement.querySelector("img").src;

    //add them into the URL
    const initURL = `/project.html?title=${indexTitle}&tag=${indexP}&imgPath=${imgSource}`;
    window.location.href = initURL;
  };
});

var darkModeOn = false;

// dark mode conversion
function darkMode() {

  //swap emojis
  var emoji = document.getElementById("mode-toggle");
  if (emoji.innerHTML === "☀️") {
    emoji.innerHTML = "🌙";
  } else {
    emoji.innerHTML = "☀️";
  }

  const el = document.body;
  el.classList.toggle("dark-mode");

  const navi = document.querySelector("#navbar");
  navi.classList.toggle("dark-mode");

  /*DOESN'T WORK :(
  function targetAllInstances(element) {
    let elem = document.querySelectorAll(`"${element}"`);
    elem.forEach((el) => {
      el.classList.toggle("dark-mode");
    });
  }

  targetAllInstances(article);
  */

  const art = document.querySelectorAll("article");
  art.forEach((el) => {
    el.classList.toggle("dark-mode");
  });


  const head4 = document.querySelectorAll("h4");
  head4.forEach((el) => {
    el.classList.toggle("dark-mode");
  });

  const head2 = document.querySelectorAll("h2");
  head2.forEach((el) => {
    el.classList.toggle("dark-mode");
  });

  const btn = document.querySelectorAll(".btn");
  btn.forEach((el) => {
    el.classList.toggle("dark-logo");
  });

  const logos = document.querySelectorAll("#logostrip img");
  logos.forEach((el) => {
    el.classList.toggle("dark-logo");
  });

  const links = document.querySelectorAll("article a");
  links.forEach((el) => {
    el.classList.toggle("dark-logo");
  });

  const head1 = document.querySelector("h1");
  head1.classList.toggle("h1dark");

  const logo1 = document.getElementById("logo");
  const logo2 = document.getElementById("logo-footer");
  logo1.classList.toggle("dark-logo");
  logo2.classList.toggle("dark-logo");

  const contactForm = document.querySelectorAll("input");
  contactForm.forEach((el) => {
    el.classList.toggle("h1dark");
  });

  const msg = document.querySelector("textarea");
  msg.classList.toggle("h1dark");

  darkModeOn = true;
}

// swap icon
function toggleIcon(el) {
  el.classList.toggle("moon");
}

// sticky navi
window.addEventListener("scroll", (e) => {
  const nav = document.querySelector("nav");
  if (window.pageYOffset > 0) {
    nav.classList.add("add-shadow");
    if (darkModeOn) {
      nav.style.boxShadow = "0px 10px 20px rgba(146, 147, 153, 0.1)";
    }
  } else {
    nav.classList.remove("add-shadow");
    nav.style.boxShadow = "null";
  }
});

//contact btn
document.getElementById("btn-main").onclick = function () {
  location.href = "/contact.html";
};

//form alert
function formSubmit() {
  alert("Form submitted");
}
