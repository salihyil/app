import { useEffect, useState } from "react";

import "./style.css";

import HomePage from "../HomePage";
import Authentication from "../Authentication";

const Layout = () => {
  const [success, setSuccess] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userEmail")) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="header">
      {success ? (
        <>
          <HomePage userName={userName} />
        </>
      ) : (
        <Authentication setSuccess={setSuccess} setUserName={setUserName} />
      )}
    </div>
  );
};

export default Layout;
