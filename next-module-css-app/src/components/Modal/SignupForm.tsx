import React, { useEffect, useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { Field, Form, Formik, useFormik } from "formik";
import joinClasses from "../../utils/joinClasses";
import { backendRoute } from "../../consts/consts";
import * as Yup from "yup";
import postCheckEmailUnique from "../../utils/requests/postCheckEmailUnique";
import postCheckUsernameUniqueReq from "../../utils/requests/postCheckUsernameUniqueReq";
import postRegisterUser from "../../utils/requests/postRegisterUser";

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
      validateOnChange={false}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setErrors }) => {
        console.log("Bungus");
        const { email, password, username: name } = values;
        const emailUnique = await postCheckEmailUnique(email);
        const usernameUnique = await postCheckUsernameUniqueReq(name);
        postRegisterUser(email, password, name)
          .then((res) => {
            console.log(res);
            if (!(emailUnique.emailUnique && usernameUnique.usernameUnique)) {
              if (!emailUnique.emailUnique) {
                setErrors({ email: "Email must be unique" });
              }
              if (!usernameUnique.usernameUnique) {
                setErrors({ username: "Username must be unique" });
              }
              return;
            } else {
              if (!res?.success) {
                setErrors({
                  email: "We couldn't register you with those credentials",
                });
                return;
              }
              window.location.reload();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }}
    >
      {({ isSubmitting, touched, errors, submitForm }) => (
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
              //e.preventDefault();
              //window.location.reload();
            }}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
