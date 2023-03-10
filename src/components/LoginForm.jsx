import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);
import { useDispatch } from "react-redux";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .password()
    .required(),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="font-bold text-2xl my-4">Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { resetForm }) => {
          //FIXME: Dispatch to login userSlice
          // dispatch(postProduct(values));
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
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
              <span>Don't have an account?</span>{" "}
              <Link
                to="/register"
                className="text-green-500 hover:underline decoration-green-500"
              >
                Register
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
