import { Link } from "react-router-dom";
import "./style.css";

const HeaderUser = ({ userName }) => {
  const logout = () => {
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };

  return (
    <>
      <div className="header-user">
        <h3 style={{ textAlign: "center" }}>
          <Link style={{ color: "red" }} to="/userinfo">
            {userName}{" "}
          </Link>
          Hoşgeldiniz.
        </h3>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};

export default HeaderUser;
