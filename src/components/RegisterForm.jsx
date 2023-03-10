import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import { useDispatch } from "react-redux";

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "Username must be at least 6 characters")
    .required(),
  email: Yup.string().email("Invalid email").required("Required"),
  /**
   * By default: password must be at least 8 characters',1 uppercase letter',1 number', 1 symbol'
   * I overwrite its min characters to be 6
   */
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .password()
    .required(),
});

export default function RegisterForm() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="font-bold text-2xl my-4">Register</h2>
      <p className="text-xs text-red-500 bg-red-300/50 rounded-md px-4 py-1 text-center mb-4">
        ⚠️ Warning: Don't use your real email and password. Trust me, I'm not
        gonna encrypt it!
      </p>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values, { resetForm }) => {
          //FIXME: Dispatch to register userSlice
          // dispatch(postProduct(values));
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label className="block font-semibold" htmlFor="username">
              Username
            </label>
            <Field
              className="border-2 rounded-md px-2 py-1 w-full"
              id="username"
              name="username"
            />
            {errors.username && touched.username ? (
              <div className="text-red-500 text-sm">{errors.username}</div>
            ) : null}
            <label className="block font-semibold" htmlFor="email">
              Email
            </label>
            <Field
              className="border-2 rounded-md px-2 py-1 w-full"
              id="email"
              name="email"
            />
            {errors.email && touched.email ? (
              <div className="text-red-500 text-sm">{errors.email}</div>
            ) : null}
            <label className="block mt-2 font-semibold" htmlFor="password">
              Password
            </label>
            <Field
              className="border-2 rounded-md px-2 py-1 w-full"
              id="password"
              name="password"
              type="password"
            />
            {errors.password && touched.password ? (
              <div className="text-red-500 text-sm">{errors.password}</div>
            ) : null}
            <button
              className="block mt-4 bg-green-500 rounded-md px-4 py-2 text-zinc-200"
              type="submit"
            >
              Login
            </button>
            <div className="text-sm text-center mt-4">
              <span>"Already have an account?"</span>{" "}
              <Link
                to="/login"
                className="text-green-500 hover:underline decoration-green-500"
              >
                Login
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
