document.getElementsByTagName("h1")[0].style.fontSize = "5vw";
document.getElementsByTagName("h2")[0].style.fontSize = "2vw";
document.getElementsByTagName("p1")[0].style.fontSize = "1vw";
document.getElementsByTagName("a1")[0].style.fontSize = "1vw";



  // Get Favicon
          let link = document.querySelector("link[rel~='icon']");
          if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
  
          link.href = "https://avatars.githubusercontent.com/u/107750535?v=4";
            
document.title = "Teknikspace.github.io";
