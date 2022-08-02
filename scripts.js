var darkModeOn = false;

// dark mode
document.getElementById("mode-toggle").onclick = function darkMode() {
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
    el.classList.toggle("dark-mode")
  })

  const head4 = document.querySelectorAll("h4");
  head4.forEach((el) => {
    el.classList.toggle("dark-mode")
  })

  const head2 = document.querySelectorAll("h2");
  head2.forEach((el) => {
    el.classList.toggle("dark-mode")
  })

  const btn = document.querySelectorAll(".btn");
  btn.forEach((el) => {
    el.classList.toggle("dark-logo")
  })

  const logos = document.querySelectorAll("#logostrip img");
  logos.forEach((el) => {
    el.classList.toggle("dark-logo")
  })

  const head1 = document.querySelector("h1");
  head1.classList.toggle("h1dark");

  const logo1 = document.getElementById("logo");
  const logo2 = document.getElementById("logo-footer");
  logo1.classList.toggle("dark-logo");
  logo2.classList.toggle("dark-logo");

  darkModeOn = true;

}

// sticky navi
window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('nav');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
      if (darkModeOn) {
        nav.style.boxShadow = "0px 10px 20px rgba(146, 147, 153, 0.1)";
      }
    }else{
      nav.classList.remove("add-shadow");
      nav.style.boxShadow = 'null';
    }

    

  });

  //contact btn
document.getElementById("btn-main").onclick = function () {
    location.href = "/contact.html"; 
};

