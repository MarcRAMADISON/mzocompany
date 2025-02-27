"use client";

import { useState } from "react";
import MenuBar from "../components/menuBar/page";
import styles from "./business.module.css";
import Image from "next/image";
import ModalComponent from "../components/modal/page";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

function BusenessPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeFormation, setTypeFormation] = useState("");
  const [values, setValues] = useState({
    name: "",
    firstname: "",
    phone: "",
    adresse: "",
    fbName: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOpenModal = (type) => {
    setTypeFormation(type);
    setIsModalOpen(true);
  };

  const handleChange = (value) => {
    setValues((prev) => ({ ...prev, [value.target.name]: value.target.value }));
  };

  const checkValidation =
    !!values?.adresse &&
    !!values?.firstname &&
    !!values?.name &&
    !!values?.phone &&
    !!values?.fbName &&
    !loading;

  const sendToWhatsApp = () => {
    const phoneNumber = "261389365978"; // Remplace par ton numéro WhatsApp (sans le +)
    const text = `Hello, MZO Company,%0A%0AVous avez une nouvelle inscription en ${
      typeFormation === "CALL" ? "Call Center" : "Business Chine"
    }%0A%0ANom: ${values.name}%0APrénom: ${values.firstname}%0ATéléphone: ${
      values.phone
    }%0ANom sur Facebook: ${values.fbName}%0AAdresse: ${values.adresse}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleSend = () => {
    setLoading(true);

    const templateParams = {
      name: values.name,
      firstname: values.firstname,
      fbName: values.fbName,
      phone: values.phone,
      adresse: values.adresse,
      typeFormation:
        typeFormation === "CALL" ? "Call Center" : "Business Chine",
    };

    try {
      emailjs
        .send(
          "service_ypc8nem",
          "template_ix1etyw",
          templateParams,
          "zxSCiTAl55seiFBn3"
        )
        .then(() => {
          Swal.fire({
            title: "Succès !",
            text: "Candidature envoyé avec succès ! Voulez vous envoyer directement la demande sur Watsapp?",
            icon: "success",
            confirmButtonText: "Watsapp",
            timer: 45000,
            showCancelButton: true,
            cancelButtonText: "Terminer",
            toast: true,
            position: "center",
          }).then((result) => {
            if (result.isConfirmed) {
              sendToWhatsApp();
            }
          });

          setValues({
            name: "",
            firstname: "",
            phone: "",
            adresse: "",
            fbName: "",
          });
          setLoading(false);
          setIsModalOpen(false);
        })
        .catch(() => {
          Swal.fire({
            title: "Erreur !",
            text: "Problème lors de l'envoie de votre candidature !",
            icon: "error",
            confirmButtonText: "OK",
            timer: 8000,
            toast: true,
            position: "center",
          });

          setLoading(false);
        });
    } catch (error) {
      Swal.fire({
        title: "Erreur !",
        text: "Problème lors de l'envoie de votre candidature !",
        icon: "error",
        confirmButtonText: "OK",
        timer: 8000,
        toast: true,
        position: "center",
      });

      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "100px",
      }}
    >
      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <span className={styles.formulaireContact}>
          Formulaire d'inscription
        </span>
        <span className={styles.formulaireSubTitle}>
          {typeFormation === "CALL" ? "Call Center" : "Business Chine"}
        </span>
        <div className={styles.form}>
          <div className={styles.input_container}>
            <input
              type="text"
              placeholder="Entrez votre nom *"
              value={values.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className={styles.input_container}>
            <input
              type="text"
              placeholder="Entrez votre prénom *"
              value={values.firstname}
              onChange={handleChange}
              name="firstname"
            />
          </div>
          <div className={styles.input_container}>
            <input
              type="text"
              placeholder="Numero téléphone *"
              value={values.phone}
              onChange={handleChange}
              name="phone"
            />
          </div>
          <div className={styles.input_container}>
            <input
              type="text"
              placeholder="Nom sur Facebook *"
              value={values.fbName}
              onChange={handleChange}
              name="fbName"
            />
          </div>
          <div className={styles.input_container}>
            <input
              type="text"
              placeholder="Votre adresse *"
              value={values.adresse}
              onChange={handleChange}
              name="adresse"
            />
          </div>
          <button
            className={
              checkValidation ? styles.sendButton : styles.disabledButton
            }
            disabled={!checkValidation}
            onClick={handleSend}
          >
            Envoyer demande d'inscription
          </button>
        </div>
      </ModalComponent>
      <MenuBar />
      <div className={styles.firstContainer}>
        <Image
          src="/assets/background_welcome_page.png"
          alt="welcome mzo"
          width={1080}
          height={920}
          className={styles.filigrane}
        />
        <div className={styles.logoMzo}>
          <Image
            src="/assets/large_mzo_business.png"
            alt="logo mzo starlink provider"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="pageDoteContainer">
          <div className="pageDote"></div>
          <div className="pageDote"></div>
          <div className="pageDote"></div>
        </div>
      </div>
      <span className={styles.titleDescription}>
        MZO Business est votre partenaire de confiance pour tous vos besoins en
        importation Chine-Madagascar et en services transitaires entre ces deux
        pays. Nous offrons des solutions sur mesure pour faciliter vos échanges
        commerciaux, en assurant une gestion efficace des démarches douanières,
        de la logistique et du transport. Grâce à notre expertise et à notre
        réseau, nous vous garantissons une gestion fluide et rapide de vos
        importations. Faites confiance à MZO Business pour optimiser vos
        opérations commerciales et garantir le succès de vos projets
        d’importation.{" "}
      </span>
      {/*<div className={styles.valeursContainer}>
        <div className={styles.valeurItem}>
          <span className={styles.valeurTitle}>Sécurité</span>
          <span className={styles.valeur}>
            La protection optimale de vos marchandises durant toute la chaîne
            logistique.
          </span>
        </div>
        <div className={styles.valeurItem}>
          <span className={styles.valeurTitle}>Simplicité</span>
          <span className={styles.valeur}>
            Des solutions simples et pratiques pour un processus d’importation
            sans tracas.
          </span>
        </div>
        <div className={styles.valeurItem}>
          <span className={styles.valeurTitle}>Responsabilité</span>
          <span className={styles.valeur}>
            Une gestion des affaires qui respecte les normes et les régulations
            internationales.
          </span>
        </div>
      </div>*/}
      <span className={styles.sectionTitle}>Nos formations</span>
      <div className={styles.formationContainer}>
        <div style={{backgroundImage: "url('/assets/plateauCall.jpg')"}} className={styles.cardContainer} >
          <div className={styles.formationItem}>
            <span className={styles.titleFormation}>Call Center</span>
            <div
              style={{ position: "relative", width: "350px", height: "350px" }}
            >
              <Image
                src="/assets/carrousel14.jpg"
                alt="formation image"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <button
              className={styles.sendButton}
              onClick={() => handleOpenModal("CALL")}
            >
              Demande d'inscrition
            </button>
          </div>
        </div>

        <div style={{backgroundImage: "url('/assets/chineBg.jpeg')"}} className={styles.cardContainer}>

          <div className={styles.formationItem}>
            <span className={styles.titleFormation}>Business chine</span>
            <div
              style={{ position: "relative", width: "350px", height: "350px" }}
            >
              <Image
                src="/assets/mzo_chine.jpg"
                alt="formation image"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <button
              className={styles.sendButton}
              onClick={() => handleOpenModal("CALL")}
            >
              Demande d'inscrition
            </button>
          </div>
        </div>




      </div>
    </div>
  );
}

export default BusenessPage;
