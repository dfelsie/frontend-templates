import React, { useEffect, useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { Field, Form, Formik, useFormik } from "formik";
import joinClasses from "../../utils/joinClasses";
import { backendRoute } from "../../consts/consts";
import makeFetch from "../../utils/makeFetch";
type Props = {};
export default function LoginForm({}: Props) {
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
        const { email, password } = values;
        const fetchFun = makeFetch(
          backendRoute + "/auth/login",
          { email: email, password: password },
          "POST"
        );
        const bleh = await fetchFun();
        console.log(bleh);
        window.location.reload();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={localStyles.myForm}>
          <label htmlFor="email">Email Address</label>

          <Field name="email" type="email" />
          <label htmlFor="password">Password</label>

          <Field name="password" type="password" />

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
