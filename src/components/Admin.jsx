import React from "react";
import { Formik } from "formik";
import { FormAddProducts } from "./FormAddProducts";

function Admin() {
  return (
    <div className="w-4/5 mx-auto min-h-[85vh]">
      <FormAddProducts />
    </div>
  );
}

export default Admin;
