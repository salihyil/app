import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

import { VALIDATION_SCHEMA } from "./validate";
import { userData } from "../../service/User/api";
import { userEmail } from "../../service/User/constants";

const Authentication = ({ setSuccess, setUserName }) => {
  const [user, setUser] = useState({});
  const [errorMsg, setErrorMSg] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let userDta = await userData(userEmail);

      if (userDta) {
        setUser(userDta[0]);
        setUserName(userDta[0].name);
      } else {
        setSuccess(false);
        localStorage.removeItem("userEmail");
        setErrorMSg(true);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    if (user.email.toLowerCase() === event.email) {
      localStorage.setItem("userEmail", event.email);
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
