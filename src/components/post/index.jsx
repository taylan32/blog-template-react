import React from "react";
import Container from "../container";
import style from "./post.module.scss";

export default function Post() {
  const posts = [
    {
      id: 1,
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      keywords: "Design, Pattern",
      caption:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2020",
      keywords: "Figma, Icon, Design",
      caption:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <section className={style.posts}>
      <Container>
        <div className={style.posts_nav}>
          <p>Recent posts</p>
          <a href="#">View all</a>
        </div>
        <div className={style.posts_items}>
          {posts.map((post) => (
            <div className={style.posts_items_item} key={post.id}>
              <h3>{post.title}</h3>
              <ul>
                <li>{post.date}</li>
                <li>|</li>
                <li>{post.keywords}</li>
              </ul>
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
