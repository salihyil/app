import { useState, useEffect } from "react";

import Loading from "../../components/Loading";
import { userData } from "../../service/User/api";
import "./styles.css";

const UserInfo = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let data = await userData(localStorage.getItem("userEmail"));

      if (data) {
        setUser(data[0]);
      } else {
        setError("User bulunamadı");
      }

      setLoading(false);
    };

    fetchData();
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
              <b>User Name:</b> <i>{user.name}</i>
            </p>
            <p>
              <b>Phone:</b> <i>{user.phone}</i>
            </p>
            <p>
              <b>Username:</b> <i>{user.username}</i>
            </p>
            <p>
              <b>Website:</b> <i>{user.website}</i>
            </p>
          </>
        )}
      </main>
    </>
  );
};

export default UserInfo;
