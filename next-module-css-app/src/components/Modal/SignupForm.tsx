import React, { useEffect, useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { Field, Form, Formik, useFormik } from "formik";
import joinClasses from "../../utils/joinClasses";
import makeFetch from "../../utils/makeFetch";
import { backendRoute } from "../../consts/consts";
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
      onSubmit={async (values) => {
        console.log("Bungus");
        const { email, password, username: name } = values;
        const fetchFun = makeFetch(
          backendRoute + "/auth/register",
          { email: email, password: password, name: name },
          "POST"
        );
        await fetchFun();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={localStyles.myForm}>
          <label htmlFor="email">Email Address</label>

          <Field name="email" type="email" />
          <label htmlFor="password">Password</label>

          <Field name="password" type="password" />
          <label htmlFor="confirmPassword">Confirm Password</label>

          <Field name="confirmPassword" type="password" />

          <label htmlFor="username">Username</label>

          <Field name="username" />

          <button
            className={joinClasses(
              sharedStyles.actionButton,
              localStyles.subButt
            )}
            type="submit"
            onClick={(e) => {
              //window.location.reload();
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
