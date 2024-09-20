import { Outlet, useLocation } from "react-router-dom";
import useProfileInfo from "../../hooks/useProfileInfo";
import Aside from "../../components/Aside";
import styles from "./MyProfile.module.css";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import { FaStethoscope, FaUser } from "react-icons/fa";

const routeTitles = {
  "/my-profile": "Sobre Mim",
  "/my-profile/medic-infos": "Ficha Medica",
};

export default function MyProfile() {
  const { profileInfo } = useProfileInfo();
  const location = useLocation();
  const title = routeTitles[location.pathname] || "";

  const links = [
    { name: "Sobre mim", path: "/my-profile" },
    { name: "Ficha Medica", path: "/my-profile/medic-infos" }
  ];
  
  return (
    <main className={styles.main}>
      <Aside icon={<FaUser />}title={'Perfil'} links={links}/>
      <section>
        <Header title={title}/>
        <div className={styles.container}>
          <Banner profileInfo={profileInfo} />
          <Outlet />
        </div>
      </section>
    </main>
  );
}
