import React from "react";
import Container from "../container";
import style from "./contact.module.scss";

export default function Contact() {
  const contactIcons = [
    {
      id: 1,
      image: require("../../assets/images/fb.png"),
    },
    {
      id: 2,
      image: require("../../assets/images/insta.png"),
    },
    {
      id: 3,
      image: require("../../assets/images/twitter.png"),
    },
    {
      id: 4,
      image: require("../../assets/images/linkedin.png"),
    },
  ];

  return (
    <footer className={style.contact}>
      <Container>
        <ul className={style.contact_list}>
          {contactIcons.map((contact) => (
            <li className={style.contact_list_item} key={contact.id}>
              <a href="#">
                <img src={contact.image} />
              </a>
            </li>
          ))}
        </ul>
        <p>Copyright ©2020 All rights reserved </p>
      </Container>
    </footer>
  );
}
