import { createContext, useState } from "react";
import Toast from "../Toast/Toast";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastData, setToastData] = useState({
    message: "",
    type: "",
  });

  const showToast = (message, type) => {
    setToastData({ message, type });

    setTimeout(() => {
      setToastData({ message: "", type: "" });
    }, 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {toastData.message && <Toast toastData={toastData} />}
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
