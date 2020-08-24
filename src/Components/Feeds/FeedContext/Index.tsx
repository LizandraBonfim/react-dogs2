import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { Foto } from "../../../models/Index";


interface ModalFeedContextData {
  photoModal: Foto | undefined;
  setPhotoModal: Dispatch<SetStateAction<Foto | undefined>>;
  userModalId: string | undefined;
  setUserModalId: Dispatch<SetStateAction<string>>

}

export const ModalFeedContext = createContext<ModalFeedContextData>(
  {} as ModalFeedContextData,
);

export const ModalFeedPhoto: React.FC = ({ children }) => {

  const [photoModal, setPhotoModal] = useState<Foto | undefined>();
  const [userModalId, setUserModalId] = useState<string>("");

  return (
    <ModalFeedContext.Provider
      value={{
        photoModal,
        setPhotoModal,
        userModalId,
        setUserModalId
      }}
    >
      {children}
    </ModalFeedContext.Provider>
  );
};
