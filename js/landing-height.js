function adjustLandingHeight() {
  const header = document.querySelector('header');
  const scrollText = document.querySelector('.scrolling-text');
  const nav = document.querySelector('nav');
  const landing = document.getElementById('landing');

  const headerHeight = header.offsetHeight;
  const scrollHeight = scrollText.offsetHeight;
  const navHeight = nav.offsetHeight;

  const totalOffset = headerHeight + scrollHeight + navHeight;
  const landingHeight = window.innerHeight - totalOffset;

  landing.style.height = `${landingHeight}px`;
}

window.addEventListener('load', adjustLandingHeight);
window.addEventListener('resize', adjustLandingHeight);