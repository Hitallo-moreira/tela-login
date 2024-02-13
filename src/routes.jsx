import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import SucessPage from "./pages/Sucesspage";

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/sucesso" element={<SucessPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;