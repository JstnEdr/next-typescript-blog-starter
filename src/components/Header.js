import * as React from "react";
import Link from "next/link";

const Header = ({ pathname, siteTitle }) => (
  <header>
    <Link href="/">
      <a className={pathname === "/" ? "is-active" : ""}>Home</a>
    </Link>{" "}
    <Link href="/about">
      <a className={pathname === "/about" ? "is-active" : ""}>About</a>
    </Link>
    {/* <Link href="/blog">
      <a className={pathname === "/blog" ? "is-active" : ""}>Blog</a>
    </Link> */}
  </header>
);

export default Header;