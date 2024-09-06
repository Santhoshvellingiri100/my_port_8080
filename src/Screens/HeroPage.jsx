import React, { useEffect } from "react";
import styles from "./screen.module.css";

import {
  Label01,
  Title01,
} from "../theme/fonts";
import Header from "../components/Header";
import COLORS from "../theme/color";
import LinkButton from "../components/LinkButton";
import { CRT_TA_SONNA } from "../meta/data";
function HeroPage() {
  return (

    <div style={{}}>
       <img src={CRT_TA_SONNA.hero_page_bg_image_url} 
     className={styles.heroPageIMGContainer} ></img>
 <div className={styles.heroPageContainer}>
      {/* image bg */}
      
     
      <Header />
      <div className={styles.heroPageConentContainer}>
        <Title01 style={{ color: COLORS.accentColor }}>{CRT_TA_SONNA.hero_page_title01}</Title01>
        <Title01 style={{ color: "white" }}>{CRT_TA_SONNA.hero_page_title02}</Title01>

        <Label01
          style={{ color: "white", margin: "2rem 0", lineHeight: "30px" }}
          className={styles.textContainer}
        >
          {CRT_TA_SONNA.hero_page_description}
        </Label01>
        <LinkButton>{CRT_TA_SONNA.hero_page_work_button_text}</LinkButton>
      </div>
    </div>

    </div>
   
  );
}

export default HeroPage;
