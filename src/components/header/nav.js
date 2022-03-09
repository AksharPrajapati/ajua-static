export default function mobileNav(e) {
    e.preventDefault();
    if( document.body.classList.contains('nav-is-active') ) {
      document.body.classList.remove('nav-is-active')
    } else {
      document.body.classList.add('nav-is-active')
    }
  return null;
}
