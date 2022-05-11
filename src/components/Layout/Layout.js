import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Authentication from "../../pages/Authentication";
import HeaderUser from "../HeaderUser";
import "./style.css";

import { fetchUserAsync } from "../../store/userData/slice";

const Layout = () => {
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state) => state.userData);

  useEffect(() => {
    if (userEmail) {
      dispatch(fetchUserAsync(localStorage.getItem("userEmail")));
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
