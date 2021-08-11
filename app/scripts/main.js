// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

// menu mobile
const toggleMenuIcon = document.querySelector('.header-menu-toggle');
const headerMenuList = document.querySelector('.header__list');
const classExpand = 'is-expand';
const classActive = 'is-active';

toggleMenuIcon.addEventListener('click', function () {
  toggleMenuIcon.classList.toggle(classActive);
  headerMenuList.classList.toggle(classExpand);
});

// window click outsite
window.addEventListener("click", function (e) {
  console.log(e.target);
  if (
    !headerMenuList.contains(e.target) &&
    !e.target.matches(".header-menu-toggle")
  ) {
    headerMenuList.classList.remove(classExpand);
    toggleMenuIcon.classList.remove(classActive);
  }
});

