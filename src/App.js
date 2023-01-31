import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ecom from "./Components/Ecom";
import FormValidation from "./Components/FormValidate";
import Product from "./Components/Product";

const App = (props) => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FormValidation />} />
          <Route path="/product" element={<Ecom />} />
          <Route path="/product/:id" element={<Product/>} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
