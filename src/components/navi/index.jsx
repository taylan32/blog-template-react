import React from "react";
import style from "./navi.module.scss";

export default function Navi() {
  return (
    <nav className={style.navi}>
      <ul className={style.navi_items}>
        <li className={style.navi_items_item}>
          <a href="#">Works</a>
        </li>
        <li className={style.navi_items_item}>
          <a href="#">Blog</a>
        </li>
        <li className={style.navi_items_item}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
