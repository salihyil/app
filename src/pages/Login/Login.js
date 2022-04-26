import { useEffect, useState } from "react";

import { adminData } from "../../service/User/api";
import "./style.css";

import HomePage from "../HomePage";
import Authentication from "../Authentication";

const Login = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    const fetchData = async () => {
      let data = await adminData();
      localStorage.setItem("username", data[0].name);
      setAdminEmail(data[0].email);
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="header">
      {success ? (
        <HomePage />
      ) : (
        <Authentication setSuccess={setSuccess} adminEmail={adminEmail} />
      )}
    </div>
  );
};

export default Login;
