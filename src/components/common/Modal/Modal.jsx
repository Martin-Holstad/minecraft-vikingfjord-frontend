import styles from "./Modal.module.css";
import { useEffect, useRef, useContext } from "react";
import AppContext from "../../../context/AppContext";

export default function Modal(props) {
  const { setModalOpen } = useContext(AppContext);
  const modalRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && modalRef.current === event.target) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.modal} ref={modalRef}>
      {props.children}
    </div>
  );
}
