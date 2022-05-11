import { useSelector } from "react-redux";

import Loading from "../../components/Loading";
import "./styles.css";

const UserInfo = () => {
  const {
    loading,
    error,
    user: { name, username, phone, website },
  } = useSelector((state) => state.userData);

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
