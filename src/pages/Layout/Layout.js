import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Authentication from "../Authentication";
import HeaderUser from "../../components/HeaderUser";

import "./style.css";

const Layout = () => {
  const [userName, setUserName] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userEmail")) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, []);

  return (
    <div className="header">
      {success ? (
        <>
          <HeaderUser userName={userName} />
          <Outlet />
        </>
      ) : (
        <Authentication setSuccess={setSuccess} setUserName={setUserName} />
      )}
    </div>
  );
};

export default Layout;
