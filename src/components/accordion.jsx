import React, { useRef } from "react";
import styles from "./components.module.css";
import { Label01, SmallText01 } from "../theme/fonts";
function Accordion({ elements }) {
    const contentRef = useRef();
  const toggleAccordion = () => {
    console.log(">>>>>>>>");
  };
  return (


    <div className={styles.accordionContainer}>
      <div className={styles.accordionblock} onClick={toggleAccordion}>
        <div
          className={styles.accordionHeader}
          style={{
            // height: 0,
            // overflow: "hidden",
            
          }}
        >
           <Label01 style={{width:"calc(100% - 50px)",flexDirection:"row",
            }}>samll content in header</Label01> 
            <div style={{width:'50px',minHeight:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <i style={{fontSize:20,color:"red"}} class="uis uis-angle-down"></i>
            </div>

        </div>
          <div ref={contentRef} className={styles.accordionContent}>
            <SmallText01>samll content in headersamll content in headersamll content in headersamll content in headersamll content in headersamll content in headersamll content in header</SmallText01>
          </div>
        
      </div>
    </div>
  );
}

export default Accordion;
