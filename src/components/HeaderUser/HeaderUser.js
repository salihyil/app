import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import "./style.css";

const HeaderUser = ({ userName, setSuccess }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userName) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [userName]);

  const logout = () => {
    localStorage.removeItem("userEmail");
    setSuccess(false);
    navigate("/");
  };
  const backPath = () => {
    navigate(-1);
  };

  return (
    <>
      <header>
        <h3 style={{ textAlign: "center" }}>
          <Link style={{ color: "red" }} to="/userinfo">
            {loading ? <Loading /> : userName}
          </Link>{" "}
          Hoşgeldiniz.
        </h3>
        <div>
          <button onClick={backPath}>Back</button>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default HeaderUser;
