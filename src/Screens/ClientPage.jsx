import React from "react";
import styles from "./screen.module.css";
import { Heading02, Label01, Label02, Title01, Title02 } from "../theme/fonts";
import WorkCard from "../components/WorkCard";
import COLORS from "../theme/color";
const elements = [
  {
    title: "Petro-money",
    section: "Finserve Module",
    description:
      "My portfolio now consists of some 250+ completed websites. Below is a sampling of recent projects I am proud to have delivered.",
    tags: ["React.js", "React Native", "UI", "UX"],
    bgURL:
      "https://images.pexels.com/photos/6538435/pexels-photo-6538435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
function ClientPage() {
  return (
    <div className={styles.clientPageContainer}>
      <div style={{}} className={styles.clientPageHeader}>
        <Title02
          style={{ textAlign: "center", width: "100%", margin: "2rem 0px" }}
        >
          Clients & Partners
        </Title02>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Label01 style={{ textAlign: "center", width: "60%" }}>
            My portfolio now consists of some 250+ completed websites. Below is
            a sampling of recent projects I am proud to have delivered.
          </Label01>
        </div>
      </div>

      {/* content */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: -1,
            backgroundColor: COLORS.primaryColor05,
          }}
        ></div>
        <div className={styles.logosSectionContainer}>
          {Array.from({ length: 20 }, () => "").map(() => (
            <LogoCard />
          ))}
        </div>
      </div>
    </div>
  );
}

const LogoCard = () => {
  return (
    <div className={styles.logContainer}>
      <Heading02 style={{ color: "white" }}>LOGO</Heading02>
    </div>
  );
};

export default ClientPage;
