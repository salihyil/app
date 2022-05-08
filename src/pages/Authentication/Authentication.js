import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

import { VALIDATION_SCHEMA } from "./validate";
import { userData } from "../../service/User/api";

const Authentication = ({ setSuccess }) => {
  const [errorMsg, setErrorMSg] = useState(false);

  const fetchData = async (email) => {
    let userDta = await userData(email);

    if (Array.isArray(userDta)) {
      localStorage.setItem("userEmail", userDta[0].email);
      setSuccess(true);
    } else {
      setSuccess(false);
      localStorage.removeItem("userEmail");
      setErrorMSg(true);
    }
  };

  const handleSubmit = ({ email }) => {
    fetchData(email);
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
            {errorMsg ? <div style={{ color: "red" }}>Error!</div> : null}
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
