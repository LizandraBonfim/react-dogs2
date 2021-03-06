import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppDogs, AppBody } from "./global";
import Header from "./Components/Header/Index";
import Home from "./Components/Home/Index";
import Footer from "./Components/Footer/Index";
import NotFound from "./Components/NotFound/Index";
import { UserStorage } from "./Components/UserContext/Index";
import Login from "./Components/Login/Index";
import ProtectedRouter from "./Shared/ProtectedRouter";
import User from "./Components/User/User";
import Photo from "./Components/Photo/Index";
import UserProfile from "./Components/User/UserProfile/Index";

const App: React.FC = () => {
  return (
    <AppDogs>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <AppBody>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <ProtectedRouter path="conta/*" element={ <User /> } />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={ <UserProfile /> } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppBody>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </AppDogs>
  );
};

export default App;
