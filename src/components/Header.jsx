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
function Header() {
  return (
    <div className={styles.headerContainer}>
      {/* name title */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: "2rem",
        }}
      >
        <HeroFont01 style={{ color: 'white' }}>Santhosh</HeroFont01>
        <Label01 style={{}}>App/Web development & design since 2019 ✨</Label01>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: "2rem",
        }}
      >
        {/* Available Button */}
        <div className={styles.outlineButtonContainer}>
          <div className={styles.pulse} />
          <Label01>Available Soon</Label01>
        </div>

        {/* Contact Button */}
        <div
          onClick={() => {
            const contactElement = document.getElementById("contactPage");
            if (contactElement) {
              contactElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={styles.fillButtonContainer}
        >
          <Subhead02 style={{ color: "black" }}>Contact</Subhead02>
        </div>
      </div>
    </div>
  );
}

export default Header;
