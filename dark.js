let switcher = document.querySelector(".switcher__btn");
let iconLight = document.querySelector(".switcher__icon-light");
let iconDark =  document.querySelector(".switcher__icon-dark");

const setLink = () => {
   let selectHead = document.head;

   let link = document.createElement("link");
   link.rel = "stylesheet";
   link.type = "text/css";
   link.href = "css/dark.css";
   link.id = "theme-dark";

   let themeDark = document.querySelector("#theme-dark");

   if(!themeDark) {
      selectHead.appendChild(link);
      iconLight.style.display = "none";
      iconDark.style.display ="block";

   }else {  
      selectHead.removeChild(themeDark);
      iconLight.style.display = "block";
      iconDark.style.display = "none";
   }
};

switcher.addEventListener("click", setLink);
