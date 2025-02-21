import Modal from "react-modal";
import styles from './modal.module.css';


const ModalComponent = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Exemple de modal"
      className={styles.modal_content}
      overlayClassName={styles.modal_overlay}
      ariaHideApp={false}
    >
      <button className={styles.modal_close} onClick={onClose}>
        &times;
      </button>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      {children}
      </div>
      
    </Modal>
  );
};

export default ModalComponent;
