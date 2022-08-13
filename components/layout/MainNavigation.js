import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import calsses from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={calsses.header}>
      <Link href="/">
        <a href="">
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
