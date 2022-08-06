window.onload = () => {
    var params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });

      //turn params into something easier to work with
      var { title, tag, imgPath } = params;
      
      document.querySelector('#project-detail h1').textContent = title;
      document.querySelector('h4').textContent = tag;
      const images = document.querySelectorAll('#project-detail img');
      images.forEach((el) => {
        el.src = imgPath;
      });
};

