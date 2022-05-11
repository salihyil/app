import React from "react";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";

import { VALIDATION_SCHEMA } from "./validate";

import { loginRequest } from "../../store/userData/slice";
import Loading from "../../components/Loading";

const Authentication = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.userData);

  const handleSubmit = ({ email }) => {
    dispatch(loginRequest(email));
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
            {loading ? <Loading /> : null}
            {error ? <div style={{ color: "red" }}>{error}</div> : null}
          </Form>
        );
      }}
    </Formik>
  );
};

export default Authentication;
