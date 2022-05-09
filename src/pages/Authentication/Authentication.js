import React from "react";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { VALIDATION_SCHEMA } from "./validate";

import { fetchUserAsync } from "../../features/user/userSlice";

const Authentication = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const handleSubmit = ({ email }) => {
    dispatch(fetchUserAsync(email));
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
            {error ? <div style={{ color: "red" }}>{error}</div> : null}
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
