import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.classList.remove("nav-is-active");
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 400);
  }, [pathname]);

  return null;
}
