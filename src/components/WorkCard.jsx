import React from "react";
import styles from "./components.module.css";
import { Heading01, Label02, Subhead01, Subhead02 } from "../theme/fonts";
import COLORS from "../theme/color";
import FONTS from "../theme/styles";
function WorkCard({ element,containerStyle={}}) {
  return (
    <div style={{...containerStyle}} className={styles.workCardContainer}>
      {/* img */}
      { !!element?.bgURL && <img
        className={styles.workCardImg}
        alt="img"
        src={
          element?.bgURL
        }
      />}
      <div className={styles.workCardBackdrop}/>
      <div className={styles.workCardConent}>
        <div className={styles.hastagCardsContainer}>
          {element.tags.map((e)=>(<div className={styles.hastagCard}>
            <Subhead02>{'#'+e}</Subhead02>
          </div>))}
          

        </div>
        
        <div className={styles.workCardWords}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Heading01 >{element.title}</Heading01>
            <div style={{marginLeft: ".6rem",
                marginBottom: ".5rem",}} className={styles.workCardLinkIcon}>
            <i
              style={{
                ...FONTS.heading01,
              }}
              className="uil uil-external-link-alt"
            ></i>

            </div>
          </div>
          <Subhead01 style={{ color: COLORS.accentColor,opacity:1 }}>
           {element.section}
          </Subhead01>
          
          <Label02 className={styles.workCardDescriptionText}>
          {element.description}
          </Label02>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
