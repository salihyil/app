import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Authentication from "../../pages/Authentication";
import HeaderUser from "../HeaderUser";
import "./style.css";

const Layout = () => {
  const { success } = useSelector((state) => state.user);

  return (
    <div>
      {success ? (
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
