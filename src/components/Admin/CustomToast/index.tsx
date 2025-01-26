import React from "react";
import { ToastContainer, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {
  hasFixedHeader?: boolean;
  position?: ToastPosition;
}
export const CustomToast = ({
  hasFixedHeader = false,
  position = "top-right",
}: IProps) => (
  <ToastContainer
    position={position}
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    style={hasFixedHeader ? { marginTop: 116 } : {}}
  />
);
