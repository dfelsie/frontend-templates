import React, { useEffect, useState } from "react";
import localStyles from "./Modal.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { useFormik } from "formik";
import joinClasses from "../../utils/joinClasses";
type Props = {};
export default function LoginForm({}: Props) {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
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

      <button
        type="submit"
        className={joinClasses(sharedStyles.actionButton, localStyles.subButt)}
      >
        Submit
      </button>
    </form>
  );
}
