import React from "react";
import style from "./works.module.scss";
import Container from "../container";

export default function Works() {
  const works = [
    {
      id: 1,
      title: "Designing Dashboards",
      year: "2020",
      keyword: "Dashboard",
      caption:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: require("../../assets/images/works_image_1.png"),
    },
    {
      id: 2,
      title: "Vibrant Portraits of 2020",
      year: "2018",
      keyword: "Illustration",
      caption:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: require("../../assets/images/works_image_2.png"),
    },
    {
      id: 3,
      title: "36 Days of Malayalam type",
      year: "2018",
      keyword: "Typography",
      caption:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: require("../../assets/images/works_image_3.png"),
    },
  ];
  return (
    <section className={style.works}>
      <Container>
        <nav className={style.works_nav}>
          <p>Featured works</p>
        </nav>
        <div className={style.works_items}>
          {works.map((work) => (
            <div className={style.works_items_item} key={work.id}>
              <div className={style.works_items_item_image}>
                <img src={work.image} alt="work_image" title="work_image" />
              </div>
              <div className={style.works_items_item_info}>
                <h3>{work.title}</h3>
                <div className={style.works_items_item_info_features}>
                  <p className={style.works_items_item_info_features_year}>
                    {work.year}
                  </p>
                  <p className={style.works_items_item_info_features_keyword}>
                    {work.keyword}
                  </p>
                </div>
                <p className={style.works_items_item_info_caption}>{work.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
