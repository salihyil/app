import { Link } from "react-router-dom";
import "./style.css";

const HeaderUser = ({ userName }) => {
  const logout = () => {
    localStorage.removeItem("userEmail");
    window.location.href = "/";
  };
  const backPath = () => {
    window.history.back();
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
        <div>
          <button onClick={backPath}>Back</button>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderUser;
