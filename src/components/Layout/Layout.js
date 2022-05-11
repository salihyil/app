import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Authentication from "../../pages/Authentication";
import HeaderUser from "../HeaderUser";
import "./style.css";

const Layout = () => {
  const {
    userEmail,
    user: { name },
  } = useSelector((state) => state.userData);

  
  
  return (
    <div>
      {userEmail ? (
        <>
          <HeaderUser />
          <div className="container">
            <Outlet />
          </div>
        </>
      ) : (
        <div className="container">
          <Authentication />
        </div>
      )}
    </div>
  );
};

export default Layout;
