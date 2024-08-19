import React from "react";
import styles from "./screen.module.css";
import { Label01, Title02 } from "../theme/fonts";
import COLORS from "../theme/color";
import LinkButton from "../components/LinkButton";
function AboutPage1() {
  return (
    <div className={styles.aboutPageContainer}>
      {/* card */}
      <AboutImageCard />
      <div
        style={{
          display: "flex",
          width: "30%",
          height: "70%",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0px 4rem",
        }}
      >
        <Title02 style={{ color: "white" }}>Valuable websites</Title02>
        <span style={{ display: "flex", flexDirection: "row" }}>
          <Title02 style={{ color: "white" }}>{"made with "}</Title02>
          <span style={{opacity:0}}>""</span>
          <Title02 style={{ color: COLORS.accentColor }}>
            {" "}
            {`${" "}passion`}
          </Title02>
        </span>
        <Title02 style={{ color: COLORS.accentColor }}>and dedication</Title02>

        <Label01
          style={{ color: "white", margin: "2rem 0", lineHeight: "30px" }}
          // className={styles.textContainer}
        >
          I help entrepreneurs and businesses grow online by designing and
          building custom WordPress websites. From design to scalable code
          development.
        </Label01>

        <Label01
          style={{ color: "white", marginBottom: "1rem", lineHeight: "30px" }}
          // className={styles.textContainer}
        >
          I help entrepreneurs and businesses grow online by designing and
          building custom WordPress websites. From design to scalable code
          development.
        </Label01>

        <LinkButton key={"view My work"}>View My work</LinkButton>
      </div>
    </div>
  );
}

const AboutImageCard = () => {
  return (
    <div className={styles.aboutImageCard}>
      <Label01 className={styles.aboutImageCardText}>
        I Develope AMEZING APPS
        <div
          style={{
            width: 100,
            height: 1,
            backgroundColor: COLORS.accentColor,
            position: "absolute",
            right: -110,
            top: 12,
            borderRadius: "15px",
          }}
        />
      </Label01>
    </div>
  );
};

export default AboutPage1;
