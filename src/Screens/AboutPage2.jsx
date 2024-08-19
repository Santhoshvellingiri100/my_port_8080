import React from "react";
import styles from "./screen.module.css";
import { Heading01, Label01, Subhead01, Title02 } from "../theme/fonts";
import COLORS from "../theme/color";
import Accordion from "../components/accordion";
function AboutPage2() {
  return (
    <div className={styles.aboutPage2Container}>
      {/* card */}
      <AboutImageCard />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          flexDirection: "row",
          justifyContent: "center",
          // alignItems: "center",
          padding: "3rem 8rem",
          columnGap: "4rem",
        }}
      >
        {/* left */}
        <div
          style={{
            maxWidth: "50%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Heading01 style={{ color: "white", marginBottom: "2rem" }}>
            Frequently Asked Questions
          </Heading01>
          <Label01>
            I help entrepreneurs and businesses grow online by designing and
            building custom WordPress websites. From design to scalable code
            development.I help entrepreneurs and businesses grow online by
            designing and building custom WordPress websites. From design to
            scalable code development.
          </Label01>
        </div>
        {/* right */}
        <div
          style={{
            width: "50%",
            height:"100%",
            display: "flex",
            backgroundColor:"black",
            flexDirection: "column",
          }}
        >
         <Accordion/>
        </div>
      </div>
    </div>
  );
}

const AboutImageCard = () => {
  return (
    <div className={styles.about2ImageCard}>
      <Label01 className={styles.aboutImageCardText}>
        I DEVELOP AMEZING WEBSITE ALSO
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

export default AboutPage2;
