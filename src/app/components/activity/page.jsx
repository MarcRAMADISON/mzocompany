import style from "./activity.module.css";
import Image from "next/image";

const listActivity = [
  {
    logoUrl: "/assets/logo_online.png",
    illustrationUrl: "/assets/mzo_online.png",
    descritption:
      "Découvrez Mi-Zesta Online, notre boutique de mode en ligne, avec des collections pour toute la famille et des ventes en direct sur les réseaux sociaux.",
  },
  {
    logoUrl: "/assets/logo_contact_center.png",
    illustrationUrl: "/assets/mzo_contact.png",
    descritption:
      "Optimisez vos performances avec MZO Contact Center, expert en externalisation et offshoring",
  },
  {
    logoUrl: "/assets/logo_provider.png",
    illustrationUrl: "/assets/mzo_provider.png",
    descritption:
      "Profitez d’une connectivité satellitaire fiable, même dans les zones reculées, grâce à MZO Starlink Provider.",
  },
  {
    logoUrl: "/assets/logo_event.png",
    illustrationUrl: "/assets/mzo_event.png",
    descritption:
      "Transformez vos festivités en événements inoubliables avec MZO Event et ses solutions clé en main.",
  },
  {
    logoUrl: "/assets/logo_business.png",
    illustrationUrl: "/assets/mzo_business.png",
    descritption:
      "Simplifiez vos échanges commerciaux entre la Chine et Madagascar avec MZO Business et ses services d'importation et transit sur mesure.",
  },
];

function Activity() {
  return (
    <div className={style.container}>
      <div className={style.activityBlock}>
        {listActivity.map((activity, index) => {
          return (
            <div key={index} className={style.activityCard}>
              <Image
                src={activity.logoUrl}
                alt="logo mzo activity"
                width={150}
                height={100}
              />
              <h5 className={style.description}>{activity.descritption}</h5>
              <Image
                src={activity.illustrationUrl}
                alt="illustration mzo activity"
                width={300}
                height={320}
                style={{marginTop:'60px'}}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Activity;
