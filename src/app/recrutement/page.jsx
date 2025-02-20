"use client";

import { useState } from "react";
import FileUploader from "../components/fileUploader/page";
import MenuBar from "../components/menuBar/page";
import styles from "./recrutement.module.css";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Swal from "sweetalert2";

function Recrutement() {
  const [values, setValues] = useState({
    name: "",
    firstname: "",
    email: "",
    phone: "",
  });
  const [file, setFile] = useState({ file: "", fileName: "" });
  const [loading,setLoading]=useState(false)

  const handleChange = (value) => {
    setValues((prev) => ({ ...prev, [value.target.name]: value.target.value }));
  };
 

  const handleSend = (e) => {
    e.preventDefault();
    let fileUrl = "";
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "mzo_contact");
      setLoading(true)

      const res = axios
        .post(
          "https://api.cloudinary.com/v1_1/ddoh2p4wo/image/upload",
          formData
        )
        .then((res) => {
          fileUrl = res?.data?.secure_url;

          if(fileUrl.includes(".pdf")){
            fileUrl = fileUrl.replace(".pdf", ".jpg");
          }

          const templateParams = {
            name: values.name,
            firstname: values.firstname,
            email: values.email,
            phone: values.phone,
            attachment: fileUrl,
          };

          try {
            emailjs
              .send(
                "service_ypc8nem",
                "template_b99pzjm",
                templateParams,
                "zxSCiTAl55seiFBn3"
              )
              .then(() => {
                Swal.fire({
                  title: "Succès !",
                  text: "Candidature envoyé avec succès !",
                  icon: "success",
                  confirmButtonText: "OK",
                  timer: 8000,
                  toast: true,
                  position: "center",
                });

                setLoading(false)

              }).catch(()=>{
                Swal.fire({
                  title: "Erreur !",
                  text: "Problème lors de l'envoie de votre candidature !",
                  icon: "error",
                  confirmButtonText: "OK",
                  timer: 8000,
                  toast: true,
                  position: "center",
                });

                setLoading(false)

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

            setLoading(false)

          }
        });
    }
  };

  const checkValidation= !!values?.email && !!values?.firstname && !!values?.name && !!values?.phone && !!file?.name && !loading;



  return (
    <div>
      <MenuBar />
      <div className={styles.container}>
        <span className={styles.title}>
          Envie de faire partie de notre équipe ? Nous recrutons ! 🚀
        </span>
        <span className={styles.subTitle}>
          Nous cherchons des talents motivés et prêts à relever des défis.
        </span>
        <span style={{ marginTop: "20px" }} className={styles.title}>
          Comment postuler ?
        </span>
        <span className={styles.subTitle}>
          C’est simple ! Envoie ta candidature dès maintenant en remplissant le
          formulaire ci-dessus.
        </span>
        <FileUploader setFile={setFile} />
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
              type="email"
              placeholder="Adresse e-mail *"
              value={values.email}
              onChange={handleChange}
              name="email"
            />
          </div>
        </div>
        <button className={checkValidation ? styles.sendButton : styles.disabledButton} disabled={!checkValidation} onClick={handleSend}>
          Envoyer candidature
        </button>
      </div>
    </div>
  );
}

export default Recrutement;
