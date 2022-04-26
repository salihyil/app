import { Link } from "react-router-dom";

const HeaderUser = () => {
  return (
    <header>
      <h3 style={{ textAlign: "center" }}>
        <Link style={{ color: "red" }} to="/userinfo">
          {localStorage.getItem("username")}{" "}
        </Link>
        Hoşgeldiniz.
      </h3>
    </header>
  );
};

export default HeaderUser;
