import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppDogs, AppBody } from "./global";
import Header from "./Components/Header/Index";
import Home from "./Components/Home/Index";
import Footer from "./Components/Footer/Index";
import NotFound from "./Components/NotFound/Index";

const App: React.FC = () => {
  return (
    <AppDogs>
      <BrowserRouter>
        <Header />
        <AppBody>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </AppBody>
        <Footer />
      </BrowserRouter>
    </AppDogs>
  );
};

export default App;
