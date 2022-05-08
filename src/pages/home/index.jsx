import React from "react";
import Contact from "../../components/contact";
import Hero from "../../components/hero";
import Navi from "../../components/navi";
import Post from "../../components/post";
import Works from "../../components/work";

export default function Home() {
  return (
    <div>
      <header>
        <Navi />
        <Hero />
      </header>
      <article>
        <Post />
        <Works />
        <Contact />
      </article>
    </div>
  );
}
