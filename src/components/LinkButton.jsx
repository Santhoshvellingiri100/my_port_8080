import React, { useEffect, useRef } from "react";
import { Subhead02 } from "../theme/fonts";
import COLORS from "../theme/color";
import styles from "./components.module.css";
import { gsap } from "gsap";



function LinkButton({ children, ...props }) {
    const  hoverTL = useRef(null);
    const pileRef = useRef(null);

 useEffect(()=>{
//    const _pile = document.getElementById("linkPile");
   hoverTL.current = gsap.timeline();
   hoverTL.current.pause();
    hoverTL.current.to(pileRef.current, {
      width: "calc(100% + 1.5em)",
      ease: "elastic.out(.2)",duration: .8,
      
    });
    hoverTL.current.to(pileRef.current, { width: "2em" ,left:'calc(100% - 1.75em)',duration: .8, ease: "elastic.out(.2)",});
 },[pileRef])

  const onMouseEnterCallback = () => {
    
    hoverTL.current.play();
  };

  const onMouseLeaveCallback = () => {
    hoverTL.current.reverse();
  };
  return (
    <div
      {...props}
      onMouseEnter={onMouseEnterCallback}
      onMouseLeave={onMouseLeaveCallback}
      className={styles.linkContainer}
    >
      <div ref={pileRef} id={"linkPile"} className={styles.linkPile} />
      <Subhead02 style={{ color: COLORS.accentColor, lineHeight: "30px" }}>
        {children}
      </Subhead02>
      <i
        style={{ fontSize: "1.5rem", color: COLORS.accentColor }}
        className="uil uil-angle-right-b icon"
      ></i>
    </div>
  );
}

export default LinkButton;
