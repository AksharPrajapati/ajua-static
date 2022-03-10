import React from "react";
import Footer from "../footer";
import Header from "../header";
import AnimatedPage from "../../AnimatedPage";

function Layout({ children }) {
  return (
    <div>
      <AnimatedPage>
        <Header />
        {children}
        <Footer />
      </AnimatedPage>
    </div>
  );
}

export default Layout;
