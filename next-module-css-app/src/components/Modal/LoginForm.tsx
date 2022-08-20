import React, { useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { Field, Form, Formik } from "formik";
import joinClasses from "../../utils/joinClasses";
import { backendRoute } from "../../consts/consts";
import makeFetch from "../../utils/makeFetch";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
type Props = {};
export default function LoginForm({}: Props) {
  const [isEmail, setIsEmail] = useState(true);
  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setErrors }) => {
        console.log("Bungus");
        const { email, password } = values;
        const fetchFun = makeFetch(
          backendRoute + "/auth/login",
          { email: email, password: password },
          "POST"
        );
        fetchFun().then((res) => {
          if (!res?.success) {
            setErrors({ email: "Your email or password is incorrect." });
            return;
          }
          window.location.reload();
        });
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={localStyles.myForm}>
          <label htmlFor="email" aria-required="true">
            Email Address
          </label>
          <Field
            className={
              touched.email && errors.email ? localStyles.inputErr : ""
            }
            name="email"
            type={isEmail ? "email" : "string"}
          />
          <div className={localStyles.errDiv}>
            {touched.email ? errors.email : ""}
          </div>

          <label htmlFor="password" aria-required="true">
            Password
          </label>
          <Field
            className={
              touched.password && errors.password ? localStyles.inputErr : ""
            }
            name="password"
            type="password"
          />

          <div className={localStyles.errDiv}>
            {touched.password ? errors.password : ""}
          </div>

          <button
            className={joinClasses(
              sharedStyles.actionButton,
              localStyles.subButt
            )}
            type="submit"
            onClick={async (e) => {
              //window.location.reload();
              //e.preventDefault();
            }}
          >
            Submit
          </button>
          <button
            className={joinClasses(
              sharedStyles.actionButton,
              localStyles.forgotButt
            )}
            type="button"
            onClick={async (e) => {
              //window.location.reload();
              e.preventDefault();
            }}
          >
            Forgot Password?
          </button>
        </Form>
      )}
    </Formik>
  );
}
