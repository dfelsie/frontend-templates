import React, { useEffect, useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { Field, Form, Formik, useFormik } from "formik";
import joinClasses from "../../utils/joinClasses";
import makeFetch from "../../utils/makeFetch";
import { backendRoute } from "../../consts/consts";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .test(
      "username-unique",
      "The username must be unique",
      async function (val) {
        return true;
      }
    )
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .test("email-unique", "The email must be unique", async function (val) {
      return true;
    })
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    })
    .required("Required"),
});
type Props = {};
export default function SignupForm({}: Props) {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        console.log("Bungus");
        const { email, password, username: name } = values;
        const fetchFun = makeFetch(
          backendRoute + "/auth/register",
          { email: email, password: password, name: name },
          "POST"
        );
        fetchFun().then(() => {
          window.location.reload();
        });
      }}
    >
      {({ isSubmitting, touched, errors }) => (
        <Form className={localStyles.myForm}>
          <label htmlFor="email">Email Address</label>
          <Field
            className={
              touched.email && errors.email ? localStyles.inputErr : ""
            }
            name="email"
            type="email"
          />
          <div className={localStyles.errDiv}>
            {touched.email ? errors.email : ""}
          </div>

          <label htmlFor="password">Password</label>
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

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field
            className={
              touched.confirmPassword && errors.confirmPassword
                ? localStyles.inputErr
                : ""
            }
            name="confirmPassword"
            type="password"
          />
          <div className={localStyles.errDiv}>
            {touched.confirmPassword ? errors.confirmPassword : ""}
          </div>

          <label htmlFor="username">Username</label>
          <Field
            className={
              touched.username && errors.email ? localStyles.inputErr : ""
            }
            name="username"
          />
          <div className={localStyles.errDiv}>
            {touched.username ? errors.username : ""}
          </div>

          <button
            className={joinClasses(
              sharedStyles.actionButton,
              localStyles.subButt
            )}
            type="submit"
            onClick={(e) => {
              window.location.reload();
              //e.preventDefault();
            }}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
