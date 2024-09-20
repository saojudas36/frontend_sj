import React from "react";
import useProfileInfo from "../../hooks/useProfileInfo";
import styles from "./AboutMe.module.css";
import ContactInfos from "./components/ContactInfos";
import PersonalInfos from "./components/PersonalInfos";
export default function AboutMe() {
  const { profileInfo } = useProfileInfo();

  return (
    <main className={styles.container}>
      <PersonalInfos profileInfo={profileInfo} />
      <ContactInfos profileInfo={profileInfo} />
    </main>
  );
}
