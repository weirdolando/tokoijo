import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { postProduct } from "../reducers/productsSlice";

const addProductSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  img: Yup.string().url().required("Required"),
  price: Yup.number().required().positive().integer(),
});

export default function FormAddProducts() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="font-bold text-2xl my-4">Add Products</h2>
      <Formik
        initialValues={{
          productName: "",
          img: "",
          price: "",
        }}
        validationSchema={addProductSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(postProduct(values));
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label className="block font-semibold" htmlFor="productName">
              Product Name
            </label>
            <Field
              className="border-2 rounded-md px-2 py-1"
              id="productName"
              name="productName"
            />
            {errors.productName && touched.productName ? (
              <div className="text-red-500 text-sm">{errors.productName}</div>
            ) : null}
            <label className="block mt-2 font-semibold" htmlFor="img">
              Image URL
            </label>
            <Field
              className="border-2 rounded-md px-2 py-1"
              id="img"
              name="img"
            />
            {errors.img && touched.img ? (
              <div className="text-red-500 text-sm">{errors.img}</div>
            ) : null}
            <label className="block mt-2 font-semibold" htmlFor="price">
              Price
            </label>
            <Field
              className="border-2 rounded-md px-2 py-1"
              id="price"
              name="price"
              type="number"
            />
            {errors.price && touched.price ? (
              <div className="text-red-500 text-sm">{errors.price}</div>
            ) : null}
            <button
              className="block mt-4 bg-green-500 rounded-md px-4 py-2 text-zinc-200"
              type="submit"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
