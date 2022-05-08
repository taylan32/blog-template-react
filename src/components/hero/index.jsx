import React from "react";
import style from "./hero.module.scss";
import Container from "../container";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <main className={style.hero_main}>
          <div className={style.hero_main_content}>
            <h1>
              <span>Hi, I am John,</span> Creative Technologist
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className={style.btn_primary}>Download Resume</button>
          </div>
          <div className={style.hero_main_image}>
            <img src={require("../../assets/images/profile.png")} />
          </div>
        </main>
      </Container>
    </section>
  );
}
