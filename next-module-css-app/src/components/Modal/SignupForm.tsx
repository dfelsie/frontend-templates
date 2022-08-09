import React, { useEffect, useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { useFormik } from "formik";
import joinClasses from "../../utils/joinClasses";
type Props = {};
export default function SignupForm({}: Props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className={localStyles.myForm}>
      <label htmlFor="email">Email Address</label>

      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Password</label>

      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <label htmlFor="confirmPassword">Confirm Password</label>

      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />

      <label htmlFor="username">Username</label>

      <input
        id="username"
        name="username"
        type="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />

      <button
        className={joinClasses(sharedStyles.actionButton, localStyles.subButt)}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
