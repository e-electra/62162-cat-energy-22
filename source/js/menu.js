(function () {
  const headerNav = document.querySelector('.header__navigation');
  const navToggle = document.querySelector('.header__navigation-toggle');

  headerNav.classList.remove('header__navigation--no-js');

  navToggle.addEventListener('click', () => {
    if (headerNav.classList.contains('header__navigation--closed')) {
      headerNav.classList.remove('header__navigation--closed');
      headerNav.classList.add('header__navigation--opened');
    } else {
      headerNav.classList.remove('header__navigation--opened');
      headerNav.classList.add('header__navigation--closed');
    }
  });
})();
