import "../../styles/toast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Toast({ toastData }) {
  const [animation, setAnimation] = useState("toast-enter");

  useEffect(() => {
    setTimeout(() => {
      setAnimation("toast-exit");
    }, 1800);
  }, []);

  return (
    <div className={`toast-container ${animation}`}>
      <div className="toast-message">{toastData.message}</div>
      <div className="toast-icon">
        {toastData.type === "success" && (
          <FontAwesomeIcon icon={faCircleCheck} size="xl" className="success" />
        )}
        {toastData.type === "fail" && (
          <FontAwesomeIcon icon={faCircleXmark} size="xl" className="fail" />
        )}
        {toastData.type === "warn" && (
          <FontAwesomeIcon
            icon={faCircleExclamation}
            size="xl"
            className="warn"
          />
        )}
      </div>
    </div>
  );
}

export default Toast;
