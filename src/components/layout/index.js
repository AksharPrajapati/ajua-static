import React from "react";
import Footer from "../footer";
import Header from "../header";
import QuickSearch from "../quicksearch";
import AnimatedPage from "../../AnimatedPage";

function Layout({ children }) {
  return (
    <div>
      <AnimatedPage>
        <Header />
        {children}
        <Footer />
        <QuickSearch />
      </AnimatedPage>
    </div>
  );
}

export default Layout;
