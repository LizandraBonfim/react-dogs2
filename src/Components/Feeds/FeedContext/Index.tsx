import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface Photo {
  id: string;
}

interface PhotoContextData {
  photo: Photo | undefined;
  setPhoto: Dispatch<SetStateAction<Photo | undefined>>;
  userId: string | undefined;
  setUserId: Dispatch<SetStateAction<string | undefined>>

}

export const PhotoContext = createContext<PhotoContextData>(
  {} as PhotoContextData,
);

export const ModalFeedPhoto: React.FC = ({ children }) => {
  
  const [photo, setPhoto] = useState<Photo | undefined>();
  const [userId, setUserId] = useState<string | undefined>();

  

  return (
    <PhotoContext.Provider
      value={{
        photo,
        setPhoto,
        userId,
        setUserId
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};
