import React from "react";

import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.footerInner}>
      Copyright © {new Date().getFullYear()} Ruben Martinez Jr.
    </p>
  </footer>
);

export default Footer;
