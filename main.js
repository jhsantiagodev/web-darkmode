let btnMobile = document.querySelector(".navbar__mobile-btn");
let menuMobile = document.querySelector(".menu-mobile");
let btnClose = document.querySelector(".menu-mobile__close");
let menuItem = document.querySelectorAll(".menu-mobile__item");
let fixedNav = document.querySelector(".menu__navbar");

const showHiddenMenu = () => {
   let show = document.querySelector(".menu-mobile--show");

   if(!show) {
      menuMobile.classList.add("menu-mobile--show");
   }else {
      menuMobile.classList.remove("menu-mobile--show");
   }

};

   btnMobile.addEventListener("click", showHiddenMenu);
   btnClose.addEventListener("click", showHiddenMenu);

   window.addEventListener("resize", () => {
      let windowWidth = parseInt(document.body.clientWidth);

      if(windowWidth >= 1000) {
         menuMobile.classList.remove("menu-mobile--show");
      }
   });

  menuItem.forEach(item => {
      item.addEventListener("click", (e) => {

         let submenu = item.lastElementChild;
         
         if(submenu.className === "menu-mobile__submenu-mobile") {
            if(submenu.style.display === "block") {
               submenu.style.display = "none";
            }else {
               submenu.style.display = "block";
            }
         }
      });
  });

  const showFixedNav = () => {
      let dataScroll = window.scrollY;

      if(dataScroll > 120) {
         fixedNav.classList.add("menu__navbar--fixed");
      }else {
         fixedNav.classList.remove("menu__navbar--fixed");
      }
  };

   window.addEventListener("scroll", showFixedNav);
