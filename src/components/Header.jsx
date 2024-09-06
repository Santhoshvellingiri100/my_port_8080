import React from "react";
import styles from "./components.module.css";
import {
  Heading01,
  HeroFont01,
  Label01,
  Label02,
  Subhead01,
  Subhead02,
  Title01,
} from "../theme/fonts";
import COLORS from "../theme/color";
import { CRT_TA_SONNA } from "../meta/data";
function Header() {
  return (
    <div className={styles.headerContainer}>
      {/* name title */}
      <div className={styles.headerLeftContainer}>
        <HeroFont01 style={{ color: "white" }}>
          {CRT_TA_SONNA.hero_page_title}
        </HeroFont01>
        <Label01 className={styles.headerDescriptionLeft}>
          {CRT_TA_SONNA.hero_page_discription}
        </Label01>
      </div>

      <div className={styles.headerRightContainer}>
        <Label02 className={styles.headerDescriptionRight}>
          {CRT_TA_SONNA.hero_page_discription}
        </Label02>

        <div className={styles.headerRightButtonContainer}>
          {/* Available Button */}
          <div className={styles.outlineButtonContainer}>
            <div
              className={styles.pulse}
              style={{
                backgroundColor:
                  CRT_TA_SONNA.hero_page_avialable_card.pluseColor,
              }}
            >
              <div className={styles.pulseChild}
              style={{
                backgroundColor:
                  CRT_TA_SONNA.hero_page_avialable_card.pluseColor,
              }}
              />
            </div>
            <Label01 className={styles.availableText}>
              {CRT_TA_SONNA.hero_page_avialable_card.text}
            </Label01>
          </div>
          {/* Contact Button */}
          <div
            onClick={() => {
              const contactElement = document.getElementById("contactPage");
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={styles.contactFillContainer}
          >
            <Subhead02 style={{ color: "black" }}>Contact</Subhead02>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
