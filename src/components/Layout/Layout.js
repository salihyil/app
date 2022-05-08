import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Authentication from "../../pages/Authentication";
import { userData } from "../../service/User/api";
import HeaderUser from "../HeaderUser";

import "./style.css";

const Layout = () => {
  const [userName, setUserName] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      const fetchData = async (email) => {
        let userDta = await userData(email);

        if (Array.isArray(userDta)) {
          setUserName(userDta[0].name);
        } else {
          setUserName("");
        }
      };
      fetchData(localStorage.getItem("userEmail"));
    }

    if (localStorage.getItem("userEmail")) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [success]);

  return (
    <div>
      {success ? (
        <>
          <HeaderUser userName={userName} setSuccess={setSuccess} />
          <div className="container">
            <Outlet />
          </div>
        </>
      ) : (
        <div className="container">
          <Authentication setSuccess={setSuccess} />
        </div>
      )}
    </div>
  );
};

export default Layout;
