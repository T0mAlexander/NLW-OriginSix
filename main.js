//* === MENU ICON === *\\
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//* === HIDE MENU WHEN PRESS CLOSE ICON === *\\
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//* === CHANGE HEADER WHEN SCROLLING DOWN === *\\
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //? === When scroll is greater than header height === ?//
    header.classList.add('scroll')
  } else {
    //? === When scroll is less than header height === ?//
    header.classList.remove("scroll");
  }
}

//* === TESTIMONIALS SWIPER DOTS === *\\
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//* === SCROLLREVEAL: SMOOTH SHOW OF MANY ELEMENTS DURING SCROLL === *\\
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '15px',
  duration: 850,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials .testimonial swiper-slide, #testimonials header, #testimonials, .swiper-pagination, 
  #contact .text, #contact .links,
  footer .brand, footer .social.grid
  `,
  { interval: 0 }
)

//* === RETURN TOP BUTTON === *\\
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 765) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function footerOverflow() {
  if (window.scrollY >= 4195) {
    backToTopButton.classList.add('footerOverflow', )
  } else {
    backToTopButton.classList.remove('footerOverflow')
  }
}

//* === CURRENT SECTION HIGHLIGHTED ACCORDING BY SCROLL STATIC POSITION === *\\
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//* === ACTIVATED DURING SCROLLING UP OR DOWN === *\\
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
  footerOverflow()
})
