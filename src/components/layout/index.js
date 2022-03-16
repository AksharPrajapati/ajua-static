import React from "react";
import Footer from "../footer";
import Header from "../header";
import QuickSearch from "../quicksearch";
import AnimatedPage from "../../AnimatedPage";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <AnimatedPage>{children}</AnimatedPage>
      <Footer />
      <QuickSearch />
    </div>
  );
}

export default Layout;
