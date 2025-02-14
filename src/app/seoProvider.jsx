"use client"; 

import { DefaultSeo } from "next-seo";

export default function SEOProvider() {
  return (
    <DefaultSeo
      title="MZO Company"
      description="MZO est une entreprise multisectorielle dans le secteur de la vente en ligne, des traitements d'appels, de la vente de matériel STARLINK à Madagascar, de l'organisation événementielle, de l'importation en Chine - Madagascar"
      openGraph={{
        type: "website",
        locale: "fr_FR",
        url: "https://www.mzocompany.com/",
        siteName: "Site de MZO Company",
      }}
    />
  );
}
