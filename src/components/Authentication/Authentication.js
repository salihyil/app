import React from "react";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

import { VALIDATION_SCHEMA } from "./validate";

const Authentication = ({ setSuccess, adminEmail }) => {
  const handleSubmit = (event) => {
    if (event.email === adminEmail.toLowerCase()) {
      localStorage.setItem("user", event.email);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={VALIDATION_SCHEMA}
      validateOnChange={false}
      validateOnBlur={true}
      onSubmit={handleSubmit}
    >
      {(props) => {
        return (
          <Form>
            <Field name="email" type="email" placeholder="Email girin" />
            {props.errors.email ? (
              <div style={{ color: "red" }}>{props.errors.email}</div>
            ) : null}
            <button type="submit">Giriş Yap</button>
          </Form>
        );
      }}
    </Formik>
  );
};

Authentication.propTypes = {
  setSuccess: PropTypes.func,
  adminEmail: PropTypes.string,
};

Authentication.defaultProps = {
  setSuccess: () => false,
  adminEmail: "",
};

export default Authentication;
