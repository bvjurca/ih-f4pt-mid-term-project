window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('nav');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
  });

document.getElementById("btn-main").onclick = function () {
    location.href = "/contact.html"; 
};


document.getElementById("mode-toggle").onclick = function darkMode() {
    var el = document.body;
    el.classList.toggle("dark-mode");
}