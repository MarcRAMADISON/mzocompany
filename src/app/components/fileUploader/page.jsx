"use client";

import { useState } from "react";
import styles from "./fileUploader.module.css";

export default function FileUploader({ setFile }) {
  const [fileName, setFileName] = useState("Aucun fichier sélectionné");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFile(event.target.files[0]);

    setFileName(file ? file.name : "Aucun fichier sélectionné");
  };

  return (
    <div className={styles.file_upload}>
      <input
        type="file"
        id="fileInput"
        hidden
        onChange={handleFileChange}
        accept=".pdf,.jpg,.png"
      />

      <label htmlFor="fileInput" className={styles.upload_btn}>
        📎 Importer CV
      </label>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span className={styles.file_name}>{fileName}</span>
        <span style={{fontSize:'0.8rem'}}>Format .pdf, .jpg, .png</span>
      </div>
    </div>
  );
}
