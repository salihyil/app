import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading";
import "./style.css";

import { useSelector, useDispatch } from "react-redux";
import { Logout, setLoading } from "../../store/userData/slice";

const HeaderUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    user: { name },
    loading,
  } = useSelector((state) => state.userData);

  useEffect(() => {
    if (name) {
      dispatch(setLoading(false));
    } else {
      dispatch(setLoading(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    dispatch(Logout());
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
            {loading ? <Loading /> : name}
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
