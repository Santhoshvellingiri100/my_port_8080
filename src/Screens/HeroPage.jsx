import React, { useEffect } from "react";
import styles from "./screen.module.css";

import {
  Heading01,
  Heading02,
  Label02,
  Label01,
  SmallText01,
  SmallText02,
  Subhead01,
  Subhead02,
  Title01,
  Title02,
} from "../theme/fonts";
import Header from "../components/Header";
import COLORS from "../theme/color";
import LinkButton from "../components/LinkButton";
function HeroPage() {
  return (
    <div className={styles.heroPageContainer}>
      <Header />
      <div className={styles.heroPageConentContainer}>
        <Title01 style={{ color: COLORS.accentColor }}>SOFTWARE</Title01>
        <Title01 style={{ color: "white" }}>ENGINEER</Title01>

        <Label01
          style={{ color: "white", margin: "2rem 0", lineHeight: "30px" }}
          className={styles.textContainer}
        >
          I help entrepreneurs and businesses grow online by designing and
          building custom WordPress websites. From design to scalable code
          development, I manage the entire process from A to Z, always
          incorporating the latest trends and developments.
        </Label01>
        <LinkButton>{"Discover my working method "}</LinkButton>
      </div>
    </div>
  );
}

export default HeroPage;
