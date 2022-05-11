import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Authentication from "../../pages/Authentication";
import HeaderUser from "../HeaderUser";
import "./style.css";
import { USEREMAIL_LOCAL_STORAGE } from "../../store/userData/constants";
import { loginRequest } from "../../store/userData/slice";

const Layout = () => {
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state) => state.userData);

  useEffect(() => {
    if (userEmail) {
      dispatch(loginRequest(localStorage.getItem(USEREMAIL_LOCAL_STORAGE)));
    }
  }, [dispatch, userEmail]);

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
