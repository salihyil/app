import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../../components/Loading";
import { fetchUserAsync } from "../../store/userData/slice";

import "./styles.css";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { loading, error, name, username, phone, website } = useSelector(
    (state) => state.userData
  );

  useEffect(() => {
    dispatch(fetchUserAsync(localStorage.getItem("userEmail")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="user-info">
        <h4>User Info</h4>
        {error ? <div style={{ color: "red" }}>{error}</div> : null}
        {loading ? (
          <Loading />
        ) : (
          <>
            <p>
              <b>Name:</b> <i>{name}</i>
            </p>
            <p>
              <b>Phone:</b> <i>{phone}</i>
            </p>
            <p>
              <b>Username:</b> <i>{username}</i>
            </p>
            <p>
              <b>Website:</b> <i>{website}</i>
            </p>
          </>
        )}
      </main>
    </>
  );
};

export default UserInfo;
