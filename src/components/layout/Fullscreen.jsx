const setFullscreenHeight = () => {
    const navbar = document.querySelector('.navGrabber');
    const footer = document.querySelector('.footerGrabber');
    const fullscreen = document.querySelector('.fullscreen');
  
    const navbarHeight = navbar.offsetHeight;
    const footerHeight = footer.offsetHeight;
  
    fullscreen.style.setProperty('--navbar-height', `${navbarHeight}px`);
    fullscreen.style.setProperty('--footer-height', `${footerHeight}px`);
  };
  
  window.addEventListener('load', setFullscreenHeight);
  window.addEventListener('resize', setFullscreenHeight);