const responsiveNav = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('#nav');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', () => {
    // take full h/w and bring links back into screen
    nav.classList.toggle('nav-fullW');
    navLinks.classList.toggle('nav-active');

    // animate burger
    burger.classList.toggle('toggle');

    // animate links
    links.forEach((link, index) => {
      link.classList.toggle('link-show');

      // if(link.style.animation){
      //   link.style.animation = ''
      // } else {
      //   link.style.animation = `navLinkFade .5sec ease forwards ${index / 7 + .5}s`
      // }
    });
  });
};

export {responsiveNav};