import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.png" width={300} height={300} />
      </div>
      <h1>Hi, Im Amanj</h1>
      <p>I blog about JS and Front and Backend </p>
    </section>
  );
}

export default Hero;
