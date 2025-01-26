import { useState } from "react";

const useUploadModal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return { modal, toggleModal };
};

export default useUploadModal;
