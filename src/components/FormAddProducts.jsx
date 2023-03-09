import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const addProductSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  imageUrl: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().required().positive().integer(),
});

export const FormAddProducts = () => (
  <div>
    <h2 className="font-bold text-xl my-4">Add Products</h2>
    <Formik
      initialValues={{
        productName: "",
        imageUrl: "",
        price: "",
      }}
      validationSchema={addProductSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label className="block" htmlFor="productName">
            Product Name
          </label>
          <Field
            className="border-2 rounded-md px-2 py-1"
            id="productName"
            name="productName"
          />
          {errors.productName && touched.productName ? (
            <div>{errors.productName}</div>
          ) : null}
          <label className="block" htmlFor="imgUrl">
            Image URL
          </label>
          <Field
            className="border-2 rounded-md px-2 py-1"
            id="imgUrl"
            name="imageUrl"
          />
          {errors.imageUrl && touched.imageUrl ? (
            <div>{errors.imageUrl}</div>
          ) : null}
          <label className="block" htmlFor="price">
            Price
          </label>
          <Field
            className="border-2 rounded-md px-2 py-1"
            id="price"
            name="price"
            type="number"
          />
          {errors.price && touched.price ? <div>{errors.price}</div> : null}
          <button
            className="block bg-green-500 rounded-md px-4 py-2 text-zinc-200"
            type="submit"
          >
            Add
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
