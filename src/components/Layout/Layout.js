import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Authentication from "../../pages/Authentication";
import HeaderUser from "../HeaderUser";
import "./style.css";

import { setSuccess, fetchUserAsync } from "../../store/userData/slice";

const Layout = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.userData);

  useEffect(() => {
    if (localStorage.getItem("userEmail")) {
      dispatch(fetchUserAsync(localStorage.getItem("userEmail")));
      dispatch(setSuccess(true));
    } else {
      dispatch(setSuccess(false));
    }
  }, [dispatch]);

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
