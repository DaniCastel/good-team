import React, { ReactNode } from "react";
import styles from "./layout.module.css";
import MainNavigation from "./main-navigation/main-navigation";
import Footer from "./footer/footer";
type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>s</div>
      <MainNavigation></MainNavigation>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
